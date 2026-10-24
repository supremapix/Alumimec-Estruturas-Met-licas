# Expansão territorial — etapa 1 (24/10/2026)

**O pacote territorial completo da Região Metropolitana ainda não está concluído.** Esta é uma etapa verificada, com inventário e fila explícita de continuidade.

## Conteúdo entregue nesta etapa
12 guias com textos próprios, três seções de planejamento, três FAQs, foto original contextual, arte local 250×250, CTA, metadados próprios, canonical e breadcrumb. Os seis serviços reais continuam acessíveis em todos os guias.

| Município | Guias | Situação das URLs |
|---|---|---|
| Curitiba | Boqueirão, Uberaba, Água Verde, Xaxim, Santa Felicidade, Pinheirinho | Seis URLs existentes enriquecidas |
| São José dos Pinhais | Afonso Pena, Guatupê, Cidade Jardim, Borda do Campo, Parque da Fonte, Barro Preto | Seis URLs novas, com município no caminho |

**Total: 166 URLs indexáveis. As 160 anteriores foram preservadas.** Não foram criados aliases para os seis guias antigos, evitando duplicação. Os links entre guias usam o município, sem afirmar vizinhança física arbitrária.

Cada texto tem foco editorial específico: consulta na sede e integração residencial; ampliação de galpão; circulação de estacionamento; organização de grandes áreas; aproveitamento interno com mezanino; acessos e portões; escadas e compatibilização. Esses focos são possibilidades de projeto, não afirmações sobre a economia ou obras existentes no bairro. As fotos são identificadas como catálogo, sem atribuir uma obra ao bairro.

## Inventário territorial e fontes
O arquivo `territorial-inventory.json` registra os 29 municípios, URLs municipais existentes, fontes, nomes conferidos, guias produzidos, limites de cobertura e classificação dos 124 nomes legados.

- Curitiba: 75 nomes confrontados com a [relação municipal](https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912). A fonte é histórica; não foram reproduzidos administradores, contatos ou estatísticas antigas como atuais. Seis guias prontos; demais nomes não receberam conteúdo próprio nesta etapa.
- São José dos Pinhais: 41 entradas no [índice municipal consultado](https://www.sjp.pr.gov.br/mapas-do-municipio/), com perfis individuais citados nos seis guias. Não se afirma que esse índice seja um censo territorial atualizado e completo. Nomes de jardins, plantas e loteamentos são diferenciados de bairros.
- Piraquara: 21 bairros enumerados no art. 15 da [Lei 2672/2026 no portal municipal](https://www.piraquara.pr.gov.br/portal/leis_decretos/81875). Guarituba Central, Guarituba Redondo e a UTP do Guarituba não são tratados como a mesma classificação. Inventário pronto, conteúdo ainda pendente.
- Pinhais: 15 nomes identificados no [mapa oficial histórico](https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf). É necessária conferência de limites atuais no GeoPinhais antes de concluir guias. Nenhuma estatística de 2010 foi apresentada como atual.
- Colombo: [índice oficial de mapas](https://prefeitura.colombo.pr.gov.br/downloads-secretaria-municipal-do-desenvolvimento-urbano-e-habitacao/) localizado. O PDF de bairros/loteamentos não forneceu texto extraível nesta consulta; transcrição e distinção cadastral pendentes.
- Araucária: [referência municipal de mapas](https://araucaria.atende.net/cidadao/noticia/site-da-prefeitura-disponibiliza-mapas-das-areas-urbana-e-rural-do-sistema-viario-de-loteamentos-aprovados-entre-outros) localizada; relação nominal ainda não validada.
- Demais 23 municípios: página municipal anterior preservada; fonte específica de bairros e inventário nominal ainda pendentes. Não há cobertura individual demonstrada no catálogo.

## Continuidade necessária
1. Completar a conferência de fontes e classificação por município, começando por Piraquara/Pinhais e pelos mapas de Colombo/Araucária.
2. Produzir novos guias apenas quando houver recorte editorial útil e informação territorial suficiente. Não multiplicar automaticamente texto por nome.
3. Enriquecer gradualmente os demais bairros oficiais já presentes, preservando URLs e indexabilidade.
4. Solicitar ao cliente áreas efetivamente atendidas, obras autorizadas para portfólio, detalhes de logística e especialidades por projeto. A ausência dessas informações impede afirmar cobertura ou experiência local, mas não impede páginas de consulta claramente qualificadas.

## Validação
Build com 166 HTMLs; suíte global de links/imagens/rotas; testes dos 12 guias em 320/360/390/430/1440 px, texto 200%, três FAQs e arte de 250px. Resultados em `docs/qa/territorial.json` e `docs/qa/results.json`. A evidência de produção da rodada visual foi salva separadamente antes desta expansão.

Não houve remoção de elegibilidade de indexação nesta etapa e não é feita afirmação de ausência de impacto orgânico da mudança anterior já revertida.
