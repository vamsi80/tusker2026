import Viewer from "../wipro/Viewer";

export const metadata = { title: "Wipro x SAP", robots: { index: false, follow: false } };

// The 9 SAP slides from the main Wipro deck.
export default function WiproSap() {
  return <Viewer first={49} last={57} />;
}
