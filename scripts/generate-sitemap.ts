import { writeFileSync } from "fs";
import { join } from "path";
import { getAllRoutes } from "../routes";
import { SITE_URL } from "../site.config";

/**
 * Gera sitemap.xml apenas com URLs canônicas, 200 e indexáveis.
 * Nada de parâmetros, redirects, duplicatas ou URLs codificadas.
 */
const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const generateSitemap = () => {
  const routes = getAllRoutes();

  const body = routes
    .filter(
      (r) =>
        r.path === "/" ||
        r.path === "/cidade/curitiba" ||
        r.path === "/cidade/sao-jose-dos-pinhais",
    )
    .map(
      (route) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  const publicPath = join(process.cwd(), "public", "sitemap.xml");
  writeFileSync(publicPath, sitemap, "utf-8");

  // Lista consumida por scripts/prerender.mjs
  writeFileSync(
    join(process.cwd(), ".prerender-routes.json"),
    JSON.stringify(
      routes.map((r) => ({ path: r.path, type: r.type })),
      null,
      2,
    ),
    "utf-8",
  );

  console.log(
    `sitemap.xml: 3 URLs indexaveis; ${routes.length} rotas preservadas para prerender`,
  );
  console.log(`local: ${publicPath}`);
};

generateSitemap();
