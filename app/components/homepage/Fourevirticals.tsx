'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourVerticals() {
    const containerRef = useRef<HTMLElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(innerContainerRef.current, {
                scrollTrigger: {
                    trigger: innerContainerRef.current,
                    start: "top 80%",
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
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                },
                y: 500,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative flex h-auto w-full flex-col justify-center overflow-hidden md:py-0 px-4 sm:px-0">
            <div ref={innerContainerRef} className="relative z-10 mx-auto flex h-full w-full flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 w-full h-full items-center">
                    <div className="relative w-full h-[40vh] lg:h-full z-2 min-h-[300px] mt-4 lg:mt-0 order-2 lg:order-1">
                        <Image
                            src="/homepage/fourVirticals/Man.png"
                            alt="Classical statue with futuristic tech nodes"
                            fill
                            className="object-contain object-center lg:object-right transform"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            priority
                        />

                        <div className="vertical-icon absolute top-[2%] left-[15%] lg:left-[30%] w-[15%] h-[15%] sm:w-[25%] sm:h-[25%] lg:w-[35%] lg:h-[35%] -rotate-45">
                            <Image src="/homepage/fourVirticals/Blue.png" alt="Blue Vertical" fill className="object-contain" />
                        </div>
                        <div className="vertical-icon absolute top-[10%] right-[5%] lg:right-[-13%] w-[22%] h-[22%] sm:w-[35%] sm:h-[35%] lg:w-[45%] lg:h-[45%]">
                            <Image src="/homepage/fourVirticals/Orange.png" alt="Orange Vertical" fill className="object-contain" />
                        </div>
                        <div className="vertical-icon absolute bottom-[5%] left-[5%] lg:left-[0%] w-[22%] h-[22%] sm:w-[35%] sm:h-[35%] lg:w-[45%] lg:h-[45%]">
                            <Image src="/homepage/fourVirticals/Black.png" alt="Black Vertical" fill className="object-contain" />
                        </div>
                        <div className="vertical-icon absolute bottom-[5%] right-[5%] lg:right-[-10%] w-[15%] h-[15%] sm:w-[25%] sm:h-[25%] lg:w-[35%] lg:h-[35%] -rotate-45">
                            <Image src="/homepage/fourVirticals/Grey.png" alt="Grey Vertical" fill className="object-contain" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-5 lg:pl-12 order-1 lg:order-2">
                        <h2 className="flex flex-col text-left font-sans text-4xl font-normal tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.5rem] transform scale-x-[1.15] origin-left pb-2 sm:pb-3 lg:pb-4">
                            <span>FOUR</span>
                            <span>VERTICALS.</span>
                            <span>ONE UNIFIED</span>
                            <span>STORY.</span>
                        </h2>
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
