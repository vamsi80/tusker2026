'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaterButton from '../ui/WaterButton';
import { services } from '@/app/data';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.service-item');

            // Animate service items
            items.forEach((item: any, i: number) => {
                const isBottom = i >= 2;
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 100,
                    opacity: 0,
                    duration: isBottom ? 0.5 : 1.5, // Bottom row comes faster
                    ease: "power3.out"
                });
            });

            // Animate Center Image
            gsap.from('.center-image', {
                scrollTrigger: {
                    trigger: '.center-image',
                    start: "top 65%", // Comes when scrolled a little more
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-auto w-full flex flex-col items-center justify-center overflow-hidden xl:px-4">
            <div className="absolute inset-0 z-1 justify-center items-center pointer-events-none hidden lg:flex">
                <div className="center-image relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px]">
                    <ImageSequence />
                </div>
            </div>

            <div className="relative z-2 w-full mx-auto block lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center px-4 sm:px-0">
                {services.map((service, index) => (
                    <div
                        key={service.slug}
                        className={`block lg:flex lg:flex-col space-y-4 ${service.col} text-left justify-center h-full mb-12 lg:mb-0 ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}
                    >
                        {index === 2 && (
                            <div className="service-item lg:hidden float-right relative w-[240px] h-[240px] sm:w-[450px] sm:h-[450px] ml-4 mb-4 -mt-12 sm:-mt-24 z-10">
                                <ImageSequence className="opacity-100" />
                            </div>
                        )}
                        <div className="service-item block lg:flex lg:flex-col lg:items-start text-left">
                            <h3 className="flex flex-col text-2xl sm:text-3xl xl:text-4xl tracking-tighter text-black mb-3 transform scale-x-110 origin-left leading-none">
                                {service.displayTitle?.map((line, i) => (
                                    <span key={i}>{line}</span>
                                ))}
                            </h3>
                            <div className="text-xs xl:text-base leading-[1.1] w-full lg:max-w-xs xl:max-w-sm">
                                <div className="space-y-1">
                                    {service.shortDescription?.map((point, i) => (
                                        <p key={i} className='leading-[1.1]'>{point}</p>
                                    ))}
                                </div>
                            </div>
                            <WaterButton
                                href={`/${service.slug}`}
                                label="EXPLORE"
                                className="mt-3 xl:mt-6"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function ImageSequence({ className = "opacity-50 lg:opacity-100" }: { className?: string }) {
    const imgRef = useRef<HTMLImageElement>(null);
    const totalFrames = 368;

    useEffect(() => {
        let frame = 1;

        // Basic preload function
        const preload = (f: number) => {
            const img = new window.Image();
            img.src = `/Services/${f}.avif`;
        };

        const interval = setInterval(() => {
            frame = frame >= totalFrames ? 1 : frame + 1;
            if (imgRef.current) {
                imgRef.current.src = `/Services/${frame}.avif`;
            }

            // Preload next few frames
            for (let i = 1; i <= 3; i++) {
                let nextF = frame + i;
                if (nextF > totalFrames) nextF -= totalFrames;
                preload(nextF);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <img
            ref={imgRef}
            src="/Services/1.avif"
            alt="Services Sequence"
            className={`w-full h-full object-contain scale-120 ${className}`}
        />
    );
}
