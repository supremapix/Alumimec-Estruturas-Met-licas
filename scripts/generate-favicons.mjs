import { Buffer } from "node:buffer";
import { chromium } from "playwright";
import fs from "node:fs";
// Render the existing, verified Alumimec vector symbol. No new logo is drawn.
const source = fs.readFileSync("public/favicon.svg", "utf8");
const b = await chromium.launch();
const p = await b.newPage({ deviceScaleFactor: 1 });
const icons = [
  [16, "favicon-16x16.png"],
  [32, "favicon-32x32.png"],
  [48, "favicon-48x48.png"],
  [96, "favicon-96x96.png"],
  [180, "apple-touch-icon.png"],
  [192, "web-app-manifest-192x192.png"],
  [512, "web-app-manifest-512x512.png"],
  [512, "maskable-icon-512x512.png"],
];
for (const [size, file] of icons) {
  await p.setViewportSize({ width: size, height: size });
  const svg = source.replace(
    'width="512" height="512"',
    `width="${size}" height="${size}"`,
  );
  const mask = file.startsWith("maskable");
  await p.setContent(
    `<style>body{margin:0;background:white;display:grid;place-items:center;width:100vw;height:100vh}svg{width:${mask ? 70 : 100}%;height:${mask ? 70 : 100}%}</style>${svg}`,
  );
  await p.screenshot({ path: "public/" + file });
}
const pngs = [16, 32, 48].map((n) =>
  fs.readFileSync(`public/favicon-${n}x${n}.png`),
);
const head = Buffer.alloc(6 + 16 * 3);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(3, 4);
let offset = head.length;
pngs.forEach((png, i) => {
  const p = 6 + i * 16;
  head[p] = [16, 32, 48][i];
  head[p + 1] = head[p];
  head.writeUInt16LE(1, p + 4);
  head.writeUInt16LE(32, p + 6);
  head.writeUInt32LE(png.length, p + 8);
  head.writeUInt32LE(offset, p + 12);
  offset += png.length;
});
fs.writeFileSync("public/favicon.ico", Buffer.concat([head, ...pngs]));
await b.close();
