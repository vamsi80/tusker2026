const LOGOS = [
    { name: 'Boeing', url: '/clints/Boeing.svg' },
    { name: 'Bosch', url: '/clints/Bosch.svg' },
    { name: 'Cab', url: '/clints/Cab.svg' },
    { name: 'Collins', url: '/clints/Collins.svg' },
    { name: 'Volvo', url: '/clints/volvo.svg' },
    { name: 'Tata Steel', url: '/clints/TataSteel.svg' },
    { name: 'DIAGEO', url: '/clints/DIAGEO.svg' },
    { name: 'Herbalife', url: '/clints/Herbalife.svg' },
    { name: 'ENEC', url: '/clints/ENEC.svg' },
    { name: 'Embassy', url: '/clints/Embassy.svg' },
    { name: 'Gig', url: '/clints/Gig.svg' },
    { name: 'PETRONAS', url: '/clints/PETRONAS.svg' },
    { name: 'Zebra Robotics', url: '/clints/Zebra Robotics.svg' },
    { name: 'SAUDI', url: '/clints/SAUDHII.svg' },
    { name: 'Showtime', url: '/clints/Showtime.svg' },
    { name: 'Tech Mahindra', url: '/clints/Tech mahindra.svg' },
    { name: 'Thinkpro', url: '/clints/Thinkpro.svg' },
    { name: 'Infosys', url: '/clints/infosys.svg' },
    { name: 'Percept', url: '/clints/percept.svg' },
    { name: 'Phase 1', url: '/clints/phase1.svg' },
    { name: 'The Barkery', url: '/clints/The Barkery.svg' },
    { name: 'BIAL', url: '/clints/BIAL.svg' },
];

export default function ClientLogos() {
    return (
        <section className="relative w-full overflow-hidden space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            <div className="flex flex-col items-center justify-center space-y-2 px-0 text-center">
                <h2 className="font-sans text-xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
                    OUR VALUABLE PARTNERS
                </h2>
                <p className="text-[10px] sm:text-xs lg:text-sm font-medium tracking-widest text-gray-500 uppercase max-w-[90%] sm:max-w-full">
                    “Where space, story, and technology converge to express a brand in motion.”
                </p>
            </div>

            <div className="group flex gap-16 w-full overflow-hidden select-none pointer-events-auto">
                <div className="flex shrink-0 animate-marquee items-center justify-start gap-16 group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {LOGOS.map((logo, index) => (
                        <div key={index} className="group/item relative flex flex-col items-center justify-center gap-4 cursor-pointer">
                            <div className="relative h-6 sm:h-8 lg:h-12 w-auto flex items-center justify-center transition-all duration-300 group-hover/item:scale-110">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain transition-all duration-300"
                                />
                                {/* Hover Original Logo (Overlay that fades in) */}
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-start gap-16 group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {LOGOS.map((logo, index) => (
                        <div key={`dup-${index}`} className="group/item relative flex flex-col items-center justify-center gap-4 cursor-pointer">
                            <div className="relative h-6 sm:h-8 lg:h-12 w-auto flex items-center justify-center transition-all duration-300 group-hover/item:scale-110">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain transition-all duration-300"
                                />
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-full w-auto object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
