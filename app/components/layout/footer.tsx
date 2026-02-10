'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <footer className={`relative h-screen w-full flex flex-col items-center justify-end overflow-hidden ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/5 w-[150%] h-[150%] z-0 pl-15">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                        <ellipse cx="50" cy="50" rx="40" ry="14" stroke="#c6bede" strokeWidth="0.2" fill="none" transform="rotate(-29 50 50)" />
                        <ellipse cx="50" cy="50" rx="40" ry="14" stroke="#c6bede" strokeWidth="0.2" fill="none" transform="rotate(-22 50 50)" />
                    </svg>
                </div>
            </div>

            <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
                <div className="relative z-10 w-full h-[80vh] lg:h-[60vh] flex flex-col justify-center lg:justify-start items-start gap-4 sm:gap-4 pb-12 lg:pb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-6xl xl:text-8xl font-medium tracking-tighter text-black leading-[0.85] transform scale-x-110 origin-left w-full text-left">
                        THANK YOU. LET`s TALK...
                    </h1>
                    <div className="flex flex-col gap-1 sm:gap-4 text-gray-600 pl-1 sm:pl-7 transform scale-x-[1.15] origin-left">
                        <div className="text-sm sm:text-base md:text-sm font-medium tracking-normal max-w-2xl leading-relaxed">
                            <p>+#1331, 13th Cross Road, 10th Main Road, 2nd stage,</p>
                            <p>+Indiranagar, Bengaluru 560038, Karnataka, India.</p>
                        </div>
                        <div className="text-sm sm:text-base md:text-sm font-medium tracking-normal leading-relaxed">
                            <p>+Web: www.thewhitetusker.com</p>
                            <p>+email: hello@thewhitetusker.com</p>
                        </div>
                        <div className="text-sm sm:text-base md:text-xl font-semibold tracking-normal leading-snug mt-2">
                            <p>+Ph: +91 99001 10689</p>
                            <p>+Ph: +91 99455 65505</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
