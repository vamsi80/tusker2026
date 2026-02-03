export default function FixedSidebar() {
    return (
        <div className="fixed bottom-6 left-6 md:left-12 z-40 flex flex-col items-start">
            {/* Sidebar Text - Rotates upwards from the date */}
            <div className="relative hidden md:block ml-[0.35rem]">
                <span className="absolute bottom-0 left-[0.7rem] origin-bottom-left -rotate-90 whitespace-nowrap text-[10px] font-medium tracking-[0.2em] text-[#9CA3AF] sm:text-xs">
                    + WELCOME TO THE WORLD OF WHITE TUSKER
                </span>
            </div>

            {/* Date Block */}
            <div className="flex flex-col gap-0 text-xl font-bold leading-none tracking-tight text-black sm:text-3xl">
                <div>++</div>
                <div>20</div>
                <div>26</div>
            </div>
        </div>
    );
}
