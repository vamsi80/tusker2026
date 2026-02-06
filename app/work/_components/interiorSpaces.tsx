'use client';

import Image from 'next/image';

export default function InteriorSpaces() {
    return (
        <div className="relative flex min-h-screen w-full flex-col justify-center px-4 gap-4">

            <div className="w-full mb-8 md:mb-0 relative z-2">
                <h1 className="text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-[5rem] xl:text-[5rem] scale-x-110 origin-left">
                    ARCHITECTURE & <br />
                    INTERIOR SPACES
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className="lg:col-span-1 flex flex-col justify-start space-y-12">
                    <div className="max-w-2xl space-y-3 text-black">
                        <p className="text-xl font-medium leading-[1.1]">
                            We don&apos;t design interiors.<br />
                            We script environments.
                        </p>

                        <p className="text-xl text-black leading-[1.2] pt-2">
                            From large-scale customer experience centers (our core strength) to offices and restaurants every space is designed to narrate a story. Materials, lighting, graphics, flow, and technology come together to create spaces that communicate, engage, and perform.
                        </p>
                        <div className='pt-2'>
                            <div className="-space-y-1 text-xl">
                                <p className="font-medium">These are not buildings.</p>
                                <p className="font-medium">These are brand experiences in three dimensions.</p>
                            </div>
                            <div className='pt-2'>
                                <h2 className="text-3xl font-medium leading-[0.85] tracking-tight sm:text-5xl md:text-5xl max-w-4xl scale-x-110 origin-left">
                                    SPACES THAT SPEAK <br />
                                    BEFORE WORDS DO.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 relative flex items-start justify-start">
                    <div className="relative w-full h-full transform ">
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