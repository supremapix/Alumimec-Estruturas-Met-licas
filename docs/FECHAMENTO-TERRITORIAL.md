# Fechamento territorial viável — 24/10/2026

## Critério de conclusão

Esta revisão encerra a expansão viável com as evidências reunidas, sem afirmar que todo bairro da RMC tem guia ou que não existem outras fontes públicas. Um guia novo exige: identificação territorial suficiente, uma necessidade de planejamento própria e conteúdo que acrescente utilidade aos seis serviços/quatro aplicações existentes. Nome, coordenada, população ou mapa, isoladamente, não justificam nova página comercial.

As 267 referências sem guia na etapa 4 foram confrontadas com a classificação/fonte de cada registro e com as pautas já publicadas. Resultado: nenhuma recebeu nova URL apenas para repetir uma aplicação existente. Permanecem 41 guias próprios e 196 URLs indexáveis. Nenhuma URL, canonical ou elegibilidade anterior foi removida.

## Melhorias concluídas

- Contenda: 13 referências do índice cartográfico oficial, identificadas como loteamentos, jardim ou chácaras. Não são declaradas bairros oficiais. Arquivos com sufixos de versão não geram duplicatas territoriais. Fonte sem data dos anexos; 2026 é data de consulta.
- Piên: seis referências da notícia municipal de 07/10/2026, explicitamente lista parcial. Variação de grafia Crispins/Crespins explicada. Lei 1.436/2021 consultada trata de quadro urbano; não foi convertida em lista de bairros.
- Orientações específicas em Almirante Tamandaré, Balsa Nova, Contenda, Doutor Ulysses, Lapa e Piên: cadastro, distrito/localidade, agrupamentos de saúde, mapas antigos, grafia e informações para preparar a consulta da obra. Fontes oficiais visíveis e link ao planejador. Não foram inferidas obras, filiais, condições viárias ou serviços adicionais.

Inventário final: 327 referências em 12 diretórios, sendo 225 de base IBGE/lei anterior, 31 do mapa anexo de Campina, 58 de publicações de serviços municipais e 13 referências cartográficas de Contenda. São 41 com guia e 286 sem guia individual (267 anteriores + 19 novas). Não chamar esse conjunto de “327 bairros oficiais vigentes”.

## Pesquisa e lacunas por município

O arquivo `territorial-closure-audit.json` contém os 21 municípios, URLs, resultado da leitura e evidência pública ainda necessária. `territorial-content-decisions.json` registra cada nome, classificação, decisão e dado faltante. As fontes das etapas anteriores permanecem em `TERRITORIOS-FONTES.md`.

Achados que alteraram decisões:

- Lapa: o SAPL informa a revogação da Lei 1.439/1998; a Lei 1.759/2003 consultada trata das zonas urbanas. Não publicar lista revogada como cadastro atual.
- Doutor Ulysses: mapa inspecionado visualmente agrupa referências por equipes ESF; áreas de saúde não são automaticamente bairros.
- Balsa Nova: o diagnóstico distingue distritos e localidades e registra falta de consolidação territorial à época. Isso não prova a situação legal atual.
- Campo Largo: mapa localizado em documento acessório de 2018 não comprova vigência. Índice de cartografia sem anexos nominais recuperados.
- Rio Branco do Sul: notícia de audiência sobre atualização da lei não demonstra aprovação. Tijucas do Sul: lei mencionada e alteração proposta, mas texto consolidado não recuperado.
- Piên e Quitandinha: perímetro urbano, macrozoneamento e hierarquia viária não equivalem a inventário de bairros.
- Adrianópolis: projeto de transporte com bairros/localidades não tratado como lei final nem cadastro. Cerro Azul: notícia de escola rural não sustenta inventário completo. Campo do Tenente, Rio Negro e Tunas: canais localizados sem relação nominal classificada recuperada.
- Itaperuçu e Quatro Barras: listas parciais mantidas; fontes não sustentam totalidade cadastral.

Barreiras de fonte, sem contorno: Agudos do Sul retornou verificação antirrobô na matéria legislativa localizada; Campo Magro e Bocaiúva do Sul retornaram HTTP 403 nos índices; Mandirituba retornou 403 no diagnóstico. Não houve tentativa de contornar desafio, autenticação ou negação. Isso não bloqueou as melhorias independentes. Não é uma negação de autorização do projeto Alumimec.

## O que depende do cliente

A cobertura ampla por deslocamento já está confirmada e não precisa ser perguntada novamente. Para novos guias comerciais com valor próprio, as perguntas mínimas são:

1. Quais 3–5 obras ou consultas reais podem ser descritas? Para cada uma: município/localidade, serviço, necessidade concreta e solução adotada ou estudada. Não é necessário fornecer endereço privado.
2. Quais fotos e informações desses exemplos têm autorização para divulgação? Se não houver fotos autorizadas, o texto pode ser preparado sem identificar cliente ou imóvel.

Esses dados permitem diferenciar conteúdos de aplicações reais; não são exigidos para continuar atendendo nas localidades já cobertas. As lacunas geográficas dependem de fontes oficiais acessíveis/classificadas, não de nova confirmação comercial do cliente. Nenhum pedido a prefeitura ou terceiro foi enviado.

## Validação e publicação

Build, lint, tipos e QA das páginas alteradas; preservação das 196 URLs e links internos; diretórios em 320/360/390/430/1440, busca, teclado, texto 200% e axe. Orientações municipais conferidas nas seis páginas. Publicação e evidência de produção verificadas após commit; sem promessa de ranking ou ausência de impacto orgânico.
