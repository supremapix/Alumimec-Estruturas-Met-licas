import fs from "node:fs";
import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.QA_BASE_URL || "http://127.0.0.1:4174";
const data = JSON.parse(fs.readFileSync("data/territories.json", "utf8"));
const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
});
const page = await browser.newPage({ reducedMotion: "reduce" });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const widths = [320, 360, 390, 430, 1440];
const scans = [];
for (const width of widths) {
  await page.setViewportSize({ width, height: 950 });
  await page.goto(base + "/atendimento", { waitUntil: "networkidle" });
  assert.match(await page.locator("h1").textContent(), /80 km/);
  assert.equal(await page.locator(".coverage-cards > li").count(), 37);
  await page.locator("#localidades").scrollIntoViewIfNeeded();
  assert.equal(
    await page.evaluate(
      () =>
        document.querySelector(".app-scroll").scrollWidth >
        document.querySelector(".app-scroll").clientWidth,
    ),
    false,
    "overflow " + width,
  );
  if (width === 390 || width === 1440) {
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      axe.violations.map((v) => v.id),
      [],
      "axe " + width,
    );
    scans.push(width);
    await page.screenshot({ path: `docs/qa/coverage-${width}.png` });
  }
  await page.locator("#coverage-search").fill("afonso pena");
  assert.equal(await page.locator(".coverage-cards > li").count(), 1);
  assert.match(
    await page.locator(".coverage-cards > li h4").textContent(),
    /São José dos Pinhais/,
  );
  assert.equal(await page.locator(".coverage-names li").count(), 1);
  await page.locator("#coverage-search").fill("");
  await page.locator("#coverage-scope").selectOption("nearby");
  assert.equal(await page.locator(".coverage-cards > li").count(), 8);
  await page.locator("#coverage-search").fill("morretes");
  assert.equal(await page.locator(".coverage-cards > li").count(), 1);
  assert.match(await page.locator(".coverage-distance").textContent(), /38 km/);
  await page.locator("#coverage-search").fill("teste inexistente");
  assert.equal(await page.locator(".coverage-cards > li").count(), 0);
  await page.locator("#coverage-scope").selectOption("all");
  await page.locator("#coverage-search").fill("");
  assert.equal(await page.locator(".coverage-cards > li").count(), 37);
  await page.locator("#coverage-project-city").selectOption("Campo Alegre");
  await page.locator("#project-place").fill("Localidade de teste");
  await page.locator("#project-notes").fill("Cobertura de um acesso existente");
  const href = await page
    .locator(".planner-result a.button")
    .getAttribute("href");
  assert.ok(href.startsWith("https://wa.me/"));
  assert.match(decodeURIComponent(href), /Localidade de teste, Campo Alegre/);
  await page.locator("#coverage-project-city").selectOption("Curitiba");
  assert.equal(await page.locator("#project-place").inputValue(), "");
  assert.equal(await page.locator("#project-places option").count(), 75);
  await page.evaluate(() => (document.documentElement.style.fontSize = "36px"));
  assert.equal(
    await page.evaluate(
      () =>
        document.querySelector(".app-scroll").scrollWidth >
        document.querySelector(".app-scroll").clientWidth,
    ),
    false,
    "200% " + width,
  );
  await page.evaluate(() => (document.documentElement.style.fontSize = ""));
}
// All non-empty directories retain working lists; test one new reference in each.
for (const municipality of data.municipalities.filter((m) => m.names.length)) {
  const slug = municipality.city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
  await page.goto(base + "/cidade/" + slug);
  assert.equal(
    await page.locator("#bairros .territory-list > li").count(),
    municipality.names.length,
    municipality.city,
  );
  await page.locator("#bairro-search").fill(municipality.names[0].name);
  assert.ok(
    (await page.locator("#bairros .territory-list > li").count()) > 0,
    municipality.city,
  );
}
// Full content is present before JS, including nearby destinations and source-labelled localities.
const staticPage = await browser.newPage({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
await staticPage.goto(base + "/atendimento");
assert.equal(await staticPage.locator(".coverage-cards > li").count(), 37);
assert.equal(
  await staticPage.locator(".coverage-names li").count(),
  data.municipalities.reduce((n, m) => n + m.names.length, 0),
);
await browser.close();
assert.deepEqual(errors, []);
const result = {
  base,
  municipalities: 37,
  metropolitan: 29,
  nearby: 8,
  references: data.municipalities.reduce((n, m) => n + m.names.length, 0),
  directories: data.municipalities.filter((m) => m.names.length).length,
  widths,
  axeWidths: scans,
  text200: true,
  search: true,
  planner: true,
  serverRendered: true,
  errors,
};
fs.writeFileSync(
  "docs/qa/coverage-expansion.json",
  JSON.stringify(result, null, 2) + "\n",
);
console.log(JSON.stringify(result));
