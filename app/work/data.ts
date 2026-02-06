export interface Project {
    id: string;
    title: string;
    category: string;
    service: string;
    description: string;
    mainImage: string;
    galleryImages: string[];
}

export const projects: Project[] = [
    {
        id: 'collins',
        title: 'Collins Aerospace',
        category: 'Experience Centre',
        service: 'ARCHITECTURE & INTERIOR SPACES',
        description: 'At Collins Aerospace, we designed and delivered a future-ready Experience Center from concept to execution, integrating architecture, storytelling, AR, and touch-driven digital content into one cohesive narrative. The entire space is structured around the user journey at an airport from check-in to boarding allowing visitors to intuitively experience how Collins Aerospace technologies operate at every critical moment of flight. Each zone translates complex aviation systems into immersive, human-centric experiences, showcasing Collins Aerospace’s role in shaping safer, smarter, and more connected journeys across the global aviation ecosystem.',
        mainImage: '/Portfolio_Images/INTERIOR SPACES/north_gate/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/north_gate/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/north_gate/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/north_gate/4.jpeg'
        ]
    },
    {
        id: 'collins2',
        title: 'Collins Aerospace',
        category: 'Experience Centre',
        service: 'ARCHITECTURE & INTERIOR SPACES',
        description: 'The space is designed to enhance productivity, collaboration, and identity. Clear spatial logic, supportive design elements, and cohesive branding create an environment that aligns people, process, and purpose',
        mainImage: '/Portfolio_Images/INTERIOR SPACES/north_gate_1/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/north_gate_1/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/north_gate_1/4.jpeg'
        ]
    },
    {
        id: 'collins3',
        title: 'Collins Aerospace',
        category: 'Architecture Design',
        service: 'ARCHITECTURE & INTERIOR SPACES',
        description: "The Collins Aerospace Courtyard was conceived and executed as an open-air narrative space celebrating the evolution of aerospace innovation. Designed from concept to completion, the courtyard traces the journey from the Wright Brothers' first flight to the futuristic Airbus Bird of Prey, weaving in key milestones from Collins Aerospace's global and Indian legacy. Sculptural elements, timelines, and spatial storytelling transform the courtyard into a living chronicle where history, innovation, and vision converge offering visitors a reflective yet inspiring pause within the larger campus experience.",
        mainImage: '/Portfolio_Images/INTERIOR SPACES/north_gate_1/1.jpeg',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/courtYard/3.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/courtYard/4.jpeg'
        ]
    },
    {
        id: 'collins4',
        title: 'Collins Aerospace',
        category: 'Architecture Design',
        service: 'ARCHITECTURE & INTERIOR SPACES',
        description: "The Collins Aerospace building façade was conceived and executed as a bold architectural narrative of flight itself. Designed from concept to completion, the façade visualizes the dynamic path of aircraft takeoff and landing, with the striking red geometry representing the precise curve and angle of ascent and descent. Integrated seamlessly into the architecture, a large-format LED wall becomes a living storyteller-broadcasting Collins Aerospace's industry innovations, milestones, and future vision-transforming the building into an iconic, ever-evolving expression of motion, technology, and aerospace excellence.",
        mainImage: '/Portfolio_Images/INTERIOR SPACES/facade/1.png',
        galleryImages: [
            '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
            '/Portfolio_Images/INTERIOR SPACES/facade/3.jpeg'
        ]
    },
];
