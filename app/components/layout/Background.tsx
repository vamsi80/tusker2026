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
    // Slower, subtle time
    float time = u_time * 0.15;
    
    // Vertical anti-gravity flow (y - time)
    vec2 p = vUv * 3.0;
    float n = snoise(vec3(p.x, p.y - time, 0.0));
    
    // Layered noise for detail
    float n2 = snoise(vec3(p.x * 2.0, p.y * 2.0 - time * 1.5, 10.0));
    float finalNoise = mix(n, n2, 0.4);
    
    // Dark Luxury Palette
    // Deep Charcoal / Near Black base
    vec3 colA = vec3(0.03, 0.03, 0.04); 
    // Soft Muted dark grey/purple
    vec3 colB = vec3(0.08, 0.08, 0.10);
    // Subtle highlight (faint gold/white hint)
    vec3 colC = vec3(0.12, 0.12, 0.14);
    
    // Smooth Stepping
    float t = smoothstep(-0.6, 0.6, finalNoise);
    
    vec3 color = mix(colA, colB, t);
    
    // Add subtle flow lines
    float lines = smoothstep(0.4, 0.41, abs(finalNoise)); // Sharp thin lines? No, soft.
    
    // Soft accent areas
    float accent = smoothstep(0.4, 0.8, n2);
    color = mix(color, colC, accent * 0.3);

    // Vignette
    float dist = distance(vUv, vec2(0.5));
    color *= smoothstep(1.2, 0.2, dist);

    gl_FragColor = vec4(color, 1.0);
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
        <div className="fixed inset-0 z-[-1] h-full w-full bg-black">
            <Canvas dpr={1} gl={{ antialias: false }}>
                <BackgroundMesh />
            </Canvas>
        </div>
    )
}
