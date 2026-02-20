'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const orbit1Ref = useRef<SVGEllipseElement>(null);
    const orbit2Ref = useRef<SVGEllipseElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const texts = gsap.utils.toArray<HTMLElement>('.hero-floating-text');

            // Skip infinite tweens on mobile — they run on main thread at 60fps
            // and are barely legible on small screens anyway
            if (!isMobile) {
                if (texts[0]) {
                    gsap.to(texts[0], {
                        scaleX: 1.05,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }

                if (texts[1]) {
                    gsap.to(texts[1], {
                        opacity: 0.4,
                        duration: 0.2,
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 4,
                        ease: "power1.inOut"
                    });
                }

                if (texts[2]) {
                    gsap.to(texts[2], {
                        fontWeight: "bold",
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 3,
                        ease: "power2.inOut"
                    });
                }

                if (texts[3]) {
                    gsap.to(texts[3], {
                        scale: 1.1,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }

                if (texts[5]) {
                    gsap.to(texts[5], {
                        fontWeight: "bold",
                        duration: 1,
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 5,
                        ease: "sine.inOut"
                    });
                }

                if (texts[6]) {
                    gsap.fromTo(texts[6],
                        { scale: 0.95 },
                        {
                            scale: 1,
                            duration: 4,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut"
                        }
                    );
                }
            }

            const animateOrbit = (el: SVGElement | null, reverse = false, duration = 6) => {
                if (!el) return;

                const length = (el as SVGGeometryElement).getTotalLength();
                const val = length * 0.03;

                gsap.set(el, {
                    strokeDasharray: `${val} ${length - val}`,
                    strokeDashoffset: 0,
                });

                gsap.to(el, {
                    strokeDashoffset: reverse ? length : -length,
                    duration: duration,
                    ease: "none",
                    repeat: -1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        toggleActions: "play none none none"
                    }
                });
            };

            animateOrbit(orbit1Ref.current, false, 11);
            animateOrbit(orbit2Ref.current, true, 7);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative z-10 flex h-[70vh] max-h-[70vh] sm:h-auto sm:max-h-none sm:min-h-screen w-full flex-col justify-between p-0 pt-[40%] sm:p-12 sm:pt-28">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden pl-0 sm:pl-[10%] md:pl-[20%]">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                    <ellipse
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="14"
                        stroke="#c6bede"
                        strokeWidth="0.2"
                        fill="none"
                        transform="rotate(-29 50 50)"
                    />
                    <ellipse
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="14"
                        stroke="#c6bede"
                        strokeWidth="0.2"
                        fill="none"
                        transform="rotate(-22 50 50)"
                    />

                    <ellipse
                        ref={orbit1Ref}
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="14"
                        stroke="#9B89D8"
                        strokeWidth="0.4"
                        fill="none"
                        strokeLinecap="round"
                        transform="rotate(-29 50 50)"
                    />
                    <ellipse
                        ref={orbit2Ref}
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="14"
                        stroke="#9B89D8"
                        strokeWidth="0.4"
                        fill="none"
                        strokeLinecap="round"
                        transform="rotate(-22 50 50)"
                    />
                </svg>
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <span className="hero-floating-text absolute top-40 left-[40%] sm:top-[29%] sm:left-[53%] text-[10px] font-medium tracking-widest text-black sm:text-[14px]">
                    + EXPERIENCE
                </span>
                <span className="hero-floating-text absolute bottom-40 left-[8%] sm:bottom-[15%] sm:left-[30%] text-[10px] font-medium tracking-widest text-black sm:text-[14px]">
                    + DIGITAL
                </span>
                <span className="hero-floating-text absolute top-60 right-[15%] sm:top-[45%] sm:right-[12%] text-[11px] font-medium tracking-widest text-black sm:text-[14px]">
                    + DESIGN
                </span>
                <span className="hero-floating-text absolute top-25 right-[8%] sm:top-[18%] sm:right-[22%] text-[10px] font-medium tracking-widest text-black sm:text-[11px]">
                    + IMMERSIVE
                </span>
                <span className="hero-floating-text absolute bottom-55 right-[5%] sm:bottom-[25%] sm:right-[19%] text-[11px] font-medium tracking-widest text-black uppercase sm:text-[14px]">
                    + Creative
                </span>
                <span className="hero-floating-text absolute bottom-25 left-[50%] sm:bottom-[20%] sm:left-[50%] -translate-x-1/2 text-[9px] font-medium tracking-widest text-gray-500 uppercase sm:text-[11px] inline-flex overflow-hidden whitespace-nowrap">
                    + Be Inspired
                </span>
                <span className="hero-floating-text absolute top-30 left-[5%] sm:top-[20%] sm:left-[4%] text-[9px] font-medium tracking-widest text-gray uppercase sm:text-[14px]">
                    + Interactive
                </span>
            </div>
            <div className="h-0 sm:h-auto"></div>
            <div className="flex flex-1 flex-col items-start justify-center pl-[10%] sm:pl-[10%] lg:pl-[20%]">
                <div className="relative -translate-y-12">
                    <h1 className="flex flex-col text-left font-sans text-3xl font-normal leading-none sm:leading-[0.85] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl transform scale-x-[1.15] origin-left pb-4">
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

            {/* Mobile-only bottom block — strip + separator line */}
            <div className="flex lg:hidden flex-col">
                <div className="flex items-center justify-center gap-6 pb-3">
                    {/* ++ 2026 block */}
                    <div className="flex items-center gap-0 text-base font-bold leading-none tracking-widest text-black scale-x-[1.18] origin-left shrink-0">
                        <div className="flex flex-col justify-between h-[1em] leading-none text-[8px] font-bold mb-1 mr-1">
                            <span>+</span>
                            <span>+</span>
                        </div>
                        <span>20</span>
                        <span>26</span>
                    </div>

                    {/* Tagline */}
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-black uppercase whitespace-nowrap self-center">
                        WELCOME TO THE WORLD OF WHITE TUSKER
                    </span>
                </div>
            </div>
        </main>
    );
}
