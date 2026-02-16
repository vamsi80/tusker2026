import type { Metadata } from "next";
import Services from "./components/homepage/services";
import HeroSection from "./components/homepage/HeroSection";
import StoryEngineSection from "./components/homepage/StoryEngineSection";
import ExistToCreateSection from "./components/homepage/ExistToCreateSection";
import ClientLogos from "./components/homepage/ClientLogos";
import TeamSection from "./components/homepage/TeamSection";
import HomeBackground from "./components/homepage/HomeBackground";
import FourVerticals from "./components/homepage/Fourevirticals";

export const metadata: Metadata = {
  title: "The White Tusker | Fluid by Nature",
  description: "Welcome to the world of White Tusker. Fluid by nature, adaptive by design.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-black selection:bg-purple-200">
      <HomeBackground />
      <div className="relative mx-auto space-y-13 sm:space-y-12 md:space-y-12 lg:space-y-16 xl:space-y-36 max-w-[1920px] px-6 sm:px-8 md:px-12 lg:px-12 xl:px-24 overflow-hidden">
        <div id="home">
          <HeroSection />
        </div>
        <StoryEngineSection />
        <ExistToCreateSection />
        <FourVerticals />
        <div id="works" className="scroll-mt-28">
          <Services />
        </div>
        <TeamSection />
        <ClientLogos />
      </div>
    </div>
  );
}
