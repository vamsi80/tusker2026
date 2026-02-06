'use client';

import { projects } from '../data';

interface PortfolioProps {
    service?: string;
}

export default function Portfolio({ service }: PortfolioProps) {
    const filteredProjects = service
        ? projects.filter(project => project.service === service)
        : projects;

    if (filteredProjects.length === 0) return null;

    return (
        <div className="w-full flex flex-col gap-24 pt-10 pb-24">
            {filteredProjects.map((project, index) => (
                <div key={project.id} className="flex flex-col gap-8">
                    {/* Top Section: Info + Main Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
                        {/* Text Content */}
                        <div className="lg:col-span-1 flex flex-col space-y-6">
                            <div className="space-y-2">
                                <p className="text-4xl sm:text-5xl md:text-5xl font-light tracking-tight text-black">
                                    {project.title}
                                </p>
                                <h2 className="text-md font-bold uppercase tracking-wide text-black">
                                    {project.category}
                                </h2>
                            </div>

                            <p className="text-base text-md leading-[1.2] text-gray-800 text-left">
                                {project.description}
                            </p>
                        </div>

                        <div className="lg:col-span-2 w-full h-[300px] sm:h-[400px] lg:h-[400px] overflow-hidden">
                            <img
                                src={project.mainImage}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 "
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
                        {project.galleryImages.map((img, idx) => {
                            const isTwoImages = project.galleryImages.length === 2;
                            let containerClasses = "w-full overflow-hidden";

                            if (isTwoImages) {
                                containerClasses += " h-[300px] lg:h-[400px]";
                                if (idx === 0) {
                                    containerClasses += " sm:col-span-1";
                                } else {
                                    containerClasses += " sm:col-span-2";
                                }
                            } else {
                                containerClasses += " aspect-square";
                            }

                            return (
                                <div key={idx} className={containerClasses}>
                                    <img
                                        src={img}
                                        alt={`${project.title} gallery ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
