'use client';

import Image from 'next/image';

export default function BrandSolution() {
    return (
        <div className="w-full flex flex-col text-black overflow-visible relative pt-24">
            <div className="absolute top-0 bottom-0 left-0 w-screen z-0 pointer-events-none flex items-center justify-start -ml-6 sm:-ml-12 lg:-ml-24 overflow-visible">
                <div className="relative w-full h-full scale-100 origin-left">
                    <Image
                        src="/bagrounds/BG-2.png"
                        alt="Background pattern"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">

                <div className="flex flex-col space-y-8 justify-start order-2 lg:order-1 lg:col-span-2">
                    <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left">
                        BRAND SOLUTIONS
                    </h2>

                    <div className="space-y-4">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[0.9]">
                            We don't decorate brands. <br />
                            We define them.
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-gray-800 leading-[1.2] max-w-xl text-left">
                        From logo creation and identity systems to brand books and spatial branding we decode the soul of the brand and translate it into visuals, environments, and experiences that feel unmistakably alive.
                    </p>

                    <div className="space-y-2 pt-4">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[0.9] tracking-tight">
                            Consistency is not enough. <br />
                            Resonance is the goal.
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex justify-start order-1 lg:order-2 lg:col-span-1">
                    <img
                        src="/Branding.png"
                        alt="Brand Solutions - Bust with Digital Face"
                        className="w-auto h-auto lg:h-[600px] max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
