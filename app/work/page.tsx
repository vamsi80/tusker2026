import WorkHero from './_components/workHero';
import Portfolio from './_components/portfolio';

export default function WorkPage() {
    return (
        <>
            <div className="relative min-h-screen w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 overflow-hidden text-black bg-white">
                <WorkHero />
                <Portfolio />
            </div>
        </>
    );
}
