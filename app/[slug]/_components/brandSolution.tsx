'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BrandSolution() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(containerRef.current?.children || [], {
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
        <div className="w-full h-auto lg:min-h-screen pt-27 sm:pt-0 flex flex-col text-black overflow-visible relative justify-center">
            <div className="absolute top-0 bottom-0 left-0 w-screen z-0 pointer-events-none flex items-center justify-start -ml-12 sm:-ml-16 lg:-ml-24 overflow-visible">
                <div className="relative w-full h-full scale-100 origin-left">
                    <Image
                        src="/bagrounds/BG-2.avif"
                        alt="Background pattern"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8 relative z-10">
                <div ref={containerRef} className="flex flex-col space-y-2 sm:space-y-4 justify-start order-2 md:order-1 lg:col-span-2 mt-8 md:mt-0 px-4 sm:px-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] font-medium tracking-tighter leading-[0.9] lg:leading-[0.85] text-black scale-x-110 origin-left">
                        BRAND SOLUTIONS
                    </h2>

                    <div className="space-y-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-normal text-black leading-none">
                            We don&apos;t decorate brands. <br />
                            We define them.
                        </p>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-gray-800 leading-[1.2] max-w-2xl text-left">
                        From logo creation and identity systems to brand books and spatial branding we decode the soul of the brand and translate it into visuals, environments, and experiences that feel unmistakably alive.
                    </p>

                    <div className="space-y-2 pt-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-normal text-black leading-none tracking-tight">
                            Consistency is not enough. <br />
                            Resonance is the goal.
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex justify-start order-1 md:order-2 lg:col-span-1 h-auto sm:h-[60vh] md:h-auto max-w-[1000px]">
                    <div className="relative w-full h-[300px] sm:h-full scale-110 sm:scale-125">
                        <Image
                            src="/Branding.avif"
                            alt="Brand Solutions - Bust with Digital Face"
                            fill
                            className="object-contain object-center md:object-left lg:object-bottom"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
