import Image from 'next/image';

export default function ExistToCreateSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full mb-8 md:mb-0 relative z-2">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85]">
                        <span className="text-5xl sm:text-6xl md:text-6xl lg:text-[7rem] tracking-tighter font-medium text-black transform scale-x-110 origin-left inline-block">
                            EXIST TO CREATE
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto z-3">
                    <div className="lg:col-span-1 w-full pt-2 text-xs sm:text-sm font-medium tracking-wide leading-tight">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-2">
                            <div className="relative space-y-5 pt-6 text-gray-700">
                                <div className="absolute top-0 right-0 w-px h-full bg-black/20"></div>
                                <div className="absolute top-0 left-0 w-full h-px bg-black/20"></div>
                                <p>
                                    We don't follow briefs. <br />
                                    We interrogate them.
                                </p>
                                <p>
                                    We don't design outputs. <br />
                                    We engineer experiences.
                                </p>
                                <p>
                                    We believe space is a language. <br />
                                    Technology is a tool. <br />
                                    Story is the weapon.
                                </p>
                                <p>
                                    We reject silos. <br />
                                    We dissolve categories. <br />
                                    Architecture, film, digital, brand <br />
                                    to us, they are one fluid system.
                                </p>
                                <p>
                                    We don't decorate environments. <br />
                                    We activate them.
                                </p>
                                <p>
                                    We don't chase trends. <br />
                                    We build work that outlives them.
                                </p>
                                <p>
                                    Every project must move people <br />
                                    emotionally, intellectually, instinctively. <br />
                                    If it doesn't, it doesn't leave our studio.
                                </p>
                            </div>
                            <div className="relative pb-6">
                                <div className="absolute bottom-[6.3rem] left-0 w-full sm:-left-8 sm:w-[calc(100%+40rem)] h-px bg-black/20"></div>
                                <p className="font-normal w-full max-w-md text-black text-lg md:text-2xl leading-tight normal-case md:uppercase">
                                    WHAT OTHERS <br />
                                    HESITATE TO ATTEMPT. <br />
                                    TO SEE WHAT <br />
                                    OTHERS OVERLOOK, <br />
                                    TO DELIVER WHAT <br />
                                    OTHERS CAN'T.
                                </p>
                                <p className="font-extralight w-[400px] text-black text-lg md:text-3xl border-black mt-6">
                                    FLUID BY DESIGN. <br />
                                    RELENTLESS BY INTENT.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 relative flex items-end justify-end">
                        <div className="relative w-full h-[55vh] transform scale-125 origin-bottom-right">
                            <Image
                                src="/homepage/2.png"
                                alt="Classical statue at a creative console"
                                fill
                                className="object-contain object-bottom-right drop-shadow-2xl grayscale-20 contrast-110"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
