'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicBackground = dynamic(() => import('./Background'), {
    ssr: false,
    loading: () => null
});

export default function HomeBackground() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleLoad = () => {
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => setShouldLoad(true));
                } else {
                    setTimeout(() => setShouldLoad(true), 500);
                }
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
                return () => window.removeEventListener('load', handleLoad);
            }
        }
    }, []);

    return (
        <>
            <div
                className="fixed inset-0 -z-50 w-full h-full pointer-events-none transition-opacity duration-1000 bg-white"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, #eff6ff 0%, #dbeafe 100%)',
                    zIndex: -51
                }}
            />
            {shouldLoad && <DynamicBackground />}
        </>
    );
}
