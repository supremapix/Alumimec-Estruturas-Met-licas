import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import assert from "node:assert/strict";
const inv = JSON.parse(
  fs.readFileSync("docs/territorial-inventory.json", "utf8"),
);
const paths = inv.municipalities.flatMap((c) => c.completedGuides);
const b = await chromium.launch();
const context = await b.newContext();
const p = await context.newPage();
const results = [];
const errors = [];
p.on("pageerror", (e) => errors.push(e.message));
for (const route of paths) {
  for (const width of [320, 360, 390, 430, 1440]) {
    await p.setViewportSize({ width, height: 1000 });
    await p.goto("http://127.0.0.1:4174" + route);
    await p
      .locator("main img")
      .evaluateAll((imgs) => Promise.all(imgs.map((img) => img.decode())));
    assert.equal(await p.locator("h1").count(), 1);
    assert.equal(await p.locator("main details").count(), 3);
    assert.equal(await p.locator("main .local-art").count(), 1);
    const overflow = await p.evaluate(() => {
      const e = document.querySelector(".app-scroll");
      return e.scrollWidth > e.clientWidth;
    });
    assert.equal(overflow, false, route + width);
    if (width === 390) {
      const a = await new AxeBuilder({ page: p })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      assert.deepEqual(
        a.violations.map((v) => v.id),
        [],
        route,
      );
      await p.screenshot({
        path: "docs/qa/local-" + route.split("/").at(-1) + ".png",
      });
    }
    results.push({ route, width, overflow: false });
  }
  await p.setViewportSize({ width: 390, height: 1000 });
  await p.evaluate(() => (document.documentElement.style.fontSize = "36px"));
  assert.equal(
    await p.evaluate(() => {
      const e = document.querySelector(".app-scroll");
      return e.scrollWidth > e.clientWidth;
    }),
    false,
    route + "200%",
  );
  await p.evaluate(() => (document.documentElement.style.fontSize = ""));
}
assert.deepEqual(errors, []);
fs.writeFileSync(
  "docs/qa/territorial.json",
  JSON.stringify(
    {
      guides: paths.length,
      viewports: results.length,
      axeScans: paths.length,
      text200: paths.length,
      errors,
      results,
    },
    null,
    2,
  ),
);
await b.close();
console.log("12 guides, 60 viewports, 12 axe scans, 200% text passed");
