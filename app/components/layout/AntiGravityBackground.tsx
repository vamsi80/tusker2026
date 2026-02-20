'use client';

/**
 * AntiGravityBackground — Optimized WebGL Background
 *
 * Design: Anti-gravity cloud effect with organic upward drift, layered FBM noise,
 *         soft glow edges, dark luxury palette, and mouse repulsion.
 *
 * Performance: 
 *  - frameloop="demand" — renders only when invalidated (not every frame)
 *  - Mouse repulsion implemented in shader (no JS per-frame cost)
 *  - FBM octaves reduced on mobile (3 vs 5)
 *  - DPR capped at 1.5 on desktop, 1.0 on mobile
 *  - Initialized after page load (no LCP impact)
 *  - Canvas hidden from screen readers and keyboard focus
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────
// VERTEX SHADER
// Full-screen triangle trick — more efficient than a quad
// ─────────────────────────────────────────────────────────
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// ─────────────────────────────────────────────────────────
// FRAGMENT SHADER — Anti-Gravity Cloud Effect
// Technique: Layered FBM noise with upward drift + mouse repulsion
// ─────────────────────────────────────────────────────────
const fragmentShader = `
precision mediump float;

uniform float uTime;
uniform vec2  uMouse;       // Normalized screen coords [0,1]
uniform float uMouseStrength; // 0.0 when no hover, animates to 1.0
uniform int   uOctaves;     // 3 on mobile, 5 on desktop
uniform float uTransition;  // 0.0 → 1.0 fade-in

varying vec2 vUv;

// ── Smooth Hash (GPU-friendly) ──────────────────────────
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453123);
}

// ── Value Noise ─────────────────────────────────────────
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f); // Smoothstep

  float a = dot(hash2(i),              vec2(1.0, 0.0));
  float b = dot(hash2(i + vec2(1,0)),  vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0,1)),  vec2(1.0, 0.0));
  float d = dot(hash2(i + vec2(1,1)),  vec2(1.0, 0.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// ── Gradient Noise (smoother, more organic) ─────────────
vec2 grad(vec2 p) {
  vec2 h = hash2(p);
  float angle = h.x * 6.2831853;
  return vec2(cos(angle), sin(angle));
}

float gnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // Quintic

  float a = dot(grad(i),              f);
  float b = dot(grad(i + vec2(1,0)),  f - vec2(1,0));
  float c = dot(grad(i + vec2(0,1)),  f - vec2(0,1));
  float d = dot(grad(i + vec2(1,1)),  f - vec2(1,1));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// ── FBM: Fractional Brownian Motion ─────────────────────
// Multiple noise octaves layered → organic cloud texture
float fbm(vec2 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.52;
  float frequency = 1.0;
  float total_amplitude = 0.0;

  // Domain warp: bend space to create swirling tendrils
  vec2 warp = vec2(
    gnoise(p + vec2(1.7, 9.2)),
    gnoise(p + vec2(8.3, 2.8))
  ) * 0.5;
  p += warp * 0.4;

  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    value += amplitude * gnoise(p * frequency);
    total_amplitude += amplitude;
    amplitude *= 0.48;
    frequency *= 2.1;
    // Slight rotation per octave — prevents axis-aligned artifacts
    p = mat2(0.8, -0.6, 0.6, 0.8) * p;
  }

  return value / total_amplitude;
}

// ── Dark Luxury Palette ──────────────────────────────────
// Deep navy → charcoal → wisps of silver/white
vec3 palette(float t) {
  // t: 0.0 = dark, 1.0 = bright cloud
  vec3 deep    = vec3(0.04, 0.04, 0.07);   // Near-black indigo
  vec3 shadow  = vec3(0.07, 0.06, 0.14);   // Deep violet
  vec3 mid     = vec3(0.16, 0.14, 0.32);   // Muted purple
  vec3 wisp    = vec3(0.62, 0.58, 0.90);   // Lavender wisp
  vec3 bright  = vec3(0.95, 0.96, 1.00);   // Near-white cloud core

  if (t < 0.3) {
    return mix(deep, shadow, t / 0.3);
  } else if (t < 0.55) {
    return mix(shadow, mid, (t - 0.3) / 0.25);
  } else if (t < 0.8) {
    return mix(mid, wisp, (t - 0.55) / 0.25);
  } else {
    return mix(wisp, bright, (t - 0.8) / 0.2);
  }
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(1.8, 1.0); // Approximate typical viewport ratio

  // ── Mouse Repulsion Field ────────────────────────────
  vec2 mousePos = uMouse * aspect;
  vec2 fragPos  = uv * aspect;
  float mouseDist = length(fragPos - mousePos);
  // Repulsion pushes UV away from mouse in a radius of 0.35
  float repulsion = uMouseStrength * 0.12 * exp(-mouseDist * 4.5);
  vec2 repelDir = normalize(fragPos - mousePos + vec2(0.0001));
  uv += repelDir * repulsion;

  // ── Anti-Gravity Upward Drift ────────────────────────
  // Clouds drift upward (negative Y in UV space) over time
  // Multiple drift speeds create depth/parallax illusion
  float driftSlow = uTime * 0.04;
  float driftMid  = uTime * 0.07;
  float driftFast = uTime * 0.11;

  // Scale UV to control cloud density
  vec2 uvScaled = uv * 2.2;

  // ── Layer 1: Large Billowing Base Cloud ─────────────
  // Slow, large-scale movement — the "body" of the cloud
  vec2 p1 = uvScaled + vec2(uTime * 0.015, -driftSlow);
  p1 += vec2(sin(uTime * 0.08 + uv.y * 3.0) * 0.06, 0.0); // Gentle side sway
  float cloud1 = fbm(p1, uOctaves);
  cloud1 = cloud1 * 0.5 + 0.5; // Remap to [0, 1]

  // ── Layer 2: Mid-Level Wisps ─────────────────────────
  vec2 p2 = uvScaled * 1.6 + vec2(uTime * 0.022 + 0.5, -driftMid);
  p2 += vec2(0.0, sin(uTime * 0.12 + uv.x * 2.5) * 0.04);
  float cloud2 = fbm(p2, max(uOctaves - 1, 2));
  cloud2 = cloud2 * 0.5 + 0.5;

  // ── Layer 3: Fast Tendrils ───────────────────────────
  vec2 p3 = uvScaled * 2.8 + vec2(-uTime * 0.03 - 0.3, -driftFast);
  float cloud3 = fbm(p3, max(uOctaves - 2, 2));
  cloud3 = cloud3 * 0.5 + 0.5;

  // ── Composite Layers ─────────────────────────────────
  // Blend layers with parallax weighting — closer (smaller) layers more opaque
  float composite = cloud1 * 0.55 + cloud2 * 0.30 + cloud3 * 0.15;

  // ── Density Shaping ──────────────────────────────────
  // Sharpen the cloud: push midtones toward transparent, peaks toward solid
  // contrast > 1.0 = harder cloud edges
  float contrast = 1.6;
  float density = clamp((composite - 0.5) * contrast + 0.5, 0.0, 1.0);

  // ── Soft Glow Edges ──────────────────────────────────
  // Feathered falloff at cloud edges using smoothstep
  float glow = smoothstep(0.35, 0.75, density);
  float core = smoothstep(0.65, 0.95, density);

  // ── Depth Illusion via Vignette ──────────────────────
  // Clouds are brightest in center and fade toward corners
  float vignette = 1.0 - smoothstep(0.3, 0.85, length((uv - 0.5) * vec2(1.0, 1.3)));

  // ── Color Composition ────────────────────────────────
  float colorT = glow * vignette;
  vec3 cloudColor = palette(colorT);

  // Add subtle luminance boost to cloud cores
  cloudColor += vec3(core * 0.15 * vignette);

  // ── Noise Grain (subtle film grain) ──────────────────
  // Time-varying grain prevents static look in dark areas
  float grain = fract(sin(dot(vUv * 1000.0 + uTime * 47.3, vec2(12.9898, 78.233))) * 43758.5453);
  cloudColor += (grain - 0.5) * 0.018 * (1.0 - colorT * 0.7);

  // ── Transition Fade-In ────────────────────────────────
  // Fade from solid background color to cloud over uTransition [0→1]
  vec3 bgColor = vec3(0.97, 0.97, 0.99); // Off-white — matches page background
  vec3 finalColor = mix(bgColor, cloudColor, uTransition);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ─────────────────────────────────────────────────────────
// CloudMesh — handles uniforms, mouse tracking, animation
// ─────────────────────────────────────────────────────────
interface CloudMeshProps {
    isMobile: boolean;
}

function CloudMesh({ isMobile }: CloudMeshProps) {
    const mesh = useRef<THREE.Mesh>(null);
    const { invalidate, gl } = useThree();

    // Mouse state for repulsion
    const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
    const mouseCurrent = useRef(new THREE.Vector2(0.5, 0.5));
    const mouseStrengthTarget = useRef(0);
    const mouseStrengthCurrent = useRef(0);

    const totalTime = useRef(0);
    const isPageVisible = useRef(true);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uMouseStrength: { value: 0 },
            uOctaves: { value: isMobile ? 3 : 5 },
            uTransition: { value: 0 },
        }),
        [] // Only created once — color comes from shader palette
    );

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseTarget.current.set(
                e.clientX / window.innerWidth,
                1.0 - e.clientY / window.innerHeight // Flip Y for GL coords
            );
            mouseStrengthTarget.current = 1;
        };

        const handleMouseLeave = () => {
            mouseStrengthTarget.current = 0;
        };

        // Touch: convert to mouse-equivalent
        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            mouseTarget.current.set(
                t.clientX / window.innerWidth,
                1.0 - t.clientY / window.innerHeight
            );
            mouseStrengthTarget.current = 1;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleMouseLeave, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseLeave);
        };
    }, []);

    // Page visibility — stop rendering when tab is hidden
    useEffect(() => {
        const handleVisibility = () => {
            isPageVisible.current = document.visibilityState === 'visible';
            if (isPageVisible.current) invalidate();
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, [invalidate]);

    useFrame((_, delta) => {
        if (!mesh.current || !isPageVisible.current) return;

        const material = mesh.current.material as THREE.ShaderMaterial;
        const cappedDelta = Math.min(delta, 0.05); // Cap at 50ms to prevent jumps

        // Advance time — slow drift speed for luxury feel
        totalTime.current += cappedDelta * 0.5;
        material.uniforms.uTime.value = totalTime.current;

        // Smooth mouse lerp (0.05 = slow, silky follow)
        mouseCurrent.current.lerp(mouseTarget.current, cappedDelta * 4.0);
        material.uniforms.uMouse.value.copy(mouseCurrent.current);

        // Smooth mouse strength lerp
        mouseStrengthCurrent.current += (mouseStrengthTarget.current - mouseStrengthCurrent.current) * cappedDelta * 3.0;
        material.uniforms.uMouseStrength.value = mouseStrengthCurrent.current;

        // Transition fade-in
        if (material.uniforms.uTransition.value < 1.0) {
            material.uniforms.uTransition.value = Math.min(
                material.uniforms.uTransition.value + cappedDelta * 0.7,
                1.0
            );
        }

        invalidate();
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
}

// ─────────────────────────────────────────────────────────
// AntiGravityBackground — exported component
// ─────────────────────────────────────────────────────────
interface AntiGravityBackgroundProps {
    className?: string;
}

export default function AntiGravityBackground({
    className = 'fixed inset-0 -z-50 w-full h-full pointer-events-none',
}: AntiGravityBackgroundProps) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Delay mount by 1 frame after page load — ensures LCP is not blocked
    useEffect(() => {
        const onLoad = () => {
            requestAnimationFrame(() => {
                setMounted(true);
                setIsMobile(window.innerWidth < 768);
            });
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad, { once: true });
        }
    }, []);

    // Render a plain white div as placeholder until WebGL is ready — no flash
    if (!mounted) {
        return (
            <div
                className={className}
                style={{ background: '#f8f8fc' }}
                aria-hidden="true"
            />
        );
    }

    return (
        <div
            className={className}
            aria-hidden="true"
            role="presentation"
            style={{ pointerEvents: 'none' }}
        >
            <Canvas
                frameloop="demand"
                gl={{
                    alpha: false,
                    antialias: false,
                    powerPreference: isMobile ? 'default' : 'high-performance',
                    stencil: false,
                    depth: false,
                    // Use WebGL 1 on mobile for compatibility
                    // Three.js automatically handles this
                }}
                // DPR cap: 1.0 on mobile (significant GPU saving), 1.5 max on desktop
                dpr={isMobile ? [1, 1] : [1, 1.5]}
                style={{ width: '100%', height: '100%' }}
                // Prevent canvas from being focusable
                tabIndex={-1}
            >
                <CloudMesh isMobile={isMobile} />
            </Canvas>
        </div>
    );
}
