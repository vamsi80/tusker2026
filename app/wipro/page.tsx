import Viewer from "./Viewer";
import { wipro } from "./deck";
import { deckVersion } from "./version";

export default function Wipro() {
  return <Viewer {...wipro} v={deckVersion("wipro")} last={62} />;
}
