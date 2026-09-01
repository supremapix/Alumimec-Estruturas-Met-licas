# Relatório final — auditoria e correção definitiva

**Projeto:** Alumimec Estruturas Metálicas
**Repositório:** `supremapix/Alumimec-Estruturas-Met-licas`
**Site:** https://www.alumimec.com.br/
**Data:** 01/09/2026
**Rodada:** 2 (revisão final sobre a rodada 1, já publicada)

---

## === NAP ===

**Nome:** Alumimec Estruturas Metálicas

**Endereço final (fonte de verdade — fornecido pelo proprietário):**

```
R. Dep. Arnaldo Faivro Busato, 168
Afonso Pena
São José dos Pinhais - PR
83045-000
Brasil
```

**Sede física:** São José dos Pinhais / bairro Afonso Pena
**Área de atendimento:** Curitiba e Região Metropolitana de Curitiba

| | |
|---|---|
| Inconsistências de endereço encontradas | **7** |
| Inconsistências corrigidas | **7** |
| Páginas declarando sede em Curitiba (depois) | **0 de 154** |
| Páginas com o endereço completo, com nº 168, no HTML inicial | **154 de 154** |

### As 7 inconsistências

| # | Onde | Antes | Depois |
|---|---|---|---|
| 1 | `components/SEO.tsx` (JSON-LD) | `addressLocality: "São José dos Pinhais"` + canonical `*.vercel.app` + `geo` inventado | **arquivo excluído** (estava órfão, não era importado) |
| 2 | `components/EnhancedSEO.tsx` (Organization) | `addressLocality: "Curitiba"` | `São José dos Pinhais` |
| 3 | `components/EnhancedSEO.tsx` (LocalBusiness duplicado) | `addressLocality: "Curitiba"` + `geo -25.4284,-49.2733` | entidade unificada, sem `geo` |
| 4 | `constants.ts` → texto visível | `... CEP: 83045-000 - Curitiba/PR` | `R. Dep. Arnaldo Faivro Busato, 168 - Afonso Pena, CEP 83045-000 - São José dos Pinhais/PR` |
| 5 | Rua sem número (todas as ocorrências) | `R. Dep. Arnaldo Faivro Busato` | `R. Dep. Arnaldo Faivro Busato, 168` |
| 6 | Home — texto "Sobre Nós" | "se consolidou como referência em Curitiba e Região" (não distinguia sede de atendimento) | frase de entidade explícita + bloco factual Sede / Área de atendimento |
| 7 | `public/llms.txt` | endereço sem número, sem separar sede de atendimento | `LOCATION` e `SERVICE AREA` como campos distintos |

**Coordenadas:** continuam **não declaradas**. Não há coordenada oficial documentada no projeto — e coordenada não se inventa. As duas que existiam (`-25.4284,-49.2733` e `-25.5333,-49.2000`) apontavam para o centro de Curitiba, não para a sede.

**Frase de entidade** publicada na home e no `site.config.ts` (`ENTITY_STATEMENT`):

> A Alumimec é uma empresa especializada em estruturas metálicas, localizada no bairro Afonso Pena, em São José dos Pinhais, no Paraná, com atendimento em Curitiba e em toda a Região Metropolitana de Curitiba.

Curitiba deixou de aparecer como localização e passou a aparecer **sempre** como área de atendimento. As intenções comerciais de Curitiba foram **preservadas** (Title, H1 e conteúdo da home continuam trabalhando "estruturas metálicas Curitiba").

---

## === SEO ===

| Métrica | Valor |
|---|---|
| URLs encontradas | 154 |
| URLs indexáveis | 154 |
| URLs não indexáveis | 1 (`/404`, `noindex, follow`) |
| HTTP 200 | 154 |
| HTTP 301 | **234 regras** (URLs legadas → slug + não-www → www) |
| HTTP 404 real | todas as URLs inexistentes |
| Canonicals corrigidos | 154 |
| Titles únicos | **154 / 154** |
| Descriptions únicas | **154 / 154** |
| H1 corrigidos | 154 (1 H1 por página, verificado em 8 larguras) |

### 404 real (item 31 do briefing)

Este era o principal ponto em aberto. O `vercel.json` tinha um rewrite `/(.*) → /index.html`, que fazia **toda** URL inválida responder **HTTP 200** com o HTML da home — soft-404 clássico.

- O rewrite catch-all foi **removido**.
- Foi criada `pages/NotFound.tsx`, pré-renderizada em `dist/404.html`, servida pelo Vercel com **HTTP 404 real**, com `noindex, follow`, links para a home e para as 7 cidades prioritárias.
- Rota `*` também adicionada no React Router, para o mesmo comportamento em navegação interna.

### 301 reais, sem JavaScript (itens 30 e 32)

As URLs antigas (`/cidade/s%C3%A3o%20jos%C3%A9%20dos%20pinhais`) foram mapeadas para **301 no servidor**, não por redirect em JavaScript:

- **234 regras** em `vercel.json`, geradas a partir da lista real de cidades e bairros.
- Só entram as URLs cujo formato antigo difere do slug (nomes simples como `/cidade/curitiba` já eram idênticos).
- Cada URL antiga é mapeada nas duas formas (percent-encoded e decodificada), para garantir o match independente de como o Vercel normaliza o path.
- Sem cadeias de redirect: **URL antiga → 301 → URL canônica final**, em um salto.
- Mais o 301 de `alumimec.com.br` → `www.alumimec.com.br`.

**Nota da rodada anterior:** o `cleanUrls: true` que eu havia adicionado fazia o Vercel devolver 404 antes de aplicar o rewrite. Isso foi detectado testando o site publicado e já está corrigido — `cleanUrls` removido.

---

## === PÁGINAS LOCAIS ===

**Matriz de decisão:**

| Classificação | Qtde | URLs |
|---|---|---|
| **A — Manter** | 8 | `/` + `/cidade/curitiba`, `/cidade/sao-jose-dos-pinhais`, `/cidade/pinhais`, `/cidade/araucaria`, `/cidade/colombo`, `/cidade/campo-largo`, `/cidade/fazenda-rio-grande` |
| **B — Enriquecer** | 146 | 22 demais cidades da RMC + 124 bairros de Curitiba |
| **C — Consolidar** | 0 | — |
| **D — 301** | 0 | — |
| **E — Noindex** | 0 | — |
| **F — Remover** | 0 | — |
| **Novas páginas criadas** | **0** | — |

### ⚠️ Divergência registrada

A classificação técnica correta para as **146 páginas do grupo B** seria **E (noindex)**. Elas continuam com conteúdo praticamente idêntico: o template troca o nome da localidade e mantém todo o resto. Isso é o padrão de *doorway page* descrito nos itens 15–17 do próprio briefing.

Perguntei e **você optou por manter todas indexáveis**. Registro aqui que:

- o risco de *doorway page* **permanece**;
- a infraestrutura para reverter já está pronta: o componente `EnhancedSEO` aceita a prop `noindex`, e basta passá-la em `LocationPage.tsx` para as não prioritárias;
- é uma mudança de uma linha, reversível a qualquer momento.

### O que foi feito para reduzir o risco (enriquecimento, grupo B)

- Title, description e H1 **únicos** em cada uma das 154 URLs (0 duplicados, verificado).
- Bloco de conteúdo próprio por página: cada localidade lista e linka **6 localidades vizinhas reais**, calculadas a partir da posição na lista — conteúdo e links diferentes em cada URL.
- Description construída com essas localidades vizinhas, não com troca de nome.
- `priority` diferenciada no sitemap: home 1.0 · cidades prioritárias 0.8 · demais cidades 0.5 · bairros 0.4.
- `FAQPage` declarado **apenas na home** — antes o mesmo bloco de FAQ era declarado em 154 URLs.
- H1 corrigido para leitura natural: `Estruturas Metálicas em São José dos Pinhais` / `no bairro Água Verde` (antes faltava a preposição).

**As páginas `/agua-verde.html`, `/santa-felicidade.html`, `/alto-rua-xv.html` e `/batel-soho.html` citadas no briefing não existem neste repositório.** São de uma versão anterior do site. A versão atual usa `/cidade/<slug>` e `/bairro/<slug>`.

---

## === ENTITY SEO ===

**Entidade principal:** Alumimec Estruturas Metálicas
**@id:** `https://www.alumimec.com.br/#organization`
**Sede:** São José dos Pinhais — **Bairro:** Afonso Pena
**Área atendida:** Curitiba · São José dos Pinhais · Região Metropolitana de Curitiba · Paraná

Grafo único por página (`@graph`), sem entidades duplicadas:

```
Organization + LocalBusiness   @id .../#organization
WebSite                        @id .../#website        publisher → #organization
WebPage                        @id <url>#webpage       isPartOf → #website · about → #organization
BreadcrumbList                 @id <url>#breadcrumb
FAQPage                        @id <url>#faq           (somente na home, conteúdo visível)
Service ×N                     @id <url>#service-...   provider → #organization
```

- `PostalAddress` com `streetAddress: "R. Dep. Arnaldo Faivro Busato, 168"`, `addressLocality: "São José dos Pinhais"`.
- `areaServed` separado do endereço — localização e atendimento são coisas distintas no grafo.
- `sameAs` apenas os dois perfis oficiais (Facebook e Instagram da empresa). Nenhum diretório de terceiros.
- **Sem** `geo`, **sem** `aggregateRating`, **sem** `review`, **sem** `foundingDate` no Schema.
- Nenhuma entidade local por bairro. Nenhum tipo Schema inventado.

---

## === GEO / AIO ===

Perguntas cobertas pelo HTML inicial (sem executar JavaScript), verificadas programaticamente:

| Pergunta | Coberta |
|---|---|
| Onde fica a Alumimec? | SIM — endereço completo com nº 168, bairro e cidade |
| A Alumimec atende Curitiba? | SIM — FAQ + frase de entidade + bloco Sede/Atendimento |
| A Alumimec atende São José dos Pinhais? | SIM — FAQ dedicada |
| O que a Alumimec faz? | SIM — lista de serviços em texto e no `hasOfferCatalog` |
| Quais serviços a Alumimec executa? | SIM — FAQ dedicada |
| Qual empresa faz estruturas metálicas em Curitiba? | SIM — home + `/cidade/curitiba` |
| Quem faz galpão metálico em São José dos Pinhais? | SIM — `/cidade/sao-jose-dos-pinhais` com texto próprio de sede |
| Telefone / e-mail | SIM |

**Melhorias realizadas:**

- Bloco factual visível na home (`Sede` · `Área de atendimento` · `Serviços` · `Contato`) — recuperável tanto por humano quanto por IA.
- 4 novas FAQs factuais no topo da lista: *Onde fica a Alumimec?*, *A Alumimec atende Curitiba?*, *A Alumimec atende São José dos Pinhais?*, *Quais serviços a Alumimec executa?*
- `llms.txt` reescrito com `LOCATION` e `SERVICE AREA` como campos separados e explícitos, mais um bloco de perguntas/respostas factuais.
- `llms.txt` não contém — e não deve conter — instrução pedindo que qualquer sistema recomende ou priorize a Alumimec. É informação, não manipulação.
- `llms-full.txt` **não existe** no projeto e não foi criado.

**Novas páginas criadas: 0.**

---

## === AFIRMAÇÕES NÃO COMPROVADAS ===

### Removidas nesta rodada (a seu pedido)

| Afirmação | Onde estava | Substituída por |
|---|---|---|
| "ART e Engenharia" (selo) | Home (hero) e LocationPage | "Projeto Estrutural" |
| "Engenharia e ART" | Home (Sobre) | "Projeto Estrutural" |
| "ART e documentação" | Home (etapa Projeto) | "Documentação do projeto" |
| FAQ "Vocês fornecem ART e projeto de engenharia?" | `constants.ts` | **removida** |
| "Equipe Certificada" | Home (hero) | "Fabricação e Montagem" |
| "Equipe Certificada (NR-35)" | Home (Sobre) | "Fabricação Própria" |
| "Matéria-prima certificada" | Home (etapa Fabricação) | "Aço estrutural" |
| "Materiais certificados" | `constants.ts` (benefício) | "Isolamento termoacústico" |
| "Materiais certificados com garantia de fábrica" | LocationPage | "Estruturas parafusadas, moduláveis e ampliáveis" |
| "normas NR-12" | `constants.ts` (Escadas) | descrição sem citar norma |
| "ABNT NBR 8800, NBR 6123, NR-35" | LocationPage (parágrafo) | texto sobre características reais do aço |
| "Garantia de 5 anos em todas as estruturas" | LocationPage | "Estruturas parafusadas: podem ser ampliadas ou remontadas" |
| FAQ "Qual a garantia das estruturas?" | `constants.ts` | **removida** |
| Etapa "Garantia" / "Garantia estrutural" | Home (processo) | "Pós-obra" / "Acompanhamento da entrega" |
| `aggregateRating 5.0 / 127 avaliações` | JSON-LD de 154 páginas | **removido na rodada 1** |

Todas as substituições usam afirmações que o próprio site já sustenta (o aço é parafusado, modular e ampliável — isso está na FAQ original) ou descrições neutras de processo. Nenhuma afirmação nova foi inventada.

### Mantidas — **confirmadas por você como dados reais da empresa**

- "+850 Projetos"
- "14+ Anos" / "Excelência desde 2010"
- "100% Satisfação"
- "Avaliação 5.0" (texto visível nas páginas locais)
- Os 6 depoimentos nominais (Carlos Mendes, Ana Paula, Roberto Silva, Construtora Ideal, Marcos Oliveira, Júlia Santos)

Saem da lista de pendências conforme sua confirmação. **Uma ressalva técnica:** mesmo confirmados, esses itens continuam **fora do Schema**. O `aggregateRating` do Google exige avaliações efetivamente coletadas e exibidas por um sistema de avaliação — uma nota declarada no próprio site não atende ao requisito e é um dos gatilhos mais comuns de ação manual. O caminho certo para ter estrelas na busca é o **Perfil da Empresa no Google**, com avaliações reais dos clientes.

### Ainda **REQUER VALIDAÇÃO DO PROPRIETÁRIO**

1. `google-site-verification: xf-VU0Wu...` e o arquivo `public/google87bee2f2b89df17b.html` — confirme que ainda correspondem à sua propriedade no Search Console.
2. "2.000 m²" e "Redução de até 60% no tempo de obra" — números presentes no conteúdo que não foram cobertos pela sua confirmação.

---

## === OBRAS REAIS ===

A obra **Barracão Industrial para a Forvia, em São José dos Pinhais** foi **preservada integralmente**, com a foto real (`barracao-sao-jose-dos-pinhais-barracao-forvia.jpg`). Nenhum detalhe novo sobre a Forvia foi acrescentado. Nenhum case novo foi criado.

Ela ganha relevância extra agora: é uma obra na **mesma cidade da sede**, o que reforça a relação `Alumimec → São José dos Pinhais → galpão industrial → evidência real`.

---

## === FAVICONS ===

**Arquivo original da marca utilizado:** `public/logo-alumimec.jpg` (1200 × 1200, logo circular oficial)
**Elemento extraído:** o símbolo "A" oficial, isolado por análise de componentes conexos da imagem (bbox x 489–721, y 389–576 do original). A logo completa — anel + wordmark + telefones + @instagram — vira um borrão em 16×16, e o próprio briefing autoriza usar somente o símbolo nesse caso.

> **Nenhuma nova identidade visual ou logotipo foi gerado por IA.**
> Nada foi redesenhado, nenhum monograma foi inventado, nenhuma proporção foi alterada. O `favicon.svg` é um traço vetorial (potrace) fiel do próprio símbolo, preto sobre branco.

| Arquivo | Existe | HTTP | MIME | Dimensões | No `<head>` | Robots permite | Original da marca |
|---|---|---|---|---|---|---|---|
| `/favicon.ico` | SIM | 200 | `image/vnd.microsoft.icon` | 16×16, 32×32, 48×48 (ICO real) | SIM | SIM | SIM |
| `/favicon.svg` | SIM | 200 | `image/svg+xml` | viewBox `0 0 2048 2048` | SIM | SIM | SIM |
| `/favicon-96x96.png` | SIM | 200 | `image/png` | 96 × 96 | SIM | SIM | SIM |
| `/apple-touch-icon.png` | SIM | 200 | `image/png` | 180 × 180 | SIM | SIM | SIM |
| `/web-app-manifest-192x192.png` | SIM | 200 | `image/png` | 192 × 192 | via manifest | SIM | SIM |
| `/web-app-manifest-512x512.png` | SIM | 200 | `image/png` | 512 × 512 | via manifest | SIM | SIM |
| `/site.webmanifest` | SIM | 200 | `application/manifest+json` | — | SIM | SIM | — |

- `favicon.ico` é ICO real com 3 imagens embutidas — **não** é PNG renomeado.
- `robots.txt` não tem nenhuma linha `Disallow` — nada bloqueado.
- `theme_color: #1a3a6c` e `background_color: #ffffff` extraídos da identidade real do projeto (cor `primary` do tema e fundo branco da logo). Nenhuma cor inventada.
- Ícones do manifest com `purpose: "any maskable"` e cobertura de 62% do canvas, dentro da *safe zone* circular do Android — a marca não é cortada.
- Apple touch icon sem cantos arredondados artificiais.
- Todos renderizados em navegador (Chromium) a 16, 32, 96, 180 e 512 px: o símbolo permanece reconhecível em 16×16.

**Validação externa pendente no RealFaviconGenerator.** O Favicon Checker precisa do site publicado com esta versão. Rode em https://realfavicongenerator.net/favicon-checker depois do deploy. Não invento resultado de ferramenta que não executei.

**Google Search:** os requisitos estão atendidos (mesmo domínio, 200, não bloqueado, quadrado, URL estável, presente no HTML inicial sem depender de JS). O prazo de atualização é decisão do Google — não dá para prometer.

---

## === IMAGENS E SOCIAL ===

| Item | Antes | Depois |
|---|---|---|
| Peso de `public/` | 7,31 MB | **2,3 MB** (−69%) |
| `<img>` com `width`/`height` | 0 de 14 | **14 de 14** |
| `loading="lazy"` + `decoding="async"` | 0 | 13 (logo do header: `eager` + `fetchPriority="high"`) |
| ALT afirmando local não comprovado | 4 imagens × 153 páginas | ALT factual, sem afirmar onde a foto foi feita |
| Ícone do WhatsApp | hotlink `upload.wikimedia.org` | SVG inline |
| `og:image` padrão | `/logo-alumimec.jpg` (a logo) | foto real de obra — favicon/logo não é imagem social |

`og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`, `og:type`, `og:site_name`, `og:locale` e `twitter:card/title/description/image` presentes e sem duplicação em todas as páginas.

---

## === ACESSIBILIDADE ===

| Correção | Detalhe |
|---|---|
| Botões só com ícone sem rótulo | `aria-label` adicionado nos 3 botões de fechar modal (vídeo home, imagem galeria, vídeo LocationPage) |
| Links sociais só com ícone | `aria-label="Facebook da Alumimec"` / `"Instagram da Alumimec"` no rodapé |
| Menu mobile | `aria-expanded` + `aria-controls` no botão, `id` no drawer |
| Dois "X" sobrepostos ao abrir o menu | O botão do header e o botão do drawer apareciam juntos — o do header agora fica `invisible` com o menu aberto |
| Alvos de toque < 24px | 7 → **1** por página (links de serviço do rodapé ganharam `py-1.5`) |
| Hierarquia de headings | 1 `<h1>` por página, sem salto de nível — verificado nas 155 páginas |
| `alt` | presente em todas as imagens |

O único alvo abaixo de 24px que resta é o link de crédito do desenvolvedor no rodapé.

---

## === MOBILE E DESKTOP ===

Medido em navegador real (Chromium), com o `dist/` servido:

| Largura | Overflow-x | H1 | Erros JS |
|---|---|---|---|
| 320 px | 0 | 1 | 0 |
| 360 px | 0 | 1 | 0 |
| 375 px | 0 | 1 | 0 |
| 390 px | 0 | 1 | 0 |
| 414 px | 0 | 1 | 0 |
| 1366 px | 0 | 1 | 0 |
| 1440 px | 0 | 1 | 0 |
| 1920 px | 0 | 1 | 0 |

Testado na home e em `/cidade/sao-jose-dos-pinhais`.

**Bug real encontrado e corrigido:** havia **6 px de overflow horizontal em 320 px**. Causa: o menu mobile off-canvas ficava em `translate-x-full` (deslocado para a direita) quando fechado, ampliando a largura do documento. Passou a usar `-translate-x-full` (deslocamento negativo, que o navegador não transforma em área rolável), mais `overflow-x: hidden` em `html`/`body` como segunda barreira. O design não mudou — o menu agora entra pela esquerda.

---

## === SITEMAP ===

| | |
|---|---|
| URLs finais | **154** |
| Somente canônicas e indexáveis | **SIM** |
| Host | `https://www.alumimec.com.br` em 154/154 |
| URLs com `%20` ou acento | 0 |
| Redirects, 404 ou noindex incluídos | 0 (a `/404` não entra) |
| `lastmod` | data do build (formato `YYYY-MM-DD`) |

`robots.txt`: nenhum `Disallow`, CSS/JS/imagens/favicon/manifest liberados, crawlers de IA (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended) liberados, `Sitemap:` absoluto e correto.

---

## === SSG ===

| | |
|---|---|
| HTMLs gerados | **155** (154 rotas + `404.html`) |
| Title no HTML inicial | **SIM** — 154/154, todos únicos |
| Description | **SIM** — 154/154, todas únicas |
| Canonical | **SIM** — 154/154, absoluto e autorreferente |
| H1 | **SIM** — 1 por página |
| Conteúdo principal | **SIM** — home com ~163 KB de HTML |
| Links internos | **SIM** — 153 na home, 6 por página local |
| Schema | **SIM** — `@graph` válido (JSON parseado em todas) |
| NAP completo com nº 168 | **SIM** — 154/154 |
| Favicon | **SIM** — 5 tags no `<head>` estático |
| ALT | **SIM** |

Pipeline: `react-dom/server` + `StaticRouter` + `react-helmet-async`, em `scripts/prerender.mjs`. Se o pré-render falhar, ele emite aviso e **não derruba o deploy**.

---

## === BUILD ===

```
npm run generate-sitemap  → sitemap.xml gerado com 154 URLs canonicas
vite build                → ✓ built  (CSS 40,68 KB / JS 287,29 KB)
node scripts/prerender.mjs→ [prerender] 404.html gerado
                            [prerender] 154/154 HTMLs gerados
tsc --noEmit              → 0 erros
```

| | |
|---|---|
| Build | **PASS** |
| Typecheck | **PASS** |
| Lint | não configurado no projeto (não há ESLint) — `tsc --noEmit` faz o papel |

### Erros encontrados e corrigidos ao longo do processo

| Erro | Correção |
|---|---|
| `react-helmet-async` é CommonJS e quebrava o bundle SSR sob ESM | `ssr.noExternal` no build de pré-render |
| `prioritizeSeoTags` move title/description/canonical para `helmet.priority`, que não era serializado | `helmet.priority.toString()` incluído no `<head>` gerado |
| `cleanUrls: true` fazia o Vercel devolver 404 antes do rewrite | `cleanUrls` removido (rodada 1) |
| Rewrite catch-all devolvia **200** para URL inexistente (soft-404) | rewrite removido + `404.html` pré-renderizado com HTTP 404 real |
| URLs antigas com `%20` passariam a dar 404 | 234 redirects **301 reais** no `vercel.json` |
| `index.tsx` usava a API legada `hydrate`/`render` do React 17 | `hydrateRoot`/`createRoot` |
| Recorte inicial do favicon capturava fragmentos do anel e da treliça | isolamento por componente conexo da imagem |
| 6 px de overflow horizontal em 320 px | menu off-canvas passou a usar deslocamento negativo |
| Dois ícones "X" sobrepostos no menu mobile | botão do header fica invisível com o menu aberto |

### Pendências

1. **Validação externa no RealFaviconGenerator** — depende do site publicado com esta versão.
2. **Lighthouse / PageSpeed Insights** — não executado. Não há ferramenta de medição real neste ambiente e não invento pontuação. Rode após o deploy.
3. **As 146 páginas locais do grupo B** continuam indexáveis por sua decisão — risco de doorway page registrado.
4. **2 afirmações** ainda sem confirmação (2.000 m², redução de 60%).
5. **`google-site-verification`** a confirmar.

---

## === TESTE FINAL DE ENTIDADE ===

Verificado no HTML inicial, sem executar JavaScript:

| Pergunta | Resposta do site |
|---|---|
| Quem é? | Alumimec Estruturas Metálicas |
| O que faz? | Estruturas metálicas, galpões industriais, coberturas metálicas, mezaninos, escadas industriais, portões industriais, estruturas residenciais |
| Onde fica? | Afonso Pena, São José dos Pinhais - PR |
| Onde atende? | Curitiba e Região Metropolitana de Curitiba |
| Qual endereço? | R. Dep. Arnaldo Faivro Busato, 168 — Afonso Pena — São José dos Pinhais - PR — 83045-000 |
| Qual site? | https://www.alumimec.com.br/ |

**Nenhuma página contradiz essas informações** (154/154 verificadas programaticamente).

## === TESTE FINAL SEO LOCAL ===

| Verificação | Resultado |
|---|---|
| Filial fictícia em Curitiba | **não existe** |
| Endereço de Curitiba para a sede | **0 ocorrências** |
| LocalBusiness diferente por bairro | **não existe** — uma única entidade `#organization` |
| Coordenadas inventadas | **removidas**, nenhuma declarada |
| Endereço duplicado / entidade duplicada | **eliminado** (o `SEO.tsx` órfão foi excluído) |
| NAP conflitante | **0 conflitos** |

---

## Próximos passos depois do deploy

1. Confirmar no painel do domínio o 301 de `alumimec.com.br` → `www.alumimec.com.br`.
2. Search Console: propriedade principal `https://www.alumimec.com.br/`, reenviar o sitemap.
3. Rodar o Favicon Checker do RealFaviconGenerator.
4. Rodar o PageSpeed Insights (mobile e desktop).
5. Testar `https://www.alumimec.com.br/cidade/s%C3%A3o%20jos%C3%A9%20dos%20pinhais` → deve responder **301** para `/cidade/sao-jose-dos-pinhais`.
6. Testar `https://www.alumimec.com.br/qualquer-coisa` → deve responder **404**.
7. Considerar criar/atualizar o **Perfil da Empresa no Google** com o endereço de São José dos Pinhais — é o caminho legítimo para ter avaliações e aparecer no mapa.
8. Decidir sobre o `noindex` das 146 páginas locais.

---

SEO, GEO/AIO e favicons da Alumimec auditados e implementados utilizando a identidade visual original da empresa, sem criação de dados empresariais, cases, métricas ou identidade visual fictícios.
