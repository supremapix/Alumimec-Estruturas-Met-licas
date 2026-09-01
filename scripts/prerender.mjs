/**
 * Pré-renderização estática (SSG).
 *
 * Gera um arquivo HTML completo por rota dentro de dist/, com:
 *   <title>, meta description, canonical, Open Graph, JSON-LD,
 *   H1, conteúdo principal, links internos, ALT e NAP
 * já presentes no HTML inicial — sem depender de JavaScript.
 *
 * Nunca derruba o build: qualquer falha vira aviso e o deploy continua
 * servindo a SPA normalmente.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = join(root, 'dist');
const ssrDir = join(root, '.ssr-build');

async function main() {
  const templatePath = join(distDir, 'index.html');
  if (!existsSync(templatePath)) {
    console.warn('[prerender] dist/index.html nao encontrado — pulando pre-render.');
    return;
  }

  const { build } = await import('vite');

  // 1) Bundle SSR do app
  await build({
    logLevel: 'warn',
    // react-helmet-async e CommonJS: precisa ser empacotado no bundle SSR
    // para que os named exports funcionem sob ESM no Node.
    ssr: { noExternal: ['react-helmet-async'] },
    build: {
      ssr: resolve(root, 'entry-server.tsx'),
      outDir: '.ssr-build',
      emptyOutDir: true,
      ssrEmitAssets: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });

  const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.mjs')).href);

  // 2) Lista de rotas gerada por scripts/generate-sitemap.ts
  const routes = JSON.parse(readFileSync(join(root, '.prerender-routes.json'), 'utf-8'));

  const template = readFileSync(templatePath, 'utf-8');
  let ok = 0;
  const failures = [];

  for (const route of routes) {
    try {
      const { html, head, htmlAttributes } = render(route.path);

      let page = template;

      // <html lang="pt-BR"> vindo do Helmet
      if (htmlAttributes) {
        page = page.replace(/<html[^>]*>/, `<html ${htmlAttributes}>`);
      }

      // As tags do Helmet substituem as tags padrão do template para esta rota.
      page = page
        .replace(/<title>[\s\S]*?<\/title>\s*/, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/, '')
        .replace(/<link\s+rel="canonical"[^>]*>\s*/, '')
        .replace(/<meta\s+name="robots"[^>]*>\s*/, '')
        .replace(/<meta\s+property="og:(title|description|url|image|type|locale|site_name)"[^>]*>\s*/g, '')
        .replace(/<meta\s+name="twitter:card"[^>]*>\s*/, '');

      page = page.replace('</head>', `  ${head}\n  </head>`);
      page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      const outPath =
        route.path === '/'
          ? join(distDir, 'index.html')
          : join(distDir, route.path.replace(/^\//, ''), 'index.html');

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, page, 'utf-8');
      ok++;
    } catch (error) {
      failures.push(`${route.path}: ${error?.message || error}`);
    }
  }

  if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });

  console.log(`[prerender] ${ok}/${routes.length} HTMLs gerados.`);
  if (failures.length) {
    console.warn(`[prerender] ${failures.length} rota(s) falharam:`);
    failures.slice(0, 10).forEach((f) => console.warn('  - ' + f));
  }
}

main().catch((error) => {
  console.warn('[prerender] falhou, seguindo com SPA:', error?.message || error);
});
