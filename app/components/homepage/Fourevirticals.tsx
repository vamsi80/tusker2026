'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourVerticals() {
    const containerRef = useRef<HTMLElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;

            gsap.from(innerContainerRef.current, {
                scrollTrigger: {
                    trigger: innerContainerRef.current,
                    start: isMobile ? "top 90%" : "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 200,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            });

            gsap.from('.vertical-icon', {
                scrollTrigger: {
                    trigger: innerContainerRef.current,
                    start: isMobile ? "top 85%" : "top 70%",
                    toggleActions: "play none none reverse"
                },
                y: isMobile ? 350 : 250,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative flex h-auto w-full flex-col justify-center overflow-hidden md:py-0 px-4 sm:px-0">
            <div ref={innerContainerRef} className="relative z-10 mx-auto flex h-full w-full flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0 lg:gap-12 w-full h-full items-center">
                    <div className="hidden lg:flex relative w-full h-[40vh] lg:h-auto z-2 min-h-[300px] mt-0 lg:mt-0 order-2 lg:order-1 justify-center lg:justify-end">
                        <div className="relative h-full lg:h-auto w-auto lg:w-[85%] aspect-580/1000 scale-100 lg:scale-95 origin-center lg:origin-right">
                            <Image
                                src="/homepage/fourVirticals/Man.avif"
                                alt="Classical statue with futuristic tech nodes"
                                width={580}
                                height={1000}
                                className="h-full w-auto object-contain"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />

                            <div className="vertical-icon absolute top-[3%] left-[15%] lg:top-[2%] lg:left-[14%] w-[40%] h-[40%] lg:w-[40%] lg:h-[40%] -rotate-60">
                                <Image src="/homepage/fourVirticals/Blue.avif" alt="Blue Vertical" fill className="object-contain" />
                            </div>
                            <div className="vertical-icon absolute top-[15%] right-[-10%] lg:top-[6%] lg:right-[-22%] w-[55%] h-[55%] lg:w-[55%] lg:h-[55%]">
                                <Image src="/homepage/fourVirticals/Orange.avif" alt="Orange Vertical" fill className="object-contain" />
                            </div>
                            <div className="vertical-icon absolute bottom-[5%] left-[-13%] lg:bottom-[5%] lg:left-[-20%] w-[55%] h-[55%] lg:w-[55%] lg:h-[55%]">
                                <Image src="/homepage/fourVirticals/Black.avif" alt="Black Vertical" fill className="object-contain" />
                            </div>
                            <div className="vertical-icon absolute bottom-[5%] right-[-15%] lg:bottom-[5%] lg:right-[-15%] w-[40%] h-[40%] lg:w-[40%] lg:h-[40%] -rotate-45">
                                <Image src="/homepage/fourVirticals/Grey.avif" alt="Grey Vertical" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-0 sm:space-y-3 lg:space-y-4 xl:space-y-5 lg:pl-12 order-1 lg:order-2">
                        <h2 className="flex flex-col text-left font-sans text-3xl font-normal tracking-tighter text-black w-[90%] sm:w-auto sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.5rem] transform scale-x-[1.15] origin-left pb-0 sm:pb-3 lg:pb-4 leading-[0.85]">
                            <span className="block sm:hidden">FOUR VERTICALS.</span>
                            <span className="block sm:hidden">ONE UNIFIED STORY.</span>
                            <span className="hidden sm:block">FOUR</span>
                            <span className="hidden sm:block">VERTICALS.</span>
                            <span className="hidden sm:block">ONE UNIFIED</span>
                            <span className="hidden sm:block">STORY.</span>
                        </h2>

                        {/* Mobile Image Container */}
                        <div className="block lg:hidden relative w-full h-[45vh] z-2 -mt-2">
                            <div className="relative h-full w-full flex justify-center">
                                <div className="relative h-full w-auto aspect-580/1000">
                                    <Image
                                        src="/homepage/fourVirticals/Man.avif"
                                        alt="Classical statue with futuristic tech nodes"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                    <div className="vertical-icon absolute top-[3%] left-[15%] lg:top-[2%] lg:left-[14%] w-[40%] h-[40%] lg:w-[40%] lg:h-[40%] -rotate-60">
                                        <Image src="/homepage/fourVirticals/Blue.avif" alt="Blue Vertical" fill className="object-contain" />
                                    </div>
                                    <div className="vertical-icon absolute top-[4%] right-[-25%] lg:top-[6%] lg:right-[-22%] w-[55%] h-[55%] lg:w-[55%] lg:h-[55%]">
                                        <Image src="/homepage/fourVirticals/Orange.avif" alt="Orange Vertical" fill className="object-contain" />
                                    </div>
                                    <div className="vertical-icon absolute bottom-[5%] left-[-24%] lg:bottom-[5%] lg:left-[-20%] w-[55%] h-[55%] lg:w-[55%] lg:h-[55%]">
                                        <Image src="/homepage/fourVirticals/Black.avif" alt="Black Vertical" fill className="object-contain" />
                                    </div>
                                    <div className="vertical-icon absolute bottom-[5%] right-[-15%] lg:bottom-[5%] lg:right-[-15%] w-[40%] h-[40%] lg:w-[40%] lg:h-[40%] -rotate-45">
                                        <Image src="/homepage/fourVirticals/Grey.avif" alt="Grey Vertical" fill className="object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs xl:text-base font-normal  max-w-2xl leading-[1.1]">
                            At The White Tusker, we don't operate in silos. We build experiences that move seamlessly from space to screen, from technology to emotion, from brand to belief.
                        </p>
                        <div className="space-y-2 xl:space-y-0">
                            <p className="text-xs xl:text-base font-normal  max-w-2xl leading-[1.1]">
                                Our four verticals are not services. They are interlocking forces - each designed to strengthen the other, each rooted in one philosophy:
                            </p>

                            <p className="text-sm md:text-xl xl:text-3xl text-black uppercase leading-none">
                                EVERY BRAND HAS A STORY.<br />
                                OUR JOB IS TO MAKE PEOPLE<br />
                                STEP INTO IT.
                            </p>
                        </div>
                        <p className="font-normal text-xs xl:text-base max-w-2xl leading-[1.1]">
                            From physical environments to moving images, from intelligent technology to brand identity, we design ecosystems where architecture speaks, films persuade, technology engages, and brands resonate.
                        </p>
                        <p className="font-medium text-xs xl:text-base max-w-2xl leading-[1.1]">
                            Together, these four verticals allow us to deliver end-to-end storytelling, from concept to execution, from blueprint to emotion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
