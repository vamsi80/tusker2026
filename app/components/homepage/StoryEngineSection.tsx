import Image from 'next/image';

export default function StoryEngineSection() {

    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-transparent">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full mb-8 md:mb-0 relative z-2">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85] pl-20">
                        <span className="block text-xs sm:text-sm md:text-base lg:text-xl font-normal tracking-wide text-black mb-2 md:mb-4 uppercase ml-1">
                            We are not a service company. We are a
                        </span>
                        <span className="text-5xl sm:text-6xl md:text-6xl lg:text-[7rem] tracking-tighter font-medium text-black transform scale-x-110 origin-left inline-block">
                            STORY-ENGINE.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto z-3">
                    <div className="lg:col-span-1 relative h-[90vh] lg:-mt-12 w-full flex items-end justify-center lg:justify-start z-10">
                        <div className="relative w-full h-full transform">
                            <Image
                                src="/1.png"
                                alt="Classical statue using a laptop"
                                fill
                                className="object-contain object-bottom drop-shadow-2xl grayscale-10 z-10"
                                priority
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col justify-center items-end lg:pl-12 pt-0 lg:pt-0 relative z-0 h-full">
                        <div className="flex flex-row items-stretch gap-8">
                            <div className="w-px bg-blue-300/50 hidden lg:block relative">
                                <div className="absolute top-[20%] right-0 w-[20vw] h-[1.5px] bg-blue-300/50 overflow-hidden" />
                            </div>
                            <div className="w-[450px] text-xs sm:text-sm font-medium tracking-wide text-black leading-relaxed space-y-3">
                                <p>
                                    We design experiences that live beyond screens and walls. <br />
                                    Experiences people walk into, interact with, and remember.
                                </p>

                                <p className="relative">
                                    Operating seamlessly across architecture, film, technology,
                                    and branding, we connect the physical and the digital into
                                    one fluid narrative.
                                </p>

                                <div className="space-y-0.5 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-widest">
                                    EVERY SPACE HAS INTENT.<br />
                                    EVERY FILM HAS PURPOSE.<br />
                                    EVERY TECHNOLOGY HAS A STORY TO TELL
                                </div>

                                <p>
                                    We don't believe in isolated deliverables.<br />
                                    We believe in systems that breathe, adapt, and evolve.<br />
                                    From carpet to content, from concept to completion,
                                </p>

                                <div className="space-y-0.5 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-widest">
                                    WE BUILD WORLDS<br />
                                    THAT MOVE PEOPLE EMOTIONALLY,<br />
                                    INTELLECTUALLY, AND EXPERIENTIALLY.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
