'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExistToCreateSection() {
    const containerRef = useRef<HTMLElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const verticalLineRef = useRef<HTMLDivElement>(null);
    const horizontalLineRef = useRef<HTMLDivElement>(null);
    const topHorizontalLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: innerContainerRef.current,
                    start: isMobile ? "top 80%" : "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Container Slide-in
            tl.from(innerContainerRef.current, {
                x: isMobile ? 100 : 200, // Match StoryEngineSection's direction on mobile/desktop as needed. 
                // StoryEngine uses x: -200. Let's align or mirror.
                // User asked to "adjust according to mobile version @StoryEngineSection".
                // StoryEngine has x: -200.
                // ExistToCreate had x: 200.
                // I will set mobile to -100 to be similar but maybe less drastic, or just match -200.
                // Let's us x: -100 for mobile to replicate the slide-in from left feel if that is what StoryEngine does (it does x:-200).
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });

            // Draw lines based on scroll
            if (verticalLineRef.current) {
                gsap.from(verticalLineRef.current, {
                    scaleY: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: innerContainerRef.current,
                        start: "top 50%",
                        end: "center center",
                        scrub: 1.5
                    }
                });
            }

            if (horizontalLineRef.current) {
                gsap.from(horizontalLineRef.current, {
                    scaleX: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: innerContainerRef.current,
                        start: "top 20%", // Start earlier
                        end: "bottom 60%", // End later
                        scrub: 1.5
                    }
                });
            }

            if (topHorizontalLineRef.current) {
                gsap.from(topHorizontalLineRef.current, {
                    scaleX: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: innerContainerRef.current,
                        start: "top 0%",
                        end: "bottom 90%",
                        scrub: 1.5
                    }
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative flex h-auto w-full flex-col justify-center overflow-hidden">
            <div ref={innerContainerRef} className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full relative z-2 mb-0 sm:mb-0">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85] px-4 sm:px-0">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[7rem] tracking-tighter text-black transform scale-x-110 origin-left inline-block">
                            EXIST TO CREATE
                        </span>
                    </h2>
                </div>
                <div className="block md:grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12 w-full max-w-7xl mx-auto z-10 sm:z-20 px-4 sm:px-0">
                    <div className="w-full pt-0 sm:pt-2 tracking-wide relative">
                        <div className="block md:grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 pl-0 sm:pl-2">
                            <div className="relative pt-3 sm:pt-4 md:pt-6 text-black leading-none xl:leading-none">
                                <div ref={verticalLineRef} className="absolute top-0 right-0 w-px h-[70vh] md:h-[50vh] lg:h-full bg-black/20 origin-top hidden md:block"></div>
                                <div className="absolute top-0 left-0 w-full h-px bg-black/20 hidden"></div>
                                <div className="relative text-xs xl:xl:text-base z-30 space-y-0.5 sm:space-y-3 md:space-y-4.5 pr-2 leading-[1.1] text-left">
                                    <p>
                                        We don't follow briefs.<br className="hidden sm:block" /> We interrogate them.
                                    </p>
                                    <p>
                                        We don't design outputs.<br className="hidden sm:block" /> We engineer experiences.
                                    </p>
                                    <p>
                                        We believe space is a language.<br className="hidden sm:block" /> Technology is a tool.<br className="hidden sm:block" />
                                        Story is the weapon.
                                    </p>
                                    <p>
                                        We reject silos. <br className="hidden sm:block" />
                                        We dissolve categories.<br className="hidden sm:block" />
                                        Architecture, film, digital, brand
                                        to us, they are one fluid system.
                                    </p>
                                    <p>
                                        We don't decorate environments.<br className="hidden sm:block" />
                                        We activate them.
                                    </p>
                                    <p>
                                        We don't chase trends.<br className="hidden sm:block" />
                                        We build work that outlives them.
                                    </p>
                                    <p>
                                        Every project must move people
                                        emotionally, intellectually, instinctively.<br className="hidden sm:block" />
                                        If it doesn't, it doesn't leave our studio.
                                    </p>
                                </div>
                            </div>

                            {/* Desktop "What Others..." Text */}
                            <div className="relative pb-4 sm:pb-6 hidden md:block">
                                <div ref={horizontalLineRef} className="absolute bottom-16 sm:bottom-20 md:bottom-[6.3rem] left-0 w-full sm:-left-8 sm:w-[calc(100%+40rem)] h-px bg-black/20 hidden sm:block origin-left"></div>
                                <p className="w-full max-w-md text-black text-sm md:text-lg xl:text-xl leading-none normal-case md:uppercase">
                                    WHAT OTHERS <br />
                                    HESITATE TO ATTEMPT. <br />
                                    TO SEE WHAT <br />
                                    OTHERS OVERLOOK, <br />
                                    TO DELIVER WHAT <br />
                                    OTHERS CAN'T.
                                </p>
                                <p className="w-full max-w-[400px] text-black text-sm md:text-xl xl:text-3xl border-black mt-3 sm:mt-4 md:mt-6 leading-none">
                                    FLUID BY DESIGN. <br />
                                    RELENTLESS BY INTENT.
                                </p>
                            </div>

                            {/* Mobile "What Others..." Text (Flows after paragraphs) */}
                            <div className="block md:hidden relative z-20 pb-2 pt-1 clear-right">
                                <p className="w-full text-black text-sm leading-none uppercase mt-3">
                                    WHAT OTHERS <br />
                                    HESITATE TO ATTEMPT. <br />
                                    TO SEE WHAT <br />
                                    OTHERS OVERLOOK, <br />
                                    TO DELIVER WHAT <br />
                                    OTHERS CAN'T.
                                </p>
                                <p className="font-normal w-full text-black text-sm border-black mb-0 relative z-30 leading-none block md:hidden mt-3">
                                    FLUID BY DESIGN. <br />
                                    RELENTLESS BY INTENT.
                                </p>
                                <div className="absolute right-0 bottom-0 w-[50%] h-[20vh] -z-10">
                                    <Image
                                        src="/homepage/2.avif"
                                        alt="Classical statue at a creative console"
                                        fill
                                        className="object-contain object-bottom-right drop-shadow-2xl grayscale-20 contrast-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 relative hidden md:flex flex-col justify-between h-full">
                        <div className="mt-auto">
                            <div className="relative w-full h-auto aspect-square lg:h-[25vh] xl:h-[55vh] xl:aspect-auto transform scale-125 origin-bottom-right sm:z-10">
                                <Image
                                    src="/homepage/2.avif"
                                    alt="Classical statue at a creative console"
                                    fill
                                    className="object-contain object-bottom-right drop-shadow-2xl grayscale-20 contrast-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
