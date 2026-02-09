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
        {
            id: '15',
            title: 'Johnnie Walker',
            category: 'Experience Center',
            description: [
                "This space brings to life the enduring story of Johnnie Walker-the world's best-selling whisky-through imagination, craftsmanship, and technology. Rooted in over 200 years of heritage, the experience reinterprets the traditional whisky journey for a contemporary audience. Visitors are invited to explore the brand's rich history, discover an extraordinary range of flavour possibilities, and engage through interactive storytelling and tasting experiences. Blending legacy with innovation, the space celebrates progress, curiosity, and the spirit of moving forward that defines Johnnie Walker.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Jonnie Walker/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Jonnie Walker/2.jpg',
                '/Portfolio_Images/Interior Spaces/Jonnie Walker/3.jpg',
                '/Portfolio_Images/Interior Spaces/Jonnie Walker/4.jpg'
            ]
        },
        {
            id: '16',
            title: 'Zensar',
            category: 'Experience Center',
            description: [
                "The Zensar Experience Center is a collaborative space where innovation, design, and technology come together to solve real-world business challenges. Designed to showcase Zensar's digital capabilities and industry expertise, the center enables meaningful conversations through immersive storytelling and interactive experiences. It reflects Zensar's commitment to co-creating future-ready solutions, driven by insight, agility, and human-centered transformation.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Zensar/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Zensar/2.png',
                '/Portfolio_Images/Interior Spaces/Zensar/3.png',
                '/Portfolio_Images/Interior Spaces/Zensar/4.png'
            ]
        },
        {
            id: '17',
            title: 'NTT Data',
            category: 'Office Space Design',
            description: [
                "This space represents NTT DATA's commitment to innovation, collaboration, and global expertise in information technology and consulting. Designed to reflect the brand's Japanese heritage and future-focused vision, the experience brings together collaborative environments and curated showcases. Through thoughtful spatial design and storytelling, the center demonstrates how technology, people, and ideas converge to create meaningful digital transformation.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/NTT Data/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/NTT Data/2.png',
                '/Portfolio_Images/Interior Spaces/NTT Data/3.png',
                '/Portfolio_Images/Interior Spaces/NTT Data/4.png'
            ]
        },
        {
            id: '18',
            title: 'NTT Data Customer Center',
            category: 'Experience Center',
            description: [
                "Located in the heart of Bangalore, this space brings together NTT DATA's innovation, capabilities, and collaborative spirit. Designed as a platform for shared discovery, it showcases how technology, partnerships, and ideas come together to solve real-world challenges. Through immersive design and interactive storytelling, the center reflects NTT DATA's commitment to co-creation, integration, and future-ready digital transformation.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/NTT Data Customer Centre/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/NTT Data Customer Centre/2.jpg',
                '/Portfolio_Images/Interior Spaces/NTT Data Customer Centre/3.jpg',
                '/Portfolio_Images/Interior Spaces/NTT Data Customer Centre/4.jpg'
            ]
        },
        {
            id: '19',
            title: 'NTT Data Experience Center',
            category: 'Experience Center',
            description: [
                "Located in the heart of Delhi, this space brings together NTT DATA's innovation ecosystem where technology, partnerships, and ideas converge. Designed as a platform for collaboration and co-creation, the center showcases shared capabilities and forward-looking solutions through immersive design and interactive storytelling. It reflects NTT DATA's commitment to building meaningful connections and shaping future-ready digital experiences.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/NTT Data Experience Centre/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/NTT Data Experience Centre/2.jpg',
                '/Portfolio_Images/Interior Spaces/NTT Data Experience Centre/3.jpg',
                '/Portfolio_Images/Interior Spaces/NTT Data Experience Centre/4.jpg'
            ]
        },
        {
            id: '20',
            title: 'L & T | Cisco',
            category: 'Experience Center',
            description: [
                "The L&T-Cisco Experience Center in Bangalore is a collaborative platform showcasing the convergence of engineering excellence and digital innovation. Designed as an immersive environment, the space brings to life advanced networking, infrastructure, and smart solutions. Through thoughtful design and interactive storytelling, it enables meaningful engagement, co-creation, and dialogue reflecting a shared vision of building connected, intelligent, and future-ready enterprises.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/L&T Cisco/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/L&T Cisco/2.jpg',
                '/Portfolio_Images/Interior Spaces/L&T Cisco/3.jpg',
                '/Portfolio_Images/Interior Spaces/L&T Cisco/4.jpg'
            ]
        },
        {
            id: '21',
            title: 'Tata Communication',
            category: 'Experience Center',
            description: [
                "The Tata Communications Customer Zone Center is a collaborative environment designed to showcase the power of global connectivity and digital infrastructure. Through immersive storytelling and intelligent design, the space brings to life the brand's capabilities in networks, cloud, and communications. It enables meaningful engagement, co-creation, and dialogue reflecting Tata Communications role in connecting businesses, ecosystems, and the world.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Tata Communication/1.jpg',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Tata Communication/2.png',
                '/Portfolio_Images/Interior Spaces/Tata Communication/3.png',
                '/Portfolio_Images/Interior Spaces/Tata Communication/4.png'
            ]
        },
        {
            id: '22',
            title: 'QAD',
            category: 'Office Space Design',
            description: [
                "The QAD Mumbai office is designed as a contemporary workplace that reflects the brand's global vision and collaborative culture. Through thoughtful spatial planning and refined execution, the space brings together functionality, technology, and human-centered design. It supports agile ways of working while fostering connection, innovation, and shared purpose translating QAD's values into a workplace built for modern enterprise teams ",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/QAD/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/QAD/2.png',
                '/Portfolio_Images/Interior Spaces/QAD/3.png'
            ]
        },
        {
            id: '23',
            title: 'Wipro',
            category: 'Experience Center',
            description: [
                "The Wipro Experience Center in Bangalore is a collaborative space designed to showcase innovation at the intersection of technology, sustainability, and human impact. Through immersive storytelling and thoughtful design, the center brings Wipro's capabilities and future-ready solutions to life enabling meaningful conversations, co-creation, and insight-driven transformation for clients and partners ",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Wipro/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Wipro/2.png',
                '/Portfolio_Images/Interior Spaces/Wipro/3.png',
                '/Portfolio_Images/Interior Spaces/Wipro/4.png'
            ]
        },
        {
            id: '24',
            title: 'The Flying Squirrel',
            category: 'Cafe Interiors',
            description: [
                "Bangalore's first Flying Squirrel Coffee Roastery Café is conceived as an immersive space celebrating craft, origin, and experience. Designed and executed to reveal the journey from bean to cup, the space blends roasting, tasting, and storytelling into a single environment. It invites visitors to engage with coffee as a sensory ritual rooted in quality, transparency, and community.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/The Flying Squirel/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/The Flying Squirel/2.png',
                '/Portfolio_Images/Interior Spaces/The Flying Squirel/3.png',
                '/Portfolio_Images/Interior Spaces/The Flying Squirel/4.png'
            ]
        },
        {
            id: '25',
            title: 'Smoke House Deli',
            category: 'Restaurant Interiors',
            description: [
                "Smoke House Deli was executed as a narrative-driven dining experience where nostalgia and contemporary design coexist. The space balances handcrafted details with playful graphics and warm textures, translating the brand's storytelling ethos into an immersive environment that feels personal, familiar, and distinctly memorable.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Smoke House Deli/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Smoke House Deli/2.png',
                '/Portfolio_Images/Interior Spaces/Smoke House Deli/3.png',
                '/Portfolio_Images/Interior Spaces/Smoke House Deli/4.png'
            ]
        },
        {
            id: '26',
            title: 'Caperberry',
            category: 'Restaurant Interiors',
            description: [
                "Caperberry was executed as an intimate fine-dining environment focused on culinary precision and sensory restraint. The design emphasizes material honesty, lighting control, and spatial calm-allowing the food to remain the hero while offering guests a refined, immersive dining experience rooted in detail and craftsmanship ",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Caperberry/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Caperberry/2.png',
                '/Portfolio_Images/Interior Spaces/Caperberry/3.png',
                '/Portfolio_Images/Interior Spaces/Caperberry/4.png'
            ]
        },
        {
            id: '27',
            title: 'Cafe Mocha',
            category: 'Cafe Interiors',
            description: [
                "The Cafe Mocha Mumbai outlet was executed as a vibrant social space that blends comfort, creativity, and community. The design reflects the brand's youthful spirit through layered materials, warm lighting, and an inviting spatial flow-creating an environment that encourages conversation, lingering, and shared moments over food and coffee.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/Caperberry/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/Caperberry/2.png',
                '/Portfolio_Images/Interior Spaces/Caperberry/3.png',
                '/Portfolio_Images/Interior Spaces/Caperberry/4.png'
            ]
        },
        {
            id: '28',
            title: 'NPCC Mumbai',
            category: 'Office Space Design',
            description: [
                "As people move through the space, the wall branding becomes a constant, intuitive presence. It energizes corridors, anchors collaboration zones, and creates moments of pause and reflection. More than static graphics, these interventions influence mood, reinforce shared values, and strengthen everyday connection to the brand.",
                "Integrated seamlessly with architecture and circulation, the walls extend the experience beyond function-turning movement through space into engagement with culture.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/NPCC Mumbai/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/NPCC Mumbai/2.png',
                '/Portfolio_Images/Interior Spaces/NPCC Mumbai/3.png',
                '/Portfolio_Images/Interior Spaces/NPCC Mumbai/4.png'
            ]
        },
        {
            id: '29',
            title: 'The Attic Grey',
            category: 'Commercial Interiors',
            description: [
                "The Attic Grey showroom was executed as a modern retail space that reflects understated luxury and contemporary design. Clean lines, neutral palettes, and thoughtful spatial planning create a refined backdrop for the brand's products, enabling a seamless and elevated customer journey.",
            ],
            mainImage: '/Portfolio_Images/Interior Spaces/The Attic Gray/1.png',
            galleryImages: [
                '/Portfolio_Images/Interior Spaces/The Attic Gray/2.png',
                '/Portfolio_Images/Interior Spaces/The Attic Gray/3.png',
                '/Portfolio_Images/Interior Spaces/The Attic Gray/4.png'
            ]
        },
        {
            id: '30',
            title: 'Bomaby Shirting Co',
            category: 'Commercial Interiors',
            description: [
                "Bangalore's first Bombay Shirt Company showroom is designed as a contemporary expression of craftsmanship and personalization. Executed to reflect the brand's made-to-measure philosophy, the space brings together fabric, fit, and form in a refined retail experience. It invites customers to engage with tailoring as a thoughtful, modern process where precision, choice, and individuality define the journey.",
            ],
            mainImage: "/Portfolio_Images/Interior Spaces/BombayShirtingCo/1.png",
            galleryImages: [
                "/Portfolio_Images/Interior Spaces/BombayShirtingCo/2.png",
                "/Portfolio_Images/Interior Spaces/BombayShirtingCo/3.png",
                "/Portfolio_Images/Interior Spaces/BombayShirtingCo/4.png"
            ]
        },
        {
            id: '31',
            title: "Mr. Jousha's Office",
            category: 'Office Space Design',
            description: [
                "This office interior combines understated elegance with functional precision. From the executive desk layout to the meeting and library spaces, every element supports productivity while maintaining a warm, professional atmosphere.",
            ],
            mainImage: "/Portfolio_Images/Interior Spaces/JoushasOffice/1.png",
            galleryImages: [
                "/Portfolio_Images/Interior Spaces/JoushasOffice/2.png",
                "/Portfolio_Images/Interior Spaces/JoushasOffice/3.png",
                "/Portfolio_Images/Interior Spaces/JoushasOffice/4.png"
            ]
        },
        {
            id: '32',
            title: "TBZ",
            category: 'Restaurant Interiors',
            description: [
                "The TBZ Jewellers showroom in Pune was executed as a premium retail environment that embodies trust, heritage, and precision. The design balances elegance with functionality, using refined materials and lighting to enhance product visibility while delivering a luxurious and reassuring customer experience.",
            ],
            mainImage: "/Portfolio_Images/Interior Spaces/TBZ/1.jpg",
            galleryImages: [
                "/Portfolio_Images/Interior Spaces/TBZ/2.jpg",
                "/Portfolio_Images/Interior Spaces/TBZ/3.jpg"
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
        {
            id: '2',
            title: 'Tata Steel',
            category: 'Digital Twinning',
            description: [
                "The Digital Twinning solution for Tata Steel's Jamshedpur plant was delivered end-to-end from concept and data modeling to real-time deployment. Designed as an immersive, live experience, it mirrors plant operations with integrated chat assist, call and chat facility interfaces, and real-time system intelligence. The solution transforms physical infrastructure into an interactive digital environment, enabling insight-driven decisions, operational efficiency, and future-ready manufacturing."
            ],
            mainImage: '/Portfolio_Images/Immersive Intractive/Tata Steel/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/Tata Steel/2.png',
                '/Portfolio_Images/Immersive Intractive/Tata Steel/3.png',
                '/Portfolio_Images/Immersive Intractive/Tata Steel/4.png'
            ],
        },
        {
            id: '3',
            title: 'DXC - VIRTUAL EXPERIENCE CENTER',
            category: 'Virtual Experience Center',
            description: [
                "The DXC Virtual Experience Center was delivered as an immersive, interactive digital platform designed to showcase enterprise transformation in a dynamic, virtual environment. From concept to deployment, the solution integrates storytelling, real-time interactions, and intelligent digital experiences. It enables seamless engagement across geographies, bringing DXC's capabilities, innovations, and customer journeys to life through a future-ready virtual ecosystem "
            ],
            mainImage: '/Portfolio_Images/Immersive Intractive/DXE Virtual/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/DXE Virtual/2.png',
                '/Portfolio_Images/Immersive Intractive/DXE Virtual/3.png',
                '/Portfolio_Images/Immersive Intractive/DXE Virtual/4.png'
            ],
        },
        {
            id: '4',
            title: 'INFOSYS - DIGITAL HEALTH PLATFORM',
            category: 'Gamified/Interactive Explainer Video',
            description: [
                "The interactive explainer and gamification solution for Infosys' Digital Health Platform was designed to simplify complex healthcare ecosystems through engagement-driven storytelling. By combining intuitive narratives, interactive visuals, and gamified user journeys, the experience transforms technology into understanding. Delivered end-to-end, the solution enables meaningful engagement, clearer communication, and a human-centered approach to digital health innovation."
            ],
            mainImage: '/Portfolio_Images/Immersive Intractive/Infosys Digital Helgth Platform/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/Infosys Digital Helgth Platform/2.png',
                '/Portfolio_Images/Immersive Intractive/Infosys Digital Helgth Platform/3.png',
                '/Portfolio_Images/Immersive Intractive/Infosys Digital Helgth Platform/4.png'
            ],
        },
        {
            id: '5',
            title: 'AR/VR DIGITAL EXPERIENCE',
            category: 'AR/VR Experience',
            description: [
                "White Tusker's future-ready AR/VR digital solution transforms complex ideas into immersive, interactive experiences. Designed from concept to deployment, it blends spatial storytelling, real-time interaction, and high-fidelity visualization. The platform enables intuitive exploration, deeper understanding, and meaningful engagement-bridging physical and digital worlds to deliver scalable, next-generation experiences across industries."
            ],
            mainImage: '/Portfolio_Images/Immersive Intractive/ARVR Digital Sloution/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/ARVR Digital Sloution/2.jpeg',
                '/Portfolio_Images/Immersive Intractive/ARVR Digital Sloution/3.jpeg',
                '/Portfolio_Images/Immersive Intractive/ARVR Digital Sloution/4.jpeg'
            ],
        },
        {
            id: '6',
            title: 'REAL-TIME DATA ART VISUALIZATION',
            category: 'Data Visualization',
            description: [
                "This solution transforms live data into a continuously evolving visual experience. Designed at the intersection of art, technology, and information, it translates complex real-time inputs into expressive, intuitive visual narratives. By merging analytics with aesthetics, the experience enables instant insight, emotional engagement, and a dynamic understanding of systems in motion."
            ],
            mainImage: '/Portfolio_Images/Immersive Intractive/Real-Time Data Art Visulization/1.png',
            galleryImages: [
                '/Portfolio_Images/Immersive Intractive/Real-Time Data Art Visulization/2.jpeg',
                '/Portfolio_Images/Immersive Intractive/Real-Time Data Art Visulization/3.jpeg',
                '/Portfolio_Images/Immersive Intractive/Real-Time Data Art Visulization/4.jpeg'
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
