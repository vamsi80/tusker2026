import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The White Tusker",
  description: "At The White Tusker, we are committed to protecting the privacy, confidentiality, and security of the information shared with us. Read our privacy policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://thewhitetusker.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-purple-200 pt-32 pb-24 sm:pt-48 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Section */}
        <header className="mb-15 sm:mb-18">
          <h1 className="text-5xl sm:text-7xl font-normal tracking-tighter mb-8 animate-fade-in-up">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 animate-fade-in-up [animation-delay:200ms] opacity-0">
            <span className="h-px w-12 bg-black/20" />
            <p className="text-black/50 text-xs sm:text-sm uppercase tracking-widest font-medium">
              Effective Date: May 9, 2026
            </p>
          </div>
        </header>

        {/* Content Section */}
        <section className="space-y-16 sm:space-y-24">
          {/* Introduction */}
          <div className="prose prose-xl prose-black max-w-none animate-fade-in-up [animation-delay:400ms] opacity-0">
            <p className="text-xl sm:text-2xl leading-relaxed text-black/80 font-light">
              At <strong className="text-black font-semibold">The White Tusker</strong>, we are committed to protecting the privacy, confidentiality, and security of the information shared with us. We implement appropriate administrative, technical, and physical safeguards to protect personal information against unauthorized access, disclosure, alteration, misuse, or destruction.
            </p>
            <p className="text-black/60 text-lg leading-relaxed mt-8">
              This Privacy Policy explains how we collect, use, process, store, and protect your information when you access or use our website and services. By using this website, you agree to the terms outlined in this Privacy Policy.
            </p>
            <p className="text-black/40 text-sm italic mt-6 border-l-2 border-black/10 pl-4">
              We may update this Privacy Policy periodically to reflect changes in our services, legal obligations, or business practices. Users are encouraged to review this page regularly for updates.
            </p>
          </div>

          {/* User Information & Privacy */}
          <div className="space-y-8 animate-fade-in-up [animation-delay:600ms] opacity-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight border-b border-black/10 pb-6">
              User Information & Privacy
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-3xl">
              The White Tusker and its affiliates are committed to safeguarding all information provided through our website. Access to personal information is restricted to authorized personnel who require it to perform their responsibilities. Protecting your confidential information remains one of our highest priorities.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight border-b border-black/10 pb-6">
              Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-widest text-black/40">Personal Information</h3>
                <ul className="space-y-4">
                  {[
                    "Full name",
                    "Phone number",
                    "Email address",
                    "Company name",
                    "Project requirements",
                    "Billing or shipping information",
                    "Additional details submitted through inquiries"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-widest text-black/40">Automatically Collected</h3>
                <ul className="space-y-4">
                  {[
                    "IP address",
                    "Browser type",
                    "Device information",
                    "Website usage data",
                    "Pages visited",
                    "Time spent on the website",
                    "Cookies and analytics data"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight border-b border-black/10 pb-6">
              How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Responding to inquiries and quotations",
                "Improving website functionality and user experience",
                "Communication regarding projects and services",
                "Analytics and website optimization",
                "Coordination with trusted service providers"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-black/[0.02] border border-black/[0.05] hover:bg-black/[0.04] transition-colors">
                  <span className="text-black/20 font-mono text-sm mt-1">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-black/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Sections: Cookies & Disclosure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-24">
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest">Cookies & Tracking</h2>
              <p className="text-black/60 text-lg leading-relaxed">
                Our website may use cookies and similar technologies to improve browsing experience, analyze website traffic, and enhance functionality.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest">Information Disclosure</h2>
              <p className="text-black/60 text-lg leading-relaxed">
                The White Tusker does not sell, rent, or trade personal information. We may disclose information to trusted service providers, to comply with legal obligations, or during mergers.
              </p>
            </div>
          </div>

          {/* Secondary Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-black/10">
            <div className="space-y-3">
              <h3 className="font-bold uppercase tracking-widest text-xs text-black/40">Third-Party Links</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                We are not responsible for the privacy practices of external websites linked from our platform.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold uppercase tracking-widest text-xs text-black/40">Cross-Border</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Information may be processed outside your country in compliance with applicable laws.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold uppercase tracking-widest text-xs text-black/40">Your Consent</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                By using our website, you consent to the collection and processing of your information.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold uppercase tracking-widest text-xs text-black/40">Your Control</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Request access, correction, or deletion of your data by reaching out to our team.
              </p>
            </div>
          </div>

          {/* Data Storage & Security Focus */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight border-b border-black/10 pb-6">Data Storage & Security</h2>
              <p className="text-black/70 text-lg leading-relaxed max-w-3xl">
                We maintain rigorous technical and organizational safeguards to protect your information. While absolute security cannot be guaranteed, we retain data only as long as necessary for operational excellence.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest">Children&apos;s Privacy</h2>
              <p className="text-black/60 text-lg leading-relaxed">
                Our services are not intended for or marketed to children under the age of 13.
              </p>
            </div>
          </div>

          {/* Contact & Footer Info */}
          <footer className="pt-20 border-t border-black/10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight uppercase">Privacy Contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-black/40 font-bold">Email</p>
                    <a href="mailto:hello@thewhitetusker.com" className="text-xl font-medium hover:text-purple-600 transition-colors">
                      hello@thewhitetusker.com
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-black/40 font-bold">Web</p>
                    <a href="https://thewhitetusker.com" className="text-xl font-medium hover:text-purple-600 transition-colors">
                      thewhitetusker.com
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-black/40 font-bold">Address</p>
                  <p className="text-lg text-black/70">
                    #1331, 13th Cross Road, 10th Main Road, 2nd stage,<br />
                    Indiranagar, Bengaluru 560038, Karnataka, India.
                  </p>
                </div>
              </div>

              <div className="md:text-right space-y-4 max-w-xs">
                <p className="text-black/40 text-xs leading-relaxed uppercase tracking-widest font-bold">
                  Notice
                </p>
                <p className="text-black/50 text-xs leading-relaxed">
                  The White Tusker reserves the right to update this Privacy Policy at any time. We encourage frequent reviews of this page to stay informed.
                </p>
                <p className="text-black/30 text-[10px] uppercase tracking-tighter">
                  © 2026 THE WHITE TUSKER. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
