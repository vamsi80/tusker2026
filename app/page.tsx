import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The White Tusker | Fluid by Nature",
  description: "Welcome to the world of White Tusker. Fluid by nature, adaptive by design.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black selection:bg-purple-200">
      {/* Background Noise */}
      <div className="pointer-events-none absolute inset-0 z-1 opacity-[0.4] mix-blend-multiply">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15" />
        </svg>
      </div>

      {/* Fluid Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-5%] z-0 h-[500px] w-[500px] animate-pulse rounded-full bg-linear-to-br from-purple-200 via-purple-400 to-indigo-500 opacity-40 blur-[100px] duration-[4000ms]" />
      <div className="absolute bottom-[-10%] left-[20%] z-0 h-[600px] w-[600px] animate-pulse rounded-full bg-linear-to-tr from-indigo-200 via-purple-300 to-purple-600 opacity-40 blur-[120px] duration-[5000ms] delay-1000" />
      <div className="absolute top-[20%] left-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-linear-to-r from-purple-100 to-indigo-200 opacity-30 blur-[80px]" />

      {/* Orbital Lines */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden pl-0 sm:pl-[10%] md:pl-[20%]">
        {/* Orbit 1: Tilted Left */}
        <div className="absolute h-[30vh] w-[90vw] -rotate-29 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[45vh] lg:w-[40vw] xl:h-[15vh] xl:w-[35vw]" />
        {/* Orbit 2: Tilted Right */}
        <div className="absolute h-[30vh] w-[90vw] -rotate-25 rounded-[50%] border-[0.5px] border-black/20 sm:h-[35vh] sm:w-[60vw] md:h-[40vh] md:w-[45vw] lg:h-[45vh] lg:w-[40vw] xl:h-[15vh] xl:w-[35vw]" />
      </div>

      {/* Main Content Grid */}
      <main className="relative z-10 flex min-h-screen w-full flex-col justify-between p-6 sm:p-12">
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

          {/* Sidebar Text */}
          <div className="absolute left-0 bottom-48 hidden md:block">
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap">
              + WELCOME TO THE WORLD OF WHITE TUSKER
            </span>
          </div>


          {/* Bottom Left Date */}
          <div className="flex flex-col gap-0 text-xl font-bold leading-none tracking-tight sm:text-3xl z-20">
            <div>++</div>
            <div>20</div>
            <div>26</div>
          </div>

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

          {/* Bottom Right Logo */}
          <div className="text-right z-20">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-12 sm:w-12 border-2 border-black flex items-center justify-center">
                {/* Abstract Logo Icon */}
                <div className="h-4 w-4 bg-black rounded-sm"></div>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-sans text-xl font-black leading-none tracking-tighter sm:text-3xl">
                  THE WHITE
                </span>
                <span className="font-sans text-xl font-black leading-none tracking-tighter sm:text-3xl">
                  TUSKER
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
