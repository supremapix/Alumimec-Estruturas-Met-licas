# Expansão territorial de 9 de novembro de 2026

## Implementação

- Hub `/atendimento`: pesquisa sem distinção de acentos por município/bairro, filtro RMC/entorno, fontes visíveis e bairros em listas expansíveis renderizadas no HTML.
- Os 29 municípios metropolitanos continuam atendidos, independentemente do raio. A expansão adiciona oito municípios do entorno como consultas por endereço no mesmo hub, sem páginas artificiais duplicadas.
- Planejador para 37 municípios; trocar a cidade reinicia os campos de contexto para evitar enviar um bairro com município incorreto. A mensagem só é enviada por decisão do visitante no WhatsApp.
- Home, descrição e dados estruturados atualizados, mantendo uma só sede em São José dos Pinhais e os contatos existentes. Nenhuma filial, obra local ou prazo foi inventado.
- 196 rotas, URLs, canonical e sitemap existentes preservados.

## Critério geográfico

O pedido de 80 km é tratado como referência aproximada em linha reta, nunca como distância rodoviária. O ponto de partida é a coordenada municipal de São José dos Pinhais publicada pela prefeitura (25°32′05″S, 49°12′23″W), e não uma coordenada não comprovada da porta da Alumimec. Fontes e coordenadas dos destinos ficam em `coverage-area.ts`, com links visíveis no hub. Haversine, raio terrestre de 6.371 km, arredondamento em quilômetros.

Resultados: Morretes ~38 km, Antonina ~51 km, Garuva ~65 km, Porto Amazonas ~69 km, Paranaguá ~70 km, Guaratuba ~74 km, Matinhos ~74 km e Campo Alegre ~76 km. Não significam inclusão de todo território municipal. Pontal do Paraná e Palmeira aparecem apenas como áreas limítrofes a consultar, sem falsa afirmação de inclusão integral. Essa triagem não é inventário exaustivo da interseção de malhas municipais com um círculo.

Bairros/localidades: ver `EXPANSAO-BAIRROS-2026-11-09.md`. Todas as listas têm classificação, fonte e limitação. Ausência na lista não significa falta de atendimento.

## Validação

Lint, TypeScript, build/pre-render e validação estática das 196 rotas aprovados. O navegador Chromium de processos locais não inicia neste ambiente por restrição de sockets, inclusive na execução aprovada. A prévia localhost também não está acessível pelo navegador conectado. Os testes de navegador não são declarados aprovados por esse motivo; a interface será verificada na prévia publicada antes da promoção ao domínio oficial. Script de regressão completo adicionado em `scripts/coverage-expansion-qa.mjs` para ambiente com Chromium disponível.

## Produção e verificações funcionais

Publicação explicitamente autorizada pelo responsável. Árvore de código local conferida idêntica ao commit remoto 301459f. Vercel READY e status GitHub Vercel success; domínio oficial conferido no navegador. Pesquisa por Afonso Pena retornou São José dos Pinhais; filtro do entorno retornou oito cidades; busca sem resultado e restauração retornaram 0 e 37 municípios. Planejador preparou mensagem com cidade/bairro e limpou contexto ao trocar município. Foram confirmadas 525 referências no DOM e 75 opções para Curitiba. Tela de 1167 px sem overflow. Nenhuma mensagem foi enviada.

A prévia protegida não foi aberta: a criação de link temporário de acesso foi negada e nenhuma proteção foi alterada. A validação funcional usou o domínio público após a publicação autorizada. Teste automatizado de todos os viewports e axe não executado, devido à restrição local já descrita. Não é declarado um passe completo de regressão visual/acessibilidade.
