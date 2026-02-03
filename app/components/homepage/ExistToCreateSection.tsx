import Image from 'next/image';

export default function ExistToCreateSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 sm:px-12 md:py-0">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col-reverse md:flex-row md:items-center">
                <div className="flex flex-1 flex-col items-start justify-center pt-10 md:pt-0 pr-0 md:pr-12 lg:pr-24">
                    <div className="flex flex-col md:flex-row gap-12 w-full">
                        <div className="flex-1 space-y-12">
                            <h2 className="font-sans text-5xl font-medium leading-[0.85] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl">
                                EXIST TO CREATE
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-medium tracking-wide text-gray-600 leading-relaxed uppercase">
                                <div className="space-y-6">
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
                                </div>
                                <div className="space-y-6">
                                    <p className="font-bold text-black text-lg md:text-xl leading-tight normal-case md:uppercase">
                                        WHAT OTHERS <br />
                                        HESITATE TO ATTEMPT, <br />
                                        TO SEE WHAT <br />
                                        OTHERS OVERLOOK, <br />
                                        TO DELIVER WHAT <br />
                                        OTHERS CAN'T.
                                    </p>
                                    <p className="font-bold text-black text-lg md:text-xl border-l-[3px] border-black pl-4">
                                        FLUID BY DESIGN. <br />
                                        RELENTLESS BY INTENT.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Statue Image */}
                <div className="relative flex-1 md:h-screen flex items-end justify-end">
                    <div className="relative w-full h-[50vh] md:h-[70vh] md:w-[90%] lg:w-full max-w-2xl transform translate-x-[5%] md:translate-x-0">
                        <Image
                            src="/statue-console.png"
                            alt="Classical statue at a creative console"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl grayscale-[20%] contrast-110"
                            priority
                        />
                    </div>
                </div>

            </div>



        </section>
    );
}
