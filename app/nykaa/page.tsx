import Viewer from "../wipro/Viewer";
import type { Boxes } from "../wipro/Viewer";

export const metadata = { title: "Nykaa", robots: { index: false, follow: false } };

// Slides exported from "White_Tusker_Nykaa_Retail_Experience_Proposal.pptx" as public/nykaa/{n}.jpg (1920x1080).
// Link boxes are the PPT's hyperlinked source citations.
const links: Boxes = {
  2: [["https://www.nykaa.com/media/wysiwyg/uiTools/2026-8/Transcript-of-the-Conference-Call-for-Analyst-Investors-Q1-FY27.pdf", 4.861, 86.667, 24.908, 2.489]],
  3: [
    ["https://www.perfectcorp.com/business/successstory/Clinique-AR-Solutions-Success-Story", 4.861, 80.494, 11.413, 2.489],
    ["https://www.ideo.com/case-study/sephora", 36.667, 80.494, 14.862, 2.489],
    ["https://rfid.averydennison.com/content/rfid/na/en/home/news-insights/case-studies/rfid-case-study-beauty-boticario.html", 68.333, 80.494, 14.746, 2.489],
  ],
};

export default function Nykaa() {
  return <Viewer dir="nykaa" v={process.env.DECK_V_NYKAA} links={links} last={10} />;
}
