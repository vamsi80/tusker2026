'use client';

import dynamic from 'next/dynamic';

const Background = dynamic(() => import('./Background'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-50 w-full h-full bg-white" />
});

export default function DynamicBackground() {
    return <Background />;
}
