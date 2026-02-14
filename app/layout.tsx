import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";
import BackToTop from "./components/layout/backToTop";
// Background removed, moved to page.tsx
import FixedSidebar from "./components/layout/FixedSidebar";
import SmoothScroll from "./components/layout/SmoothScroll";

const arial = localFont({
  src: "../public/fonts/arial.ttf",
  variable: "--font-arial",
});

export const metadata: Metadata = {
  title: "The White Tusker | Fluid by Nature",
  description: "Welcome to the world of White Tusker. Fluid by nature, adaptive by design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arial.variable} antialiased`}
      >
        <SmoothScroll />
        {/* Background removed */}
        <Header />
        <FixedSidebar />
        <div className="">
          {children}
        </div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
