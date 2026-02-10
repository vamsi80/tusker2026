'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (pathname === '/') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: "-20% 0px -50% 0px"
            });

            const sections = document.querySelectorAll('#home, #works');
            sections.forEach((section) => observer.observe(section));

            return () => observer.disconnect();
        } else {
            setActiveSection('');
        }
    }, [pathname]);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/#works' },
    ];

    return (
        <header className={`fixed top-0 left-0 z-50 w-full px-6 py-2 sm:px-12 sm:py-4 pointer-events-none transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
            <div className="mx-auto w-full max-w-[1920px] pointer-events-auto">
                {/* Glassy Band Container for Logo and Nav */}
                <div className="flex w-full items-center justify-between gap-6 rounded-full bg-white/10 px-6 py-3 backdrop-blur-xl border border-white/20 shadow-sm transition-all hover:bg-white/20">
                    <Link href="/" className="flex items-center">
                        <Image src="/LOGO.svg" alt="Tusker Logo" width={180} height={48} className="h-7.5 w-auto object-contain" />
                    </Link>

                    <nav className="block">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => {
                                let isActive = false;
                                if (pathname === '/') {
                                    if (item.href === '/' && (!activeSection || activeSection === 'home')) isActive = true;
                                    if (item.href === '/#works' && activeSection === 'works') isActive = true;
                                } else {
                                    isActive = pathname === item.href;
                                }
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={(e) => {
                                                if (item.href.startsWith('/#') && pathname === '/') {
                                                    const id = item.href.replace('/#', '');
                                                    const element = document.getElementById(id);
                                                    if (element) {
                                                        e.preventDefault();
                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }
                                            }}
                                            className={`flex items-center gap-2 rounded-full px-4 py-1.5 transition-all hover:bg-black/5 ${isActive ? "text-black bg-black/5" : "text-black/70 hover:text-black"
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
