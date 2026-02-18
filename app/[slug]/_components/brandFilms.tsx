'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BrandFilms() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(containerRef.current?.children || [], {
                x: 100,
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
        <div className="w-full h-auto sm:min-h-screen pt-16 sm:pt-0 flex flex-col bg-white text-black overflow-visible relative justify-center">
            <div className="absolute top-0 bottom-0 left-0 w-screen z-0 pointer-events-none flex items-center justify-start -ml-12 sm:-ml-16 lg:-ml-24 overflow-visible">
                <div className="relative w-full h-full scale-175 sm:scale-200 md:scale-260 lg:scale-100 origin-left">
                    <Image
                        src="/bagrounds/BG-3.avif"
                        alt="Background pattern"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
                <div className="relative w-full flex justify-start lg:col-span-2 h-auto sm:h-[60vh] md:h-auto order-1 lg:order-1 max-w-[1000px]">
                    <div className="relative w-full h-[300px] sm:h-full">
                        <Image
                            src="/film.avif"
                            alt="Corporate and Brand Films - TV Head Statue"
                            fill
                            className="object-contain object-center lg:object-top-left"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                <div ref={containerRef} className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-6 justify-start lg:pl-20 lg:col-span-3 order-2 lg:order-2 xl:pt-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] font-medium tracking-tighter leading-[0.9] lg:leading-[0.85] text-black scale-x-110 origin-left lg:-ml-50">
                        CORPORATE & <br />
                        BRAND FILMS
                    </h2>

                    <div className="space-y-2">
                        <p className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-normal text-black leading-none tracking-tight">
                            We don&apos;t make videos. We <br />
                            direct perception.
                        </p>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-black leading-[1.2] max-w-2xl text-left">
                        From storyboarding to on-ground shoots, from corporate films to brand narratives and explainer content we handle everything under one roof. <br />
                        Every frame is intentional. Every second serves the brand&apos;s larger story.
                    </p>

                    <p className="text-base sm:text-lg lg:text-lg font-normal text-black">
                        This is cinema with clarity. Storytelling with strategy.
                    </p>

                    <div className="-space-y-1 text-[#666195] pt-4">
                        <p className="text-2xl sm:text-3xl md:text-2xl lg:text-[2.6rem] tracking-tighter font-normal leading-none">
                            WE TURN BRANDS INTO
                        </p>
                        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[3.5rem] tracking-tighter font-normal leading-none">
                            MOVING STORIES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
