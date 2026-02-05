'use client';

import { Plus } from 'lucide-react';

export default function MoreOptions() {
    return (
        <div className="fixed bottom-8 right-6 z-50">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 active:scale-95">
                <Plus className="h-6 w-6" />
            </button>
        </div>
    );
}
