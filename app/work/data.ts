export interface Project {
    id: string;
    title: string;
    category: string;
    description: string | string[];
    mainImage: string;
    galleryImages: string[];
}

export const projectsData: Record<string, Project[]> = {
    "ARCHITECTURE & INTERIOR SPACES": [
        {
            id: '1',
            title: 'Collins Aerospace',
            category: 'Experience Centre',
            description: 'At Collins Aerospace, we designed and delivered a future-ready Experience Center from concept to execution, integrating architecture, storytelling, AR, and touch-driven digital content into one cohesive narrative. The entire space is structured around the user journey at an airport from check-in to boarding allowing visitors to intuitively experience how Collins Aerospace technologies operate at every critical moment of flight. Each zone translates complex aviation systems into immersive, human-centric experiences, showcasing Collins Aerospace’s role in shaping safer, smarter, and more connected journeys across the global aviation ecosystem.',
            mainImage: "/Portfolio_Images/Interior Spaces/north_gate/1.jpeg",
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/north_gate/2.jpeg',
                '/Portfolio_Images/Interior Spaces/north_gate/3.jpeg',
                '/Portfolio_Images/Interior Spaces/north_gate/4.jpeg'
            ],
        },
        {
            id: '2',
            title: 'Collins Aerospace',
            category: 'Experience Centre',
            description: 'The space is designed to enhance productivity, collaboration, and identity. Clear spatial logic, supportive design elements, and cohesive branding create an environment that aligns people, process, and purpose',
            mainImage: '/Portfolio_Images/Interior Spaces/north_gate_1/1.jpeg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/north_gate_1/2.jpeg',
                '/Portfolio_Images/Interior Spaces/north_gate_1/3.jpeg',
                '/Portfolio_Images/Interior Spaces/north_gate_1/4.jpeg'
            ],
        },
        {
            id: '3',
            title: 'Collins Aerospace',
            category: 'Architecture Design',
            description: "The Collins Aerospace Courtyard was conceived and executed as an open-air narrative space celebrating the evolution of aerospace innovation. Designed from concept to completion, the courtyard traces the journey from the Wright Brothers' first flight to the futuristic Airbus Bird of Prey, weaving in key milestones from Collins Aerospace's global and Indian legacy. Sculptural elements, timelines, and spatial storytelling transform the courtyard into a living chronicle where history, innovation, and vision converge offering visitors a reflective yet inspiring pause within the larger campus experience.",
            mainImage: '/Portfolio_Images/Interior Spaces/north_gate_1/1.jpeg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/north_gate_1/2.jpeg',
                '/Portfolio_Images/Interior Spaces/courtYard/3.jpeg',
                '/Portfolio_Images/Interior Spaces/courtYard/4.jpeg'
            ],
        },
        {
            id: '4',
            title: 'Collins Aerospace',
            category: 'Architecture Design',
            description: "The Collins Aerospace building façade was conceived and executed as a bold architectural narrative of flight itself. Designed from concept to completion, the façade visualizes the dynamic path of aircraft takeoff and landing, with the striking red geometry representing the precise curve and angle of ascent and descent. Integrated seamlessly into the architecture, a large-format LED wall becomes a living storyteller-broadcasting Collins Aerospace's industry innovations, milestones, and future vision-transforming the building into an iconic, ever-evolving expression of motion, technology, and aerospace excellence.",
            mainImage: '/Portfolio_Images/Interior Spaces/facade/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/north_gate_1/2.jpeg',
                '/Portfolio_Images/Interior Spaces/facade/3.jpeg'
            ],
        },
        {
            id: '5',
            title: 'Collins Aerospace',
            category: 'Architecture Design',
            description: [
                'Executed as a landmark arrival feature, the Flight Nose Gate draws inspiration from birds of prey and advanced aircraft design. The sweeping form and propeller-inspired elements translate speed, precision, and aerospace ambition into a bold architectural statement-marking the entry as an experience rather than a boundary.',
                'Designed, engineered, and delivered as a singleintegrated installation, the gate sets the tone forinnovation from the very first moment.'
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/flight_nose/1.jpeg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/flight_nose/2.jpeg',
                '/Portfolio_Images/Interior Spaces/flight_nose/3.png',
                '/Portfolio_Images/Interior Spaces/flight_nose/4.jpeg'
            ]
        },
        {
            id: '6',
            title: 'Collins Aerospace',
            category: 'Architecture Design',
            description: [
                'The executed installation brings the digital model into physical reality with meticulous attention to detail. Material finishes, structural mounting, and scale were carefully resolved on site to preserve design integrity while ensuring durability and safety.',
                "Positioned as a landmark element, the F-35 installation reinforces the organization's aerospace legacy-transforming engineering excellence into a tangible, experiential statement."
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/F-35/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/F-35/2.jpeg',
                '/Portfolio_Images/Interior Spaces/F-35/3.png',
                '/Portfolio_Images/Interior Spaces/F-35/4.jpeg'
            ]
        },
        {
            id: '7',
            title: 'Collins Aerospace',
            category: 'Wayfinding Built at Scale',
            description: [
                'Custom-designed pylons were developed and installed as key identity and navigation elements across the campus. A 20-foot landmark pylon marks the main entry, establishing visibility and brand presence from a distance, while 8-foot illuminated pylons within the facility guide movement with clarity and consistency.',
                "From design detailing to fabrication and on-site installation, the system was executed to balance durability, legibility, and architectural alignment-ensuring wayfinding that is intuitive, prominent, and unmistakably branded."
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/pylon/1.jpeg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/pylon/2.jpeg',
                '/Portfolio_Images/Interior Spaces/pylon/3.jpeg',
                '/Portfolio_Images/Interior Spaces/pylon/4.jpeg'
            ]
        },
        {
            id: '8',
            title: 'Boeing',
            category: 'Experience Center',
            description: "This space presents Boeing's extraordinary journey as a global leader in aerospace and advanced technology across air, sea, space, and cyberspace. Designed as a collaborative and immersive environment, it translates Boeing's universe of innovation into tangible experiences. From historic milestones to real-time flight intelligence, augmented visualizations, and advanced product showcases, the space reveals how engineering excellence shapes the world in motion. Blending storytelling with cutting-edge tools, the experience reflects Boeing's relentless pursuit of progress, precision, and possibility.",
            mainImage: '/Portfolio_Images/Interior Spaces/Boeing/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Boeing/2.png',
                '/Portfolio_Images/Interior Spaces/Boeing/3.png',
                '/Portfolio_Images/Interior Spaces/Boeing/4.png'
            ]
        },
        {
            id: '9',
            title: 'Lamborghini SuperTrofeo',
            category: 'Experience Center',
            description: "This space represents the world of the Lamborghini Super Trofeo Race an international one-make racing championship driven by precision, performance, and design excellence. Organized by Lamborghini Squadra Corse, the series brings together elite motorsport engineering and competitive spirit. At the Sepang Circuit, this experience reflects the energy of the paddock, where design, speed, and craftsmanship converge at the highest level of racing.",
            mainImage: '/Portfolio_Images/Interior Spaces/Lamborghini/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Lamborghini/2.jpg',
                '/Portfolio_Images/Interior Spaces/Lamborghini/3.jpg',
                '/Portfolio_Images/Interior Spaces/Lamborghini/4.jpg'
            ]
        },
        {
            id: '10',
            title: 'Volvo',
            category: 'Experience Center',
            description: "This space represents the world of the Lamborghini Super Trofeo Race an international one-make racing championship driven by precision, performance, and design excellence. Organized by Lamborghini Squadra Corse, the series brings together elite motorsport engineering and competitive spirit. At the Sepang Circuit, this experience reflects the energy of the paddock, where design, speed, and craftsmanship converge at the highest level of racing.",
            mainImage: '/Portfolio_Images/Interior Spaces/Volvo/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Volvo/2.jpg',
                '/Portfolio_Images/Interior Spaces/Volvo/3.jpg',
                '/Portfolio_Images/Interior Spaces/Volvo/4.jpg'
            ]
        },
        {
            id: '11',
            title: 'Bosch India',
            category: 'Experience Center',
            description: [
                "The Bosch India Experience Centre is a living space where technology, history, and future innovation come together. Designed as an immersive environment, it invites visitors to explore Bosch's legacy alongside its forward-thinking solutions in a single, seamless journey.",
                "More than a display, the space itself becomes an intelligent communicator. Through interactive technologies, augmented and virtual realities, and responsive systems, ideas are brought to life in real time. Every element adapts, responds, and engages transforming the environment into a dynamic expression of the Bosch brand."
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Bosch India/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Bosch India/2.png',
                '/Portfolio_Images/Interior Spaces/Bosch India/3.png',
                '/Portfolio_Images/Interior Spaces/Bosch India/4.png'
            ]
        },
        {
            id: '12',
            title: 'Tech Mahindra',
            category: 'Experience Center',
            description: [
                "This space reflects Tech Mahindra's vision of guiding enterprises from resilience to relevance through next-generation technology. Built around storytelling and immersive interaction, the experience transforms complex digital solutions into meaningful narratives. By engaging people through insight, innovation, and imagination, the space brings the Tech Mahindra brand to life-demonstrating how technology can enable transformation, adaptability, and future-ready growth ",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Tech Mahindra/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Tech Mahindra/2.jpg',
                '/Portfolio_Images/Interior Spaces/Tech Mahindra/3.jpg',
                '/Portfolio_Images/Interior Spaces/Tech Mahindra/4.jpg'
            ]
        },
        {
            id: '13',
            title: 'Tata Power',
            category: 'Experience Center',
            description: [
                "This space tells the story of Tata Power's journey across time, its legacy, its leadership in the present, and its vision for the future. Through innovation, responsibility, and purpose-driven progress, the narrative explores how energy shapes lives, industries, and communities. From pioneering milestones to future-ready solutions, the experience reflects Tata Power's commitment to building a sustainable and resilient world.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Tata Power/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Tata Power/2.png',
                '/Portfolio_Images/Interior Spaces/Tata Power/3.png',
                '/Portfolio_Images/Interior Spaces/Tata Power/4.png'
            ]
        },
        {
            id: '14',
            title: 'GEP',
            category: 'Experience Center',
            description: [
                "This space presents GEP's role in enabling enterprises worldwide to operate with intelligence, efficiency, and purpose. Through deep expertise and innovative thinking, GEP helps organizations transform strategy into measurable performance driving operational excellence, financial impact, and sustainable growth.",
                "Designed as a reflection of insight-led innovation, the experience highlights GEP's leadership across key sectors and its commitment to delivering high-value supply chain and procurement solutions. At its core, the narrative brings to life a simple belief: when the customer remains at the center, progress follows."
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/GEP/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/GEP/2.jpg',
                '/Portfolio_Images/Interior Spaces/GEP/3.png',
                '/Portfolio_Images/Interior Spaces/GEP/4.png'
            ]
        },
    ],
    "IMMERSIVE & INTERACTIVE TECHNOLOGY": [
        {
            id: '1',
            title: 'Immersive Real Estate Platform',
            category: 'Immersive Product',
            description: "White Tusker's immersive real estate product reimagines how properties are experienced, evaluated, and sold. Designed as a feature-rich digital ecosystem, it brings together spatial visualization, interactive storytelling, real-time data layers, and intelligent user journeys. From concept to deployment, the platform transforms static listings into engaging, immersive experiences enabling informed decisions, faster engagement, and a future-ready approach to real estate discovery.",
            mainImage: '/Portfolio_Images/Immersive Intractive/Realestate Platform/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/2.png',
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/3.png',
                '/Portfolio_Images/Immersive Intractive/Realestate Platform/4.png'
            ],
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
            ],
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
            ],
        },
    ]
};
