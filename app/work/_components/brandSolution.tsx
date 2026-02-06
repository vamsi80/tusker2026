'use client';

export default function BrandSolution() {
    return (
        <div className="w-full flex flex-col py-24 text-black overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">

                <div className="flex flex-col space-y-8 justify-start order-2 lg:order-1 lg:col-span-2">
                    <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-medium tracking-tighter leading-[0.85] text-black scale-x-110 origin-left">
                        BRAND SOLUTIONS
                    </h2>

                    <div className="space-y-4">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[0.9]">
                            We don't decorate brands. <br />
                            We define them.
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-gray-800 leading-[1.2] max-w-xl text-justify">
                        From logo creation and identity systems to brand books and spatial branding we decode the soul of the brand and translate it into visuals, environments, and experiences that feel unmistakably alive.
                    </p>

                    <div className="space-y-2 pt-4">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[0.9] tracking-tight">
                            Consistency is not enough. <br />
                            Resonance is the goal.
                        </p>
                    </div>
                </div>

                <div className="relative w-full flex justify-start order-1 lg:order-2 lg:col-span-1">
                    <img
                        src="/Branding.png"
                        alt="Brand Solutions - Bust with Digital Face"
                        className="w-auto h-auto lg:h-[600px] max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
