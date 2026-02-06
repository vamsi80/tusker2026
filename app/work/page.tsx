import Footer from '../components/layout/footer';
import InteriorSpaces from './_components/interiorSpaces';
import Portfolio from './_components/portfolio';
import InteractiveTech from './_components/intractiveTech';

export default function WorkPage() {
    return (
        <>
            <div className="relative min-h-screen w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 overflow-hidden text-black bg-white">
                <InteriorSpaces />
                <Portfolio />
                <InteractiveTech />
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}
