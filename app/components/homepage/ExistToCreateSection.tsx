import Image from 'next/image';

export default function ExistToCreateSection() {
    return (
        <section className="relative flex h-auto w-full flex-col justify-center overflow-hidden">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="w-full relative z-2">
                    <h2 className="flex flex-col items-start justify-start text-black leading-[0.85] px-4 sm:px-0">
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[7rem] tracking-tighter font-medium text-black transform scale-x-110 origin-left inline-block">
                            EXIST TO CREATE
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12 w-full max-w-7xl mx-auto z-10 sm:z-20 px-4 sm:px-0">
                    <div className="col-span-1 w-full pt-2 font-medium tracking-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-8 pl-0 sm:pl-2">
                            <div className="relative pt-3 sm:pt-4 md:pt-6 text-black text-sm xl:text-base leading-[1.2] xl:leading-[1.2]">
                                <div className="absolute top-0 right-0 w-px h-[70vh] md:h-[50vh] lg:h-full bg-black/20"></div>
                                <div className="absolute top-0 left-0 w-full h-px bg-black/20 hidden"></div>
                                <div className="relative z-30 space-y-2 sm:space-y-3 md:space-y-5">
                                    <p className='leading-[1.2]'>
                                        We don't follow briefs. <br />
                                        We interrogate them.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        We don't design outputs. <br />
                                        We engineer experiences.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        We believe space is a language. <br />
                                        Technology is a tool. <br />
                                        Story is the weapon.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        We reject silos. <br />
                                        We dissolve categories. <br />
                                        Architecture, film, digital, brand <br />
                                        to us, they are one fluid system.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        We don't decorate environments. <br />
                                        We activate them.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        We don't chase trends. <br />
                                        We build work that outlives them.
                                    </p>
                                    <p className='leading-[1.2]'>
                                        Every project must move people <br />
                                        emotionally, intellectually, instinctively. <br />
                                        If it doesn't, it doesn't leave our studio.
                                    </p>
                                </div>
                            </div>
                            <div className="relative pb-4 sm:pb-6 hidden lg:block">
                                <div className="absolute bottom-16 sm:bottom-20 md:bottom-[6.3rem] left-0 w-full sm:-left-8 sm:w-[calc(100%+40rem)] h-px bg-black/20 hidden sm:block"></div>
                                <p className="font-normal w-full max-w-md text-black text-sm md:text-lg xl:text-2xl leading-tight normal-case md:uppercase">
                                    WHAT OTHERS <br />
                                    HESITATE TO ATTEMPT. <br />
                                    TO SEE WHAT <br />
                                    OTHERS OVERLOOK, <br />
                                    TO DELIVER WHAT <br />
                                    OTHERS CAN'T.
                                </p>
                                <p className="font-extralight w-full max-w-[400px] text-black text-sm md:text-xl xl:text-3xl border-black mt-3 sm:mt-4 md:mt-6">
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
                            <p className="font-normal w-full text-black text-sm leading-tight uppercase mt-2">
                                WHAT OTHERS <br />
                                HESITATE TO ATTEMPT. <br />
                                TO SEE WHAT <br />
                                OTHERS OVERLOOK, <br />
                                TO DELIVER WHAT <br />
                                OTHERS CAN'T.
                            </p>
                            <p className="font-extralight w-full text-black text-sm border-black mt-2 leading-tight">
                                FLUID BY DESIGN. <br />
                                RELENTLESS BY INTENT.
                            </p>
                        </div>

                        <div className="relative w-full h-[30vh] sm:h-[55vh] transform scale-125 origin-bottom-right mt-auto sm:z-10">
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
