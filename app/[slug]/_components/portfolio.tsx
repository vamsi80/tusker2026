'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        <div className="w-full flex flex-col gap-6 pt-10 z-1">
            {displayedProjects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} />
            ))}
            {visibleCount < filteredProjects.length && (
                <div ref={observerRef} className="h-20 w-full flex items-center justify-center">
                    <span className="text-gray-400">Loading more projects...</span>
                </div>
            )}
        </div>
    );
}

function ProjectCard({ project }: { project: any }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={cardRef} className="flex flex-col gap-4 z-1 bg-[#EDECFA] p-4 opacity-0 translate-y-[100px]">
            <ImageWithTextSection project={project} />
            <GridSection project={project} />
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
                    <div className="relative w-full aspect-video sm:aspect-auto sm:h-[400px] overflow-hidden">
                        <ImageWithLoader
                            src={project.mainImage!}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 100vw"
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

                    <div className="relative lg:col-span-2 w-full aspect-video sm:aspect-auto sm:h-[400px] overflow-hidden">
                        <ImageWithLoader
                            src={project.mainImage!}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 66vw"
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
            {project.galleryImages?.map((img: string, idx: number) => (
                <GalleryItem key={idx} img={img} idx={idx} project={project} />
            ))}
        </div>
    );
}

function GalleryItem({ img, idx, project }: { img: string; idx: number; project: any }) {
    const isSingleGalleryImage = project.galleryImages?.length === 1;
    const isTwoImages = project.galleryImages?.length === 2;
    const [aspectRatio, setAspectRatio] = useState<number | undefined>(undefined);

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

    if (isSingleGalleryImage) {
        const style = aspectRatio ? { aspectRatio: aspectRatio } : {};
        return (
            <div
                key={idx}
                className="relative w-full overflow-hidden sm:col-span-3"
                style={style}
            >
                <ImageWithLoader
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    onLoad={(e: any) => {
                        setAspectRatio(e.target.naturalWidth / e.target.naturalHeight);
                    }}
                />
            </div>
        );
    }

    if (isTwoImages && idx === 1) {
        return (
            <div
                key={idx}
                className="relative w-full overflow-hidden sm:col-span-2 aspect-video md:aspect-auto md:h-[200px] lg:h-[300px] xl:h-[400px]"
            >
                <ImageWithLoader
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                />
            </div>
        );
    }

    return (
        <div key={idx} className={className}>
            <ImageWithLoader
                src={img}
                alt={`${project.title} gallery ${idx + 1}`}
                fill
                className="object-cover"
                sizes={imageSizes}
                quality={100}
            />
        </div>
    );
}

function ProjectTextContent({ project, className }: { project: any; className?: string }) {
    return (
        <div className={`flex flex-col space-y-2 xl:space-y-4 ${className || ''}`}>
            <div className="space-y-3">
                <p className={`${outfit.className} text-3xl sm:text-2xl md:text-[32px] lg:text-[2.5rem] xl:text-[2.5rem] font-extralight tracking-tight scale-x-110 origin-left text-black max-w-[90%] leading-none`}>
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

function ImageWithLoader(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 bg-[#E0E0E0] animate-pulse z-10 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
            )}
            <Image
                {...props}
                className={`${props.className || ''} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={(e) => {
                    setIsLoading(false);
                    if (props.onLoad) props.onLoad(e);
                }}
            />
        </>
    );
}
