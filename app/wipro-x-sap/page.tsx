import Viewer from "../wipro/Viewer";
import { wipro } from "../wipro/deck";
import { deckVersion } from "../wipro/version";

export const metadata = { title: "Wipro x SAP", robots: { index: false, follow: false } };

// The 9 SAP slides from the main Wipro deck.
export default function WiproSap() {
  return <Viewer {...wipro} v={deckVersion("wipro")} first={49} last={57} />;
}
