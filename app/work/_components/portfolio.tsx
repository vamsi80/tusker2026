'use client';

import { projectsData } from '../data';
import { Outfit } from 'next/font/google';
import Image from 'next/image';

const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300'] });

interface PortfolioProps {
    service?: string;
}

export default function Portfolio({ service }: PortfolioProps) {
    const filteredProjects = service ? projectsData[service] || [] : [];

    if (!filteredProjects || filteredProjects.length === 0) return null;

    return (
        <div className="w-full flex flex-col gap-4 pt-10 z-1">
            {filteredProjects.map((project) => {
                const isStackedLayout = project.galleryImages?.length === 0;
                const hasMainImage = !!project.mainImage;

                return (
                    <div key={project.id} className="flex flex-col gap-4 z-1 bg-[#EDECFA] p-4">
                        {isStackedLayout ? (
                            // --- STACKED LAYOUT (Single Image or Text Only) ---
                            <div className="flex flex-col gap-4 text-[#000000]">
                                {/* Top: Text Content */}
                                <ProjectTextContent
                                    project={project}
                                    className={`${hasMainImage ? 'w-full lg:w-3/4' : 'w-full lg:w-[70%]'}`}
                                />

                                {/* Bottom: Main Image (Full width) */}
                                {hasMainImage && (
                                    <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
                                        <Image
                                            src={project.mainImage!}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1000px) 100vw, 1000px"
                                            quality={100}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            // --- STANDARD LAYOUT (Split + Gallery) ---
                            <>
                                {/* Top Section: Info + Main Image */}
                                {hasMainImage ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
                                        {/* Text Content */}
                                        <ProjectTextContent project={project} className="lg:col-span-1" />

                                        <div className="relative lg:col-span-2 w-full h-[300px] sm:h-[400px] overflow-hidden">
                                            <Image
                                                src={project.mainImage!}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700"
                                                sizes="(max-width: 1000px) 100vw, 1000px"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <ProjectTextContent project={project} className="w-full lg:w-[70%]" />
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-4 ">
                                    {project.galleryImages?.map((img, idx) => {
                                        const isSingleGalleryImage = project.galleryImages?.length === 1;
                                        const isTwoImages = project.galleryImages?.length === 2;

                                        // Default height for gallery images
                                        let className = "relative w-full overflow-hidden h-[200px] sm:h-[400px]";
                                        let imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

                                        if (isSingleGalleryImage) {
                                            // Single image without main image: spans full width (3 cols) and taller height
                                            className = "relative w-full overflow-hidden h-[300px] sm:h-[400px] sm:col-span-3";
                                            imageSizes = "(max-width: 1000px) 100vw, 1000px";
                                        } else if (isTwoImages && idx === 1) {
                                            className += " sm:col-span-2";
                                            imageSizes = "(max-width: 1000px) 100vw, 1000px";
                                        } else {
                                            className += " sm:col-span-1";
                                        }

                                        return (
                                            <div key={idx} className={className}>
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} gallery ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes={imageSizes}
                                                    quality={100}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function ProjectTextContent({ project, className }: { project: any; className?: string }) {
    return (
        <div className={`flex flex-col space-y-4 ${className || ''}`}>
            <div className="space-y-3">
                <p className={`${outfit.className} text-4xl sm:text-2xl md:text-[32px] lg:text-[2.5rem] xl:text-[2.9rem] font-extralight tracking-tight scale-x-110 origin-left text-black max-w-[90%] leading-none`}>
                    {project.title}
                </p>
                <h2 className="text-md font-bold tracking-wide text-black">
                    {project.category}
                </h2>
            </div>
            <div className="text-sm leading-[1.2] text-left opacity-90 space-y-4">
                {Array.isArray(project.description) ? (
                    project.description.map((desc: string, index: number) => (
                        <p key={index}>{desc}</p>
                    ))
                ) : (
                    <p>{project.description}</p>
                )}
            </div>

            {project.videoLink && (
                <div className="pt-4">
                    <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-neutral-800 h-9 px-6 hover:scale-105"
                    >
                        {project.buttonLabel || 'Watch Video'}
                    </a>
                </div>
            )}
        </div>
    );
}
