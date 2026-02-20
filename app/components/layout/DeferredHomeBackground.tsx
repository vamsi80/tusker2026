'use client';

// DeferredHomeBackground — Client Component wrapper that lazy-loads
// HomeBackground with ssr:false. This must live in a Client Component
// because next/dynamic with ssr:false is not permitted in Server Components.

import dynamic from 'next/dynamic';

const HomeBackground = dynamic(() => import('./HomeBackground'), {
    ssr: false,
    loading: () => null,
});

export default function DeferredHomeBackground() {
    return <HomeBackground />;
}
