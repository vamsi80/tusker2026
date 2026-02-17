'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import Background from '../layout/Background';

interface WaterButtonProps {
    href: string;
    label: string;
    className?: string;
    backgroundColor?: string;
}

export default function WaterButton({ href, label, className = "", backgroundColor = "#9175f9" }: WaterButtonProps) {
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

            tl.to(shineRef.current, {
                y: 6,
                scaleX: 1.1,
                scaleY: 0.8,
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

    const handleHover = () => {
        if (shineRef.current) {
            gsap.killTweensOf(shineRef.current);
            const tl = gsap.timeline();
            tl.to(shineRef.current, {
                y: 4,
                scaleX: 1.1,
                scaleY: 0.9,
                duration: 0.1,
                ease: "power2.out"
            })
                .to(shineRef.current, {
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.5,
                    ease: "elastic.out(1.2, 0.5)"
                });
        }
    };

    return (
        <Link
            href={href}
            className={`group relative inline-flex items-center justify-center rounded-full border border-[#8286e5] px-3 sm:px-5 py-1.5 sm:py-2 h-8 sm:h-10 overflow-hidden transition-colors uppercase tracking-widest text-[10px] sm:text-xs font-bold ${className}`}
            onClick={handleClick}
            onMouseEnter={handleHover}
        >
            <Background
                color={backgroundColor}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
                blur="5px"
                speed={0.2}
            />

            <div
                ref={shineRef}
                className="absolute top-4 sm:top-5 left-2 right-6 h-2/3 -translate-y-1/2 bg-linear-to-b from-white/40 to-transparent rounded-full opacity-60 pointer-events-none origin-center transform-gpu"
            />

            <span className="relative z-10 drop-shadow-sm pointer-events-none text-black/80 text-[10px] sm:text-xs xl:text-xs">{label}</span>
        </Link>
    );
}
