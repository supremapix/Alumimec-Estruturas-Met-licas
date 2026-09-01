# Relatório de auditoria e correção — SEO / GEO / AIO / Favicons

**Projeto:** Alumimec Estruturas Metálicas
**Repositório:** `supremapix/Alumimec-Estruturas-Met-licas`
**Site oficial:** https://www.alumimec.com.br/
**Data:** 01/09/2026
**Escopo:** auditoria → correção → build → validação

---

## 0. O que o projeto era antes

O repositório é uma SPA React + Vite (não existem os arquivos `/agua-verde.html`,
`/batel-soho.html` etc. citados no briefing — essas URLs pertencem a uma versão
anterior do site; a versão publicada hoje usa as rotas `/cidade/*` e `/bairro/*`).

O HTML entregue ao crawler continha **apenas** `<title>Alumimec Estruturas Metálicas</title>`
e um `<div id="root">` vazio. Sem meta description, sem canonical, sem H1, sem
conteúdo, sem Schema e **sem nenhum favicon**.

---

## 1. Auditoria — matriz de URLs

| Grupo | Qtde | Intenção | Indexável | Schema | Risco de canibalização | Ação aplicada |
|---|---|---|---|---|---|---|
| `/` (home) | 1 | Empresa de estruturas metálicas em Curitiba | Sim | Organization+LocalBusiness, WebSite, WebPage, Breadcrumb, FAQPage, 6× Service | — | Title/H1 preservados; description, canonical e grafo corrigidos |
| `/cidade/*` prioritárias (Curitiba, S. J. dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande) | 7 | Local — cidade | Sim | WebPage, Breadcrumb, 3× Service | Médio | Title/description/H1 únicos, links internos, priority 0.8 |
| `/cidade/*` demais RMC | 22 | Local — cidade | Sim | idem | **Alto** | Metadados únicos, priority 0.5 — **ver item 9** |
| `/bairro/*` | 124 | Local — bairro de Curitiba | Sim | idem | **Alto** | Metadados únicos, links internos, priority 0.4 — **ver item 9** |
| **Total** | **154** | | 154 | | | |

Não existem: blog, páginas de serviço com URL própria, páginas de obras com URL própria,
páginas órfãs (todas as 153 páginas locais são linkadas a partir da home) nem redirects internos.

---

## 2. SEO — o que foi corrigido

### 2.1 HTML estático / SSG (correção mais importante)

Implementada pré-renderização real (`scripts/prerender.mjs` + `entry-server.tsx`),
usando `react-dom/server` + `StaticRouter` + `react-helmet-async`.

- **154 arquivos HTML gerados** (`dist/index.html`, `dist/cidade/<slug>/index.html`, `dist/bairro/<slug>/index.html`).
- Cada HTML já traz, **sem executar JavaScript**: `<title>`, meta description, canonical,
  robots, Open Graph, Twitter Card, JSON-LD, H1, todo o conteúdo textual, links internos,
  ALT das imagens e o NAP completo.
- A home passou de **~1 KB de HTML vazio** para **~163 KB de HTML com conteúdo**.
- O `npm run build` roda o pré-render, mas **nunca derruba o deploy**: se o pré-render falhar,
  ele emite aviso e a SPA continua sendo servida normalmente.
- `react-snap` (que estava configurado, quebrado e só incluía `/`) foi removido.

### 2.2 Host canônico

Todo o projeto usava `https://alumimec.com.br` (sem www) e um componente antigo
(`components/SEO.tsx`) apontava canonical para `https://alumimec-estruturas-met-licas.vercel.app`.

- Host canônico único definido em `site.config.ts`: **`https://www.alumimec.com.br`**.
- `components/SEO.tsx` (não utilizado, com canonical quebrado) foi **excluído**.
- `vercel.json` agora faz **301 de `alumimec.com.br` → `www.alumimec.com.br`**.
- 0 de 154 arquivos gerados contêm host errado (verificado programaticamente).

### 2.3 URLs

As URLs antigas eram `/cidade/s%C3%A3o%20jos%C3%A9%20dos%20pinhais` (acento + `%20`).
Agora são slugs ASCII: `/cidade/sao-jose-dos-pinhais`.

- **Nenhuma URL antiga quebra**: `lib/slug.ts` resolve tanto o slug novo quanto o nome
  codificado antigo, e o canonical sempre aponta para a versão em slug.
- 0 colisões de slug entre as 153 localidades (verificado).

### 2.4 Title, meta description e H1

- **154 titles, 154 únicos. 154 descriptions, 154 únicas. 0 duplicados.**
- Title e H1 da home **preservados** (estavam funcionando): `Alumimec Estruturas Metálicas | Galpões e Coberturas em Curitiba`.
- Páginas locais: description construída com dados próprios de cada página
  (cidades/bairros vizinhos reais que aquela página lista e linka), em vez de trocar só o nome.
- H1 das páginas locais corrigido: era `Estruturas Metálicas São José dos Pinhais`,
  agora `Estruturas Metálicas em São José dos Pinhais` / `no bairro Água Verde`.

### 2.5 Canonical

Canonical absoluto, autorreferente e em slug em todas as 154 páginas, presente no HTML inicial.

### 2.6 Sitemap

`public/sitemap.xml` regenerado: 154 URLs, todas 200, canônicas, indexáveis, com host `www`,
sem `%20`, sem duplicatas, sem parâmetros. `lastmod` em formato de data, `priority`
diferenciada (home 1.0 / cidades prioritárias 0.8 / demais cidades 0.5 / bairros 0.4).

### 2.7 robots.txt

Reescrito. O anterior tinha dois blocos `User-agent: *` conflitantes, `Crawl-delay`
desnecessário, `Disallow: /_next/` (framework que o projeto não usa) e apontava o sitemap
para o host errado. Agora: nada bloqueado (CSS, JS, imagens e favicon liberados),
crawlers de IA (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended) liberados,
`Sitemap: https://www.alumimec.com.br/sitemap.xml`.

### 2.8 llms.txt

Criado `public/llms.txt` (não existia) com informação factual: quem é a Alumimec, o que faz,
onde atende, a obra documentada da Forvia, contato, NAP e páginas principais.
Números de obras, tempo de mercado e avaliações **não** foram incluídos por não estarem
verificados em fonte primária.

---

## 3. Entity SEO — grafo único

Antes existiam **4 blocos JSON-LD independentes por página**, com a Alumimec declarada
**duas vezes** (Organization sem `@id` + LocalBusiness com `@id` diferente), e o `WebPage`
referenciava um `#organization` que **não existia**. Grafo quebrado.

Agora há **um único `@graph`** por página:

```
Organization + LocalBusiness  @id .../#organization   (entidade central, única)
WebSite                       @id .../#website        publisher → #organization
WebPage                       @id <url>#webpage       isPartOf → #website, about → #organization
BreadcrumbList                @id <url>#breadcrumb
FAQPage                       @id <url>#faq           (somente na home, conteúdo visível)
Service ×N                    @id <url>#service-...   provider → #organization
```

Relações semânticas declaradas: Alumimec → Estruturas Metálicas, Galpões Industriais,
Coberturas Metálicas, Mezaninos, Escadas Industriais, Portões Industriais
(`knowsAbout` + `hasOfferCatalog`), e Alumimec → Curitiba / São José dos Pinhais /
Região Metropolitana de Curitiba / Paraná (`areaServed`, com `sameAs` do Wikidata).

**Nenhum tipo Schema inventado.** Apenas tipos válidos do Schema.org.

---

## 4. NAP

Confirmado com o proprietário e padronizado em `site.config.ts` + `constants.ts`:

| Campo | Valor |
|---|---|
| Nome | Alumimec Estruturas Metálicas |
| Endereço | R. Dep. Arnaldo Faivro Busato — Afonso Pena |
| CEP | 83045-000 |
| Cidade | **São José dos Pinhais/PR** |
| Telefone / WhatsApp | (41) 99631-5885 |
| Telefone 2 | (41) 99722-1079 |
| E-mail | contato@alumimec.com.br |
| Horário | Segunda a sexta, 08:00–17:30 |

**Divergência encontrada e corrigida:** o Schema declarava `addressLocality: "Curitiba"`
com o CEP 83045-000, que pertence a São José dos Pinhais; o componente antigo `SEO.tsx`
declarava São José dos Pinhais. O texto visível no site também dizia "Curitiba/PR".
Tudo unificado como São José dos Pinhais/PR.

**Coordenadas removidas.** O Schema declarava `-25.4284, -49.2733` (centro de Curitiba)
e um segundo par `-25.5333, -49.2000`. Nenhum dos dois corresponde ao endereço e não há
coordenada verificada no repositório — portanto `geo`, `geo.position` e `ICBM` foram
removidos em vez de inventados.

---

## 5. Dados fabricados removidos

| Item | Onde estava | Ação |
|---|---|---|
| `aggregateRating: 5.0, reviewCount: 127` | JSON-LD de **todas as 154 páginas** | **REMOVIDO** — avaliação não comprovada em rich result é risco de ação manual do Google |
| `geo` com coordenadas do centro de Curitiba | JSON-LD | **REMOVIDO** |
| `datePublished: 2024-01-01` fixo | JSON-LD | **REMOVIDO** |
| Canonical para `*.vercel.app` | `components/SEO.tsx` | **ARQUIVO EXCLUÍDO** |
| ALT afirmando local da foto (ex.: "Cobertura metálica Alumimec em Adrianópolis") | 4 imagens × 153 páginas | **CORRIGIDO** para ALT factual sem afirmar local não comprovado |

### ⚠️ REQUER VALIDAÇÃO DO PROPRIETÁRIO

Itens mantidos a seu pedido, mas **não comprovados no repositório**:

1. **6 depoimentos com nomes de pessoas** (Carlos Mendes, Ana Paula, Roberto Silva,
   Construtora Ideal, Marcos Oliveira, Júlia Santos) — `constants.ts`.
   Se não forem clientes reais e autorizados, recomendo remover.
2. **"Avaliação 5.0"** exibido nas páginas locais — sem fonte. Foi retirado do Schema,
   mas continua visível na tela.
3. **"+850 Projetos"**, **"14+ Anos"**, **"100% Satisfação"**.
4. **"5 anos de garantia estrutural"** e **"ART e Engenharia"** (FAQ e selos).
5. **`google-site-verification`** e o arquivo `public/google87bee2f2b89df17b.html` —
   confirme que ainda correspondem à sua propriedade no Search Console.

Nenhum desses itens foi usado como rich result / dado estruturado.

---

## 6. Obra real (autoridade semântica)

A obra **Barracão Industrial para a Forvia, em São José dos Pinhais** já existia na home
e foi **preservada integralmente**, com a imagem real (`barracao-sao-jose-dos-pinhais-barracao-forvia.jpg`).
Nenhum detalhe novo foi inventado. Nenhum case novo foi criado.

---

## 7. GEO / AIO — respostas factuais

O HTML inicial (sem JS) agora responde de forma verificável: quem é a Alumimec, o que faz,
onde atende, quais serviços presta, a obra documentada e como entrar em contato.
Isso vale tanto para o Googlebot quanto para crawlers de IA, que em geral **não executam JavaScript**.
Somado ao `llms.txt` e ao `robots.txt` liberando GPTBot/PerplexityBot/ClaudeBot/OAI-SearchBot.

---

## 8. Performance

| Item | Antes | Depois |
|---|---|---|
| Tailwind | `cdn.tailwindcss.com` (JS de terceiro, render-blocking, gera CSS em runtime) | Build local: **40 KB CSS / 7 KB gzip** |
| Peso de `public/` | 7,31 MB | **2,3 MB** (−69%) |
| Imagens `<img>` com `width`/`height` | 0 de 14 | **14 de 14** (elimina CLS) |
| `loading="lazy"` + `decoding="async"` | 0 | 13 (logo do header ficou `eager` + `fetchPriority="high"`) |
| Ícone do WhatsApp | hotlink para `upload.wikimedia.org` | SVG inline |
| JS do app | 281 KB / 84 KB gzip | 283 KB / 85 KB gzip |
| Arquivos duplicados/não usados | 5 arquivos, ~1,3 MB | removidos |

4 PNGs pesados de fotos foram convertidos para WebP (`alumimec-parana-brasil`,
`cobertura-metalica-alumimec`, `mezaninos-metalicos-estruturais`, `galpoes-industriais-metalicos`)
— 2,0 MB → 198 KB. As referências no código foram atualizadas.

**Lighthouse não foi executado** — não há ferramenta de medição real disponível neste
ambiente e não invento números. Rode o PageSpeed Insights após o deploy.

---

## 9. ⚠️ Risco estrutural que permanece (decisão sua)

As **153 páginas `/cidade/*` e `/bairro/*` continuam com conteúdo praticamente idêntico** —
o template troca apenas o nome do local. Isso é exatamente o padrão de *doorway page*
que a política de spam do Google descreve, e é o que o seu próprio briefing pedia para evitar
(itens 7 e 8).

Você optou por **manter tudo indexável**, então eu apenas: dei title, description e H1 únicos
a cada uma, adicionei um bloco de conteúdo e links internos próprios (localidades vizinhas
reais) e diferenciei a `priority` no sitemap. **Isso reduz o risco, mas não o elimina.**

Recomendação, quando quiser tratar: manter indexáveis as 7 cidades prioritárias
(Curitiba, São José dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande)
e aplicar `noindex, follow` nas demais 22 cidades e nos 124 bairros, mantendo-as navegáveis.
A infraestrutura para isso já está pronta: basta passar `noindex` no componente `EnhancedSEO`.

---

## 10. FAVICON

### Arquivo ORIGINAL usado como fonte

- **Caminho:** `public/logo-alumimec.jpg` (1200 × 1200 px, logo circular oficial da Alumimec)
- O símbolo foi **extraído** do arquivo original por análise de componentes conexos da imagem
  (bounding box x 489–721, y 389–576 do original).
- Como a logo completa (anel + wordmark + telefones + @instagram) fica ilegível em 16×16,
  foi usado **somente o símbolo oficial "A" já existente na marca**, conforme previsto no briefing.

> **Confirmação: nenhum favicon foi recriado, redesenhado ou gerado por IA.**
> Nenhum símbolo novo foi criado, nenhuma letra genérica foi usada, nenhuma proporção foi alterada.
> O `favicon.svg` é um traço vetorial (potrace) fiel do próprio símbolo original em preto sobre branco.

### Arquivos gerados

| Arquivo | Dimensões | MIME | Tamanho | HTTP |
|---|---|---|---|---|
| `/favicon.ico` | 16×16, 32×32, 48×48 (ICO real multi-imagem) | `image/vnd.microsoft.icon` | 15.086 B | 200 |
| `/favicon.svg` | viewBox 0 0 2048 2048 | `image/svg+xml` | 11.626 B | 200 |
| `/favicon-96x96.png` | 96×96 | `image/png` | 4.368 B | 200 |
| `/apple-touch-icon.png` | 180×180 | `image/png` | 10.993 B | 200 |
| `/web-app-manifest-192x192.png` | 192×192 | `image/png` | 8.431 B | 200 |
| `/web-app-manifest-512x512.png` | 512×512 | `image/png` | 40.907 B | 200 |
| `/site.webmanifest` | — | `application/manifest+json` | 749 B | 200 |

- O `.ico` é um ICO real com 3 imagens embutidas — **não** é um PNG renomeado.
- Símbolo centralizado, com margem de segurança (80% do canvas nos favicons).
- Ícones do manifest com 62% de cobertura para caber na *safe zone* circular do Android,
  por isso `"purpose": "any maskable"` — a marca não é cortada pela máscara.
- Apple touch icon sem cantos arredondados artificiais (o iOS aplica a máscara).

### Tags finais no `<head>`

```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Alumimec" />
<link rel="manifest" href="/site.webmanifest" />
```

Não havia nenhuma tag de favicon antiga para remover (o `<head>` não tinha nenhuma).
As tags estão no `index.html` estático, portanto **existem sem depender de JavaScript**.

### site.webmanifest

`theme_color: #1a3a6c` e `background_color: #ffffff` foram extraídos da identidade visual
real já presente no projeto (cor `primary` do tema Tailwind e fundo branco da logo).
Nenhuma cor foi inventada.

### Google Search

Os requisitos estão atendidos: mesmo domínio, HTTP 200, não bloqueado no `robots.txt`,
quadrado, legível em tamanho pequeno, URL estável, sem depender de JavaScript.
**Não é possível prometer prazo:** o Google rastreia e decide sozinho quando atualizar
o favicon exibido na busca.

### Validação no RealFaviconGenerator

O **Favicon Checker externo não pôde ser executado** deste ambiente (o site ainda não está
publicado com estes arquivos). A validação interna foi feita: todos os arquivos existem,
com dimensões corretas, MIME types corretos, HTTP 200 servidos a partir da raiz, e todos
foram renderizados em navegador (Chromium) a 16, 32, 96, 180 e 512 px — o símbolo permanece
reconhecível em 16×16.

**Depois do deploy, rode:** https://realfavicongenerator.net/favicon-checker

---

## 11. Build e validação

```
npm run generate-sitemap  → sitemap.xml gerado com 154 URLs canonicas
vite build                → ✓ built  (CSS 40,34 KB / JS 282,79 KB)
node scripts/prerender.mjs→ [prerender] 154/154 HTMLs gerados
tsc --noEmit              → 0 erros
```

Validação executada em navegador real (Chromium) sobre o `dist/` servido:

- HTTP 200 e MIME correto em todos os 7 arquivos de favicon + robots.txt + sitemap.xml + llms.txt.
- 0 erros de JavaScript no console (home e página de cidade).
- 0 overflow horizontal em **360 px, 375 px, 1366 px** — layout íntegro.
- Design **não foi alterado**: a migração do Tailwind CDN para build local preservou a
  aparência (verificado por captura de tela desktop e mobile).
- 154/154 HTMLs com title, meta description, canonical, robots, H1, conteúdo e JSON-LD válido.
- 0/154 arquivos com `aggregateRating`, `geo` inventado ou host errado.

---

## 12. Erros encontrados e corrigidos durante o processo

| Erro | Correção |
|---|---|
| `react-helmet-async` é CommonJS e quebrava o bundle SSR sob ESM | `ssr.noExternal` no build de pré-render |
| `prioritizeSeoTags` do Helmet move title/description/canonical para `helmet.priority`, que não estava sendo serializado | `helmet.priority.toString()` incluído no `<head>` gerado |
| Recorte inicial do favicon capturava fragmentos do anel e da treliça | Isolamento por componente conexo da imagem |
| `index.tsx` usava a API legada `hydrate`/`render` do React 17 | Migrado para `hydrateRoot`/`createRoot` (necessário para hidratar o HTML pré-renderizado) |

---

## 13. Arquivos alterados

**Novos:** `site.config.ts`, `lib/slug.ts`, `entry-server.tsx`, `index.css`,
`tailwind.config.js`, `postcss.config.js`, `scripts/prerender.mjs`,
`public/favicon.ico`, `public/favicon.svg`, `public/favicon-96x96.png`,
`public/apple-touch-icon.png`, `public/web-app-manifest-192x192.png`,
`public/web-app-manifest-512x512.png`, `public/site.webmanifest`, `public/llms.txt`,
4 imagens `.webp`.

**Modificados:** `index.html`, `index.tsx`, `App.tsx`, `routes.ts`, `constants.ts`,
`components/EnhancedSEO.tsx`, `components/Header.tsx`, `components/Footer.tsx`,
`pages/Home.tsx`, `pages/LocationPage.tsx`, `scripts/generate-sitemap.ts`,
`public/robots.txt`, `public/sitemap.xml`, `vercel.json`, `package.json`, `.gitignore`,
+ 18 imagens recomprimidas.

**Excluídos:** `components/SEO.tsx`, 4 PNGs convertidos para WebP,
5 imagens duplicadas/não referenciadas.

**Observação:** `SEO_README.md`, `PRE_RENDERING_GUIDE.md`, `SEO_IMPLEMENTATION_SUMMARY.md`
e `FINAL_NOTES.md` foram mantidos, mas descrevem o estado anterior (inclusive o `react-snap`,
que foi removido). Vale substituí-los por este relatório.

---

## 14. O que fazer depois do deploy

1. No painel do domínio/Vercel, confirmar o 301 de `alumimec.com.br` → `www.alumimec.com.br`.
2. Google Search Console: definir `https://www.alumimec.com.br/` como propriedade principal
   e reenviar `https://www.alumimec.com.br/sitemap.xml`.
3. Rodar o Favicon Checker do RealFaviconGenerator.
4. Rodar o PageSpeed Insights (mobile e desktop) para medir LCP/CLS/INP reais.
5. Decidir sobre os itens marcados como **REQUER VALIDAÇÃO DO PROPRIETÁRIO** (seção 5).
6. Decidir sobre a consolidação das páginas locais (seção 9).

---

SEO, GEO/AIO e favicons da Alumimec auditados e implementados utilizando a identidade visual original da empresa, sem criação de dados empresariais, cases, métricas ou identidade visual fictícios.
