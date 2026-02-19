'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform float uGridSize;
uniform float uSharpness;
uniform float uTransition;
uniform vec3 uColor;
varying vec2 vUv;

// Simplex 3D Noise 
// by Ian McEwan, Ashima Arts
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0.0 + 0.0 * C.xxx;
  //  x1 = x0 - i1  + 1.0 * C.xxx;
  //  x2 = x0 - i2  + 2.0 * C.xxx;
  //  x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}


// Psudo-random for grain
float random(vec2 uv) {
    return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv * uGridSize;
  
  float n = snoise(vec3(uv, uTime));

  // Sharpening: Power curve makes peaks narrower (circles/blobs smaller)
  // uSharpness > 1.0 makes discrete isolated blobs.
  float sharp = sign(n) * pow(abs(n), uSharpness);

  // Map to 0-1
  float n01 = sharp * 0.5 + 0.5;

  // Colors
  vec3 c_white = vec3(1.0, 1.0, 1.0);       // Background
  vec3 c_target = uColor;

  // Color Map Logic
  // With high sharpness, values bunch around 0.5.
  // We want n01 around 0.5 to be White (Background).
  // Peaks (1.0) and Troughs (0.0) should be colored.
  
  vec3 color = c_white;

  // Deviation from center (0.5)
  float distFromCenter = abs(n01 - 0.5) * 2.0; // 0.0 at center, 1.0 at peaks

  // Add colors based on deviation
  // Start purple earlier (0.1) -> MORE Purple visible
  // Direct transition to purple, skipping blue
  float t_layer1 = smoothstep(0.15, 0.5, distFromCenter);
  color = mix(color, c_target, t_layer1);

  // Deepen accent at peaks (using same color for consistency, or we could darken slightly)
  float t_layer3 = smoothstep(0.8, 1.0, distFromCenter);
  color = mix(color, c_target, t_layer3);

  // Vignette
  float dist = distance(vUv, vec2(0.5));
  float vignette = smoothstep(0.05, 0.6, dist);
  vec3 finalColor = mix(c_white, color, vignette);

  // Add Grain
  float noiseVal = random(vUv * uTime);
  vec3 grain = vec3(noiseVal);
  
  // Apply grain only to the colored areas (the "shapes")
  // We use the same factors that introduced the color: vignette and deviation from center
  // distFromCenter 0.0 = Background (White), 1.0 = Peak Color
  float shapeIntensity = vignette * smoothstep(0.15, 0.5, distFromCenter);
  
  // Mix grain based on shape intensity
  float finalGrainStrength = 0.15 * shapeIntensity;
  finalColor = mix(finalColor, grain, finalGrainStrength);

  // ** TRANSITION FADE IN **
  // Mix from Pure White to Final Color based on uTransition
  finalColor = mix(c_white, finalColor, uTransition);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

interface GradientMeshProps {
    color: string;
    speed: number;
}

function GradientMesh({ color, speed }: GradientMeshProps) {
    const mesh = useRef<THREE.Mesh>(null);
    const { invalidate } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uGridSize: { value: 1 },
            uSharpness: { value: 1.2 },
            uTransition: { value: 0 },
            uColor: { value: new THREE.Color(color) },
        }),
        []
    );

    // Update color when prop changes
    useEffect(() => {
        if (uniforms.uColor) {
            uniforms.uColor.value.set(color);
        }
    }, [color, uniforms]);

    const lastScrollY = useRef(0);
    const totalTime = useRef(0);
    const currentSpeed = useRef(speed);
    const isVisible = useRef(true);

    // Monitor visibility/tab state to pause completely
    useEffect(() => {
        const handleVisibilityChange = () => {
            isVisible.current = document.visibilityState === 'visible';
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current || !isVisible.current) return;

        const material = mesh.current.material as THREE.ShaderMaterial;

        // Calculate scroll velocity
        const scrollY = window.scrollY;
        const scrollDelta = Math.abs(scrollY - lastScrollY.current);
        lastScrollY.current = scrollY;

        // Determine target speed
        // Base speed from prop
        // Scroll influence removed for constant speed
        const targetSpeed = speed;

        // Interpolate speed for smooth but responsive transition
        currentSpeed.current = THREE.MathUtils.lerp(currentSpeed.current, targetSpeed, 0.1);

        // Cap delta to prevent huge jumps on tab resume
        const validDelta = Math.min(delta, 0.1);

        // Accumulate time
        totalTime.current += validDelta * currentSpeed.current;
        material.uniforms.uTime.value = totalTime.current;

        // Fade-in effect
        if (material.uniforms.uTransition.value < 1.0) {
            material.uniforms.uTransition.value += validDelta * 0.6;
            if (material.uniforms.uTransition.value > 1.0) {
                material.uniforms.uTransition.value = 1.0;
            }
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

interface BackgroundProps {
    color?: string; // Hex color
    className?: string;
    blur?: string; // CSS blur value, e.g. "30px"
    speed?: number; // Base animation speed
}

export default function Background({
    color = "#A18DE8",
    className = "fixed inset-0 -z-50 w-full h-full pointer-events-none bg-white",
    blur = "50px",
    speed = 0.05
}: BackgroundProps) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setMounted(true);
            setIsMobile(window.innerWidth < 768);
        }, 100);
        return () => clearTimeout(t);
    }, []);

    if (!mounted) return null;

    return (
        <div className={className}>
            <Canvas
                frameloop="demand"
                gl={{
                    alpha: true,
                    antialias: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: false
                }}
                dpr={[1, 1.5]}
                style={{ width: '100%', height: '100%', filter: `blur(${blur})` }}
            >
                <GradientMesh color={color} speed={isMobile ? speed * 0.4 : speed} />
            </Canvas>
        </div>
    );
}
