import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 sm:px-12 sm:py-6 pointer-events-none">
            <div className="mx-auto flex max-w-[1920px] items-center justify-between">
                <Link href="/" className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md border border-white/10 transition-all hover:bg-white/0">
                    <Image src="/LOGO.svg" alt="Tusker Logo" width={210} height={48} className="h-12 w-auto object-contain" />
                </Link>
                <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex items-center gap-1 rounded-full bg-purple-500/5 border border-purple-500/10 p-1.5 px-2 text-base font-medium text-black backdrop-blur-2xl transition-all">
                        <li>
                            <Link href="/" className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-purple-500/10">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-purple-500/10">
                                <span>Work</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-purple-500/10 hover:opacity-100">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-purple-500/10 hover:opacity-100">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
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
