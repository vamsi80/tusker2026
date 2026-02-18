import { services } from '@/app/data';
import { notFound } from 'next/navigation';
import Portfolio from './_components/portfolio';
import BrandFilms from './_components/brandFilms';
import BrandSolution from './_components/brandSolution';
import InteriorSpaces from './_components/interiorSpaces';
import InteractiveTech from './_components/intractiveTech';
import SectionNavigation from './_components/SectionNavigation';
import ServicesPagination from './_components/ServicesPagination';

const componentMap: Record<string, React.ComponentType<any>> = {
    'architecture-interior-spaces': InteriorSpaces,
    'immersive-interactive-tech': InteractiveTech,
    'branding-solutions': BrandSolution,
    'corporate-brand-films': BrandFilms,
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const IntroComponent = componentMap[slug];

    return (
        <div className="relative mx-auto max-w-[1920px] space-y-0 sm:space-y-0 lg:space-y-14 xl:space-y-0 px-8 sm:px-0 md:px-12 lg:px-12 xl:px-18 overflow-hidden text-black bg-white">
            <SectionNavigation />
            {IntroComponent && (
                <div className="pt-0">
                    <IntroComponent />
                </div>
            )}
            <Portfolio service={service.title} />
            <ServicesPagination />
        </div>
    );
}
