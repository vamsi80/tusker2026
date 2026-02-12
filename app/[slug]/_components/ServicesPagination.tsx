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
        <div className="w-full border-gray-200">
            <div className="grid grid-cols-2 ">
                <Link
                    href={`/${prevService.slug}`}
                    className="flex flex-col items-start justify-center hover:bg-gray-50 transition-colors group text-left"
                >
                    <div className="flex items-center gap-2 text-gray-400 mb-2 group-hover:text-black transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-medium uppercase tracking-widest">Previous</span>
                    </div>
                    <span className="text-md sm:text-md lg:text-md font-light tracking-tight text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                        {prevService.title}
                    </span>
                </Link>

                <Link
                    href={`/${nextService.slug}`}
                    className="flex flex-col items-end justify-center px-4 sm:px-8 hover:bg-gray-50 transition-colors group text-right"
                >
                    <div className="flex items-center gap-2 text-gray-400 mb-2 group-hover:text-black transition-colors">
                        <span className="text-sm font-medium uppercase tracking-widest">Next</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-md sm:text-md lg:text-md font-light tracking-tight text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                        {nextService.title}
                    </span>
                </Link>
            </div>
        </div>
    );
}
