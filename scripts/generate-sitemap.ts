import { writeFileSync } from 'fs';
import { join } from 'path';
import { getAllRoutes } from '../routes';

const BASE_URL = 'https://alumimec.com.br';

const generateSitemap = () => {
  const routes = getAllRoutes();
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => {
  const priority = route.path === '/' ? '1.0' : '0.8';
  const changefreq = route.path === '/' ? 'daily' : 'weekly';

  return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  const publicPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(publicPath, sitemap, 'utf-8');

  console.log(`✅ Sitemap generated successfully with ${routes.length} routes!`);
  console.log(`📍 Location: ${publicPath}`);
};

generateSitemap();
