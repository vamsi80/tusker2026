import Image from 'next/image';

export default function FourVerticalIs() {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 sm:px-12 md:py-0">
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 w-full h-full items-center">
                    <div className="relative w-full h-full z-2">
                        <Image
                            src="/3.png"
                            alt="Classical statue with futuristic tech nodes"
                            fill
                            className="object-contain object-left transform scale-[1.28] origin-left"
                            priority
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-5 lg:pl-12">
                        <h2 className="flex flex-col text-left font-sans text-4xl font-normal leading-[0.85] tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl transform scale-x-[1.15] origin-left pb-4">
                            <span>FOUR</span>
                            <span>VERTICALS.</span>
                            <span>ONE UNIFIED</span>
                            <span>STORY.</span>
                        </h2>
                        <p className="text-sm sm:text-base font-medium  max-w-2xl leading-[1.3]">
                            At The White Tusker, we don't operate in silos. We build experiences that move seamlessly from space to screen, from technology to emotion, from brand to belief.
                        </p>
                        <div className="space-y-1">
                            <p className="text-sm sm:text-base font-medium  max-w-2xl leading-[1.3]">
                                Our four verticals are not services. They are interlocking forces - each designed to strengthen the other, each rooted in one philosophy:
                            </p>

                            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-black leading-[0.9] uppercase tracking-wide">
                                EVERY BRAND HAS A STORY.<br />
                                OUR JOB IS TO MAKE PEOPLE<br />
                                STEP INTO IT.
                            </p>
                        </div>
                        <p className="text-sm sm:text-base font-medium  max-w-2xl leading-[1.3]">
                            From physical environments to moving images, from intelligent technology to brand identity, we design ecosystems where architecture speaks, films persuade, technology engages, and brands resonate.
                        </p>
                        <p className="text-sm sm:text-base font-medium max-w-2xl leading-[1.3]">
                            Together, these four verticals allow us to deliver end-to-end storytelling, from concept to execution, from blueprint to emotion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
