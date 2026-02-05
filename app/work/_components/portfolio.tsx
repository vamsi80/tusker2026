'use client';

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    mainImage: string;
    galleryImages: string[];
}

const projects: Project[] = [
    {
        id: 'collins',
        title: 'Collins Aerospace',
        category: 'Experience Centre',
        description: 'At Collins Aerospace, we designed and delivered a future-ready Experience Center from concept to execution, integrating architecture, storytelling, AR, and touch-driven digital content into one cohesive narrative. The entire space is structured around the user journey at an airport from check-in to boarding allowing visitors to intuitively experience how Collins Aerospace technologies operate at every critical moment of flight. Each zone translates complex aviation systems into immersive, human-centric experiences, showcasing Collins Aerospace’s role in shaping safer, smarter, and more connected journeys across the global aviation ecosystem.',
        mainImage: '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/1/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/1/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/1/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/1/4.jpeg'
        ]
    },
    {
        id: 'collins2',
        title: 'Collins Aerospace',
        category: 'Experience Centre',
        description: 'The space is designed to enhance productivity,collaboration, and identity. Clear spatial logic,supportive design elements, and cohesive brandingcreate an environment that aligns people, process, andpurpose',
        mainImage: '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/4.jpeg'
        ]
    },
    {
        id: 'collins3',
        title: 'Collins Aerospace',
        category: 'Architecture Design',
        description: "The Collins Aerospace Courtyard was conceived and executed as an open-air narrative space celebrating the evolution of aerospace innovation. Designed from concept to completion, the courtyard traces the journey from the Wright Brothers' first flight to the futuristic Airbus Bird of Prey, weaving in key milestones from Collins Aerospace's global and Indian legacy. Sculptural elements, timelines, and spatial storytelling transform the courtyard into a living chronicle where history, innovation, and vision converge offering visitors a reflective yet inspiring pause within the larger campus experience.",
        mainImage: '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/3/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/3/4.jpeg'
        ]
    },
    {
        id: 'collins4',
        title: 'Collins Aerospace',
        category: 'Architecture Design',
        description: "The Collins Aerospace building façade was conceived and executed as a bold architectural narrative of flightitself. Designed from concept to completion, thefaçade visualizes the dynamic path of aircraft takeoffand landing, with the striking red geometryrepresenting the precise curve and angle of ascentand descent. Integrated seamlessly into thearchitecture, a large-format LED wall becomes a livingstoryteller-broadcasting Collins Aerospace's industryinnovations, milestones, and futurevision-transforming the building into an iconic,ever-evolving expression of motion, technology, andaerospace excellence.",
        mainImage: '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/4/1.png',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/2/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/colinsAerospace/4/3.jpeg'
        ]
    },
];

export default function Portfolio() {
    return (
        <div className="w-full flex flex-col gap-24 pt-10">
            {projects.map((project, index) => (
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
                                // Fixed height for perfect alignment on 2-image row
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
