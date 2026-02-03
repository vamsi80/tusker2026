import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 sm:px-12 sm:py-6 pointer-events-none">
            <div className="mx-auto flex max-w-[1920px] items-center justify-between">
                {/* Logo Area - Left Side */}
                <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 shadow-sm transition-transform hover:scale-105">
                    <Image src="/LOGO.svg" alt="Tusker Logo" width={110} height={24} className="h-6 w-auto object-contain" />
                </div>

                {/* Navigation - Right Side (Pill Shaped) */}
                <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-[#050511]/80 p-1.5 px-2 text-sm font-medium text-white shadow-xl backdrop-blur-xl transition-all">
                        <li>
                            <Link href="/" className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-white/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                                <span>Work</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:opacity-100">
                                Studio
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:opacity-100">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:opacity-100">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button - Right Side (Pill) */}
                <button className="pointer-events-auto md:hidden group flex items-center justify-center rounded-full bg-black p-3 text-white shadow-lg transition-transform active:scale-95">
                    <div className="flex flex-col gap-1.5">
                        <span className="block h-0.5 w-5 bg-white transition-transform group-hover:translate-x-1"></span>
                        <span className="block h-0.5 w-3 bg-white ml-auto transition-transform group-hover:-translate-x-1"></span>
                    </div>
                </button>
            </div>
        </header>
    );
}
