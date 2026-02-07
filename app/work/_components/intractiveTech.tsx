'use client';

import Image from 'next/image';

export default function InteractiveTech() {
    return (
        <div className="w-full flex flex-col pt-24 bg-white text-black overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="relative w-full flex justify-start lg:col-span-2 overflow-visible z-0">
                    <div className="absolute top-0 bottom-0 left-0 w-screen z-0 pointer-events-none flex items-center justify-start -ml-6 sm:-ml-12 lg:-ml-24 overflow-visible">
                        <div className="relative w-full h-full scale-150 origin-left">
                            <Image
                                src="/bagrounds/BG-2.png"
                                alt="Background pattern"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative z-10">
                        <img
                            src="/intractive_tech.png"
                            alt="Immersive and Interactive Technology"
                            className="w-auto h-auto lg:h-[600px] object-contain object-top-left -scale-x-100"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-4 justify-start lg:pl-20 lg:col-span-3 z-1">
                    <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left -ml-22">
                        IMMERSIVE & <br />
                        INTERACTIVE <br />
                        TECHNOLOGY
                    </h2>

                    <p className="text-xl sm:text-lg font-medium text-black">
                        Technology is not our product. But experience is.
                    </p>

                    <p className="text-base sm:text-lg text-black leading-[1.2] max-w-2xl text-left">
                        From custom CMS platforms and interactive installations to immersive environments and digital twins we design digital ecosystems that people don't just watch, but participate in. Technology becomes invisible. Engagement becomes instinctive.
                    </p>

                    <div className="flex flex-col -space-y-2 lg:-space-y-1">
                        <p className="text-xl font-medium text-black">
                            This is storytelling at scale powered by intelligence.
                        </p>
                        <p className="text-6xl sm:text-7xl lg:text-8xl tracking-tighter font-medium text-black leading-[0.8]">
                            takes over.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
