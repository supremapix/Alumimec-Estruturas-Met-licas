# Entrega complementar — estado atual do protocolo Suprema

Esta versão substitui a política de indexabilidade da entrega inicial e completa as páginas próprias de serviço.

## Correção prioritária publicada

O commit 2f6d46df467da464ed16eb826e8d8f38a8719b99 restaurou as 154 URLs herdadas ao sitemap e a index, follow, com canonical próprio. A produção foi verificada em todas as 154 URLs: HTTP 200, sem noindex, sitemap com 154 entradas. URLs inexistentes mantiveram HTTP 404/noindex.
A remoção ampla anterior foi uma alteração nossa revertida por instrução do responsável. Não se afirma ausência de impacto orgânico; não há dados de Search Console disponíveis.

## Inventário final

- 160 URLs canônicas indexáveis: 1 home, 29 municípios, 124 nomes locais herdados e 6 páginas próprias de serviços.
- Nenhum bairro ou município novo criado.
- Todos os 154 caminhos anteriores e redirects históricos preservados.
- 6 serviços do catálogo, 9 imagens na galeria, 3 vídeos e 37 imagens/favicons originais preservados.
- 6 páginas próprias de serviço, com três blocos explicativos, quatro itens de checklist e três FAQs por serviço: 18 FAQs específicas ao todo.
- 29 páginas municipais com seis blocos de orientação de contratação/planejamento e três perguntas de consulta. Esses blocos são orientação geral, não fatos locais inventados.
- Canonicals próprios; sitemap inclui todas as 160 URLs. Apenas páginas desconhecidas/404 têm noindex.
- Fontes e estatísticas históricas nos relatórios anteriores estão identificadas como histórico, não política vigente.

## Novas páginas de serviços

| Caminho                           | Conteúdo específico                                                          |
| --------------------------------- | ---------------------------------------------------------------------------- |
| /servicos/galpoes-industriais     | Operação prevista, vão/pé-direito, escopo, apoios, transporte e montagem     |
| /servicos/coberturas-metalicas    | Uso da área, conforto sob avaliação, telhas, calhas/rufos e substituição     |
| /servicos/estruturas-residenciais | Garagens/pergolados, integração à casa, acabamentos e obra em imóvel ocupado |
| /servicos/mezaninos-metalicos     | Uso e cargas a avaliar, piso, altura, circulação, acessos e escopo           |
| /servicos/escadas-industriais     | Finalidade do acesso, modelos do catálogo, componentes, apoios e acabamento  |
| /servicos/portoes-industriais     | Fluxo de veículos, abertura, apoios, automação sob consulta e conservação    |

Cada página usa a imagem original do serviço, metadados próprios, uma entidade Service factual e provider único, breadcrumbs, links para outros serviços e CTA contextual. FAQs são apresentadas como conteúdo visível, sem prometer resultado enriquecido no Google.
Home, rodapé e páginas locais apontam para as páginas novas. As âncoras /#servico-1 a /#servico-6 continuam disponíveis.

## Conteúdo municipal e limites

Curitiba: sede externa em São José dos Pinhais; consulta por bairro/CEP; orientações de acesso, projeto e responsabilidades sem presumir exigências legais particulares.
São José dos Pinhais: sede documentada em Afonso Pena e imagem Forvia já identificada no portfólio. Orientação para combinar atendimento e avaliar o endereço.
Outros 27 municípios: pertencimento à RMC conforme AMEP, mas sem prova individual de obra ou disponibilidade comercial no acervo. A limitação está explícita em cada página. Não foram inventados clientes, casos, prazos, fretes, distâncias, condições de terreno, clima ou regras municipais.
Não existem associações de vizinhos derivadas da posição da lista. Foram omitidas apenas essas relações não comprovadas.
Os 124 nomes locais herdados permanecem acessíveis/indexáveis conforme a política restaurada. Nomes não reconhecidos na relação municipal são apresentados como referências a confirmar, sem assumir que são bairros oficiais. Não se criou conteúdo artificial para diferenciar todos esses nomes.

## Fontes

- Catálogo, contatos e imagens: constants.ts e public/ da base 5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10.
- Endereço: documentado no commit-base como fornecido pelo proprietário.
- AMEP: https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba
- Prefeitura de Curitiba: https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912
  Essas fontes comprovam cadastro territorial, não cobertura comercial.

## Ainda depende de informação do cliente

- Cobertura efetiva e condições de deslocamento por município/endereço.
- Obras e fotografias com identificação autorizada de local, escopo e cliente.
- Materiais/acabamentos atualmente disponíveis e o que cada proposta inclui.
- Prazos, custos, pagamentos, garantias e responsabilidades efetivamente oferecidos.
- Eventuais credenciais e documentos técnicos para divulgação.
  Não são bloqueios técnicos à publicação; delimitam quais afirmações comerciais não foram feitas.

## Validação

Build, lint, tipos, verificação de indexabilidade por HTML e sitemap, links/imagens das 160 rotas, preservação por hash e QA de interação.
Matriz visual das seis páginas: 320, 360, 390, 430 e 1440 px, texto 200%; axe nas seis páginas em 390/1440; amostras municipais Curitiba, sede e Colombo. Resultados em docs/qa/service-results.json, results.json e interactions.json.
As ressalvas de dependências moderadas e redirect de host sem www 307 permanecem registradas no relatório inicial.
A matriz atual completa está em docs/indexability-current.json. O preview local foi ajustado para servir o HTML pré-renderizado das URLs sem barra final, evitando fallback da home e falsos erros de hidratação nos testes.
