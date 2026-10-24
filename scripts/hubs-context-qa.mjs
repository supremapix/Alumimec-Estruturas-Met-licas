import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import assert from "node:assert/strict";
const base = process.env.QA_BASE || "http://127.0.0.1:4174";
const routes = JSON.parse(
  fs.readFileSync(".prerender-routes.json", "utf8"),
).filter((r) => ["application", "coverage"].includes(r.type));
const b = await chromium.launch();
const context = await b.newContext();
const p = await context.newPage();
const errors = [];
p.on("pageerror", (e) => errors.push(e.message));
let views = 0,
  opens = 0;
for (const r of routes) {
  for (const width of [320, 360, 390, 430, 1440]) {
    await p.setViewportSize({ width, height: 950 });
    await p.goto(base + r.path);
    assert.equal(await p.locator("h1").count(), 1);
    assert.equal(
      await p
        .locator(".app-scroll")
        .evaluate((e) => e.scrollWidth > e.clientWidth),
      false,
      r.path + width,
    );
    views++;
    if (width === 390) {
      assert.deepEqual(
        (
          await new AxeBuilder({ page: p })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        ).violations.map((v) => v.id),
        [],
      );
      await p.screenshot({
        path: "docs/qa/hub-" + r.path.split("/").at(-1) + ".png",
      });
    }
    if (width === 320) {
      await p.evaluate(
        () => (document.documentElement.style.fontSize = "36px"),
      );
      assert.equal(
        await p
          .locator(".app-scroll")
          .evaluate((e) => e.scrollWidth > e.clientWidth),
        false,
        r.path + "200%",
      );
    }
  }
}
for (const width of [320, 390, 430, 1440]) {
  await p.setViewportSize({ width, height: 950 });
  await p.goto(base + "/");
  const triggers = p.locator(
    '[aria-haspopup="dialog"][aria-label^="Entender:"]',
  );
  assert.equal(await triggers.count(), 10);
  for (let i = 0; i < 10; i++) {
    const t = triggers.nth(i);
    await t.scrollIntoViewIfNeeded();
    await t.focus();
    const before = await p.locator(".app-scroll").evaluate((e) => e.scrollTop);
    await p.keyboard.press("Enter");
    const d = p.locator(".context-dialog[open]");
    await d.waitFor();
    assert.equal(await d.count(), 1);
    assert.equal(
      await d
        .locator(".dialog-close")
        .evaluate((e) => window.getComputedStyle(e).backgroundColor),
      "rgb(23, 35, 34)",
    );
    assert.equal(
      await d
        .locator("img")
        .evaluate((e) => window.getComputedStyle(e).objectFit),
      "contain",
    );
    assert.equal(await d.evaluate((e) => e.scrollWidth > e.clientWidth), false);
    for (let k = 0; k < 5; k++) await p.keyboard.press("Tab");
    assert.equal(
      await d.evaluate((e) => e.contains(document.activeElement)),
      true,
    );
    if (i === 0) {
      assert.deepEqual(
        (
          await new AxeBuilder({ page: p })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        ).violations.map((v) => v.id),
        [],
      );
      await p.screenshot({ path: `docs/qa/context-service-${width}.png` });
    }
    await p.keyboard.press("Escape");
    await d.waitFor({ state: "hidden" });
    assert.equal(await t.evaluate((e) => document.activeElement === e), true);
    assert.ok(
      Math.abs(
        (await p.locator(".app-scroll").evaluate((e) => e.scrollTop)) - before,
      ) < 2,
    );
    await t.click();
    await p.locator(".context-dialog[open] .dialog-close").click();
    opens += 2;
  }
  await p.evaluate(() => (document.documentElement.style.fontSize = "36px"));
  await triggers.first().click();
  assert.equal(
    await p
      .locator(".context-dialog[open]")
      .evaluate((e) => e.scrollWidth > e.clientWidth),
    false,
  );
  await p.screenshot({ path: `docs/qa/context-200-${width}.png` });
  await p.keyboard.press("Escape");
  await p.evaluate(() => (document.documentElement.style.fontSize = ""));
}
await p.goto(base + "/");
await p.evaluate(() =>
  window.history.pushState({}, "", location.pathname + "#aplicacoes"),
);
await p.locator(".context-trigger").first().click();
await p.goBack();
assert.equal(await p.locator(".context-dialog[open]").count(), 0);
await p.goForward();
assert.equal(await p.locator(".context-dialog[open]").count(), 0);
assert.notEqual(
  await p.locator(".app-scroll").evaluate((e) => e.style.overflowY),
  "hidden",
);
await p.emulateMedia({ reducedMotion: "reduce" });
await p.locator(".context-trigger").first().click();
assert.equal(await p.locator(".context-dialog[open]").count(), 1);
await p.keyboard.press("Escape");
assert.deepEqual(errors, []);
await b.close();
fs.writeFileSync(
  "docs/qa/hubs-context.json",
  JSON.stringify(
    {
      base,
      views,
      opens,
      hubRoutes: routes.map((r) => r.path),
      text200: true,
      keyboard: true,
      backForward: true,
      reducedMotion: true,
      errors,
    },
    null,
    2,
  ),
);
console.log({ views, opens, errors });
