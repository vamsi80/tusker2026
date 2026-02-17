'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const star1Ref = useRef<HTMLDivElement>(null);
    const star2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pulse/Blink Text Animation
            const texts = gsap.utils.toArray<HTMLElement>('.hero-floating-text');

            // 1. One Blink Animation (Target: "DIGITAL" - Index 1)
            // Existing Logic
            if (texts[1]) {
                gsap.to(texts[1], {
                    opacity: 0.3,
                    duration: 0.1,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 3,
                    ease: "power1.inOut"
                });
            }

            // 2. Another Highlight Animation (Target: "DESIGN" - Index 2)
            // Existing Logic
            if (texts[2]) {
                gsap.to(texts[2], {
                    scale: 1.15,
                    textShadow: "0 0 2px rgba(0,0,0,0.5)",
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 4,
                    ease: "power2.inOut"
                });
            }

            // 3. Blink Animation (Target: "+ EXPERIENCE" - Index 0)
            // "make thins blink"
            if (texts[0]) {
                gsap.to(texts[0], {
                    opacity: 0.5,
                    duration: 0.2,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 0.5,
                    ease: "power1.inOut" // Smooth blinking
                });
            }

            // 4. Blast Animation (Target: "+ IMMERSIVE" - Index 3)
            // "makr it blast and arange"
            const immersiveChars = gsap.utils.toArray<HTMLElement>('.immersive-char');
            if (immersiveChars.length > 0) {
                gsap.fromTo(immersiveChars,
                    {
                        opacity: 0,
                        scale: 0,
                        x: () => gsap.utils.random(-100, 100),
                        y: () => gsap.utils.random(-100, 100),
                        rotation: () => gsap.utils.random(-360, 360)
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 1.5,
                        stagger: 0.05,
                        ease: "elastic.out(1, 0.5)",
                        repeat: -1,
                        repeatDelay: 3
                    }
                );
            }

            // 5. Gentle Breathe (Target: "+ Be Inspired" - Index 5)
            // "simple and cute"
            if (texts[5]) {
                gsap.to(texts[5], {
                    scale: 1.1,
                    opacity: 0.7,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // 6. Bounce (Target: "+ Interactive" - Index 6)
            // "make this bounce"
            if (texts[6]) {
                gsap.to(texts[6], {
                    y: -10,
                    duration: 0.6,
                    repeat: -1,
                    yoyo: true,
                    ease: "circ.out"
                });
            }

            // Star 1 Animation (Clockwise)
            const star1 = { angle: 0 };
            gsap.to(star1, {
                angle: 360,
                duration: 10,
                repeat: -1,
                ease: "none",
                onUpdate: () => {
                    if (star1Ref.current) {
                        const rad = star1.angle * (Math.PI / 180);
                        const left = 50 + 50 * Math.cos(rad);
                        const top = 50 + 50 * Math.sin(rad);
                        star1Ref.current.style.left = `${left}%`;
                        star1Ref.current.style.top = `${top}%`;
                    }
                }
            });

            // Star 2 Animation (Anti-Clockwise)
            const star2 = { angle: 0 };
            gsap.to(star2, {
                angle: -360,
                duration: 12, // Slightly different speed
                repeat: -1,
                ease: "none",
                onUpdate: () => {
                    if (star2Ref.current) {
                        const rad = star2.angle * (Math.PI / 180);
                        const left = 50 + 50 * Math.cos(rad);
                        const top = 50 + 50 * Math.sin(rad);
                        star2Ref.current.style.left = `${left}%`;
                        star2Ref.current.style.top = `${top}%`;
                    }
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative z-10 flex min-h-screen w-full flex-col justify-between p-6 pt-24 sm:p-12 sm:pt-28">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden pl-0 sm:pl-[10%] md:pl-[20%]">
                {/* Ring 1 */}
                <div className="absolute h-[30vh] w-[90vw] -rotate-29 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[55vh] lg:w-[50vw] xl:h-[35vh] xl:w-[45vw]">
                    <div
                        ref={star1Ref}
                        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C3BAE1] shadow-sm"
                        style={{ left: '100%', top: '50%' }} // Initial pos
                    />
                </div>
                {/* Ring 2 */}
                <div className="absolute h-[30vh] w-[90vw] -rotate-22 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[55vh] lg:w-[50vw] xl:h-[35vh] xl:w-[45vw]">
                    <div
                        ref={star2Ref}
                        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C3BAE1] shadow-sm"
                        style={{ left: '100%', top: '50%' }} // Initial pos
                    />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <span className="hero-floating-text absolute top-[29%] left-[53%] text-[10px] font-medium tracking-widest text-black sm:text-[14px]">
                    + EXPERIENCE
                </span>
                <span className="hero-floating-text absolute bottom-[15%] left-[30%] text-[10px] font-medium tracking-widest text-black sm:text-[14px]">
                    + DIGITAL
                </span>
                <span className="hero-floating-text absolute top-[45%] right-[12%] text-[11px] font-medium tracking-widest text-black sm:text-[14px]">
                    + DESIGN
                </span>
                <span className="hero-floating-text absolute top-[18%] right-[22%] text-[10px] font-medium tracking-widest text-black sm:text-[11px]">
                    {/* "Blast" effect requires chars to be split */}
                    {"+ IMMERSIVE".split('').map((char, i) => (
                        <span key={i} className="immersive-char inline-block">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </span>
                <span className="hero-floating-text absolute bottom-[25%] right-[19%] text-[11px] font-bold tracking-widest text-black uppercase sm:text-[14px]">
                    + Creative
                </span>
                <span className="hero-floating-text absolute bottom-[20%] left-[50%] -translate-x-1/2 text-[9px] font-medium tracking-widest text-gray-500 uppercase sm:text-[11px] inline-flex overflow-hidden whitespace-nowrap">
                    {/* "Typewriter" requires width modulation on this container */}
                    + Be Inspired
                </span>
                <span className="hero-floating-text absolute top-[20%] left-[4%] text-[9px] font-medium tracking-widest text-gray uppercase sm:text-[14px]">
                    + Interactive
                </span>
            </div>
            <div className="h-0 sm:h-auto"></div>
            <div className="flex flex-1 flex-col items-start justify-center pl-4 sm:pl-[10%] lg:pl-[20%]">
                <div className="relative -translate-y-12">
                    <h1 className="flex flex-col text-left font-sans text-5xl font-normal leading-none sm:leading-[0.85] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl transform scale-x-[1.15] origin-left pb-4">
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            FLUID
                            <span className="text-lg font-light tracking-normal text-black sm:text-2xl md:text-5xl translate-y-[-0.1em]">
                                BY
                            </span>
                        </span>
                        <span>NATURE</span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            ADAPTIVE
                        </span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            <span className="text-lg font-light tracking-normal text-black sm:text-2xl md:text-5xl translate-y-[-0.1em]">
                                BY
                            </span>
                            DESIGN
                        </span>
                    </h1>
                </div>
            </div>
        </main>
    );
}
