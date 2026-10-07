import Viewer from "./Viewer";
import { wipro } from "./deck";

export default function Wipro() {
  return <Viewer {...wipro} v={process.env.DECK_V_WIPRO} last={62} />;
}
