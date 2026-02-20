import type { Metadata } from 'next';
import { services } from '@/app/data';
import { notFound } from 'next/navigation';
import Portfolio from './_components/portfolio';
import BrandFilms from './_components/brandFilms';
import BrandSolution from './_components/brandSolution';
import InteriorSpaces from './_components/interiorSpaces';
import InteractiveTech from './_components/intractiveTech';
import SectionNavigation from './_components/SectionNavigation';
import ServicesPagination from './_components/ServicesPagination';

const BASE_URL = 'https://www.thewhitetusker.com';

const componentMap: Record<string, React.ComponentType<any>> = {
    'architecture-interior-spaces': InteriorSpaces,
    'immersive-interactive-tech': InteractiveTech,
    'branding-solutions': BrandSolution,
    'corporate-brand-films': BrandFilms,
};

// Unique, keyword-rich metadata per service
const serviceMetaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
    'architecture-interior-spaces': {
        title: 'Architecture & Interior Design Agency in Bangalore | Experience Centers',
        description:
            'The White Tusker designs world-class customer experience centers, corporate interiors, and immersive brand environments in Bangalore, India. Clients include Collins Aerospace, Boeing, Tata Power, and 30+ global brands.',
        keywords: [
            'experience center design company india',
            'customer experience center design bangalore',
            'corporate interior design firm bangalore',
            'architecture and interior design agency india',
            'brand environment design company',
            'experience center bangalore',
        ],
    },
    'immersive-interactive-tech': {
        title: 'Immersive & Interactive Technology Company in India | AR, VR, Digital Twins',
        description:
            'We design AR/VR experiences, digital twins, interactive installations, and immersive platforms for enterprise brands across India. From Tata Steel digital twins to DXC virtual experience centers.',
        keywords: [
            'immersive technology company india',
            'digital twin solutions company bangalore',
            'interactive installation company india',
            'AR VR experience company bangalore',
            'immersive experience design india',
            'virtual experience center company',
        ],
    },
    'branding-solutions': {
        title: 'Brand Identity & Spatial Branding Agency in Bangalore | The White Tusker',
        description:
            'Brand identity systems, logo design, brand books, facility branding, and spatial branding for global enterprises. The White Tusker defines brands from the inside out — Bangalore, India.',
        keywords: [
            'brand identity design agency bangalore',
            'spatial branding company india',
            'facility branding agency bangalore',
            'brand book design company india',
            'corporate branding agency india',
            'logo design agency bangalore',
        ],
    },
    'corporate-brand-films': {
        title: 'Corporate & Brand Film Production Company in Bangalore | The White Tusker',
        description:
            'Strategy-led corporate films, brand films, 3D narratives, and CGI productions for global brands. The White Tusker crafts films for Tanishq, MPL, BIAL, and more — from Bangalore, India.',
        keywords: [
            'corporate film production bangalore',
            'brand film company india',
            '3D brand film production india',
            'corporate video production company bangalore',
            'brand storytelling agency india',
            'CGI film production company india',
        ],
    },
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const meta = serviceMetaMap[slug];

    if (!meta) return {};

    const canonicalUrl = `${BASE_URL}/${slug}`;

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'website',
            url: canonicalUrl,
            title: meta.title,
            description: meta.description,
            siteName: 'The White Tusker',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const IntroComponent = componentMap[slug];
    const meta = serviceMetaMap[slug];

    // BreadcrumbList + Service structured data
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: BASE_URL,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: service.title,
                        item: `${BASE_URL}/${slug}`,
                    },
                ],
            },
            {
                '@type': 'Service',
                name: service.title,
                url: `${BASE_URL}/${slug}`,
                description: meta?.description ?? service.shortDescription?.[0],
                provider: {
                    '@type': 'Organization',
                    name: 'The White Tusker',
                    url: BASE_URL,
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'India',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="relative mx-auto max-w-[1920px] space-y-0 sm:space-y-0 lg:space-y-14 xl:space-y-0 px-0 sm:px-0 md:px-12 lg:px-12 xl:px-18 overflow-hidden text-black bg-white">
                <SectionNavigation />
                {IntroComponent && (
                    <div className="pt-0">
                        <IntroComponent />
                    </div>
                )}
                <Portfolio service={service.title} />
                <ServicesPagination />
            </div>
        </>
    );
}
