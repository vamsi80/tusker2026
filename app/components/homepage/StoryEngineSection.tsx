import Image from 'next/image';

export default function StoryEngineSection() {
    return (
        <section className="relative flex h-auto w-full flex-col justify-center overflow-hidden bg-transparent">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full mb-8 md:mb-0 relative z-2">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85] pl-4 sm:pl-12 lg:pl-20">
                        <span className="block text-xs sm:text-sm md:text-base lg:text-xl font-normal tracking-wide text-black md:-mb-1 lg:-mb-2 uppercase ml-1">
                            We are not a service company. We are a
                        </span>
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] tracking-tighter font-medium text-black transform scale-x-110 origin-left inline-block">
                            STORY-ENGINE.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 w-full max-w-7xl mx-auto z-3 px-4 sm:px-0 pt-0">
                    <div className="sm:col-span-1 lg:col-span-1 relative h-[40vh] -mt-12 sm:mt-0 sm:h-[65vh] lg:-mt-12 lg:h-[80vh] w-full flex items-end justify-center lg:justify-start z-10">
                        <div className="relative w-full h-full transform">
                            <Image
                                src="/homepage/1.png"
                                alt="Classical statue using a laptop"
                                fill
                                className="object-contain object-bottom drop-shadow-2xl grayscale-10 z-10"
                                priority
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-1 lg:col-span-1 flex flex-col justify-center items-end lg:pl-0 pt-0 lg:pt-0 relative z-0 h-full">
                        <div className="flex flex-row items-stretch gap-3 sm:gap-4 lg:gap-8">
                            <div className="w-px bg-blue-300/50 hidden sm:block relative">
                                <div className="absolute top-[20%] right-0 w-[17vw] sm:w-[15vw] h-[1.5px] bg-blue-300/50 overflow-hidden" />
                            </div>
                            <div className="w-full max-w-[450px] text-sm xl:text-base font-medium tracking-wide text-black leading-relaxed space-y-2 sm:space-y-3">
                                <p className="leading-[1.2] xl:leading-[1.2]">
                                    We design experiences that live beyond screens and walls. <br />
                                    Experiences people walk into, interact with, and remember.
                                </p>

                                <p className="relative leading-[1.2] xl:leading-[1.2]">
                                    Operating seamlessly across architecture, film, technology,
                                    and branding, we connect the physical and the digital into
                                    one fluid narrative.
                                </p>

                                <div className="space-y-0.5 text-black text-sm xl:text-xl font-medium tracking-widest leading-[1.2] xl:leading-[1.2]">
                                    EVERY SPACE HAS INTENT.<br />
                                    EVERY FILM HAS PURPOSE.<br />
                                    EVERY TECHNOLOGY HAS A STORY TO TELL
                                </div>

                                <p className="leading-[1.2] xl:leading-[1.2]">
                                    We don't believe in isolated deliverables.<br />
                                    We believe in systems that breathe, adapt, and evolve.<br />
                                    From carpet to content, from concept to completion,
                                </p>

                                <div className="space-y-0.5 text-black text-sm xl:text-xl font-medium tracking-widest leading-[1.2] xl:leading-[1.2]">
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
