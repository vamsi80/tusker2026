'use client';

export default function TeamSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            <div className="text-center space-y-2 px-4">
                <h2 className="font-sans text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl uppercase">
                    Our Team
                </h2>
                <p className="text-[10px] sm:text-xs lg:text-sm font-medium tracking-widest text-black uppercase max-w-[90%] sm:max-w-full">
                    “Where thinking, craft, and technology move as one.”
                </p>
            </div>

            <div className="w-full">
                <img
                    src="/teams.jpg"
                    alt="Our Team"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
