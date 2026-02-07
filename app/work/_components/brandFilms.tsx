'use client';

import Image from 'next/image';

export default function BrandFilms() {
    return (
        <div className="w-full flex flex-col pt-24 bg-white text-black overflow-visible relative">
            <div className="absolute top-0 bottom-0 right-0 w-screen z-0 pointer-events-none flex items-center justify-end -mr-6 sm:-mr-12 lg:-mr-24 overflow-visible">
                <div className="relative w-full h-full scale-50 origin-right">
                    <Image
                        src="/bagrounds/BG-3.png"
                        alt="Background pattern"
                        fill
                        className="object-contain object-right -scale-x-100"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
                <div className="relative w-full flex justify-start lg:col-span-2">
                    <img
                        src="/film.png"
                        alt="Corporate and Brand Films - TV Head Statue"
                        className="w-auto h-auto lg:h-[600px] object-contain object-top-left"
                    />
                </div>

                <div className="flex flex-col space-y-6 justify-start lg:pl-20 lg:col-span-3">
                    <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left -ml-50">
                        CORPORATE & <br />
                        BRAND FILMS
                    </h2>

                    <div className="space-y-4">
                        <p className="text-3xl sm:text-4xl lg:text-[3.5rem] font-medium text-black leading-none tracking-tight">
                            We don't make videos. We <br />
                            direct perception.
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-black leading-[1.2] max-w-2xl text-left">
                        From storyboarding to on-ground shoots, from corporate films to brand narratives and explainer content we handle everything under one roof. <br />
                        Every frame is intentional. Every second serves the brand's larger story.
                    </p>

                    <p className="text-xl font-medium text-black">
                        This is cinema with clarity. Storytelling with strategy.
                    </p>

                    <div className="-space-y-1 text-[#666195]">
                        <p className="text-4xl sm:text-5xl lg:text-[2.6rem] tracking-tighter font-medium leading-none">
                            WE TURN BRANDS INTO
                        </p>
                        <p className="text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tighter font-medium leading-none">
                            MOVING STORIES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
