"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

export type Boxes = Record<number, [string, number, number, number, number][]>;
export type Deck = { dir: string; v?: string; videos?: Boxes; links?: Boxes };

const btn = "absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 disabled:opacity-0";

// Shows slides first..last of public/{dir}/{n}.jpg; counter is relative to the range.
// Video and link boxes are % of the slide (x, y, w, h). A video src is a file name in public/{dir}, a full mp4 URL, or a YouTube URL.
export default function Viewer({ dir, v = "", videos = {}, links = {}, first = 1, last }: Deck & { first?: number; last: number }) {
  const [n, setN] = useState(first);
  // On slides with several videos none autoplay; clicking one plays it and returns the others to their poster.
  const [active, setActive] = useState<string | null>(null);
  const go = (d: number) => { setActive(null); setN((s) => Math.min(last, Math.max(first, s + d))); };
  const solo = videos[n]?.length === 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
      if (e.key === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center select-none">
      <div className="relative aspect-video w-[min(100vw,calc(100vh*16/9))]">
        <img src={`/${dir}/${n}.jpg?v=${v}`} alt={`Slide ${n}`} className="absolute inset-0 w-full h-full" />
        {videos[n]?.map(([src, x, y, w, h]) => {
          const style = { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` };
          if (!solo && active !== src)
            return <button key={src} onClick={() => setActive(src)} aria-label="Play video" className="absolute cursor-pointer hover:bg-white/5" style={style} />;
          const yt = src.match(/youtube\.com\/(?:embed\/|watch\?v=)([\w-]+)/)?.[1];
          return yt
            ? <iframe key={src} src={`https://www.youtube.com/embed/${yt}?autoplay=1&mute=${solo ? 1 : 0}&loop=1&playlist=${yt}&playsinline=1&rel=0`}
                allow="autoplay; fullscreen; encrypted-media" allowFullScreen className="absolute" style={style} />
            : <video key={src} src={src.includes("/") ? src : `/${dir}/${src}.mp4`} autoPlay loop controls playsInline
                className="absolute object-cover" style={style} />;
        })}
        {links[n]?.map(([href, x, y, w, h], i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={href}
            className="absolute cursor-pointer hover:bg-blue-500/10"
            style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }} />
        ))}
        {/* preload next slide */}
        {n < last && <link rel="preload" as="image" href={`/${dir}/${n + 1}.jpg?v=${v}`} />}
      </div>

      <button onClick={() => go(-1)} disabled={n === first} aria-label="Previous slide" className={`${btn} left-4`}><ChevronLeft /></button>
      <button onClick={() => go(1)} disabled={n === last} aria-label="Next slide" className={`${btn} right-4`}><ChevronRight /></button>

      <div className="absolute bottom-3 left-4 z-10 flex items-center gap-3 text-white/70 text-sm">
        {n - first + 1} / {last - first + 1}
        <button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Fullscreen" className="hover:text-white">
          <Maximize size={18} />
        </button>
      </div>
    </div>
  );
}
