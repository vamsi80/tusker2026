export default function Background() {
    return (
        <>
            <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.4] mix-blend-multiply">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15" />
                </svg>
            </div>

            <div className="fixed top-[-10%] right-[-5%] z-0 h-[500px] w-[500px] animate-pulse rounded-full bg-linear-to-br from-purple-200 via-purple-400 to-indigo-500 opacity-40 blur-[100px] duration-[4000ms]" />
            <div className="fixed bottom-[-10%] left-[20%] z-0 h-[600px] w-[600px] animate-pulse rounded-full bg-linear-to-tr from-indigo-200 via-purple-300 to-purple-600 opacity-40 blur-[120px] duration-[5000ms] delay-1000" />
            <div className="fixed top-[20%] left-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-linear-to-r from-purple-100 to-indigo-200 opacity-30 blur-[80px]" />
        </>
    );
}
