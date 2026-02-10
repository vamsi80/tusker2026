import InteriorSpaces from './_components/interiorSpaces';
import Portfolio from './_components/portfolio';
import InteractiveTech from './_components/intractiveTech';
import BrandSolution from './_components/brandSolution';
import BrandFilms from './_components/brandFilms';
import SectionNavigation from './_components/SectionNavigation';

export default function WorkPage() {
    return (
        <>
            <SectionNavigation />
            <div className="relative mx-auto space-y-8 sm:space-y-12 lg:space-y-16 max-w-[1920px] px-8 sm:px-0 md:px-12 lg:px-12 xl:px-24 overflow-hidden text-black bg-white">
                <div id="interior-spaces">
                    <InteriorSpaces />
                    <Portfolio service="ARCHITECTURE & INTERIOR SPACES" />
                </div>

                <div id="interactive-tech">
                    <InteractiveTech />
                    <Portfolio service="IMMERSIVE & INTERACTIVE TECHNOLOGY" />
                </div>

                <div id="brand-solutions">
                    <BrandSolution />
                    <Portfolio service="BRAND SOLUTIONS" />
                </div>

                <div id="brand-films">
                    <BrandFilms />
                    <Portfolio service="CORPORATE & BRAND FILMS" />
                </div>
            </div>
        </>
    );
}
