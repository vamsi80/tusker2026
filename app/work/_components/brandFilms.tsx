'use client';

export default function BrandFilms() {
    return (
        <div className="w-full flex flex-col py-24 bg-white text-black overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="relative w-full flex justify-start lg:col-span-2">
                    <img
                        src="/film.png"
                        alt="Corporate and Brand Films - TV Head Statue"
                        className="w-auto h-auto lg:h-[600px] object-contain object-top-left"
                    />
                </div>

                <div className="flex flex-col space-y-6 justify-start lg:pl-20 lg:col-span-3">
                    <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left -ml-50">
                        CORPORATE & <br />
                        BRAND FILMS
                    </h2>

                    <div className="space-y-4">
                        <p className="text-3xl sm:text-4xl lg:text-[3.5rem] font-medium text-black leading-none tracking-tight">
                            We don't make videos. We <br />
                            direct perception.
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-black leading-[1.2] max-w-2xl text-justify">
                        From storyboarding to on-ground shoots, from corporate films to brand narratives and explainer content we handle everything under one roof. <br />
                        Every frame is intentional. Every second serves the brand's larger story.
                    </p>

                    <p className="text-xl font-medium text-black">
                        This is cinema with clarity. Storytelling with strategy.
                    </p>

                    <div className="-space-y-1 text-[#666195]">
                        <p className="text-4xl sm:text-5xl lg:text-[2.6rem] tracking-tighter font-medium leading-none">
                            WE TURN BRANDS INTO
                        </p>
                        <p className="text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tighter font-medium leading-none">
                            MOVING STORIES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
