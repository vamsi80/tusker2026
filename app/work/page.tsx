import Footer from '../components/layout/footer';
import InteriorSpaces from './_components/interiorSpaces';
import Portfolio from './_components/portfolio';
import InteractiveTech from './_components/intractiveTech';
import BrandSolution from './_components/brandSolution';
import BrandFilms from './_components/brandFilms';

export default function WorkPage() {
    return (
        <>
            <div className="relative min-h-screen w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 overflow-hidden text-black bg-white">
                <InteriorSpaces />
                <Portfolio service="ARCHITECTURE & INTERIOR SPACES" />

                <InteractiveTech />
                <Portfolio service="IMMERSIVE & INTERACTIVE TECHNOLOGY" />

                <BrandSolution />
                <Portfolio service="BRAND SOLUTIONS" />

                <BrandFilms />
                <Portfolio service="CORPORATE & BRAND FILMS" />
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}
