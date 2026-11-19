/**
 * Pré-renderização estática (SSG).
 *
 * Gera um arquivo HTML completo por rota dentro de dist/, com:
 *   <title>, meta description, canonical, Open Graph, JSON-LD,
 *   H1, conteúdo principal, links internos, ALT e NAP
 * já presentes no HTML inicial — sem depender de JavaScript.
 *
 * Falhas interrompem o build para impedir publicação de HTML incompleto.
 */
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  rmSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDir = join(root, "dist");
const ssrDir = join(root, ".ssr-build");

async function main() {
  const templatePath = join(distDir, "index.html");
  if (!existsSync(templatePath)) {
    console.warn(
      "[prerender] dist/index.html nao encontrado — pulando pre-render.",
    );
    throw new Error("Build output missing");
  }

  const { build } = await import("vite");

  // 1) Bundle SSR do app
  await build({
    logLevel: "warn",
    // react-helmet-async e CommonJS: precisa ser empacotado no bundle SSR
    // para que os named exports funcionem sob ESM no Node.
    ssr: { noExternal: ["react-helmet-async"] },
    build: {
      ssr: resolve(root, "entry-server.tsx"),
      outDir: ".ssr-build",
      emptyOutDir: true,
      ssrEmitAssets: false,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });

  const { render } = await import(
    pathToFileURL(join(ssrDir, "entry-server.mjs")).href
  );

  // 2) Lista de rotas gerada por scripts/generate-sitemap.ts
  const routes = JSON.parse(
    readFileSync(join(root, ".prerender-routes.json"), "utf-8"),
  );

  const template = readFileSync(templatePath, "utf-8");
  let ok = 0;
  const failures = [];

  for (const route of routes) {
    try {
      const { html, head, htmlAttributes } = render(route.path);
      if (route.type === "construction") {
        const photos = [...html.matchAll(/src="(\/construcoes-media\/[^\"]+)"/g)];
        const primaryContact = "https://wa.me/5541996646761?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Engeum%20e%20quero%20um%20or%C3%A7amento%20para%20obra%20comercial.";
        if ((html.match(/<h1(?:\s[^>]*)?>/g) || []).length !== 1 ||
          !head.includes('href="https://www.alumimec.com.br' + route.path + '"') ||
          html.split('href="' + primaryContact + '"').length < 3 ||
          photos.length === 0 || photos.some((photo) => !existsSync(join(distDir, photo[1].slice(1))))) {
          throw new Error("Construction page requires one H1, canonical, contact and all concept images");
        }
      }

      let page = template;

      // <html lang="pt-BR"> vindo do Helmet
      if (htmlAttributes) {
        page = page.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`);
      }

      // As tags do Helmet substituem as tags padrão do template para esta rota.
      page = page
        .replace(/<title>[\s\S]*?<\/title>\s*/, "")
        .replace(/<meta\s+name="description"[^>]*>\s*/, "")
        .replace(/<link\s+rel="canonical"[^>]*>\s*/, "")
        .replace(/<meta\s+name="robots"[^>]*>\s*/, "")
        .replace(
          /<meta\s+property="og:(title|description|url|image|type|locale|site_name)"[^>]*>\s*/g,
          "",
        )
        .replace(/<meta\s+name="twitter:card"[^>]*>\s*/, "");

      page = page.replace("</head>", `  ${head}\n  </head>`);
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`,
      );

      const outPath =
        route.path === "/"
          ? join(distDir, "index.html")
          : join(distDir, route.path.replace(/^\//, ""), "index.html");

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, page, "utf-8");
      ok++;
    } catch (error) {
      failures.push(`${route.path}: ${error?.message || error}`);
    }
  }

  // 3) Pagina 404 estatica. O Vercel serve dist/404.html com HTTP 404 real
  //    para qualquer URL inexistente (nada de SPA respondendo 200).
  {
    const { html, head, htmlAttributes } = render("/404");
    let page = template;
    if (htmlAttributes)
      page = page.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`);
    page = page
      .replace(/<title>[\s\S]*?<\/title>\s*/, "")
      .replace(/<meta\s+name="description"[^>]*>\s*/, "")
      .replace(/<link\s+rel="canonical"[^>]*>\s*/, "")
      .replace(/<meta\s+name="robots"[^>]*>\s*/, "")
      .replace(
        /<meta\s+property="og:(title|description|url|image|type|locale|site_name)"[^>]*>\s*/g,
        "",
      )
      .replace(/<meta\s+name="twitter:card"[^>]*>\s*/, "");
    page = page.replace("</head>", `  ${head}\n  </head>`);
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`,
    );
    writeFileSync(join(distDir, "404.html"), page, "utf-8");
    console.log("[prerender] 404.html gerado.");
  }

  if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });

  console.log(`[prerender] ${ok}/${routes.length} HTMLs gerados.`);
  if (failures.length) {
    console.warn(`[prerender] ${failures.length} rota(s) falharam:`);
    throw new Error(failures.join("\n"));
  }
}

main().catch((error) => {
  console.error("[prerender] falhou:", error?.message || error);
  process.exitCode = 1;
});
