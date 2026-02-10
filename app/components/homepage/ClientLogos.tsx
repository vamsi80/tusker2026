import React from 'react';
import Image from 'next/image';

const LOGOS = [
    { name: 'BIAL', url: '/clints/BIAL.svg' },
    { name: 'Boeing', url: '/clints/Boeing.svg' },
    { name: 'Bosch', url: '/clints/Bosch.svg' },
    // { name: 'Cab', url: '/clints/Cab.svg' }, // Might be generic
    { name: 'Collins', url: '/clints/Collins.svg' },
    { name: 'DIAGEO', url: '/clints/DIAGEO.svg' },
    { name: 'ENEC', url: '/clints/ENEC.svg' },
    { name: 'Embassy', url: '/clints/Embassy.svg' },
    { name: 'Gig', url: '/clints/Gig.svg' },
    { name: 'Herbalife', url: '/clints/Herbalife.svg' },
    { name: 'Karnataka Tourism', url: '/clints/Karnata tourism_ImgID1.png' },
    { name: 'PETRONAS', url: '/clints/PETRONAS.svg' },
    { name: 'SAUDI', url: '/clints/SAUDHII.svg' },
    { name: 'Showtime', url: '/clints/Showtime.svg' },
    { name: 'Tata Steel', url: '/clints/TataSteel.svg' },
    { name: 'Tech Mahindra', url: '/clints/Tech mahindra.svg' },
    { name: 'Thinkpro', url: '/clints/Thinkpro.svg' },
    { name: 'Zebra Robotics', url: '/clints/Zebra Robotics.svg' },
    { name: 'Infosys', url: '/clints/infosys.svg' },
    { name: 'Percept', url: '/clints/percept.svg' },
    { name: 'Phase 1', url: '/clints/phase1.svg' },
    { name: 'Volvo', url: '/clints/volvo.svg' },
    { name: 'The Barkery', url: '/clints/The Barkery_ImgID1.png' },
];

export default function ClientLogos() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 px-4 text-center">
                <h2 className="font-sans text-4xl font-normal tracking-tight text-black sm:text-5xl">
                    OUR VALUABLE PARTNERS
                </h2>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                    “Where space, story, and technology converge to express a brand in motion.”
                </p>
            </div>

            <div className="group flex w-full overflow-hidden select-none pointer-events-auto">
                <div className="flex shrink-0 animate-marquee items-center justify-start gap-0 group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {LOGOS.map((logo, index) => (
                        <div key={index} className="group/item relative flex flex-col items-center justify-center gap-4 cursor-pointer px-2">
                            <div className="relative h-40 w-80 flex items-center justify-center transition-all duration-300 group-hover/item:scale-110">
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className="object-contain transition-all duration-300 group-hover/item:opacity-0"
                                    style={{
                                        filter: 'invert(13%) sepia(94%) saturate(4694%) hue-rotate(264deg) brightness(88%) contrast(97%)',
                                        opacity: 0.6
                                    }}
                                />
                                {/* Hover Original Logo (Overlay that fades in) */}
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-start gap-0 group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {LOGOS.map((logo, index) => (
                        <div key={`dup-${index}`} className="group/item relative flex flex-col items-center justify-center gap-4 cursor-pointer px-2">
                            <div className="relative h-40 w-80 flex items-center justify-center transition-all duration-300 group-hover/item:scale-110">
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className="object-contain transition-all duration-300 group-hover/item:opacity-0"
                                    style={{
                                        filter: 'invert(13%) sepia(94%) saturate(4694%) hue-rotate(264deg) brightness(88%) contrast(97%)',
                                        opacity: 0.6
                                    }}
                                />
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    fill
                                    className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
