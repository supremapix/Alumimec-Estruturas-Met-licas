import fs from "node:fs";
import assert from "node:assert/strict";
const routes = JSON.parse(fs.readFileSync(".prerender-routes.json", "utf8"));
const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
for (const r of routes) {
  const h = fs.readFileSync(
    "dist" + (r.path === "/" ? "" : r.path) + "/index.html",
    "utf8",
  );
  assert.ok(!h.includes("noindex"), r.path);
  assert.ok(
    h.includes('href="https://www.alumimec.com.br' + r.path + '"'),
    r.path,
  );
  assert.ok(
    sitemap.includes("https://www.alumimec.com.br" + r.path + "</loc>"),
  );
}
assert.ok(fs.readFileSync("dist/404.html", "utf8").includes("noindex"));
console.log(
  "Indexability checks passed: " +
    routes.length +
    " self-canonical, indexable URLs; 404 noindex.",
);
