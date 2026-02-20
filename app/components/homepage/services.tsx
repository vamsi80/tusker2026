'use client';

import { gsap } from 'gsap';
import { services } from '@/app/data';
import { useEffect, useRef } from 'react';
import WaterButton from '../ui/WaterButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            const ctx = gsap.context(() => {
                const items = gsap.utils.toArray('.service-item');

                // Animate service items on mobile
                items.forEach((item: any) => {
                    gsap.from(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        },
                        y: 50,          // Reduced from 150 — reveal not theatrics
                        opacity: 0,
                        duration: 0.9,
                        ease: "power2.out"
                    });
                });

                // Animate Mobile Center Image
                gsap.from('.mobile-center-image', {
                    scrollTrigger: {
                        trigger: '.mobile-center-image',
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }, containerRef);

            return () => ctx.revert();
        });

        mm.add("(min-width: 768px)", () => {
            const ctx = gsap.context(() => {
                const items = gsap.utils.toArray('.service-item');

                // Animate service items on desktop
                items.forEach((item: any, i: number) => {
                    gsap.from(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        },
                        y: 40,          // Reduced from 150px throw
                        opacity: 0,
                        duration: 0.9,
                        ease: "power2.out"
                    });
                });

                // Animate Center Image (desktop only)
                gsap.from('.center-image', {
                    scrollTrigger: {
                        trigger: '.center-image',
                        start: "top 65%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 1.0,
                    ease: "power2.out"
                });
            }, containerRef);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-auto w-full flex flex-col items-center justify-center overflow-hidden xl:px-4">
            <div className="absolute inset-0 z-1 justify-center items-center pointer-events-none hidden lg:flex overflow-hidden">
                <div className="center-image relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px] scale-120 origin-center">
                    <ImageSequence />
                </div>
            </div>

            <div className="relative z-2 w-full mx-auto block lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center px-4 sm:px-0">
                <div className="mobile-center-image block lg:hidden w-full h-[300px] sm:h-[450px] relative mb-0 -mt-6">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <ImageSequence className="opacity-100 object-contain !w-auto !h-full scale-140" />
                    </div>
                </div>

                {services.map((service, index) => (
                    <div
                        key={service.slug}
                        className={`block lg:flex lg:flex-col space-y-4 ${service.col} text-left justify-center h-full mb-12 lg:mb-0 ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}
                    >
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // Use fewer frames on mobile to reduce network requests
    const totalFrames = isMobile ? 140 : 368;
    const targetFPS = 30; // 30fps — smooth on 60 Hz, saves CPU vs higher rates

    const preloadedRef = useRef(new Set<number>());

    useEffect(() => {
        let frame = 1;
        let rafId: number;
        let lastTime = 0;
        let isVisible = false;
        const interval = 1000 / targetFPS; // 33.33ms per frame

        const preloadImages = (startFrame: number, count: number) => {
            for (let i = 0; i < count; i++) {
                let f = startFrame + i;
                if (f > totalFrames) f -= totalFrames;
                if (f < 1) f = 1; // safety

                if (!preloadedRef.current.has(f)) {
                    const img = new window.Image();
                    img.src = `/Services/${f}.avif`;
                    preloadedRef.current.add(f);
                }
            }
        };

        // Initial preload
        preloadImages(1, 10);

        const tick = (now: number) => {
            rafId = requestAnimationFrame(tick);
            if (!isVisible) return;

            // Preload upcoming frames continuously
            preloadImages(frame + 1, 3);

            if (now - lastTime < interval) return;
            // Adjust frame based on elapsed time to maintain speed if we lag? 
            // For simple image sequence, fixed interval is usually safer for sync.
            lastTime = now;

            frame = frame >= totalFrames ? 1 : frame + 1;
            if (imgRef.current) {
                imgRef.current.src = `/Services/${frame}.avif`;
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
                // Buffer more when visible
                if (isVisible) preloadImages(frame, 10);
            },
            { threshold: 0.1 }
        );
        if (imgRef.current) observer.observe(imgRef.current);

        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
        };
    }, [totalFrames]);

    return (
        <img
            ref={imgRef}
            src="/Services/1.avif"
            alt="Services Sequence"
            className={`w-full h-full object-contain scale-100 ${className}`}
        />
    );
}
