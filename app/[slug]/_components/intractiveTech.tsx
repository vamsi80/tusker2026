'use client';

import Image from 'next/image';

export default function InteractiveTech() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-white text-black overflow-visible justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-end">
                <div className="relative w-full flex justify-start lg:col-span-2 overflow-visible z-0 h-auto sm:h-[60vh] lg:h-auto order-1 lg:order-1">
                    <div className="absolute top-0 bottom-0 left-0 w-screen z-0 pointer-events-none flex items-center justify-start -ml-6 sm:-ml-12 lg:-ml-24 overflow-visible">
                        <div className="relative w-full h-full scale-200 sm:scale-200 md:scale-260 lg:scale-125 origin-left">
                            <Image
                                src="/bagrounds/BG-2.avif"
                                alt="Background pattern"
                                fill
                                className="object-contain object-left"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative z-10 w-full h-[300px] sm:h-[400px] lg:h-[600px] max-w-[1000px]">
                        <Image
                            src="/intractive_tech.avif"
                            alt="Immersive and Interactive Technology"
                            fill
                            className="object-contain object-bottom -scale-x-100"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-4 justify-start lg:pl-20 lg:col-span-3 z-1 order-2 lg:order-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-medium tracking-tighter leading-[0.9] lg:leading-[0.85] text-black scale-x-110 origin-left lg:-ml-22">
                        IMMERSIVE & <br />
                        INTERACTIVE <br />
                        TECHNOLOGY
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl font-normal text-black leading-[1.2]">
                        Technology is not our product. But experience is.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black leading-[1.2] max-w-2xl text-left">
                        From custom CMS platforms and interactive installations to immersive environments and digital twins we design digital ecosystems that people don't just watch, but participate in. Technology becomes invisible. Engagement becomes instinctive.
                    </p>

                    <div className="flex flex-col lg:-space-y-1 xl:pt-4 lg:pt-3 md:pt-2">
                        <p className="text-base sm:text-lg lg:text-xl font-normal text-black leading-[1.2]">
                            This is storytelling at scale powered by intelligence.
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl tracking-tighter font-normal text-black leading-[0.8]">
                            takes over.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
