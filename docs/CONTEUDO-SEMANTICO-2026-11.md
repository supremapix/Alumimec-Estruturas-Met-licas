# Alumimec: conteúdo contextual e seção 250 × 250

## Escopo

196 rotas existentes preservadas: 1 home, 29 municípios, 155 referências e guias de bairros, 6 serviços, 4 aplicações e 1 hub de atendimento. Não foram criadas páginas territoriais novas. A página 404 não recebe o bloco comercial.

Todas as 196 páginas têm seção visível, pré-renderizada antes do rodapé, com título e introdução contextualizados, três tópicos de orientação, lista de informações para consulta, banner SVG 250 × 250 com a marca original e dois telefones, endereço, e-mail e ações de WhatsApp/ligação. O WhatsApp prepara uma mensagem relacionada à página; nada é enviado automaticamente.

Há seis conjuntos editoriais próprios por serviço, quatro conjuntos por aplicação e orientações gerais de comparação para páginas territoriais sem foco específico. Guias curados usam o foco de serviço já documentado. Títulos e introduções variam pela rota; recomendações técnicas de uma mesma categoria são compartilhadas intencionalmente, não se apresenta este trabalho como 196 artigos inteiramente diferentes.

## Pesquisa de concorrentes, consultada em 07/11/2026

- Steel Strong — https://steelstrong.com.br/ : navegação por tipos de estrutura, mezaninos e cobertura, com contato direto. Oportunidade: explicar diferenças de uso e informações que tornam a consulta produtiva.
- Gabardo — https://gabardoestruturas.com.br/ : destaque para estruturas sob medida, fabricação e montagem. Oportunidade: esclarecer escopo, interfaces e documentação, sem atribuir à Alumimec processos industriais específicos do concorrente.
- Metallum CWB — https://metallumcwb.com.br/industrial/ : catálogo industrial de galpões, estruturas, fechamentos e mezaninos. Oportunidade: ligar aplicação e problema de uso, mantendo somente os seis serviços confirmados da Alumimec.
- Manosso — https://www.serralheriamanosso.com.br/servicos/estruturas-metalicas : percurso da consulta à montagem, dúvidas e exemplos. Oportunidade: orientar o cliente sobre fotos, cargas, acessos, acabamento e conservação. Não foram importadas promessas de prazo, visita gratuita, garantia, certificações ou técnicas de fabricação do concorrente.

Textos originais, sem reproduzir trechos ou fotografias dos concorrentes. As fontes são referência editorial de mercado, não comprovação das capacidades da Alumimec.

## Evidências próprias e limites editoriais

Serviços e contatos conferidos em constants.ts, site.config.ts e no site oficial. A marca do banner reutiliza public/logo-alumimec.jpg sem substituir o acervo de obras. As orientações não oferecem dimensionamento de engenharia, preço por metro quadrado, garantia universal, capacidade de carga ou comprovação de obra/filial local. Mantidas classificações territoriais, fontes municipais, URLs, redirecionamentos, indexabilidade e funcionalidades anteriores.

## Verificação

- Lint e TypeScript: aprovados.
- Build: 196/196 páginas e 404 pré-renderizadas.
- Auditoria estática: 196 rotas, 10.348 referências internas e 1.115 ocorrências de imagem, com H1 único, canonical, JSON-LD parseável, arquivos locais e sitemap preservados.
- Auditoria específica: exatamente uma seção em cada página, 196 títulos próprios, imagem declarada 250 × 250, telefone/WhatsApp/e-mail corretos e seção ausente da 404.
- Testes de navegador locais não concluídos: o ambiente bloqueia o socket Unix necessário ao Chromium; o download de navegador Playwright também retornou arquivo incompleto. Não confundir as auditorias estáticas aprovadas com aprovação desses testes.
- A validação visual do deploy de prévia e o estado de publicação são registrados separadamente após sua execução.

## Reproduzir

npm ci; npm run lint; npm run typecheck; npm run build.
STATIC_ONLY=1 node scripts/validate.mjs
STATIC_ONLY=1 node scripts/semantic-qa.mjs

Em ambiente com Chromium disponível: npm run preview -- --host 127.0.0.1 --port 4174, depois npm test e node scripts/semantic-qa.mjs. Opcionalmente informe PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH com o executável instalado. O gerador de sitemap usa node --import tsx para evitar a criação de socket IPC desnecessário da CLI tsx.
