'use client';

import Link from 'next/link';
import { services } from '@/app/data';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ServicesPagination() {
    const pathname = usePathname();
    const currentSlug = pathname.split('/').pop() || '';

    const currentIndex = services.findIndex(s => s.slug === currentSlug);

    if (currentIndex === -1) return null;

    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;

    const prevService = services[prevIndex];
    const nextService = services[nextIndex];

    return (
        <div className="w-full border-gray-200 p-4">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <Link
                    href={`/${prevService.slug}`}
                    className="flex flex-col items-start justify-center hover:bg-gray-50 transition-colors group text-left p-2 sm:p-4 rounded-lg"
                >
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1 sm:mb-2 group-hover:text-black transition-colors">
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest">Previous</span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base lg:text-xl font-light tracking-tight text-gray-900 group-hover:underline decoration-1 underline-offset-4 line-clamp-2 sm:line-clamp-none">
                        {prevService.title}
                    </span>
                </Link>

                <Link
                    href={`/${nextService.slug}`}
                    className="flex flex-col items-end justify-center hover:bg-gray-50 transition-colors group text-right p-2 sm:p-4 rounded-lg"
                >
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-400 mb-1 sm:mb-2 group-hover:text-black transition-colors">
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest">Next</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base lg:text-xl font-light tracking-tight text-gray-900 group-hover:underline decoration-1 underline-offset-4 line-clamp-2 sm:line-clamp-none">
                        {nextService.title}
                    </span>
                </Link>
            </div>
        </div>
    );
}
