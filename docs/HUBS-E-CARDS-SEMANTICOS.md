# Hubs de serviços, aplicações e atendimento

24/10/2026. Arquitetura publicada somente após validação. Não há promessa de ranking ou de citação por Google, Bing ou modelos de linguagem.

## Mapa de intenções e URLs

| Intenção / termos relacionados | Hub e decisão |
|---|---|
| Galpões industriais, galpões metálicos, estrutura para indústria/logística | /servicos/galpoes-industriais — página existente reaproveitada |
| Coberturas metálicas, telha sanduíche/termoacústica, proteção de áreas | /servicos/coberturas-metalicas — existente, materiais sob consulta |
| Estruturas residenciais, ampliação de ambiente residencial | /servicos/estruturas-residenciais — existente |
| Mezaninos metálicos, aproveitamento da altura, novo nível | /servicos/mezaninos-metalicos — existente |
| Escadas industriais, circulação entre níveis | /servicos/escadas-industriais — existente |
| Portões industriais, acesso de veículos e grandes vãos | /servicos/portoes-industriais — existente, sem dimensionamento |
| Ampliar galpão, expansão lateral ou estudo de novo nível | /aplicacoes/ampliacao-de-galpoes — novo |
| Cobrir estacionamento, circulação e vagas | /aplicacoes/cobertura-de-estacionamentos — novo |
| Cobertura/acessos de carga e descarga | /aplicacoes/areas-de-carga-e-descarga — novo; equipamentos de doca não ofertados como serviço confirmado |
| Aproveitar grandes áreas, comparar cobertura/galpão/mezanino/ampliação | /aplicacoes/aproveitamento-de-grandes-areas — novo |
| Atendimento em Curitiba/RMC, localizar município e bairro | /atendimento — novo; conecta 29 páginas municipais existentes, dez diretórios e planejador |

Termos são um mapa editorial de intenções, não pesquisa de volume ou posição em ferramenta de SEO. Sinônimos permanecem na mesma URL. Não há combinação cartesiana serviço × bairro.

## Conteúdo e links

Seis hubs existentes já continham introdução, três orientações, checklist, três FAQs e fotos reais. Foram conectados às aplicações pertinentes e aos guias locais cujo foco corresponde ao serviço; o FAQ visível agora também é passado ao schema. Os quatro novos hubs de aplicação têm introdução própria, três decisões de planejamento, checklist e três FAQs cada. A página regional explica atendimento por deslocamento, fontes e identificação do endereço.

Home, footer, páginas municipais e guias locais apontam para aplicações/atendimento. Aplicações retornam aos serviços envolvidos e aos planejadores de Curitiba/SJP, sem inferir obras locais. Hubs de serviços listam os guias territoriais correspondentes; os guias retornam aos serviços. Breadcrumbs, metadados, self-canonicals e sitemap acompanham as cinco novas rotas. Total final: 196 URLs indexáveis; as 184 anteriores à rodada permanecem.

## Cards semânticos

Os seis cards de serviços da home abrem explicação pela imagem, com nome acessível “Entender”. Cards de aplicações em todas as páginas oferecem botão “Entender”, além do link rastreável de página completa. Cada diálogo mostra título, fotografia original inteira, duas orientações específicas, limites técnicos, página completa e consulta WhatsApp contextual. Textos resumidos, títulos e links continuam disponíveis fora do diálogo e no HTML.

O componente ContextPreview usa dialog nativo, fechamento grande, Escape, contenção de foco, retorno ao acionador e restauração da rolagem. Histórico volta/avança fecha diálogos; nenhum compartilhamento ou mensagem é enviado automaticamente. Não há abertura de nova aba pelo modal. Galeria mantém o lightbox original, sem um segundo modal. Diretórios, navegação e contatos continuam links; o planejador e as etapas mantêm sua função própria, sem interceptação de cliques.

Validação específica em scripts/hubs-context-qa.mjs e docs/qa/hubs-context.json: cinco hubs × cinco larguras; 80 aberturas de dez tipos de card (seis serviços/quatro aplicações) em 320/390/430/1440; texto 200%, Tab, Escape, foco, rolagem, voltar/avançar e movimento reduzido. Capturas context-service/context-200/hub em docs/qa. Resultado só considerado concluído após execução e inspeção visual.

## Limites

Não foram criados serviços fora dos seis itens confirmados no catálogo. Aplicações são possibilidades a avaliar, não produtos padronizados nem obras comprovadas. A expansão territorial continua limitada pelas fontes/classificações documentadas e pela ausência de pautas locais próprias para os nomes restantes. Novos exemplos reais exigem informações e autorização de divulgação do cliente.

## Retomada após desconexão

O workspace voltou a responder e o remoto foi conferido ainda em 017a89a. A compilação, lint e tipos passaram na retomada. O fechamento do modal foi inspecionado visualmente em 320 px e texto 200%; o fundo opaco foi confirmado e a largura máxima foi explicitada para evitar que a margem padrão do dialog comprimisse o conteúdo com texto ampliado. Testes e capturas finais são os arquivos atualizados em docs/qa.
