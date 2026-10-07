import type { Boxes, Deck } from "./Viewer";

// Slides exported from public/Wipro.pptx as public/wipro/{n}.jpg; videos extracted as public/wipro/mediaN.mp4.
// Video boxes are % of the slide (x, y, w, h), taken from the PPT so they sit exactly where the poster frame is.
const videos: Boxes = {
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
const links: Boxes = {
  10: [["https://flight-simulation-bice.vercel.app/", 4.9, 76.4, 31.4, 4.8]],
};

export const wipro: Deck = { dir: "wipro", videos, links };
