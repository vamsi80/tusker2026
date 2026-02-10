'use client';

import Image from 'next/image';

export default function TeamSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-4 px-4">
                <h2 className="text-2xl font-normal tracking-tight text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase">
                    Our Team
                </h2>
                <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    “Where thinking, craft, and technology move as one.”
                </p>
            </div>

            <div className="w-full">
                <img
                    src="/teams.jpg"
                    alt="Our Team"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
