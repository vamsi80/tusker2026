import type { Metadata } from "next";
import Services from "./components/homepage/services";
import HeroSection from "./components/homepage/HeroSection";
import FourVerticalIs from "./components/homepage/fourVerticaIs";
import StoryEngineSection from "./components/homepage/StoryEngineSection";
import ExistToCreateSection from "./components/homepage/ExistToCreateSection";
import ClientLogos from "./components/homepage/ClientLogos";

export const metadata: Metadata = {
  title: "The White Tusker | Fluid by Nature",
  description: "Welcome to the world of White Tusker. Fluid by nature, adaptive by design.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-black selection:bg-purple-200">
      <div className="relative mx-auto space-y-16 max-w-[1920px] px-24 overflow-hidden">
        <div id="home">
          <HeroSection />
        </div>
        <StoryEngineSection />
        <ExistToCreateSection />
        <FourVerticalIs />
        <div id="works">
          <Services />
        </div>
        <ClientLogos />
      </div>
    </div>
  );
}
