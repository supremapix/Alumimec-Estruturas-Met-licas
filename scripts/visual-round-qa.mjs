import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs";
const b = await chromium.launch();
const p = await b.newPage({reducedMotion:"reduce"});
const results = [];
for (const width of [320, 360, 390, 430, 1440]) {
  await p.setViewportSize({ width, height: 1000 });
  await p.goto("http://127.0.0.1:4174");
  await p.locator("main img").evaluateAll(async (imgs) => {
    await Promise.all(
      imgs.map((img) => {
        img.loading = "eager";
        return img.decode();
      }),
    );
  });
  await p.setViewportSize({width,height:16000});
  await p
    .locator("#servicos")
    .screenshot({ path: `docs/qa/cards-after-${width}.png` });
  await p
    .locator("#galeria")
    .screenshot({ path: `docs/qa/gallery-after-${width}.png` });
  await p.setViewportSize({width,height:1000});
  await p.locator(".gallery-grid .photo-frame").nth(5).click();
  assert.equal(await p.locator(".photo-dialog[open]").count(), 1);
  await p.keyboard.press("Escape");
  assert.equal(await p.locator(".photo-dialog[open]").count(), 0);
  assert.ok(
    await p
      .locator(".gallery-grid .photo-frame")
      .nth(5)
      .evaluate((e) => e === document.activeElement),
  );
  const trigger = p.locator(".floating-contact button").first();
  await trigger.click();
  assert.ok(
    (await p.locator("dialog[open] a").first().getAttribute("href")).startsWith(
      "https://wa.me/?text=",
    ),
  );
  await p.screenshot({ path: `docs/qa/share-${width}.png` });
  await p.keyboard.press("Escape");
  assert.ok(await trigger.evaluate((e) => e === document.activeElement));
  const overflow = await p.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  assert.equal(overflow, false);
  results.push({
    width,
    photoEscapeFocus: true,
    shareEscapeFocus: true,
    overflow,
  });
}
await p.emulateMedia({ reducedMotion: "reduce" });
await p.locator("#processo").scrollIntoViewIfNeeded();
assert.equal(await p.locator(".process-steps li").count(), 6);
assert.equal(
  await p
    .locator(".step-marker")
    .first()
    .evaluate((e) => window.getComputedStyle(e).animationName),
  "none",
);
fs.writeFileSync("docs/qa/visual-round.json", JSON.stringify(results, null, 2));
await b.close();


