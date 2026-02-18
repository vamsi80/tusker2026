'use client';

import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const headerRef = useRef<HTMLHeadingElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    /** NEW refs for animated SVG strokes */
    const orbit1Ref = useRef<SVGEllipseElement>(null);
    const orbit2Ref = useRef<SVGEllipseElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ---------- TEXT ANIMATION ---------- */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(headerRef.current, {
                text: "THANK YOU. LET`s TALK...",
                duration: 2,
                ease: "none",
            });

            const lines = contactRef.current?.querySelectorAll('p');
            if (lines) {
                tl.fromTo(
                    lines,
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
                    "-=1.8"
                );
            }

            /* ---------- SVG ORBIT HIGHLIGHT ANIMATION ---------- */

            const animateOrbit = (el: SVGElement | null, reverse = false) => {
                if (!el) return;

                const length = (el as SVGGeometryElement).getTotalLength();

                const val = length * 0.05;

                gsap.set(el, {
                    strokeDasharray: `${val} ${length - val}`,
                    strokeDashoffset: 0,
                });

                gsap.to(el, {
                    strokeDashoffset: reverse ? length : -length,
                    duration: 6,
                    ease: "none",
                    repeat: -1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                });
            };

            animateOrbit(orbit1Ref.current, false);
            animateOrbit(orbit2Ref.current, true);

        });

        return () => ctx.revert();
    }, []);

    return (
        <footer className={`relative h-screen w-full flex flex-col items-center justify-end overflow-hidden ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>

            {/* ---------- SVG BACKGROUND ---------- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/5 w-[150%] h-[150%] z-0 pl-15">

                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">

                        {/* Base faint ellipses */}
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

                        {/* Animated highlight strokes */}
                        <ellipse
                            ref={orbit1Ref}
                            cx="50"
                            cy="50"
                            rx="40"
                            ry="14"
                            stroke="#7c6cff"
                            strokeWidth="0.2"
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
                            stroke="#7c6cff"
                            strokeWidth="0.2"
                            fill="none"
                            strokeLinecap="round"
                            transform="rotate(-22 50 50)"
                        />
                    </svg>
                </div>
            </div>

            {/* ---------- CONTENT ---------- */}
            <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
                <div className="relative z-10 w-full h-[80vh] lg:h-[60vh] flex flex-col justify-center lg:justify-start items-start gap-4 sm:gap-4 pb-12 lg:pb-0">

                    <h1
                        ref={headerRef}
                        className="text-4xl sm:text-5xl md:text-8xl lg:text-6xl xl:text-8xl font-medium tracking-tighter text-black leading-[0.85] transform scale-x-110 origin-left w-full text-left"
                    />

                    <div
                        ref={contactRef}
                        className="flex flex-col gap-1 sm:gap-4 text-gray-600 pl-1 sm:pl-7 transform scale-x-[1.15] origin-left"
                    >
                        <div className="text-sm sm:text-base md:text-sm font-medium max-w-2xl leading-relaxed">
                            <p className="opacity-0">+#1331, 13th Cross Road, 10th Main Road, 2nd stage,</p>
                            <p className="opacity-0">+Indiranagar, Bengaluru 560038, Karnataka, India.</p>
                        </div>

                        <div className="text-sm sm:text-base md:text-sm font-medium leading-relaxed">
                            <p className="opacity-0">
                                +email:
                                <a href="mailto:hello@thewhitetusker.com" className="hover:text-black transition-colors">
                                    {" "}hello@thewhitetusker.com
                                </a>
                            </p>
                        </div>

                        <div className="text-sm sm:text-base md:text-xl font-semibold leading-snug mt-2">
                            <p className="opacity-0">
                                +Ph:
                                <a href="tel:+919900110689" className="hover:text-black transition-colors">
                                    {" "}+91 99001 10689
                                </a>
                            </p>
                            <p className="opacity-0">
                                +Ph:
                                <a href="tel:+919945565505" className="hover:text-black transition-colors">
                                    {" "}+91 99455 65505
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
