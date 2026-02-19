'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:bottom-6 sm:right-4 md:right-5 lg:right-6 xl:right-8 z-50">
            <button
                onClick={scrollToTop}
                className="group flex h-12 items-center rounded-full bg-[#41207be1] text-white shadow-lg transition-all duration-300 ease-in-out hover:w-auto hover:pr-4 cursor-pointer"
                aria-label="Back to top"
            >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <ArrowUp className="h-5 w-5" />
                </div>
                <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[100px]">
                    Back to top
                </span>
            </button>
        </div>
    );
}
