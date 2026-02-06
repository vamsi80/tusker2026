'use client';

export default function InteractiveTech() {
    return (
        <div className="w-full flex flex-col py-24 bg-white text-black overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side: Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                    <img
                        src="/intractive_tech.png"
                        alt="Immersive and Interactive Technology"
                        className="w-auto h-full object-top-left -scale-x-100"
                    />
                </div>

                {/* Right Side: content */}
                <div className="flex flex-col space-y-4 justify-start lg:pl-20">
                    <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left -ml-22">
                        IMMERSIVE & <br />
                        INTERACTIVE <br />
                        TECHNOLOGY
                    </h2>

                    <p className="text-xl sm:text-lg font-medium text-black">
                        Technology is not our product. But experience is.
                    </p>

                    <p className="text-base sm:text-lg text-black leading-[1.2] max-w-xl text-left">
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
