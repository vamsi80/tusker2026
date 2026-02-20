'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InteriorSpaces() {
    const headerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const targets = [
                headerRef.current,
                ...(textRef.current?.children ? Array.from(textRef.current.children) : [])
            ];

            gsap.from(targets, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative flex h-auto lg:min-h-screen pt-0 sm:pt-0 w-full flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 lg:gap-0">
                <div className="lg:col-span-1 flex flex-col justify-start z-2 order-2 lg:order-1 w-full relative px-4 sm:px-0 gap-4 sm:gap-0">
                    <div ref={headerRef} className="w-full mb-0 -mt-14 lg:mt-0 md:mb-6 relative z-10">
                        {/* 
                          sr-only: Provides keyword-rich semantic heading to search engines
                          without altering the visual design.
                          The visual h1 below uses aria-hidden to prevent duplicate heading announcements.
                        */}
                        <h1 className="sr-only">
                            Architecture & Interior Design Agency in Bangalore — Experience Centers, Corporate Interiors & Brand Environments
                        </h1>
                        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-medium leading-[0.9] tracking-tighter scale-x-110 origin-left" aria-hidden="true">
                            ARCHITECTURE & <br />
                            INTERIOR SPACES
                        </p>
                    </div>
                    <div ref={textRef} className="max-w-2xl space-y-0 text-black">
                        <p className="text-base sm:text-lg lg:text-lg xl:text-lg font-normal leading-[1.1]">
                            We don&apos;t design interiors.<br />
                            We script environments.
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-black leading-[1.2] pt-2">
                            From large-scale customer experience centers (our core strength) to offices and restaurants every space is designed to narrate a story. Materials, lighting, graphics, flow, and technology come together to create spaces that communicate, engage, and perform.
                        </p>
                        <div className='pt-2 space-y-1 sm:space-y-6'>
                            <div className="-space-y-1 text-base sm:text-lg  xl:text-lg leading-[1.3]">
                                <p className="font-normal">These are not buildings.</p>
                                <p className="font-normal">These are brand experiences in three dimensions.</p>
                            </div>
                            <div className='pt-0 sm:pt-2'>
                                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-none sm:leading-[0.85] tracking-tight max-w-4xl scale-x-110 origin-left">
                                    SPACES THAT SPEAK <br />
                                    BEFORE WORDS DO.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 relative flex items-start justify-start h-[47vh] sm:h-[60vh] lg:h-auto lg:min-h-full overflow-visible z-1 mt-0 lg:mt-0 order-1 lg:order-2">
                    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center scale-175 sm:scale-200 md:scale-220 lg:scale-240 lg:-translate-x-20 lg:-translate-y-20">
                        <div className="relative w-full h-full">
                            <Image
                                src="/bagrounds/BG-1.avif"
                                alt="Background pattern"
                                fill
                                className="object-contain opacity-100"
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative w-full h-full transform">
                        <Image
                            src="/ARCHITECTURAL.avif"
                            alt="Classical statue at a creative console"
                            fill
                            className="object-contain drop-shadow-2xl grayscale-20 contrast-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
