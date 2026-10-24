import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const routes = JSON.parse(fs.readFileSync(".prerender-routes.json", "utf8"));
const indexed = ["/", "/cidade/curitiba", "/cidade/sao-jose-dos-pinhais"];
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'");
let checkedLinks = 0,
  checkedImages = 0;
const titles = new Set();
for (const route of routes) {
  const html = fs.readFileSync(
    path.join("dist", route.path, "index.html"),
    "utf8",
  );
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route.path + " H1");
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)?.[1];
  assert.ok(title);
  assert.ok(!titles.has(title), "Duplicate title " + title);
  titles.add(title);
  assert.ok(
    html.includes("https://www.alumimec.com.br" + route.path),
    "canonical",
  );
  if (!indexed.includes(route.path)) assert.match(html, /noindex, follow/);
  for (const m of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g,
  ))
    JSON.parse(m[1]);
  for (const m of html.matchAll(/<img[^>]*>/g)) {
    assert.match(m[0], /alt="[^"]+"/);
    const src = decode(m[0].match(/src="([^"]+)"/)[1]);
    assert.ok(fs.existsSync(path.join("public", decodeURIComponent(src))), src);
    checkedImages++;
  }
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = decode(m[1]);
    const [base, hash] = url.split("#");
    const target = path.join("dist", decodeURIComponent(base));
    assert.ok(fs.existsSync(target), "missing " + url);
    if (hash) {
      const file = fs.statSync(target).isDirectory()
        ? path.join(target, "index.html")
        : target;
      assert.ok(
        fs.readFileSync(file, "utf8").includes('id="' + hash + '"'),
        "missing anchor " + url,
      );
    }
    checkedLinks++;
  }
}
const map = fs.readFileSync("public/sitemap.xml", "utf8");
assert.equal((map.match(/<loc>/g) || []).length, 3);
assert.match(fs.readFileSync("dist/404.html", "utf8"), /noindex/);
fs.mkdirSync("docs/qa", { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const errors = [];
for (const width of [320, 360, 390, 430, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://127.0.0.1:4174/", { waitUntil: "networkidle" });
  await page
    .locator("img")
    .evaluateAll((imgs) =>
      Promise.all(
        imgs.map((i) => ((i.loading = "eager"), i.decode().catch(() => {}))),
      ),
    );
  assert.deepEqual(
    await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs
          .filter((i) => !i.complete || i.naturalWidth === 0)
          .map((i) => i.src),
      ),
    [],
  );
  await page.screenshot({
    path: "docs/qa/home-" + width + ".png",
    fullPage: true,
  });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    "overflow " + width,
  );
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  results.push({
    width,
    axe: axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => n.target),
    })),
  });
  if (width < 800) {
    await page.getByRole("button", { name: "Menu ☰", exact: true }).click();
    await page.screenshot({ path: "docs/qa/menu-" + width + ".png" });
    assert.equal(await page.locator("#main-navigation a").count(), 8);
    await page.keyboard.press("Escape");
    assert.equal(
      await page.locator(".menu-toggle").getAttribute("aria-expanded"),
      "false",
    );
  }
  await page.locator("#faq details").first().locator("summary").focus();
  await page.keyboard.press("Enter");
  assert.ok(
    (await page.locator("#faq details").first().getAttribute("open")) !== null,
  );
  await page.locator("footer").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "docs/qa/footer-" + width + ".png" });
  await page.evaluate(() => (document.documentElement.style.fontSize = "36px"));
  if (width < 800)
    await page.getByRole("button", { name: "Menu ☰", exact: true }).click();
  await page.screenshot({
    path: "docs/qa/text200-" + width + ".png",
    fullPage: true,
  });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    "text 200 overflow " + width,
  );
  await context.close();
}
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
});
const page = await context.newPage();
await page.goto("http://127.0.0.1:4174/");
await page.addInitScript(() => {
  Object.defineProperty(navigator, "share", {
    value: undefined,
    configurable: true,
  });
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText: async () => {} },
    configurable: true,
  });
});
await page.reload();
await page
  .getByRole("button", { name: "Compartilhar", exact: true })
  .first()
  .click();
assert.equal(
  await page.locator("[role=status]").first().textContent(),
  "Link copiado.",
);
await page.getByRole("button", { name: "Portões", exact: true }).click();
assert.equal(await page.locator(".gallery-grid figure").count(), 2);
for (const route of [
  "/cidade/curitiba",
  "/cidade/sao-jose-dos-pinhais",
  "/bairro/ecoville",
  "/cidade/nao-existe",
]) {
  await page.goto("http://127.0.0.1:4174" + route);
  await page.screenshot({
    path: "docs/qa/" + route.replaceAll("/", "-") + ".png",
    fullPage: true,
  });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    "local overflow",
  );
}
await browser.close();
assert.deepEqual(errors, []);
fs.writeFileSync(
  "docs/qa/results.json",
  JSON.stringify(
    {
      routes: routes.length,
      indexed: indexed.length,
      checkedLinks,
      checkedImages,
      results,
      errors,
    },
    null,
    2,
  ),
);
assert.ok(
  results.every((r) => r.axe.length === 0),
  "Accessibility issues: see docs/qa/results.json",
);
console.log(
  JSON.stringify({
    routes: routes.length,
    checkedLinks,
    checkedImages,
    widths: results.map((r) => r.width),
    errors,
  }),
);
