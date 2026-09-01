import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';

export interface RenderResult {
  html: string;
  head: string;
  htmlAttributes: string;
}

/**
 * Renderiza uma rota para HTML estático (SSG).
 * Devolve o markup do #root e as tags de <head> geradas pelo react-helmet-async,
 * para que title, meta description, canonical, Open Graph e JSON-LD estejam
 * presentes no HTML entregue ao crawler, sem depender de JavaScript.
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  const head = helmet
    ? [
        // prioritizeSeoTags move title/description/canonical/OG para `priority`
        helmet.priority ? helmet.priority.toString() : '',
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  const htmlAttributes = helmet ? helmet.htmlAttributes.toString() : '';

  return { html, head, htmlAttributes };
}
