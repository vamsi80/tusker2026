export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    mainImage: string;
    galleryImages: string[];
}

export const projectsData: Record<string, Project[]> = {
    "ARCHITECTURE & INTERIOR SPACES": [
        {
            id: 'collins',
            title: 'Collins Aerospace',
            category: 'Experience Centre',
            description: 'At Collins Aerospace, we designed and delivered a future-ready Experience Center from concept to execution, integrating architecture, storytelling, AR, and touch-driven digital content into one cohesive narrative. The entire space is structured around the user journey at an airport from check-in to boarding allowing visitors to intuitively experience how Collins Aerospace technologies operate at every critical moment of flight. Each zone translates complex aviation systems into immersive, human-centric experiences, showcasing Collins Aerospace’s role in shaping safer, smarter, and more connected journeys across the global aviation ecosystem.',
            mainImage: "/Portfolio_Images/INTERIOR SPACES/north_gate/1.jpeg",
            galleryImages: [
                '/Portfolio_Images/INTERIOR SPACES/north_gate/2.jpeg',
                '/Portfolio_Images/INTERIOR SPACES/north_gate/3.jpeg',
                '/Portfolio_Images/INTERIOR SPACES/north_gate/4.jpeg'
            ]
        },
        // {
        //     id: 'collins2',
        //     title: 'Collins Aerospace',
        //     category: 'Experience Centre',
        //     description: 'The space is designed to enhance productivity, collaboration, and identity. Clear spatial logic, supportive design elements, and cohesive branding create an environment that aligns people, process, and purpose',
        //     mainImage: '/Portfolio_Images/INTERIOR SPACES/north_gate_1/1.jpeg',
        //     galleryImages: [
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/3.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/4.jpeg'
        //     ]
        // },
        // {
        //     id: 'collins3',
        //     title: 'Collins Aerospace',
        //     category: 'Architecture Design',
        //     description: "The Collins Aerospace Courtyard was conceived and executed as an open-air narrative space celebrating the evolution of aerospace innovation. Designed from concept to completion, the courtyard traces the journey from the Wright Brothers' first flight to the futuristic Airbus Bird of Prey, weaving in key milestones from Collins Aerospace's global and Indian legacy. Sculptural elements, timelines, and spatial storytelling transform the courtyard into a living chronicle where history, innovation, and vision converge offering visitors a reflective yet inspiring pause within the larger campus experience.",
        //     mainImage: '/Portfolio_Images/INTERIOR SPACES/north_gate_1/1.jpeg',
        //     galleryImages: [
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/courtYard/3.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/courtYard/4.jpeg'
        //     ]
        // },
        // {
        //     id: 'collins4',
        //     title: 'Collins Aerospace',
        //     category: 'Architecture Design',
        //     description: "The Collins Aerospace building façade was conceived and executed as a bold architectural narrative of flight itself. Designed from concept to completion, the façade visualizes the dynamic path of aircraft takeoff and landing, with the striking red geometry representing the precise curve and angle of ascent and descent. Integrated seamlessly into the architecture, a large-format LED wall becomes a living storyteller-broadcasting Collins Aerospace's industry innovations, milestones, and future vision-transforming the building into an iconic, ever-evolving expression of motion, technology, and aerospace excellence.",
        //     mainImage: '/Portfolio_Images/INTERIOR SPACES/facade/1.png',
        //     galleryImages: [
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/facade/3.jpeg'
        //     ]
        // },
        // {
        //     id: 'collins5',
        //     title: 'Collins Aerospace',
        //     category: 'Architecture Design',
        //     description: "The Collins Aerospace building façade was conceived and executed as a bold architectural narrative of flight itself. Designed from concept to completion, the façade visualizes the dynamic path of aircraft takeoff and landing, with the striking red geometry representing the precise curve and angle of ascent and descent. Integrated seamlessly into the architecture, a large-format LED wall becomes a living storyteller-broadcasting Collins Aerospace's industry innovations, milestones, and future vision-transforming the building into an iconic, ever-evolving expression of motion, technology, and aerospace excellence.",
        //     mainImage: '/Portfolio_Images/INTERIOR SPACES/facade/1.png',
        //     galleryImages: [
        //         '/Portfolio_Images/INTERIOR SPACES/north_gate_1/2.jpeg',
        //         '/Portfolio_Images/INTERIOR SPACES/facade/3.jpeg'
        //     ]
        // },
    ],
    "IMMERSIVE & INTERACTIVE TECHNOLOGY": [
        {
            id: 'collins5',
            title: 'Immersive Real Estate Platform',
            category: 'Immersive Product',
            description: "White Tusker's immersive real estate product reimagines how properties are experienced, evaluated, and sold. Designed as a feature-rich digital ecosystem, it brings together spatial visualization, interactive storytelling, real-time data layers, and intelligent user journeys. From concept to deployment, the platform transforms static listings into engaging, immersive experiences enabling informed decisions, faster engagement, and a future-ready approach to real estate discovery.",
            mainImage: '/Portfolio_Images/Immersive Intractive/Realestate Platform/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/2.png',
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/3.png',
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/4.png'
            ]
        },
    ],
    "BRAND SOLUTIONS": [
        {
            id: 'collins5',
            title: 'Collins Aerospace',
            category: 'Facility Branding & Installations',
            description: "The Collins Aerospace facility branding was delivered as a cohesive, end-to-end narrative from concept to execution. Spanning shopfloor environments, office spaces, and comprehensive wayfinding, every wall graphic and signage element was designed to communicate clarity, pride, and purpose. The visual language translates Collins Aerospace's industry stories into engaging spatial cues-celebrating innovation, engineering excellence, and people. Integrated seamlessly across functional and collaborative zones, the branding transforms the facility into a unified, story-driven environment that informs, inspires, and reinforces Collins Aerospace's global legacy at every touchpoint.",
            mainImage: '/Portfolio_Images/Branding/CA Facility Branding & Installation/11.jpeg',
            galleryImages: [
                '/Portfolio_Images/Branding/CA Facility Branding & Installation/12.jpeg',
                '/Portfolio_Images/Branding/CA Facility Branding & Installation/13.png',
                '/Portfolio_Images/Branding/CA Facility Branding & Installation/14.jpeg'
            ]
        },
    ],
    "CORPORATE & BRAND FILMS": [
        {
            id: 'collins5',
            title: 'Anamorph',
            category: 'Anamorphic story Build',
            description: "The façade is transformed into a three-dimensional visual stage using forced perspective design, depth mapping, and content calibration. Screen geometry, viewing angles, and motion sequences are engineered to create realistic spatial illusions that amplify attention, recall, and brand impact in high-traffic urban environments.",
            mainImage: '/Portfolio_Images/Corporate Brand Film/Anamorph/1.jpeg',
            galleryImages: [
                '/Portfolio_Images/Corporate Brand Film/Anamorph/2.jpeg',
                // '/Portfolio_Images/Corporate Brand Film/Anamorph/3.jpeg'
            ]
        },
    ]
};

