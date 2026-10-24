import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import assert from "node:assert/strict";
const base = process.env.QA_BASE || "http://127.0.0.1:4174";
const browser = await chromium.launch();
const context = await browser.newContext();
const p = await context.newPage();
const results = [];
for (const width of [320, 360, 390, 430, 1440]) {
  await p.setViewportSize({ width, height: 1000 });
  await p.goto(base, { waitUntil: "domcontentloaded" });
  assert.equal(await p.locator("[data-instagram-section]").count(), 3);
  for (const size of ["18px", "36px"]) {
    await p.evaluate(
      (s) => (document.documentElement.style.fontSize = s),
      size,
    );
    for (const section of await p.locator("[data-instagram-section]").all()) {
      await section.scrollIntoViewIfNeeded();
      await p.waitForTimeout(650);
      const iframe = section.locator("iframe");
      assert.equal(
        await iframe.getAttribute("src"),
        "https://www.instagram.com/alumimec/embed",
      );
      assert.equal(await iframe.getAttribute("loading"), "lazy");
      assert.ok(await iframe.getAttribute("title"));
      const link = section.locator("a");
      assert.equal(
        await link.getAttribute("href"),
        "https://www.instagram.com/alumimec/",
      );
      await link.focus();
      assert.equal(
        await link.evaluate((e) => e === document.activeElement),
        true,
      );
      assert.ok((await link.boundingBox()).height >= 56);
      assert.equal(
        await p.evaluate(() => {
          const e = document.querySelector(".app-scroll");
          return e.scrollWidth > e.clientWidth;
        }),
        false,
      );
      const box = await iframe.boundingBox();
      assert.ok(
        Math.abs(box.width / box.height - (width < 640 ? 9 / 11 : 4 / 5)) <
          0.02,
      );
      results.push({
        width,
        size,
        placement: await section.getAttribute("data-instagram-section"),
        overflow: false,
      });
    }
    const main = await p.locator(".app-scroll").boundingBox();
    const dock = await p.locator(".floating-contact").boundingBox();
    assert.ok(main.y + main.height <= dock.y + 1);
  }
  await p.evaluate(() => (document.documentElement.style.fontSize = "18px"));
  if (width === 390) {
    const violations = (
      await new AxeBuilder({ page: p })
        .include("[data-instagram-section]")
        .withTags(["wcag2a", "wcag2aa"])
        .analyze()
    ).violations;
    assert.deepEqual(
      violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
    );
  }
  if (width === 320 || width === 1440) {
    await p.locator("#instagram-home").scrollIntoViewIfNeeded();
    await p.screenshot({ path: `docs/qa/instagram-${width}.png` });
  }
}
await p.emulateMedia({ reducedMotion: "reduce" });
for (const path of ["/", "/#sobre", "/#contato"]) {
  await p.goto(base + path, { waitUntil: "domcontentloaded" });
  assert.equal(await p.locator("[data-instagram-section]").count(), 3);
  await p.locator("#instagram-contato").scrollIntoViewIfNeeded();
  assert.equal(
    await p
      .locator("#instagram-contato > div")
      .last()
      .evaluate((e) => window.getComputedStyle(e).opacity),
    "1",
  );
}
await p.locator("#instagram-home").scrollIntoViewIfNeeded();
await p.waitForTimeout(5000);
const frames = [];
for (const frame of p
  .frames()
  .filter((f) => f.url().includes("instagram.com"))) {
  frames.push({
    url: frame.url(),
    notice: await frame
      .locator("body")
      .innerText({ timeout: 5000 })
      .then((t) => t.slice(0, 300))
      .catch(() => "Unavailable"),
  });
}
await browser.close();
fs.writeFileSync(
  "docs/qa/instagram.json",
  JSON.stringify(
    {
      base,
      checkedAt: new Date().toISOString(),
      results,
      anchors: ["/", "/#sobre", "/#contato"],
      reducedMotion: true,
      frames,
    },
    null,
    2,
  ),
);
console.log(JSON.stringify({ checks: results.length, frames }));
