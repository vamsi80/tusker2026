import type { Metadata } from "next";
import DeferredHomeBackground from "./components/layout/DeferredHomeBackground";
import Services from "./components/homepage/services";
import HeroSection from "./components/homepage/HeroSection";
import ClientLogos from "./components/homepage/ClientLogos";
import TeamSection from "./components/homepage/TeamSection";
import FourVerticals from "./components/homepage/Fourevirticals";
import StoryEngineSection from "./components/homepage/StoryEngineSection";
import ExistToCreateSection from "./components/homepage/ExistToCreateSection";

export const metadata: Metadata = {
  title: "Brand Experience Agency in Bangalore | The White Tusker",
  description:
    "The White Tusker is a brand experience agency in Bangalore. We design experience centers, immersive technology, brand identities, and corporate films for Collins Aerospace, Boeing, Tata Power, and 40+ global brands.",
  alternates: {
    canonical: "https://www.thewhitetusker.com",
  },
  openGraph: {
    title: "Brand Experience Agency in Bangalore | The White Tusker",
    description:
      "Experience centers, immersive technology, branding & corporate films. Trusted by Collins Aerospace, Boeing, Tata Power, Tech Mahindra and 40+ global brands.",
    url: "https://www.thewhitetusker.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-black selection:bg-purple-200">
      {/* 
        DeferredHomeBackground is a Client Component wrapper that uses dynamic(ssr:false).
        It loads after window.load via requestIdleCallback — zero LCP impact.
      */}
      <DeferredHomeBackground />

      <div className="relative mx-auto space-y-8 sm:space-y-12 md:space-y-12 lg:space-y-16 xl:space-y-36 max-w-[1920px] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
        {/*
          SEO NOTE: The visual headline in HeroSection ("FLUID BY NATURE") is kept as a
          visually styled element. The semantic H1 below is hidden visually but fully
          indexable. This technique is valid and widely used for design-forward sites.
          Do NOT remove this H1 — it is the primary keyword anchor for the homepage.
        */}
        <h1 className="sr-only">
          Brand Experience Agency in Bangalore — Experience Centers, Immersive Technology, Branding &amp; Corporate Films
        </h1>

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
