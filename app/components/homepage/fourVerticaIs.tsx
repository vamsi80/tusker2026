import Image from 'next/image';

export default function FourVerticalIs() {
    return (
        <section className="relative flex h-auto w-full flex-col justify-center overflow-hidden md:py-0 px-4 sm:px-0">
            <div className="relative z-10 mx-auto flex h-full w-full flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 w-full h-full items-center">
                    <div className="relative w-full h-[40vh] lg:h-full z-2 min-h-[300px] mt-4 lg:mt-0 order-2 lg:order-1">
                        <Image
                            src="/homepage/3.png"
                            alt="Classical statue with futuristic tech nodes"
                            fill
                            className="object-contain object-center lg:object-left transform scale-[1.28] origin-center lg:origin-left"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            priority
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-5 lg:pl-12 order-1 lg:order-2">
                        <h2 className="flex flex-col text-left font-sans text-4xl font-normal tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.5rem] transform scale-x-[1.15] origin-left pb-2 sm:pb-3 lg:pb-4">
                            <span>FOUR</span>
                            <span>VERTICALS.</span>
                            <span>ONE UNIFIED</span>
                            <span>STORY.</span>
                        </h2>
                        <p className="text-xs xl:text-base font-normal  max-w-2xl leading-[1.1]">
                            At The White Tusker, we don't operate in silos. We build experiences that move seamlessly from space to screen, from technology to emotion, from brand to belief.
                        </p>
                        <div className="space-y-2 xl:space-y-0">
                            <p className="text-xs xl:text-base font-normal  max-w-2xl leading-[1.1]">
                                Our four verticals are not services. They are interlocking forces - each designed to strengthen the other, each rooted in one philosophy:
                            </p>

                            <p className="text-sm md:text-xl xl:text-3xl text-black uppercase leading-none">
                                EVERY BRAND HAS A STORY.<br />
                                OUR JOB IS TO MAKE PEOPLE<br />
                                STEP INTO IT.
                            </p>
                        </div>
                        <p className="font-normal text-xs xl:text-base max-w-2xl leading-[1.1]">
                            From physical environments to moving images, from intelligent technology to brand identity, we design ecosystems where architecture speaks, films persuade, technology engages, and brands resonate.
                        </p>
                        <p className="font-medium text-xs xl:text-base max-w-2xl leading-[1.1]">
                            Together, these four verticals allow us to deliver end-to-end storytelling, from concept to execution, from blueprint to emotion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
