export default function HeroSection() {
    return (
        <main className="relative z-10 flex min-h-screen w-full flex-col justify-between p-6 pt-24 sm:p-12 sm:pt-28">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden pl-0 sm:pl-[10%] md:pl-[20%]">
                <div className="absolute h-[30vh] w-[90vw] -rotate-29 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[55vh] lg:w-[50vw] xl:h-[35vh] xl:w-[45vw]" />
                <div className="absolute h-[30vh] w-[90vw] -rotate-22 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[55vh] lg:w-[50vw] xl:h-[35vh] xl:w-[45vw]" />
            </div>

            {/* Scattered Keywords Container */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                {/* Randomly distributed keywords across the hero section */}
                <span className="absolute top-[29%] left-[53%] text-[10px] font-bold tracking-widest text-black sm:text-[14px]">
                    + EXPERIENCE
                </span>
                <span className="absolute bottom-[15%] left-[30%] text-[10px] font-bold tracking-widest text-black sm:text-[14px]">
                    + DIGITAL
                </span>
                <span className="absolute top-[45%] right-[12%] text-[11px] font-bold tracking-widest text-black sm:text-[14px]">
                    + DESIGN
                </span>
                <span className="absolute top-[18%] right-[22%] text-[10px] font-medium tracking-widest text-black sm:text-[11px]">
                    + IMMERSIVE
                </span>
                <span className="absolute bottom-[25%] right-[19%] text-[11px] font-bold tracking-widest text-black uppercase sm:text-[14px]">
                    + Creative
                </span>
                <span className="absolute bottom-[20%] left-[50%] -translate-x-1/2 text-[9px] font-medium tracking-widest text-gray-500 uppercase sm:text-[11px]">
                    + Be Inspired
                </span>
                <span className="absolute top-[20%] left-[4%] text-[9px] font-medium tracking-widest text-gray-500 uppercase sm:text-[14px]">
                    + Interactive
                </span>
            </div>

            {/* Spacer for Header Push */}
            <div className="h-0 sm:h-auto"></div>

            <div className="flex flex-1 flex-col items-start justify-center pl-4 sm:pl-[10%] lg:pl-[20%]">
                <div className="relative -translate-y-12">
                    <h1 className="flex flex-col text-left font-sans text-5xl font-normal leading-none sm:leading-[0.85] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl transform scale-x-[1.15] origin-left pb-4">
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            FLUID
                            <span className="text-lg font-light tracking-normal text-black sm:text-2xl md:text-5xl translate-y-[-0.1em]">
                                BY
                            </span>
                        </span>
                        <span>NATURE</span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            ADAPTIVE
                        </span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            <span className="text-lg font-light tracking-normal text-black sm:text-2xl md:text-5xl translate-y-[-0.1em]">
                                BY
                            </span>
                            DESIGN
                        </span>
                    </h1>
                </div>
            </div>
        </main>
    );
}
