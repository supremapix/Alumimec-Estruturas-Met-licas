# Alumimec — site institucional

React + TypeScript + Vite, com HTML estático pré-renderizado para as 160 rotas existentes.

## Executar

Node.js 22 ou superior. Nenhuma chave de API é necessária.

```sh
npm ci
npm run dev
```

## Validar

```sh
npm run lint
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
# Em outro terminal:
npx playwright install chromium
npm test
npx tsx scripts/inventory.ts
```

No Windows, se o navegador estiver no cache do usuário fora do sandbox, configure PLAYWRIGHT_BROWSERS_PATH para o diretório de instalação existente.

Build gera dist/, sitemap e HTML por rota; qualquer erro de pré-render interrompe a compilação. A configuração Vercel mantém os redirects legados e a resposta 404.
Veja [relatório de entrega](docs/PROTOCOLO-SUPREMA.md), [inventário final](docs/inventory-after.json) e [resultados de QA](docs/qa/results.json).

Atualize dados confirmados em constants.ts e site.config.ts. Não converta listas territoriais em cobertura presumida. A indexabilidade das 154 URLs herdadas foi restaurada; seis páginas próprias de serviços foram adicionadas. Veja docs/ENTREGA-COMPLEMENTAR.md para o estado atual.
