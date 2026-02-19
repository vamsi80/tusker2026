export default function FixedSidebar() {
    return (
        <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-4 md:left-5 lg:left-6 xl:left-8 z-40 flex-col items-start hidden sm:flex">
            <div className="relative block ml-[0.35rem]">
                <span className="absolute bottom-0 left-[0.4rem] origin-bottom-left -rotate-90 whitespace-nowrap text-[9px] font-semibold tracking-[0.2em] text-black sm:text-[10px] lg:text-xs">
                    + WELCOME TO THE WORLD OF WHITE TUSKER
                </span>
            </div>
            <div className="flex flex-col gap-0 text-lg font-bold leading-none tracking-widest text-black sm:text-2xl lg:text-2xl xl:text-3xl scale-x-[1.18]">
                <div>++</div>
                <div>20</div>
                <div>26</div>
            </div>
        </div>
    );
}
