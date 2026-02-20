'use client';

// HomeBackground — switches between old and new shader implementations.
// Set USE_ANTI_GRAVITY=true to activate the new cloud shader.
// The loading gating logic (requestIdleCallback) is preserved from the original.

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const USE_ANTI_GRAVITY = false; // ← Original Background.tsx shader

const DynamicBackground = dynamic(() =>
    USE_ANTI_GRAVITY
        ? import('./AntiGravityBackground')
        : import('./Background'),
    {
        ssr: false,
        loading: () => null,
    }
);

export default function HomeBackground() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleLoad = () => {
                if ('requestIdleCallback' in window) {
                    // Wait for browser idle — ensures LCP is painted first
                    (window as any).requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
                } else {
                    setTimeout(() => setShouldLoad(true), 800);
                }
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad, { once: true });
            }
        }
    }, []);

    return (
        <>
            {/* 
              Solid background color visible before WebGL loads.
              Matches the cloud shader's bgColor so there's no flash.
            */}
            <div
                className="fixed inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: -51, background: '#ffffff' }}
                aria-hidden="true"
            />
            {shouldLoad && <DynamicBackground />}
        </>
    );
}
