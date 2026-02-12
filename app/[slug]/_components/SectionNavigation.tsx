'use client';

import { useState, useEffect } from 'react';
import { services } from '@/app/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SectionNavigation() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Extract slug from pathname (e.g. "/architecture-interior-spaces" -> "architecture-interior-spaces")
        const currentSlug = pathname.split('/').pop() || '';
        setActiveSection(currentSlug);
    }, [pathname]);

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end z-50 pr-2 pointer-events-none">
            {services.map(({ slug, title }) => {
                const isActive = activeSection === slug;
                return (
                    <Link
                        key={slug}
                        href={`/${slug}`}
                        className="group flex items-center gap-1 focus:outline-none cursor-pointer pointer-events-none"
                        aria-label={`Go to ${title}`}
                    >
                        <span
                            className="bg-[#41207be1] backdrop-blur-sm px-4 py-2 mr-4 rounded shadow-sm text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 ease-in-out opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            {title}
                        </span>

                        <div
                            className={`pointer-events-auto h-1 sm:h-[6px] rounded-full transition-all duration-500 ease-in-out ${isActive
                                ? 'w-8 sm:w-12 bg-[#41207be1]'
                                : 'w-4 sm:w-6 bg-[#D8D8F5] group-hover:w-6 sm:group-hover:w-10 group-hover:bg-[#41207bb7]'
                                }`}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
