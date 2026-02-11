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
            {filteredProjects.map((project, index) => (
                <div key={project.id || index} className="flex flex-col gap-4 z-1 bg-[#EDECFA] p-4">
                    <ImageWithTextSection project={project} />
                    <GridSection project={project} />
                </div>
            ))}
        </div>
    );
}

function ImageWithTextSection({ project }: { project: any }) {
    const isStackedLayout = project.galleryImages?.length === 0;
    const hasMainImage = !!project.mainImage;

    if (isStackedLayout) {
        // --- STACKED LAYOUT (Single Image or Text Only) ---
        return (
            <div className="flex flex-col gap-4 text-[#000000]">
                {/* Top: Text Content */}
                <ProjectTextContent
                    project={project}
                    className={`${hasMainImage ? 'w-full lg:w-3/4' : 'w-full lg:w-[70%]'}`}
                />

                {/* Bottom: Main Image (Full width) */}
                {hasMainImage && (
                    <div className="relative w-full h-auto sm:h-[400px] overflow-hidden">
                        <img
                            src={project.mainImage!}
                            alt={project.title}
                            className="w-full h-auto sm:h-full sm:object-cover"
                        />
                    </div>
                )}
            </div>
        );
    }

    // --- STANDARD LAYOUT (Split + Gallery - but Gallery is separate now) ---
    // Here we ONLY render the Image + Text part.
    return (
        <>
            {/* Top Section: Info + Main Image */}
            {hasMainImage ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
                    {/* Text Content */}
                    <ProjectTextContent project={project} className="lg:col-span-1" />

                    <div className="relative lg:col-span-2 w-full h-auto sm:h-[400px] overflow-hidden">
                        <img
                            src={project.mainImage!}
                            alt={project.title}
                            className="w-full h-auto sm:h-full sm:object-cover"
                        />
                    </div>
                </div>
            ) : (
                <ProjectTextContent project={project} className="w-full lg:w-[70%]" />
            )}
        </>
    );
}

function GridSection({ project }: { project: any }) {
    const isStackedLayout = project.galleryImages?.length === 0;

    // If stacked layout (no gallery images), return null
    if (isStackedLayout || !project.galleryImages || project.galleryImages.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-4 ">
            {project.galleryImages?.map((img: string, idx: number) => {
                const isSingleGalleryImage = project.galleryImages?.length === 1;
                const isTwoImages = project.galleryImages?.length === 2;

                // Default height for gallery images
                let className = "relative w-full overflow-hidden h-[300px] md:h-[200px] lg:h-[300px] xl:h-[400px]";
                let imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

                if (isSingleGalleryImage) {
                    // Single image: spans full width (3 cols) and 16:9 aspect ratio
                    className = "relative w-full overflow-hidden aspect-video sm:col-span-3";
                    imageSizes = "(max-width: 1000px) 100vw, 1000px";
                } else if (isTwoImages && idx === 1) {
                    className += " sm:col-span-2";
                    imageSizes = "(max-width: 1000px) 100vw, 1000px";
                } else {
                    className += " sm:col-span-1";
                }

                if (isSingleGalleryImage || (isTwoImages && idx === 1)) {
                    const colSpanClass = isSingleGalleryImage ? 'sm:col-span-3' : 'sm:col-span-2';
                    return (
                        <div key={idx} className={`relative w-full overflow-hidden ${colSpanClass} h-auto md:h-[200px] lg:h-[300px] xl:h-[400px]`}>
                            <img
                                src={img}
                                alt={`${project.title} gallery ${idx + 1}`}
                                className="w-full h-auto md:h-full md:object-cover"
                            />
                        </div>
                    );
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
    );
}

function ProjectTextContent({ project, className }: { project: any; className?: string }) {
    return (
        <div className={`flex flex-col space-y-4 ${className || ''}`}>
            <div className="space-y-3">
                <p className={`${outfit.className} text-3xl sm:text-2xl md:text-[32px] lg:text-[2.5rem] xl:text-[2.9rem] font-extralight tracking-tight scale-x-110 origin-left text-black max-w-[90%] leading-none`}>
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
