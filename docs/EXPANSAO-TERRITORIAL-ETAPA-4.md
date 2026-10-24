# Expansão territorial — etapa 4

Data: 24/10/2026. Base preservada: commit 017a89a, 184 URLs. Resultado local: 191 URLs indexáveis, 41 guias próprios, 29 páginas municipais com planejador e dez diretórios pesquisáveis. A expansão integral de bairros da RMC permanece incompleta.

## Conteúdo e utilidade

Sete guias novos em São José dos Pinhais: Academia (ampliação e identificação do endereço), Campo Largo da Roseira (unidade e expansão de galpão), Colônia Rio Grande (cobertura e continuidade de uso), Contenda (desambiguação com o município homônimo e planejamento do acesso), Aviação (circulação e separação da área aeroportuária), Cristal (áreas de apoio e referências homônimas) e Miringuava (planejamento por etapas). Cada página tem texto próprio, fonte municipal, FAQs, fotografia original contextual, arte SVG 250×250 com logo/contatos existentes e links aos seis serviços. Não se atribuem as fotos a obras nesses bairros.

Fontes: perfis oficiais em https://www.sjp.pr.gov.br/mapas-do-municipio/academia/ , campo-largo-da-roseira/ , colonia-rio-grande/ , contenda/ , aviacao/ , cristal/ e miringuava/ no mesmo diretório. Dados históricos demográficos/econômicos não foram apresentados como atuais.

O novo `ProjectPlanner` nas 29 páginas municipais combina seis serviços reais, situação da obra, localidade e observações. Mostra três perguntas próprias por serviço e orientação para ampliação, substituição ou obra nova. Prepara mensagem revisável para WhatsApp, sem envio automático, sem armazenar dados e sem calcular dimensões/cargas. Conteúdo essencial e perguntas iniciais estão no HTML renderizado. A confirmação do responsável sobre atendimento por deslocamento permanece vigente.

## Inventário territorial

- 225 nomes da base IBGE 2022 e lei de Piraquara já documentados.
- 31 referências do mapa de Campina Grande do Sul publicado junto da Lei 1.122/2026. O mapa datado de dezembro de 2025 conserva a legenda “Bairros Propostos”; a ressalva aparece no site. Não se afirma cobertura cadastral integral da área rural.
- 30 referências parciais de Itaperuçu, notícia municipal de coleta seletiva de 22/10/2026.
- 22 referências parciais de Quatro Barras, edital municipal 01/2025, página 4. Quatro são descritas pela fonte como áreas rurais. Não se aproveitou a classificação socioeconômica do edital em conteúdo comercial.

Total: 308 referências de naturezas distintas, não “308 bairros oficiais atuais”. São 41 com guia e 267 com diretório e planejador. Das 191 referências da etapa anterior sem guia, sete foram desenvolvidas e 184 permanecem sem guia próprio. O inventário individual e a justificativa editorial estão em `territorial-content-decisions.json`.

## Fontes novas e acesso

- Campina: https://campinagrandedosul.pr.gov.br/plano-diretor-mobilidade . Os anexos foram recuperados pelo carregador público da própria página, sem autenticação. Lei: https://campinagrandedosul.pr.gov.br/Downloads/Arquivos/2026_6427_a310305j5ev.pdf . Mapa: https://campinagrandedosul.pr.gov.br/Downloads/Arquivos/2026_6426_pmuqnlcpm50.pdf . Lei lida nas quatro páginas; mapa extraído e inspecionado visualmente com PDF.js. O PDF da lei contém folhas de identificação dos anexos, enquanto o mapa é arquivo separado no mesmo conjunto municipal.
- Itaperuçu: https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/ . Leitor web inicialmente falhou, mas HTTP público retornou 200 e permitiu extrair a tabela e data. Lista parcial, não cadastro.
- Quatro Barras: https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/EDITAL-12-11-2025.pdf . Página 4 lida; lista parcial preserva indicação rural.
- Campo Largo: página de cartografia também foi obtida por HTTP 200, mas não entregou os anexos/lista nominal no HTML. Não se inventou classificação de Ferraria.
- Tijucas do Sul: a matéria SAPL comprova referência à Lei 911/2023, mas o endpoint de normas retornou lista vazia e o projeto antigo continua sem texto consolidado. Não se publicou projeto como lei.

## Validação

Build com pré-renderização, lint e TypeScript. Testes de rotas, links, imagens, schema, títulos, self-canonicals, sitemap e 404 noindex. Guias: 205 combinações de viewport e 41 verificações axe, incluindo texto 200%. Serviços: 30 combinações e 12 verificações axe. Planejador: 29 páginas no HTML, 90 seleções de serviços, 30 combinações de largura/texto, teclado, mensagem codificada e axe. Diretórios: dez municípios, 50 combinações de viewport, busca com/sem acentos, teclado e texto 200%. Larguras 320/360/390/430/1440. Capturas em `docs/qa/`; resultados JSON versionados. Nenhuma mensagem real enviada.

O reparo mobile, originais, favicons, compartilhamento, menu/footer e seis etapas anteriores foram preservados. Nenhuma URL existente perdeu indexabilidade. Isso não constitui garantia de ranking nem prova de ausência de impacto orgânico.

## Limites e próximo dado necessário

Não há 267 pautas próprias demonstradas pelas fontes: a maioria fornece apenas nomes/limites, e não necessidades locais de construção. Para guias adicionais úteis, faltam casos de uso reais por localidade ou contexto territorial que altere a orientação, com divulgação autorizada quando houver obras/clientes. A confirmação ampla de atendimento já foi incorporada e não é bloqueio.

Nos 21 municípios ainda sem relação nominal territorial consolidada, a limitação de fonte por município permanece em `TERRITORIOS-FONTES.md`; Itaperuçu e Quatro Barras agora contam com referências parciais. A classificação das listas parciais requer cadastro/mapa municipal. O mapa de Campina tem ressalva editorial registrada. Não foram criadas páginas individuais apenas para consumir todos os nomes.

Não houve negação de permissão nem necessidade de mudar permissões. Instalação temporária de leitor PDF ficou fora do repositório, sem alterar dependências do site. Verificação de publicação registrada separadamente após deploy.

## Incorporação dos hubs e cards no mesmo lote

Após o pedido adicional do responsável, esta rodada passou de 191 para 196 URLs: quatro aplicações e o hub regional /atendimento. Os 41 guias e 308 referências permanecem. Seis páginas de serviços foram reaproveitadas como hubs; detalhes em HUBS-E-CARDS-SEMANTICOS.md. A inspeção visual dos modais detectou e corrigiu o fundo do botão de fechar durante rolagem; o teste passou a verificar também sua cor opaca.
