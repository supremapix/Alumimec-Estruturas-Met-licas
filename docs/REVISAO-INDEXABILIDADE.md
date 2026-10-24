# Revisão de indexabilidade — antes e depois

Revisão solicitada após a entrega do protocolo Suprema, em 24/10/2026.

## Resultado exato

| Grupo                               | Antes (5c1b8e2)                | Depois (80918a5)                                   |
| ----------------------------------- | ------------------------------ | -------------------------------------------------- |
| Home /                              | 1 URL indexável no sitemap     | 1 URL indexável no sitemap                         |
| Municípios /cidade/*                | 29 URLs indexáveis no sitemap  | 2 indexáveis; 27 noindex, follow e fora do sitemap |
| Nomes locais /bairro/*              | 124 URLs indexáveis no sitemap | 124 noindex, follow e fora do sitemap              |
| Páginas próprias de serviço         | 0                              | 0                                                  |
| Total de URLs canônicas preservadas | 154                            | 154                                                |
| Total elegível para indexação       | 154                            | 3                                                  |

As três URLs indexáveis são:

1. https://www.alumimec.com.br/ — seis serviços, portfólio, processo, FAQs e contatos.
2. https://www.alumimec.com.br/cidade/curitiba — preparação de consulta para Curitiba, distinção de bairros oficiais/referências populares, acesso à obra, sede externa e condições sob consulta.
3. https://www.alumimec.com.br/cidade/sao-jose-dos-pinhais — sede confirmada em Afonso Pena, endereço documentado pelo proprietário e registro Forvia identificado no portfólio.

## Canonical, noindex e resposta HTTP

As 154 URLs canônicas respondem 200 e possuem canonical para si mesmas. Nenhuma das 151 foi canonicalizada para a home ou outra cidade. A retirada da elegibilidade foi feita explicitamente por meta robots noindex, follow.
As URLs legadas com espaços/acentos mantêm redirects permanentes para seus slugs. O teste público de uma URL antiga confirmou 308. Endereço inexistente confirmou HTTP 404 e página noindex.
O host sem www possui um redirect 307 da infraestrutura para o domínio canônico www. Isso é separado da política das páginas locais.
O sitemap contém apenas as três URLs indexáveis. robots.txt não bloqueia o acesso às páginas noindex, permitindo leitura da diretiva.
A matriz individual de URLs consta em indexability-audit.json.

## O que havia nas 151 páginas

A inspeção da versão-base identificou um único template LocationPage para todas as 153 localidades. Não havia textos, fotos, casos, perguntas ou dados carregados de um registro próprio por município/bairro.
As diferenças eram nome interpolado, termo cidade/bairro, título, descrição e links de localidades selecionadas por posição na lista. nearbyOf chamava esses nomes de vizinhos sem consulta geográfica. A prioridade de sete cidades era metadado de sitemap, não prova de atendimento nem conteúdo específico.
O template longo continha orientações gerais sobre estruturas, galpões, coberturas e mezaninos, repetidas em todas as localidades, além de promessas de atendimento prioritário, visita, prazos e certificação sem documentação local. O tamanho do texto não comprovava valor local distinto.
Não foi encontrada uma página substantiva exclusiva de uma dessas 151 localidades que precisasse ter sua indexabilidade restaurada. Os conteúdos gerais de serviços foram reorganizados na home indexável; não existe uma URL de serviço anterior removida ou bloqueada.
Os arquivos originais e o inventário permitem revisão do material, inclusive afirmações antigas que foram retiradas da interface.

## Natureza da mudança e risco

Houve, sim, redução de 151 URLs elegíveis. Isso não era a configuração anterior e não deve ser apresentado como mera preservação do SEO existente.
A redução foi uma decisão editorial para evitar indexação em massa de variações repetitivas e declarações territoriais não comprovadas, não uma falha técnica de canonical, robots ou pré-render.
Não foram consultados Search Console, analytics ou histórico de tráfego. Portanto, não é possível afirmar que essas URLs nunca receberam tráfego, que nunca foram indexadas ou que não haverá perda orgânica. Elegibilidade técnica não significa indexação efetiva.
Nesta revisão não se alteraram robots, sitemap ou conteúdo público; não se encontrou defeito técnico que justificasse reindexar em massa as páginas.

## Limitação real do escopo entregue

A expansão local substantiva ficou limitada a duas páginas de município. Não foi criado um conjunto completo de páginas de serviço nem conteúdos próprios para os outros 27 municípios e 124 nomes locais.
Os seis serviços são seções na home (/\#servico-1 até /\#servico-6), e âncoras não contam como páginas independentes no sitemap.
Para ampliar com qualidade, cada nova página deve ter uma finalidade distinta e informação útil: critérios específicos do serviço/local, fontes oficiais pertinentes, exemplos documentados ou condições reais confirmadas pela empresa. A fonte oficial comprova a geografia, mas não comprova cobertura comercial, filiais ou obras realizadas.
Nem todo nome herdado é bairro oficial de Curitiba. Referências populares e cadastros ambíguos continuam marcados para confirmação; nenhuma nova filial foi presumida.

## Fontes auditáveis

- [App anterior: três padrões de rota, nenhum de serviço](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10/App.tsx)
- [Template local anterior: noindex apenas para nome desconhecido](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10/pages/LocationPage.tsx)
- [Rotas e nearbyOf anteriores](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10/routes.ts)
- [Sitemap anterior](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10/public/sitemap.xml)
- [Template local publicado](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/80918a5b41c4773262f610af49ffed48de830195/pages/LocationPage.tsx)
- [Filtro de sitemap publicado](https://github.com/supremapix/Alumimec-Estruturas-Met-licas/blob/80918a5b41c4773262f610af49ffed48de830195/scripts/generate-sitemap.ts)
- [AMEP: municípios da RMC](https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba)
- [Prefeitura: bairros por regional](https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912)

## Evidência de validação

Build 154/154 + 404; auditoria pública das 154 URLs com HTTP 200 e diretiva noindex nas 151 previstas; sitemap com 3 loc; um canonical, description e robots por home; sem alteração de canonical para outro destino.
Essa validação prova o funcionamento técnico atual, não resultados de busca.
