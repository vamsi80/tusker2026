'use client';

import Image from 'next/image';

export default function InteriorSpaces() {
    return (
        <div className="relative flex h-auto w-full flex-col">
            <div className="w-full mb-8 md:mb-6 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-medium leading-[0.9] tracking-tighter scale-x-110 origin-left">
                    ARCHITECTURE & <br />
                    INTERIOR SPACES
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-0">
                <div className="lg:col-span-1 flex flex-col justify-start z-2">
                    <div className="max-w-2xl space-y-1 text-black">
                        <p className="text-base sm:text-lg lg:text-lg xl:text-xl font-medium leading-[1.1]">
                            We don&apos;t design interiors.<br />
                            We script environments.
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black leading-[1.2] pt-2">
                            From large-scale customer experience centers (our core strength) to offices and restaurants every space is designed to narrate a story. Materials, lighting, graphics, flow, and technology come together to create spaces that communicate, engage, and perform.
                        </p>
                        <div className='pt-2 space-y-6'>
                            <div className="-space-y-1 text-base sm:text-lg  xl:text-xl">
                                <p className="font-medium">These are not buildings.</p>
                                <p className="font-medium">These are brand experiences in three dimensions.</p>
                            </div>
                            <div className='pt-2'>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-[0.85] tracking-tight max-w-4xl scale-x-110 origin-left">
                                    SPACES THAT SPEAK <br />
                                    BEFORE WORDS DO.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 relative flex items-start justify-start h-[40vh] sm:h-[60vh] lg:h-auto lg:min-h-full overflow-visible z-1 mt-8 lg:mt-0">
                    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center scale-175 sm:scale-200 md:scale-260 lg:scale-260 lg:-translate-x-20 lg:-translate-y-20">
                        <div className="relative w-full h-full">
                            <Image
                                src="/bagrounds/BG-1.png"
                                alt="Background pattern"
                                fill
                                className="object-contain opacity-100"
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative w-full h-full transform">
                        <Image
                            src="/ARCHITECTURAL.png"
                            alt="Classical statue at a creative console"
                            fill
                            className="object-contain drop-shadow-2xl grayscale-20 contrast-110"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
