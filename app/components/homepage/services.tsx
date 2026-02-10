import Image from 'next/image';
import WaterButton from '../ui/WaterButton';

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
            col: 'lg:col-start-1 lg:row-start-1',
            link: '/work#interior-spaces'
        },
        {
            id: '02',
            title: ['IMMERSIVE &', 'INTERACTIVE TECH'],
            description: [
                'We design experiences people participate in, not just observe.',
                'Through interactive installations, custom CMS platforms, immersive environments, and digital twins, technology fades into the background while engagement takes center stage. The result is intuitive, intelligent storytelling at scale.'
            ],
            col: 'lg:col-start-2 lg:row-start-1',
            link: '/work#interactive-tech'
        },
        {
            id: '03',
            title: ['BRAND', 'SOLUTIONS'],
            description: [
                "We define brands from the inside out.",
                "Logos, identity systems, brand books, and spatial branding are built with intent translating the brand's core philosophy into a consistent, living language across touchpoints. Not just recognition, but emotional connection."
            ],
            col: 'lg:col-start-1 lg:row-start-2',
            link: '/work#brand-solutions'
        },
        {
            id: '04',
            title: ['CORPORATE &', 'BRAND FILMS'],
            description: [
                "We transform ideas into cinema with purpose.",
                "From strategy-led storytelling and scripting to production and post, our films don't just look good they mean something. Each frame is crafted to reinforce brand perception, emotion, and clarity across corporate, product, and narrative films."
            ],
            col: 'lg:col-start-2 lg:row-start-2',
            link: '/work#brand-films'
        }
    ];

    return (
        <>
            <section className="relative h-auto w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-1 justify-center items-center pointer-events-none hidden lg:flex">
                    <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px]">
                        <Image
                            src="/homepage/service.png"
                            alt="Services Centerpiece"
                            fill
                            className="object-contain opacity-50 lg:opacity-100 transition-opacity duration-300"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-2 w-full mx-auto block lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center px-4 sm:px-0">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`block lg:flex lg:flex-col space-y-4 ${service.col} text-left justify-center h-full mb-12 lg:mb-0 ${index % 2 !== 0 ? 'lg:items-end' : 'lg:items-start'}`}
                        >
                            {index === 2 && (
                                <div className="lg:hidden float-right relative w-[240px] h-[240px] sm:w-[450px] sm:h-[450px] ml-4 mb-4 -mt-12 sm:-mt-24 z-10">
                                    <Image
                                        src="/homepage/service.png"
                                        alt="Services Centerpiece"
                                        fill
                                        className="object-contain opacity-80"
                                        priority
                                    />
                                </div>
                            )}
                            <div className="block lg:flex lg:flex-col lg:items-start text-left">
                                <h3 className="flex flex-col text-2xl sm:text-3xl xl:text-4xl font-medium tracking-tighter text-black mb-3 transform scale-x-110 origin-left leading-none">
                                    {Array.isArray(service.title) ? service.title.map((line, i) => (
                                        <span key={i}>{line}</span>
                                    )) : service.title}
                                </h3>
                                <div className="text-sm xl:text-base font-medium leading-[1.2] xl:leading-[1.2] w-full lg:max-w-xs xl:max-w-sm">
                                    {Array.isArray(service.description) ? (
                                        <div className="space-y-1">
                                            {service.description.map((point, i) => (
                                                <p key={i} className='leading-[1.2]'>{point}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className='leading-[1.2]'>{service.description}</p>
                                    )}
                                </div>
                                <WaterButton
                                    href={service.link}
                                    label="EXPLORE"
                                    className="mt-6"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
