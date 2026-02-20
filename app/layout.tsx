import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";
import BackToTop from "./components/layout/backToTop";
import FixedSidebar from "./components/layout/FixedSidebar";
import SmoothScroll from "./components/layout/SmoothScroll";

const arial = localFont({
  src: "../public/fonts/arial.ttf",
  variable: "--font-arial",
});

const BASE_URL = "https://www.thewhitetusker.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The White Tusker — Brand Experience Design Studio",
    template: "%s | The White Tusker",
  },
  description:
    "We design brand experiences that move people. Experience centers, immersive environments, spatial storytelling and corporate films — trusted by Collins Aerospace, Boeing, Tata Power and 40+ global enterprises.",
  keywords: [
    "brand experience design studio",
    "experience center design",
    "immersive environment design",
    "spatial storytelling studio",
    "experiential design studio",
    "corporate film production",
    "interactive technology installations",
    "global brand experience",
    "immersive technology studio",
    "brand experience agency",
  ],
  authors: [{ name: "The White Tusker", url: BASE_URL }],
  creator: "The White Tusker",
  publisher: "The White Tusker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "The White Tusker",
    title: "The White Tusker — Brand Experience Design Studio",
    description:
      "We design brand experiences that move people. Experience centers, immersive environments, spatial storytelling and corporate films for global enterprises.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The White Tusker — Brand Experience Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The White Tusker — Brand Experience Design Studio",
    description:
      "Experience centers, spatial storytelling, immersive technology and corporate films. A creator-led brand experience studio.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Global Organization + ProfessionalService + WebSite structured data
// NOTE: LocalBusiness schema removed — signals global positioning, not local.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "The White Tusker",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/LOGO.svg`,
        width: 180,
        height: 48,
      },
      description:
        "The White Tusker is a global brand experience design studio. We create experience centers, immersive environments, corporate films, and spatial storytelling for leading enterprises worldwide.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-99001-10689",
        contactType: "client inquiries",
        availableLanguage: ["English"],
      },
      email: "hello@thewhitetusker.com",
      sameAs: [
        "https://www.linkedin.com/company/the-white-tusker",
        "https://www.instagram.com/thewhitetusker",
        "https://www.behance.net/thewhitetusker",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "The White Tusker — Brand Experience Design Studio",
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: [
        "Brand Experience Design",
        "Experience Center Design",
        "Immersive Technology",
        "Spatial Storytelling",
        "Corporate Film Production",
        "Interactive Environments",
        "Spatial Architecture",
        "Brand Identity & Spatial Branding",
      ],
      areaServed: { "@type": "GeoShape", name: "Worldwide" },
      url: BASE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "The White Tusker",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${arial.variable} antialiased`}>
        <SmoothScroll />
        <Header />
        <FixedSidebar />
        <div className="">{children}</div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
