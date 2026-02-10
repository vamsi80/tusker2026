'use client';

import { useState, useEffect } from 'react';

const sections = [
    { id: 'interior-spaces', label: 'Interior Spaces' },
    { id: 'interactive-tech', label: 'Interactive Tech' },
    { id: 'brand-solutions', label: 'Brand Solutions' },
    { id: 'brand-films', label: 'Brand Films' },
];

export default function SectionNavigation() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -50% 0px',
                threshold: 0
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end z-50">
            {sections.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="group flex items-center gap-1 focus:outline-none cursor-pointer"
                        aria-label={`Scroll to ${label}`}
                    >
                        <span
                            className="bg-[#41207be1] backdrop-blur-sm px-4 py-2 mr-4 rounded shadow-sm text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 ease-in-out opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            {label}
                        </span>

                        <div
                            className={`h-[6px] rounded-full transition-all duration-500 ease-in-out ${isActive
                                ? 'w-12 bg-[#41207be1]'
                                : 'w-6 bg-[#D8D8F5] group-hover:w-10 group-hover:bg-[#41207bb7]'
                                }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}
