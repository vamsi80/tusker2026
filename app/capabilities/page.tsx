import Viewer from "../wipro/Viewer";
import type { Boxes } from "../wipro/Viewer";
import { deckVersion } from "../wipro/version";

export const metadata = { title: "Capabilities", robots: { index: false, follow: false } };

// Slides exported from "WT capabilities - updated.pptx" as public/capabilities/{n}.jpg (1920x1080).
// Boxes are taken from the PPT: videos sit over the poster cards, links over the "Watch on YouTube" / "Play our film" text.
// cms-film / trava-film are the PPT's embedded videos, copied as-is to public/capabilities.
// To swap a video, just change its URL here (YouTube, mp4 URL, or a file name in public/capabilities); a new card title needs a slide re-export.
const videos: Boxes = {
  3: [["https://www.youtube.com/embed/_WcRgc-3eAw", 46.125, 17.333, 32.625, 32.625], ["https://www.youtube.com/embed/3J0qc44Ak4o", 62.85, 56.667, 32.625, 32.625]],
  4: [["https://www.youtube.com/embed/-DtLKZLol4A", 62.85, 56.667, 32.625, 32.625]],
  5: [["cms-film", 46.125, 20.667, 49.35, 49.35]],
  6: [
    ["https://www.youtube.com/embed/Jcr26K20E9U", 4.5, 66.667, 21.45, 21.45],
    ["https://www.youtube.com/embed/CVCGhByzqjM", 27.6, 66.667, 21.45, 21.45],
    ["https://www.youtube.com/embed/ws0vMwz79tg", 50.7, 66.667, 21.45, 21.45],
    ["https://www.youtube.com/embed/idiOkv8ofYA", 73.8, 66.667, 21.45, 21.45],
  ],
  7: [["https://www.youtube.com/embed/T9LgH1Ae2CE", 46.125, 20.667, 49.35, 49.35]],
  8: [["https://www.youtube.com/embed/uj7_AwQV9rE", 46.125, 20.667, 49.35, 49.35]],
  9: [["trava-film", 46.125, 17.333, 32.625, 32.625]],
  10: [["https://pub-b087a9a8256a4a79a4c2272b6883f1cd.r2.dev/brand-film-1080p.mp4", 46.125, 20.667, 49.35, 49.35]],
};
const links: Boxes = {
  3: [["https://www.youtube.com/watch?v=_WcRgc-3eAw", 46.125, 50.758, 13.5, 3.467], ["https://www.youtube.com/watch?v=3J0qc44Ak4o", 62.85, 90.092, 13.5, 3.467]],
  4: [
    ["https://data-art-studio.vercel.app/", 46.125, 17.333, 32.625, 32.625],
    ["https://data-art-studio.vercel.app/", 46.125, 50.758, 13.5, 3.467],
    ["https://www.youtube.com/watch?v=-DtLKZLol4A", 62.85, 90.092, 13.5, 3.467],
  ],
  6: [
    ["https://www.youtube.com/watch?v=Jcr26K20E9U", 4.5, 88.917, 13.5, 3.467],
    ["https://www.youtube.com/watch?v=CVCGhByzqjM", 27.6, 88.917, 13.5, 3.467],
    ["https://www.youtube.com/watch?v=ws0vMwz79tg", 50.7, 88.917, 13.5, 3.467],
    ["https://www.youtube.com/watch?v=idiOkv8ofYA", 73.8, 88.917, 13.5, 3.467],
  ],
  7: [["https://www.youtube.com/watch?v=T9LgH1Ae2CE", 46.125, 70.817, 13.5, 3.467]],
  8: [["https://www.youtube.com/watch?v=uj7_AwQV9rE", 46.125, 70.817, 13.5, 3.467]],
  9: [
    ["https://tusker-managment.vercel.app/", 7.125, 87.6, 6.375, 3.733],
    ["https://hospital-management-system-mu-pied.vercel.app/", 15.375, 87.6, 3.375, 3.733],
    // ponytail: hms-intro.mp4 is 404 on R2; move it to videos once it's uploaded.
    ["https://pub-b087a9a8256a4a79a4c2272b6883f1cd.r2.dev/hms-intro.mp4", 62.85, 56.667, 32.625, 32.625],
    ["https://pub-b087a9a8256a4a79a4c2272b6883f1cd.r2.dev/hms-intro.mp4", 62.85, 90.092, 13.5, 3.467],
  ],
  10: [["https://pub-b087a9a8256a4a79a4c2272b6883f1cd.r2.dev/brand-film-1080p.mp4", 46.125, 70.817, 13.5, 3.467]],
  12: [["https://www.thewhitetusker.com/", 43.811, 67.867, 15.75, 4.267]],
};

export default function Capabilities() {
  return <Viewer dir="capabilities" v={deckVersion("capabilities")} videos={videos} links={links} last={12} />;
}
