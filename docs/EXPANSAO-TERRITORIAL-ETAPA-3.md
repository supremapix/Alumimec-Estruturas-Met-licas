# Expansão territorial — etapa 3

24/10/2026. Base: 172 URLs e 20 guias do commit 3b97eff; reparo mobile prioritário publicado separadamente em f8dcb02 e confirmado em produção às 17:42 UTC antes de retomar este lote.

## Cobertura confirmada

O responsável confirmou atendimento a todas as localidades por deslocamento ao local da obra. Essa informação foi incorporada às páginas municipais, diretórios, guias, metadados e descrição da entidade. Projeto, acesso, condições e agendamento continuam sujeitos à avaliação, sem filial local, taxa, prazo, frete ou obra inventados. As páginas de município e os guias declaram Service/areaServed com a mesma entidade empresarial e sede real.

## Conteúdo deste lote

14 guias: Hauer e Portão (Curitiba); Águas Belas e São Marcos (SJP); Weissópolis e Vargem Grande (Pinhais); Maracanã e Roça Grande (Colombo); Capela Velha e Campina da Barra (Araucária); Nações e Gralha Azul (Fazenda Rio Grande); Jardim dos Estados e Vila Rosa (Piraquara).

As duas URLs de Curitiba já existiam e foram enriquecidas. As outras 12 são novas. Resultado: 184 URLs, todas as 172 anteriores mantidas; 34 guias. Cada guia contém duas FAQs próprias e uma FAQ de atendimento, três seções, foto original contextual e arte local 250×250. Inventário por município em `territorial-inventory.json`.

Aplicações distintas: área administrativa em mezanino, circulação compartilhada de estacionamento, recebimento de materiais, acesso de manutenção, portão comercial, grande área com múltiplos usos, separação de estoque, contratação de galpão novo, estacionamento por fases, área de serviço residencial, estacionamento com dois acessos, passagem coberta, abrigo de equipamentos e escada externa. São cenários possíveis de planejamento, não afirmações de demanda predominante ou obras realizadas nos bairros.

Fontes: nomes confrontados com IBGE 2022, exceto Piraquara pela lei 2672/2026. O mapeamento interrompe a geração se um nome novo não existir no inventário do município. Originais preservados; nenhuma imagem gerada ou obra fabricada. Arts usam logo e telefone existentes.

## Pesquisa e limites

225 referências nominais em sete municípios, das quais 34 com guias individuais e 191 ainda sem guia. A leitura dos outros 22 municípios avançou em Tijucas do Sul, Quatro Barras e Campo Largo, com limites de classificação descritos em `TERRITORIOS-FONTES.md`. Não foi ampliada artificialmente a contagem de bairros oficiais a partir de distritos, editais ou nomes populares.

A cobertura comercial deixou de ser pendência. Ainda falta contexto verificável para completar centenas de páginas individuais sem repetir cenários. Isso não impede atendimento nessas localidades, já declarado nos diretórios e páginas municipais. Esta entrega não é a expansão completa da RMC.

## Validação

Build e sitemap com 184 URLs, lint, tipos, suíte de links/imagens/interações e serviços, indexabilidade, diretórios e 34 guias em cinco larguras. Texto a 200%, axe, imagens/arte, FAQs e erros de navegador registrados em `docs/qa`. A comparação de preservação usa sitemap de f8dcb02. Os resultados JSON são a evidência executada; a conferência de produção é gravada fora do checkout em `../territorial-stage3-production.json` com o commit final.

Resultado das suítes antes da última atualização exclusivamente textual da home: 184 rotas, 7.558 links e 704 referências de imagem, 34 guias/170 viewports, 34 verificações axe/texto 200%, sete diretórios/35 viewports e preservação das 172 URLs. Lint/tipos passaram. Após o texto da home, build, validação global e indexabilidade foram repetidos.
