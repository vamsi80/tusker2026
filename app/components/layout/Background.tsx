'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float u_time;
varying vec2 vUv;

// Simplex 3D Noise (Standard Ashima)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
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
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

void main() {
    // Slower, video-like drift
    float time = u_time * 0.09;
    
    // Anisotropic "Ribbon" Scaling
    // Stretch heavily in X (0.4) to make shapes wider than they are tall
    vec2 p = vUv * vec2(0.5, 2.0); 
    
    // Directional Drift (Video-like flow)
    // Move mostly left (-x) with tiny vertical variance
    p += vec2(-time * 0.25, time * 0.05);
    
    // Smooth Noise Layer
    float n = snoise(vec3(p.x, p.y, time * 0.05));
    
    // Secondary Layer for internal morphing (not boiling)
    float warp = snoise(vec3(p.x * 1.5, p.y * 1.5 - time * 0.1, time * 0.1));
    
    // Colors (Soleil Noir Palette)
    vec3 white = vec3(0.97, 0.97, 0.98); // High-end off-white
    vec3 purple = vec3(0.6, 0.5, 0.95);  // Primary
    vec3 blue = vec3(0.4, 0.6, 0.95);    // Soft Secondary
    vec3 orange = vec3(1.0, 0.7, 0.4);   // Rare Accent
    
    // Gradient Logic
    // Base gradient between Purple and Blue driven by 'warp' morphing
    vec3 color = mix(purple, blue, smoothstep(-0.4, 0.6, warp));
    
    // Rare Accent (Orange)
    // Only appears in tiny, fleeting high-points of the noise
    float accent = smoothstep(0.7, 0.9, warp + n * 0.2);
    color = mix(color, orange, accent * 0.5); // Very subtle (50% opacity max)
    
    // Mask / Negative Space
    // Ensure 70% of screen is White
    float mask = smoothstep(0.2, 0.75, n);
    
    // Video-Integrated Field
    // Soft mix with white base
    vec3 finalColor = mix(white, color, mask * 0.75); // 75% max opacity

    gl_FragColor = vec4(finalColor, 1.0);
}
`

const BackgroundMesh = () => {
    const mesh = useRef<THREE.Mesh>(null!)
    const uniforms = useMemo(
        () => ({
            u_time: { value: 0 },
        }),
        []
    )

    useFrame((state) => {
        if (mesh.current) {
            (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value = state.clock.getElapsedTime()
        }
    })

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 h-full w-full bg-white">
            <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
                <BackgroundMesh />
            </Canvas>
        </div>
    )
}
