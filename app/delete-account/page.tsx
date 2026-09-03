import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Trava Account Deletion Request | The White Tusker",
//   description: "Request deletion of your Trava account and associated data from the Trava platform.",
//   alternates: {
//     canonical: "https://thewhitetusker.com/delete-account",
//   },
// };

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 sm:pt-48 sm:pb-32 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Section */}
        <header className="mb-16 sm:mb-24">
          <h1 className="text-5xl sm:text-7xl font-normal tracking-tighter mb-8 animate-fade-in-up">
            Trava Account Deletion Request
          </h1>
          <div className="flex items-center gap-4 animate-fade-in-up [animation-delay:200ms] opacity-0">
            <span className="h-px w-12 bg-black/20" />
            <p className="text-black/50 text-xs sm:text-sm uppercase tracking-widest font-medium">
              Data Privacy & User Control
            </p>
          </div>
        </header>

        {/* Content Section */}
        <section className="space-y-20 sm:space-y-32">
          {/* Introduction */}
          <div className="max-w-4xl animate-fade-in-up [animation-delay:400ms] opacity-0">
            <p className="text-xl sm:text-3xl leading-tight text-black/80 font-light mb-10">
              Users can request deletion of their Trava account and associated data by emailing our support team.
            </p>
            <p className="text-black/60 text-lg leading-relaxed">
              At The White Tusker, we prioritize your privacy. If you no longer wish to use Trava, you can request a complete removal of your information from our platform.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-8 animate-fade-in-up [animation-delay:600ms] opacity-0">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight border-b border-black/10 pb-6">
              Contact for Deletion
            </h2>
            <div>
              <p className="text-black/60 text-lg mb-4">Send your request from your registered email address to:</p>
              <a
                href="mailto:hello@thewhitetusker.com"
                className="text-2xl sm:text-5xl font-medium text-black hover:text-purple-600 transition-colors break-all underline underline-offset-8 decoration-black/20 hover:decoration-purple-600"
              >
                hello@thewhitetusker.com
              </a>
            </div>
          </div>

          {/* Deleted Data Grid */}
          <div className="space-y-16">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight border-b border-black/10 pb-8">
              What data gets deleted?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Profile Information",
                  desc: "Personal details including your name, email, avatar, and account preferences.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                {
                  title: "Messages",
                  desc: "All communication history, direct messages, and shared content within the Trava platform.",
                  icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                },
                {
                  title: "Account Data",
                  desc: "Workspace history, task contributions, role assignments, and all activity logs.",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col p-10 rounded-3xl border border-black/10 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl border border-black/10 flex items-center justify-center mb-8 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-black/50 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Processing Time */}
          <div className="space-y-12 pb-20">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight border-b border-black/10 pb-8">
              Deletion Processing Time
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-10 rounded-3xl border border-black/10">
              <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-medium text-black">Within 7 working days.</p>
                <p className="text-black/50 text-lg mt-2">Your request will be processed, and you will receive a confirmation once the deletion is finalized.</p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <footer className="pt-20 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-black/40 text-sm font-medium uppercase tracking-widest">
                System Status: Active
              </p>
            </div>
            <p className="text-black/30 text-[10px] uppercase tracking-[0.2em] font-bold">
              © 2026 THE WHITE TUSKER. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
