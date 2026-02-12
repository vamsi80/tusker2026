import Image from 'next/image';

export default function ExistToCreateSection() {
    return (
        <section className="relative flex h-auto w-full flex-col justify-center overflow-hidden">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full relative z-2">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85] px-4 sm:px-0">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[7rem] tracking-tighter text-black transform scale-x-110 origin-left inline-block">
                            EXIST TO CREATE
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12 w-full max-w-7xl mx-auto z-10 sm:z-20 px-4 sm:px-0">
                    <div className="col-span-1 w-full pt-2 tracking-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-8 pl-0 sm:pl-2">
                            <div className="relative pt-3 sm:pt-4 md:pt-6 text-black leading-none xl:leading-none">
                                <div className="absolute top-0 right-0 w-px h-[70vh] md:h-[50vh] lg:h-full bg-black/20"></div>
                                <div className="absolute top-0 left-0 w-full h-px bg-black/20 hidden"></div>
                                <div className="relative text-xs xl:xl:text-base z-30 space-y-2 sm:space-y-3 md:space-y-4.5 pr-2 leading-none">
                                    <p>
                                        We don't follow briefs.<br /> We interrogate them.
                                    </p>
                                    <p>
                                        We don't design outputs.<br /> We engineer experiences.
                                    </p>
                                    <p>
                                        We believe space is a language.<br /> Technology is a tool.<br />
                                        Story is the weapon.
                                    </p>
                                    <p>
                                        We reject silos. <br />
                                        We dissolve categories.<br />
                                        Architecture, film, digital, brand
                                        to us, they are one fluid system.
                                    </p>
                                    <p>
                                        We don't decorate environments.<br />
                                        We activate them.
                                    </p>
                                    <p>
                                        We don't chase trends.<br />
                                        We build work that outlives them.
                                    </p>
                                    <p>
                                        Every project must move people
                                        emotionally, intellectually, instinctively.<br />
                                        If it doesn't, it doesn't leave our studio.
                                    </p>
                                </div>
                            </div>
                            <div className="relative pb-4 sm:pb-6 hidden lg:block">
                                <div className="absolute bottom-16 sm:bottom-20 md:bottom-[6.3rem] left-0 w-full sm:-left-8 sm:w-[calc(100%+40rem)] h-px bg-black/20 hidden sm:block"></div>
                                <p className="w-full max-w-md text-black text-sm md:text-lg xl:text-xl leading-none normal-case md:uppercase">
                                    WHAT OTHERS <br />
                                    HESITATE TO ATTEMPT. <br />
                                    TO SEE WHAT <br />
                                    OTHERS OVERLOOK, <br />
                                    TO DELIVER WHAT <br />
                                    OTHERS CAN'T.
                                </p>
                                <p className="w-full max-w-[400px] text-black text-sm md:text-xl xl:text-3xl border-black mt-3 sm:mt-4 md:mt-6 leading-none">
                                    FLUID BY DESIGN. <br />
                                    RELENTLESS BY INTENT.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 relative flex flex-col justify-between h-full">
                        {/* Mobile Only: Show the "What Others..." text block here on the right side for mobile layout */}
                        <div className="block lg:hidden relative z-20 pb-2 pt-3">
                            <div className="absolute top-0 left-0 w-full h-px bg-black/20 hidden"></div>
                            <p className="w-full text-black text-sm leading-none uppercase mt-2">
                                WHAT OTHERS <br />
                                HESITATE TO ATTEMPT. <br />
                                TO SEE WHAT <br />
                                OTHERS OVERLOOK, <br />
                                TO DELIVER WHAT <br />
                                OTHERS CAN'T.
                            </p>

                        </div>

                        <div className="mt-auto">
                            <p className="font-normal w-full text-black text-sm border-black mb-8 relative z-30 leading-none block lg:hidden">
                                FLUID BY DESIGN. <br />
                                RELENTLESS BY INTENT.
                            </p>
                            <div className="relative w-full h-[25vh] sm:h-[55vh] transform scale-125 origin-bottom-right sm:z-10">
                                <Image
                                    src="/homepage/2.png"
                                    alt="Classical statue at a creative console"
                                    fill
                                    className="object-contain object-bottom-right drop-shadow-2xl grayscale-20 contrast-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
