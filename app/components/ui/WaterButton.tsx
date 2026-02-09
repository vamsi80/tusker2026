'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

interface WaterButtonProps {
    href: string;
    label: string;
    className?: string;
}

export default function WaterButton({ href, label, className = "" }: WaterButtonProps) {
    const shineRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (shineRef.current) {
            gsap.killTweensOf(shineRef.current);
            const tl = gsap.timeline({
                onComplete: () => {
                    router.push(href);
                }
            });

            // Bounce Animation
            tl.to(shineRef.current, {
                y: 6,           // Move down
                scaleX: 1.1,
                scaleY: 0.8,    // Squash
                duration: 0.15,
                ease: "power2.out"
            })
                .to(shineRef.current, {
                    y: -2,          // Overshoot
                    scaleX: 0.9,
                    scaleY: 1.1,
                    duration: 0.15,
                    ease: "power2.in"
                })
                .to(shineRef.current, {
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.6,
                    ease: "elastic.out(1.2, 0.4)"
                });
        } else {
            router.push(href);
        }
    };

    return (
        <Link
            href={href}
            className={`group relative inline-flex items-center justify-center rounded-full bg-[#8286e5] text-white px-5 py-2 h-10 overflow-hidden transition-colors uppercase tracking-widest text-xs font-bold ${className}`}
            onClick={handleClick}
        >
            <div
                ref={shineRef}
                className="absolute top-4 left-2 right-2 h-1/2 -translate-y-1/2 bg-linear-to-b from-white/40 to-transparent rounded-full opacity-60 pointer-events-none origin-center transform-gpu"
            />

            <span className="relative z-10 drop-shadow-sm pointer-events-none">{label}</span>
        </Link>
    );
}
