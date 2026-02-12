'use client';

import { useState, useEffect, useRef } from 'react';
import { services } from '../../data';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import WaterButton from '../../components/ui/WaterButton';

const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300'] });

interface PortfolioProps {
    service?: string;
}

export default function Portfolio({ service }: PortfolioProps) {
    const filteredProjects = service ? services.find(s => s.title === service)?.projects || [] : [];
    const [visibleCount, setVisibleCount] = useState(2);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + 2, filteredProjects.length));
                }
            },
            { threshold: 0.1 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [filteredProjects.length]);

    if (!filteredProjects || filteredProjects.length === 0) return null;

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    return (
        <div className="w-full flex flex-col gap-4 pt-10 z-1">
            {displayedProjects.map((project, index) => (
                <div key={project.id || index} className="flex flex-col gap-4 z-1 bg-[#EDECFA] p-4">
                    <ImageWithTextSection project={project} />
                    <GridSection project={project} />
                </div>
            ))}
            {visibleCount < filteredProjects.length && (
                <div ref={observerRef} className="h-20 w-full flex items-center justify-center">
                    <span className="text-gray-400">Loading more projects...</span>
                </div>
            )}
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
            {hasMainImage ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
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

    if (isStackedLayout || !project.galleryImages || project.galleryImages.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-4 ">
            {project.galleryImages?.map((img: string, idx: number) => {
                const isSingleGalleryImage = project.galleryImages?.length === 1;
                const isTwoImages = project.galleryImages?.length === 2;

                let className = "relative w-full overflow-hidden h-[300px] md:h-[200px] lg:h-[300px] xl:h-[400px]";
                let imageSizes = "(max-width: 1000px) 100vw, 1000px";

                if (isSingleGalleryImage) {
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
        <div className={`flex flex-col space-y-2 xl:space-y-4 ${className || ''}`}>
            <div className="space-y-3">
                <p className={`${outfit.className} text-3xl sm:text-2xl md:text-[32px] lg:text-[2.5rem] xl:text-[2.65rem] font-extralight tracking-tight scale-x-110 origin-left text-black max-w-[90%] leading-none`}>
                    {project.title}
                </p>
                <h2 className="text-md font-bold tracking-wide text-black">
                    {project.category}
                </h2>
            </div>
            <div className="text-xs xl:text-sm leading-[1.2] text-left opacity-90 space-y-4">
                {Array.isArray(project.description) ? (
                    project.description.map((desc: string, index: number) => (
                        <p key={index}>{desc}</p>
                    ))
                ) : (
                    <p>{project.description}</p>
                )}
            </div>

            {project.videoLink && (
                <div className="pt-0">
                    <WaterButton
                        href={project.videoLink}
                        label={project.buttonLabel || 'Watch Video'}
                    />
                </div>
            )}
        </div>
    );
}
