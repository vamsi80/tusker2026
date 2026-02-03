import Image from 'next/image';

export default function StoryEngineSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 sm:px-12 md:py-0">



            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col md:flex-row md:items-center">

                {/* Left Side: Statue Image */}
                <div className="relative flex-1 md:h-screen flex items-end justify-start">
                    <div className="relative w-full h-[60vh] md:h-[80vh] md:w-[90%] lg:w-full max-w-2xl transform translate-x-[-10%] md:translate-x-0 transition-transform hover:scale-[1.02] duration-700 ease-out">
                        <Image
                            src="/statue-laptop.png"
                            alt="Classical statue using a laptop"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl grayscale-[20%] contrast-110"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-1 flex-col items-start justify-center pt-10 md:pt-0 pl-0 md:pl-12 lg:pl-24">

                    <h2 className="font-sans text-4xl font-medium leading-[0.9] tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl mb-12">
                        <span className="block text-xl sm:text-2xl font-normal tracking-wide text-black mb-2 sm:mb-4">
                            WE ARE NOT A SERVICE COMPANY, WE ARE A
                        </span>
                        STORY-ENGINE.
                    </h2>

                    <div className="flex flex-col space-y-8 max-w-xl text-xs sm:text-sm font-medium tracking-wide text-gray-800 leading-relaxed uppercase">
                        <p>
                            We design experiences that live beyond screens and walls. <br />
                            Experiences people walk into, interact with, and remember.
                        </p>
                        <p>
                            Operating seamlessly across architecture, film, technology, <br />
                            and branding, we connect the physical and the digital into <br />
                            one fluid narrative.
                        </p>

                        <div className="py-4 border-l-2 border-purple-500/50 pl-6 my-4">
                            <p className="font-semibold text-black tracking-widest text-sm mb-1">EVERY SPACE HAS INTENT.</p>
                            <p className="font-semibold text-black tracking-widest text-sm mb-1">EVERY FILM HAS PURPOSE.</p>
                            <p className="font-semibold text-black tracking-widest text-sm">EVERY TECHNOLOGY HAS A STORY TO TELL.</p>
                        </div>

                        <p>
                            We don't believe in isolated deliverables. <br />
                            We believe in systems that breathe, adapt, and evolve. <br />
                            From carpet to content, from concept to completion.
                        </p>

                        <p className="font-bold text-black text-sm sm:text-base mt-4">
                            WE BUILD WORLDS <br />
                            THAT MOVE PEOPLE EMOTIONALLY, <br />
                            INTELLECTUALLY, AND EXPERIENTIALLY.
                        </p>
                    </div>
                </div>

            </div>

            {/* Footer Elements Duplicate for consistency if needed, or rely on sticky/fixed elements */}

        </section>
    );
}
