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
  title: "Brand Experience Design Studio | The White Tusker",
  description:
    "We design brand experiences that move people. Experience centers, immersive environments, spatial storytelling and corporate films — trusted by Collins Aerospace, Boeing, Tata Power and 40+ global enterprises.",
  alternates: {
    canonical: "https://www.thewhitetusker.com",
  },
  openGraph: {
    title: "Brand Experience Design Studio | The White Tusker",
    description:
      "Experience centers, immersive technology, spatial storytelling and corporate films. Trusted by Collins Aerospace, Boeing, Tata Power, Tech Mahindra and 40+ global enterprises.",
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

      <div className="relative mx-auto space-y-18 sm:space-y-12 md:space-y-12 lg:space-y-16 xl:space-y-36 max-w-[1920px] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
        {/*
          SEO NOTE: The visual headline in HeroSection ("FLUID BY NATURE") is kept as a
          visually styled element. The semantic H1 below is hidden visually but fully
          indexable. This technique is valid and widely used for design-forward sites.
          Do NOT remove this H1 — it is the primary keyword anchor for the homepage.
        */}
        <h1 className="sr-only">
          Brand Experience Design Studio — Experience Centers, Immersive Technology, Spatial Storytelling &amp; Corporate Films
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

        {/*
          SEO AUTHORITY BLOCK — visible, crawlable content with contextual internal links.
          Styled to be understated but fully readable. 200+ words with keyword-rich anchors.
          DO NOT REMOVE — this is the primary topical authority signal for the homepage.
        */}
        {/* <section
          aria-label="About The White Tusker"
          className="w-full max-w-4xl mx-auto px-4 sm:px-0 pb-12 sm:pb-20"
        >
          <p className="text-xs sm:text-sm text-black/50 leading-relaxed tracking-wide">
            The White Tusker is a{" "}
            <a href="/brand-experience-design" className="underline underline-offset-2 hover:text-black transition-colors">
              brand experience design studio
            </a>{" "}
            working at the intersection of architecture, film, technology and brand identity.
            We design{" "}
            <a href="/experience-centers" className="underline underline-offset-2 hover:text-black transition-colors">
              experience centers
            </a>{" "}
            that transform the way global enterprises communicate vision, culture and belief.
            We build{" "}
            <a href="/immersive-technology" className="underline underline-offset-2 hover:text-black transition-colors">
              immersive technology installations
            </a>{" "}
            that turn passive observers into active participants. We create{" "}
            <a href="/corporate-films" className="underline underline-offset-2 hover:text-black transition-colors">
              corporate films and brand films
            </a>{" "}
            that carry the full weight of what a brand believes in. And we design{" "}
            <a href="/interior-spaces" className="underline underline-offset-2 hover:text-black transition-colors">
              spatial environments and interior spaces
            </a>{" "}
            where stories live beyond screens and walls.
          </p>
          <p className="text-xs sm:text-sm text-black/50 leading-relaxed tracking-wide mt-3">
            Our four verticals —{" "}
            <a href="/interior-spaces" className="underline underline-offset-2 hover:text-black transition-colors">
              spatial architecture
            </a>
            ,{" "}
            <a href="/corporate-films" className="underline underline-offset-2 hover:text-black transition-colors">
              film &amp; storytelling
            </a>
            ,{" "}
            <a href="/immersive-technology" className="underline underline-offset-2 hover:text-black transition-colors">
              interactive technology
            </a>{" "}
            and{" "}
            <a href="/brand-solutions" className="underline underline-offset-2 hover:text-black transition-colors">
              brand solutions
            </a>{" "}
            — are not isolated services. They are interlocking forces, each designed to
            strengthen the other. Together they allow us to deliver end-to-end experiential
            storytelling — from concept to execution, from blueprint to emotion. Trusted by
            Collins Aerospace, Boeing, Tata Power, Tech Mahindra and over 40 global enterprises.
            Explore our{" "}
            <a href="/work" className="underline underline-offset-2 hover:text-black transition-colors">
              portfolio of work
            </a>
            .
          </p>
        </section> */}
      </div>
    </div>
  );
}

