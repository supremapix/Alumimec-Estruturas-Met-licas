import fs from "node:fs";
import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const routes = JSON.parse(
  fs.readFileSync(".prerender-routes.json", "utf8"),
).filter((r) => r.type === "service");
assert.equal(routes.length, 6);
const browser = await chromium.launch();
const context = await browser.newContext({ reducedMotion: "reduce" });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const results = [];
for (const route of routes) {
  for (const width of [320, 360, 390, 430, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const response = await page.goto("http://127.0.0.1:4174" + route.path, {
      waitUntil: "networkidle",
    });
    assert.ok(
      (await response.text()).includes(
        'href="https://www.alumimec.com.br' + route.path + '"',
      ),
      "Preview must serve the route HTML",
    );
    await page
      .locator("main img")
      .evaluateAll((imgs) =>
        Promise.all(imgs.map((i) => ((i.loading = "eager"), i.decode()))),
      );
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator("main details").count(), 3);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route.path + " " + width,
    );
    if (width === 390 || width === 1440) {
      const a = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      results.push({
        route: route.path,
        width,
        axe: a.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      });
    }
    await page.screenshot({
      path:
        "docs/qa/service-" + route.path.split("/").pop() + "-" + width + ".png",
    });
    await page.evaluate(
      () => (document.documentElement.style.fontSize = "36px"),
    );
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route.path + " text200 " + width,
    );
  }
}
for (const route of [
  "/cidade/curitiba",
  "/cidade/sao-jose-dos-pinhais",
  "/cidade/colombo",
]) {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("http://127.0.0.1:4174" + route);
  assert.equal(await page.locator(".region .process-grid article").count(), 6);
  await page.locator(".region").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: "docs/qa/municipal-" + route.split("/").pop() + ".png",
  });
  await page.evaluate(() => (document.documentElement.style.fontSize = "36px"));
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  );
}
fs.writeFileSync(
  "docs/qa/service-results.json",
  JSON.stringify(
    {
      serviceRoutes: 6,
      widths: [320, 360, 390, 430, 1440],
      text200: true,
      municipalSamples: 3,
      results,
      errors,
    },
    null,
    2,
  ),
);
await browser.close();
assert.deepEqual(errors, []);
assert.ok(
  results.every((r) => r.axe.length === 0),
  "See service-results.json",
);
console.log(
  "Six service pages: 30 viewports, text 200%, 12 axe scans and 3 municipal samples passed.",
);
