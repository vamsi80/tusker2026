export default function HeroSection() {
    return (
        /* Main Content Grid */
        <main className="relative z-10 flex min-h-screen w-full flex-col justify-between p-6 pt-24 sm:p-12 sm:pt-28">
            {/* Orbital Lines */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden pl-0 sm:pl-[10%] md:pl-[20%]">
                {/* Orbit 1: Tilted Left */}
                <div className="absolute h-[30vh] w-[90vw] -rotate-29 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[45vh] lg:w-[40vw] xl:h-[15vh] xl:w-[35vw]" />
                {/* Orbit 2: Tilted Right */}
                <div className="absolute h-[30vh] w-[90vw] -rotate-25 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[45vh] lg:w-[40vw] xl:h-[15vh] xl:w-[35vw]" />
            </div>
            {/* Top Section */}
            <div className="flex w-full justify-between text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase sm:text-xs">
                <div>+ Interactive</div>
                {/* Top Right is implicit with layout or added here */}
            </div>

            {/* Center Typography */}
            <div className="flex flex-1 flex-col items-start justify-center pl-[20%]">
                <div className="relative">
                    {/* Floating Labels around the text */}
                    <span className="absolute -top-12 -right-12 hidden text-[10px] font-medium tracking-widest text-black sm:block sm:text-xs animate-[bounce_3s_infinite] delay-700">
                        + EXPERIENCE
                    </span>
                    <span className="absolute -bottom-16 -left-16 hidden text-[10px] font-medium tracking-widest text-black sm:block sm:text-xs animate-[bounce_4s_infinite] delay-500">
                        + DIGITAL
                    </span>
                    <span className="absolute top-1/2 -right-32 hidden text-[10px] font-medium tracking-widest text-black sm:block sm:text-xs animate-pulse">
                        + DESIGN
                    </span>
                    <span className="absolute top-0 -right-48 hidden text-[10px] font-medium tracking-widest text-black sm:block sm:text-xs">
                        + IMMERSIVE
                    </span>

                    {/* Main Headline */}
                    <h1 className="flex flex-col text-left font-sans text-5xl font-medium leading-[0.85] tracking-tighter text-black sm:text-7xl md:text-8xl lg:text-9xl">
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            FLUID
                            <span className="text-lg font-light tracking-normal text-gray-500 sm:text-2xl md:text-3xl translate-y-[-0.5em]">
                                BY
                            </span>
                        </span>
                        <span>NATURE</span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            ADAPTIVE
                            {/* <span className="hidden text-lg font-light tracking-normal text-gray-500 sm:inline-block sm:text-2xl md:text-3xl translate-y-[-0.5em]">
                BY
              </span> */}
                        </span>
                        <span className="flex items-baseline justify-start gap-2 sm:gap-4">
                            <span className="absolute -left-8 top-2 text-lg font-light tracking-normal text-gray-500 sm:hidden">
                                BY
                            </span>
                            DESIGN
                        </span>
                    </h1>
                </div>

                <div className="mt-12 sm:hidden">
                    <span className="text-[10px] font-medium tracking-widest text-black uppercase">
                        + Experience
                    </span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex w-full items-end justify-between relative">

                {/* Sidebar Text Removed */}


                {/* Floating Labels Bottom Area */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden sm:block">
                    <span className="text-[10px] font-medium tracking-widest text-gray-500 uppercase">
                        + Be Inspired
                    </span>
                </div>

                <div className="absolute bottom-32 right-32 hidden lg:block">
                    <span className="text-[10px] font-medium tracking-widest text-black uppercase">
                        + Creative
                    </span>
                </div>
            </div>
        </main>
    );
}
