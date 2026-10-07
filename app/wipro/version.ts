import { createHash } from "crypto";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

// Hash of a deck's slide jpgs, computed at build. Slides are served immutable (next.config.ts),
// so replacing any jpg changes this and busts the browser cache without a manual version bump.
export function deckVersion(dir: string) {
  const root = join(process.cwd(), "public", dir);
  const h = createHash("md5");
  for (const f of readdirSync(root).filter((f) => f.endsWith(".jpg")).sort()) h.update(f).update(readFileSync(join(root, f)));
  return h.digest("hex").slice(0, 8);
}
