import fs from "node:fs";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  SERVICES,
  GALLERY_IMAGES,
  VIDEOS,
  CITIES,
  NEIGHBORHOODS,
  COMPANY_INFO,
} from "../constants";
const hash = (data: Buffer) =>
  crypto.createHash("sha256").update(data).digest("hex");
const before = JSON.parse(
  fs.readFileSync("docs/inventory-before.json", "utf8"),
);
const names = execFileSync(
  "git",
  [
    "-c",
    "core.quotepath=false",
    "ls-tree",
    "-r",
    "--name-only",
    before.commit,
    "public",
  ],
  { encoding: "utf8" },
)
  .trim()
  .split("\n");
before.assets = names.map((name) => ({
  name: name.slice(7),
  sha256: hash(
    execFileSync("git", ["show", before.commit + ":" + name], {
      maxBuffer: 5e6,
    }),
  ),
}));
fs.writeFileSync("docs/inventory-before.json", JSON.stringify(before, null, 2));
const images = before.assets.filter((a: { name: string }) =>
  /\.(jpg|png|webp|svg|ico)$/i.test(a.name),
);
const changedOriginalImages = images.filter(
  (a: { name: string; sha256: string }) =>
    !fs.existsSync("public/" + a.name) ||
    hash(fs.readFileSync("public/" + a.name)) !== a.sha256,
);
const galleryHashes = GALLERY_IMAGES.map((p) =>
  hash(fs.readFileSync("public" + p.image)),
);
const inventory = {
  services: SERVICES.map((s) => s.title),
  gallery: GALLERY_IMAGES,
  videos: VIDEOS,
  contacts: COMPANY_INFO,
  cities: CITIES.length,
  legacyLocalNames: NEIGHBORHOODS.length,
  routes: 1 + CITIES.length + NEIGHBORHOODS.length + SERVICES.length,
  servicePages: SERVICES.length,
  indexableRoutes: 1 + CITIES.length + NEIGHBORHOODS.length + SERVICES.length,
  originalImageFiles: images.length,
  changedOriginalImages,
  duplicateGalleryHashes: galleryHashes.length - new Set(galleryHashes).size,
  addedAssets: ["suprema-oficial.svg", "local-curitiba.svg", "local-sjp.svg"],
};
fs.writeFileSync(
  "docs/inventory-after.json",
  JSON.stringify(inventory, null, 2),
);
if (changedOriginalImages.length || inventory.duplicateGalleryHashes)
  throw new Error("Inventory mismatch");
console.log(
  JSON.stringify({
    services: SERVICES.length,
    gallery: GALLERY_IMAGES.length,
    videos: VIDEOS.length,
    routes: inventory.routes,
    images: images.length,
    changed: changedOriginalImages.length,
    duplicates: inventory.duplicateGalleryHashes,
  }),
);
