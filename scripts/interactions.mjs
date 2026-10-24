import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import fs from "node:fs";
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
await page.goto("http://127.0.0.1:4174/");
await page.screenshot({ path: "docs/qa/desktop-hero.png" });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: "docs/qa/mobile-hero.png" });
await page.locator(".agency").scrollIntoViewIfNeeded();
await page.locator(".agency img").evaluate((img) => img.decode());
await page.screenshot({ path: "docs/qa/agency-mobile.png" });
await page.keyboard.press("Tab");
for (const width of [320, 360, 390, 430]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://127.0.0.1:4174/");
  await page.locator("#servicos").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "docs/qa/services-" + width + ".png" });
}
await page.goto("http://127.0.0.1:4174/");
await page.keyboard.press("Tab");
assert.equal(
  await page.evaluate(() => document.activeElement.textContent),
  "Pular para o conteúdo",
);
await page.keyboard.press("Enter");
assert.equal(await page.evaluate(() => document.activeElement.id), "conteudo");
await page.evaluate(() => {
  window.__shared = null;
  Object.defineProperty(navigator, "share", {
    value: async (data) => {
      window.__shared = data;
    },
    configurable: true,
  });
});
await page
  .getByRole("button", { name: "Compartilhar", exact: true })
  .first()
  .click();
assert.ok(
  (await page.evaluate(() => window.__shared.url)).startsWith(
    "http://127.0.0.1:4174",
  ),
);
await page.evaluate(() => {
  window.__opened = null;
  window.open = (url) => {
    window.__opened = url;
    return null;
  };
});
await page.getByLabel("Seu nome").fill("Teste local");
await page.getByLabel("Cidade e bairro").fill("Curitiba");
await page
  .getByLabel("Conte sobre sua obra")
  .fill("Validação local, sem enviar mensagem.");
await page
  .getByRole("button", { name: "Preparar mensagem no WhatsApp ↗" })
  .click();
const outgoing = await page.evaluate(() => window.__opened);
assert.ok(outgoing.startsWith("https://wa.me/5541996315885?text="));
assert.ok(decodeURIComponent(outgoing).includes("Teste local"));
await page.locator(".agency").scrollIntoViewIfNeeded();
const overlaps = await page.evaluate(() => {
  const b = document.querySelector(".top-rail button")?.getBoundingClientRect();
  if (!b) return [];
  return [
    ...document.querySelectorAll("main a,main button,footer a,footer button"),
  ]
    .filter((e) => {
      const r = e.getBoundingClientRect();
      return (
        r.width &&
        r.height &&
        r.left < b.right &&
        r.right > b.left &&
        r.top < b.bottom &&
        r.bottom > b.top
      );
    })
    .map((e) => e.textContent);
});
assert.deepEqual(overlaps, []);
const localAxe = [];
for (const route of [
  "/cidade/curitiba",
  "/cidade/sao-jose-dos-pinhais",
  "/bairro/ecoville",
]) {
  await page.goto("http://127.0.0.1:4174" + route);
  const a = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  localAxe.push({ route, violations: a.violations.map((v) => v.id) });
}
fs.writeFileSync(
  "docs/qa/interactions.json",
  JSON.stringify(
    {
      skipLink: true,
      nativeShare: true,
      formDraft: true,
      messagesSent: 0,
      floatingOverlaps: overlaps,
      localAxe,
    },
    null,
    2,
  ),
);
assert.ok(localAxe.every((a) => !a.violations.length));
await browser.close();
console.log("Visual captures and interaction checks passed.");
