'use client';

import dynamic from 'next/dynamic';

const Background = dynamic(() => import('./Background'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-50 w-full h-full" style={{ background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e6e0fd 100%)' }} />
});

export default function DynamicBackground() {
    return <Background />;
}
