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
    default: "The White Tusker | Brand Experience Agency in Bangalore",
    template: "%s | The White Tusker",
  },
  description:
    "The White Tusker is a brand experience agency in Bangalore, India. We design experience centers, immersive technology installations, brand identities, and corporate films for global brands.",
  keywords: [
    "brand experience agency bangalore",
    "experience center design india",
    "experiential marketing agency bangalore",
    "immersive technology company india",
    "branding agency bangalore",
    "corporate film production bangalore",
    "spatial branding india",
    "customer experience center design",
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
    locale: "en_IN",
    url: BASE_URL,
    siteName: "The White Tusker",
    title: "The White Tusker | Brand Experience Agency in Bangalore",
    description:
      "We design experience centers, immersive technology, brand identities, and corporate films for global brands. Based in Bangalore, operating across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The White Tusker — Brand Experience Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The White Tusker | Brand Experience Agency in Bangalore",
    description:
      "Experience centers, immersive tech, branding & corporate films. India's leading brand experience studio.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Organization + LocalBusiness structured data
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
        "The White Tusker is a brand experience agency in Bangalore, India, specializing in experience center design, immersive technology, brand identity, and corporate film production.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#1331, 13th Cross Road, 10th Main Road, 2nd Stage, Indiranagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560038",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-99001-10689",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-99455-65505",
          contactType: "sales",
          areaServed: "IN",
        },
      ],
      email: "hello@thewhitetusker.com",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "The White Tusker",
      url: BASE_URL,
      telephone: "+919900110689",
      email: "hello@thewhitetusker.com",
      priceRange: "₹₹₹",
      image: `${BASE_URL}/LOGO.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#1331, 13th Cross Road, 10th Main Road, 2nd Stage, Indiranagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560038",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9716,
        longitude: 77.6412,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
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
