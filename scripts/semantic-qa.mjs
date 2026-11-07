import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const routes = JSON.parse(fs.readFileSync(".prerender-routes.json", "utf8"));
const sections = [];
for (const route of routes) {
  const html = fs.readFileSync(path.join("dist", route.path, "index.html"), "utf8");
  assert.equal((html.match(/data-semantic-section="2026-11"/g) || []).length, 1, route.path);
  assert.match(html, /src="\/alumimec-contato-250.svg" width="250" height="250"/);
  const section = html.split('data-semantic-section="2026-11"')[1].split("</section>")[0];
  assert.equal((section.match(/<article>/g) || []).length, 3, route.path);
  assert.match(section, /https:\/\/wa.me\/5541996315885\?text=/);
  assert.match(section, /href="tel:\+5541996315885"/);
  assert.match(section, /contato@alumimec.com.br/);
  assert.ok(html.indexOf('id="semantic-contact-title"') < html.indexOf("<footer"));
  sections.push({path: route.path, type: route.type, title: section.match(/<h2[^>]*>(.*?)<\/h2>/)[1]});
}
assert.ok(!fs.readFileSync("dist/404.html", "utf8").includes("data-semantic-section"));
assert.equal(new Set(sections.map((r) => r.title)).size, routes.length, "Unique contextual section headings");
if (process.env.STATIC_ONLY === "1") {
  const result = { routes: routes.length, sectionHeadingsUnique: true, registeredPagesOnly: true, staticChecks: "passed", browserChecks: "not run" };
  fs.writeFileSync("docs/qa/semantic-static-results.json", JSON.stringify(result, null, 2) + "\n");
  console.log(JSON.stringify(result));
  process.exit(0);
}
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined });
const errors = [];
const results = [];
const samples = ["/", "/servicos/galpoes-industriais", "/servicos/coberturas-metalicas", "/cidade/curitiba", "/bairro/sao-jose-dos-pinhais/guatupe", "/bairro/ecoville", "/aplicacoes/cobertura-de-estacionamentos", "/atendimento"];
for (const width of [320, 390, 1440]) {
  const context = await browser.newContext({viewport: {width, height: 950}, reducedMotion: "reduce"});
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of samples) {
    await page.goto("http://127.0.0.1:4174" + route, {waitUntil: "networkidle"});
    const section = page.locator(".semantic-contact");
    await section.scrollIntoViewIfNeeded();
    const img = section.locator("img");
    await img.evaluate((i) => i.decode());
    assert.equal(await img.evaluate((i) => i.naturalWidth), 250);
    assert.equal(await img.evaluate((i) => i.naturalHeight), 250);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route + " overflow " + width);
    const dimensions = await img.boundingBox();
    assert.equal(dimensions.width, 250);
    assert.equal(dimensions.height, 250);
    const axe = await new AxeBuilder({page}).include(".semantic-contact").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    assert.deepEqual(axe.violations.map((v) => ({id:v.id,nodes:v.nodes.map(n=>n.target)})), [], route);
    const screenshot = "docs/qa/semantic-" + (route === "/" ? "home" : route.replaceAll("/", "-")) + "-" + width + ".png";
    await section.screenshot({path:screenshot});
    await page.evaluate(() => {document.documentElement.style.fontSize = "36px";});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route + " text200 " + width);
    results.push({route,width,image250:true,axeViolations:0,reflow200:true});
  }
  await context.close();
}
await browser.close();
assert.deepEqual(errors, []);
const result = {routes:routes.length,sectionHeadingsUnique:true,registeredPagesOnly:true,results,errors};
fs.writeFileSync("docs/qa/semantic-results.json",JSON.stringify(result,null,2)+"\n");
console.log(JSON.stringify(result));
