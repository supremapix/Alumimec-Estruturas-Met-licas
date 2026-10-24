# Expansão territorial — etapa 2

Data: 24/10/2026. Esta etapa amplia a primeira; não representa expansão completa da Região Metropolitana.

## Entrega

- 172 URLs indexáveis, com self-canonical, sitemap e HTML pré-renderizado. Todas as 166 anteriores preservadas. Nenhum `noindex` acrescentado a conteúdo existente.
- Oito guias adicionais: Cajuru e Bacacheri (URLs existentes de Curitiba enriquecidas), Iná/SJP, Atuba/Pinhais, Guaraituba/Colombo, Guarituba Central/Piraquara, Tindiquera/Araucária e Eucaliptos/Fazenda Rio Grande (seis URLs novas).
- Total de 20 guias: Curitiba 8, São José dos Pinhais 7, Pinhais 1, Colombo 1, Piraquara 1, Araucária 1 e Fazenda Rio Grande 1.
- Cada guia tem três seções editoriais, duas FAQs específicas e uma FAQ de consulta, imagem original contextual, arte SVG de 250×250 com logo original e contato, links aos seis serviços e à página municipal. Assuntos: circulação em mezanino, garagem/portão, integração de ampliação, troca de cobertura, fluxo de galpão, identificação cadastral, fases de grandes áreas e interfaces do portão.
- Sete páginas municipais receberam diretório pesquisável com 225 referências nominais, fonte/ano explícitos e CTA preparado por bairro. Busca tolera acentos, mantém conteúdo no HTML inicial e funciona por teclado. Diretório não significa atendimento confirmado em todos os endereços.
- Base IBGE final 2022: Curitiba 75, SJP 41, Pinhais 15, Colombo 42, Araucária 18, Fazenda Rio Grande 13. Piraquara 21 pela lei municipal 2672/2026, artigo 15. Não se presume que a base 2022 reflita alterações posteriores.

## Verificações locais

- `npm run build`: 172/172 HTMLs, sitemap 172 URLs e página de erro real.
- `npm run lint` e `npm run typecheck`: passaram.
- `npm test`: 172 rotas, 6.768 links internos/âncoras e 454 referências de imagem; interações, seis páginas de serviços, 30 combinações de viewport e verificações de texto ampliado.
- `node scripts/check-indexability.mjs`: 172 self-canonicals indexáveis; 404 com noindex.
- `node scripts/territorial-qa.mjs`: 20 guias × cinco larguras = 100 verificações; 20 varreduras axe, 20 verificações a 200%, zero erros de página.
- `node scripts/directory-qa.mjs`: sete diretórios × cinco larguras = 35 verificações, busca com/sem acento, vazio, teclado, URLs preparadas de WhatsApp sem envio, sete verificações de texto a 200%/320px e axe. Comparação com sitemap de `367c3e3` preservou as 166 URLs.
- `npx tsx scripts/inventory.ts`: seis serviços, nove imagens da galeria, três vídeos e 37 imagens originais preservadas; cinco diferenças de favicon já autorizadas na rodada anterior; zero duplicatas indevidas.
- Inspeção visual das capturas de diretório, busca, hero e arte local em desktop e mobile; logo não recortada, telefone legível e controles flutuantes separados do conteúdo. Sem reconstrução raster de fotografias.

O primeiro teste de preservação tentou ler `.prerender-routes.json` no Git; o arquivo é gerado e ignorado. O teste foi corrigido para comparar com o sitemap versionado e passou. O log antigo do teste territorial dizia 12/60 por texto fixo; o JSON registrou corretamente 20/100 e o log foi tornado dinâmico.

## Evidências e reprodução

- `data/territories.json`: nomes/códigos, fonte, versão e SHA-256 do ZIP IBGE.
- `docs/territorial-inventory.json`: 29 municípios, nomes conferidos, guias e lacunas.
- `docs/TERRITORIOS-FONTES.md`: fontes e limitações individualizadas dos 29 municípios.
- `docs/qa/territorial.json`, `directories.json`, `results.json` e demais relatórios da suíte.
- Capturas: `docs/qa/directory-search-320.png`, `directory-search-1440.png`, `local-art-stage2-320.png`, `local-art-stage2-1440.png`.
- A verificação posterior à publicação usa `scripts/verify-production.mjs`; resultado em `../territorial-stage2-production.json`, fora do checkout, para registrar o SHA final sem um novo commit recursivo de relatório.

## Pendências reais

As fontes territoriais não oferecem evidência comercial individual para os outros 205 nomes do inventário. Criar uma página por nome apenas redistribuindo recomendações gerais não atende ao requisito de conteúdo próprio. São necessários contextos reais por local: demandas recebidas, serviços executados/autorizados para divulgação, cobertura confirmada e condições de acesso verificadas. Não foram inventados esses fatos.

Em 22 municípios, a pesquisa localizou portais, mapas ou planos, mas não consolidou uma relação nominal que separe bairros oficiais de loteamentos/localidades. Campo Largo retornou índice sem texto; Tijucas do Sul retornou 503 no projeto de divisão territorial, que não foi presumido aprovado. Contenda lista principalmente plantas de loteamentos. As demais lacunas estão descritas por município no relatório de fontes. Não há negativa de permissão; há lacuna documental e editorial. As 29 páginas municipais e URLs herdadas continuam publicadas, sem remoção de indexabilidade. Não se declara ausência de impacto orgânico.
