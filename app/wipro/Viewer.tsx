"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

// Slides exported from public/Wipro.pptx as public/wipro/{n}.jpg; videos extracted as public/wipro/mediaN.mp4.
// Video boxes are % of the slide (x, y, w, h), taken from the PPT so they sit exactly where the poster frame is.
const videos: Record<number, [string, number, number, number, number][]> = {
  11: [["media1", 4.927, 17.704, 65.073, 65.073]],
  15: [["media2", 5, 35.819, 55, 55]],
  18: [["media3", 5.156, 26.292, 53.594, 53.594], ["media4", 60.36, 26.95, 37.14, 36.424]],
  20: [["media5", 5.664, 33.628, 44.642, 44.642], ["media6", 51.25, 33.731, 44.642, 44.642]],
  22: [["media7", 30.043, 26.667, 64.369, 64.774]],
  25: [["media8", 35, 26.667, 60.625, 60.625]],
  26: [["media9", 47.579, 26.484, 47.514, 47.514]],
  32: [["media10", 5, 35.763, 52.987, 52.987]],
  33: [["media11", 5, 35.15, 51, 51.378]],
  34: [["media12", 5, 34.89, 50, 50]],
  35: [["media13", 5, 35.972, 52.917, 52.917]],
  40: [["media14", 5.104, 35.486, 52.708, 52.708]],
  41: [["media15", 5, 35.521, 52.187, 52.187]],
  42: [["media16", 5.016, 35, 52.222, 52.222]],
  46: [["media17", 5, 35.217, 51.866, 51.866]],
  47: [["media18", 5, 35.486, 50, 50]],
  48: [["media19", 5, 35.652, 52.187, 52.187]],
};
// Clickable hotspots over URLs baked into the slide image, same % box format.
const links: Record<number, [string, number, number, number, number][]> = {
  10: [["https://flight-simulation-bice.vercel.app/", 4.9, 76.4, 31.4, 4.8]],
};

const btn = "absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 disabled:opacity-0";

// Shows slides first..last of the deck; counter is relative to the range.
export default function Viewer({ first, last }: { first: number; last: number }) {
  const [n, setN] = useState(first);
  const go = (d: number) => setN((s) => Math.min(last, Math.max(first, s + d)));

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
        <img src={`/wipro/${n}.jpg`} alt={`Slide ${n}`} className="absolute inset-0 w-full h-full" />
        {videos[n]?.map(([src, x, y, w, h]) => (
          <video key={src} src={`/wipro/${src}.mp4`} autoPlay loop controls playsInline
            className="absolute object-cover"
            style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }} />
        ))}
        {links[n]?.map(([href, x, y, w, h]) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={href}
            className="absolute cursor-pointer hover:bg-blue-500/10"
            style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }} />
        ))}
        {/* preload next slide */}
        {n < last && <link rel="preload" as="image" href={`/wipro/${n + 1}.jpg`} />}
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
