import Image from 'next/image';

export default function Services() {
    const services = [
        {
            id: '01',
            title: ['ARCHITECTURE &', 'INTERIOR SPACES'],
            description: [
                "We script environments that communicate before a word is spoken.",
                "Spaces are designed as living narratives where material, light, movement, and technology work together to express brand intent.",
                "Whether it's a customer experience center, workplace, or hospitality space, every square foot is choreographed to engage, guide, and inspire."
            ],
            col: 'lg:col-start-1 lg:row-start-1'
        },
        {
            id: '02',
            title: ['IMMERSIVE &', 'INTERACTIVE TECH'],
            description: [
                'We design experiences people participate in, not just observe.',
                'Through interactive installations, custom CMS platforms, immersive environments, and digital twins, technology fades into the background while engagement takes center stage. The result is intuitive, intelligent storytelling at scale.'
            ],
            col: 'lg:col-start-2 lg:row-start-1'
        },
        {
            id: '03',
            title: ['BRAND', 'SOLUTIONS'],
            description: [
                "We define brands from the inside out.",
                "Logos, identity systems, brand books, and spatial branding are built with intent translating the brand's core philosophy into a consistent, living language across touchpoints. Not just recognition, but emotional connection."
            ],
            col: 'lg:col-start-1 lg:row-start-2'
        },
        {
            id: '04',
            title: ['CORPORATE &', 'BRAND FILMS'],
            description: [
                "We transform ideas into cinema with purpose.",
                "From strategy-led storytelling and scripting to production and post, our films don't just look good they mean something. Each frame is crafted to reinforce brand perception, emotion, and clarity across corporate, product, and narrative films."
            ],
            col: 'lg:col-start-2 lg:row-start-2'
        }
    ];

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-24">

            {/* Center Image - Layered Behind Content */}
            <div className="absolute inset-0 z-1 flex justify-center items-center pointer-events-none">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[600px]">
                    <Image
                        src="/homepage/service.png"
                        alt="Services Centerpiece"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Service Items Grid - Layered On Top */}
            <div className="relative z-2 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col space-y-4 ${service.col} text-left justify-center h-full ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}
                    >
                        <div className="flex flex-col items-start text-left">
                            <h3 className="flex flex-col text-3xl sm:text-4xl lg:text-4xl font-medium tracking-tighter text-black mb-3 transform scale-x-110 origin-left leading-[1]">
                                {Array.isArray(service.title) ? service.title.map((line, i) => (
                                    <span key={i}>{line}</span>
                                )) : service.title}
                            </h3>
                            <div className="text-xs sm:text-sm font-medium leading-[1.3] max-w-sm">
                                {Array.isArray(service.description) ? (
                                    <div className="space-y-1">
                                        {service.description.map((point, i) => (
                                            <p key={i}>{point}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{service.description}</p>
                                )}
                            </div>

                            <button className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-8 py-2 uppercase tracking-widest">
                                EXPLORE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
