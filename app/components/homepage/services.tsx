'use client';

import { gsap } from 'gsap';
import { services } from '@/app/data';
import { useEffect, useRef } from 'react';
import WaterButton from '../ui/WaterButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);
    const mobileImgRef = useRef<HTMLDivElement>(null);

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

                // Animate Mobile Center Image via ref — avoids class-selector miss & Tailwind opacity conflict
                if (mobileImgRef.current) {
                    gsap.from(mobileImgRef.current, {
                        scrollTrigger: {
                            trigger: mobileImgRef.current,
                            start: "top 95%",   // fires as soon as image top hits 95% of viewport
                            toggleActions: "play none none reverse"
                        },
                        y: 40,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
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
                <div ref={mobileImgRef} className="mobile-center-image block lg:hidden w-full h-[300px] sm:h-[450px] relative mb-0 -mt-6">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <ImageSequence className="object-contain !w-auto !h-full scale-140" />
                    </div>
                </div>

                {services.map((service, index) => (
                    <div
                        key={service.slug}
                        className={`block lg:flex lg:flex-col space-y-4 ${service.col} text-left justify-center h-full mb-10 lg:mb-0 ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}
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
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const totalFrames = isMobile ? 140 : 368; // mobile: 140 frames — fewer requests, same feel

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx2d = canvas.getContext('2d');
        if (!ctx2d) return;

        const TARGET_FPS = 30;
        const interval = 1000 / TARGET_FPS;

        // ── Frame cache: each HTMLImageElement is decoded ONCE and reused ──
        const cache = new Map<number, HTMLImageElement>();
        const loading = new Set<number>();

        const loadFrame = (f: number) => {
            if (cache.has(f) || loading.has(f)) return;
            loading.add(f);
            const img = new window.Image();
            img.src = `/Services/${f}.avif`;
            // img.decode() resolves after the image is fully decoded (off main thread)
            img.decode()
                .then(() => {
                    cache.set(f, img);
                    loading.delete(f);
                })
                .catch(() => {
                    loading.delete(f); // silent fail — next tick will retry
                });
        };

        const preload = (from: number, count: number) => {
            for (let i = 0; i < count; i++) {
                const f = ((from - 1 + i) % totalFrames) + 1;
                loadFrame(f);
            }
        };

        // Warm up: preload first 25 frames before playback starts
        preload(1, 25);

        let frame = 1;
        let rafId: number;
        let lastTime = 0;
        let isVisible = false;

        const drawFrame = (img: HTMLImageElement) => {
            const { width, height } = canvas;
            const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
            const dx = (width - img.naturalWidth * scale) / 2;
            const dy = (height - img.naturalHeight * scale) / 2;
            ctx2d.clearRect(0, 0, width, height);
            ctx2d.drawImage(img, dx, dy, img.naturalWidth * scale, img.naturalHeight * scale);
        };

        const tick = (now: number) => {
            rafId = requestAnimationFrame(tick);
            if (!isVisible) return;

            // Keep preloading 8 frames ahead continuously
            preload(frame + 1, 8);

            if (now - lastTime < interval) return;
            lastTime = now;

            const next = frame >= totalFrames ? 1 : frame + 1;
            const img = cache.get(next);

            if (img) {
                // Frame is decoded — draw immediately, zero main-thread cost
                frame = next;
                drawFrame(img);
            }
            // If not ready: hold current frame (no jank) rather than forcing a decode
        };

        const observer = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
                if (isVisible) preload(frame, 15); // buffer more on enter
            },
            { threshold: 0.05 }
        );
        observer.observe(canvas);

        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
            cache.clear();
        };
    }, [totalFrames]);

    return (
        <canvas
            ref={canvasRef}
            width={580}
            height={1000}
            style={{ imageRendering: 'auto' }}
            className={`w-full h-full object-contain ${className}`}
        />
    );
}
