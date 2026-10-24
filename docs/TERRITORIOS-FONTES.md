# Fontes territoriais — consulta de 24/10/2026

## Base nominal conferida

[IBGE, malha final de bairros do Censo 2022, Paraná](https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/bairros/shp/UF/PR_bairros_CD2022.zip). Extração do DBF UTF-8 com código municipal e de bairro; SHA-256 do arquivo em `data/territories.json`. Scripts de leitura/importação em `scripts/read-ibge-dbf.mjs` e `scripts/import-territories.ts`. O ZIP original e extração de trabalho ficam fora do repositório. A ausência de registro nessa base não demonstra inexistência de bairros.

| Município | Nomes conferidos | Versão |
|---|---:|---|
| Curitiba | 75 | IBGE 2022 |
| São José dos Pinhais | 41 | IBGE 2022 |
| Pinhais | 15 | IBGE 2022 |
| Colombo | 42 | IBGE 2022 |
| Araucária | 18 | IBGE 2022 |
| Fazenda Rio Grande | 13 | IBGE 2022 |
| Piraquara | 21 | Lei 2672/2026, art. 15 |

[Piraquara — texto municipal da lei](https://www.piraquara.pr.gov.br/portal/leis_decretos/81875). Distinguir Guarituba Central/Redondo e Guarituba como região/UTP. O texto territorial não foi transformado em autorização urbanística.

Fontes complementares: [SJP, perfis dos bairros](https://www.sjp.pr.gov.br/mapas-do-municipio/); [Pinhais, arquivos cartográficos](https://geo.pinhais.pr.gov.br/geo/nav/page.aspx?page=download); [Colombo, mapas de bairros e loteamentos](https://prefeitura.colombo.pr.gov.br/downloads-secretaria-municipal-do-desenvolvimento-urbano-e-habitacao/); [Araucária, divulgação municipal de mapas](https://araucaria.atende.net/cidadao/noticia/site-da-prefeitura-disponibiliza-mapas-das-areas-urbana-e-rural-do-sistema-viario-de-loteamentos-aprovados-entre-outros). O mapa Colombo 2021 não teve transcrição visual completa; o inventário nominal utilizado é o DBF IBGE. O wiki de Araucária apresentou timeout; a fonte IBGE resolveu a identificação nominal, sem inferir limites atuais.

## Pesquisa complementar dos outros 22 municípios

Todos foram cruzados com o DBF, sem registros de bairros nessa versão. Os endereços abaixo são pistas oficiais localizadas, não listas nominais automaticamente homologadas. Índice localizado não significa que todos os anexos foram lidos. Não é correto chamar loteamentos, distritos, comunidades ou localidades de bairros oficiais apenas para criar URLs.

| Município | Fonte oficial localizada | Limitação concreta desta leitura |
|---|---|---|
| Almirante Tamandaré | https://tamandare.pr.gov.br/urbanismo ; https://tamandare.geosimples.com.br/publico | Portal/GIS localizado; falta relação nominal classificada e datada. |
| Campo Largo | https://campolargo.atende.net/cidadao/pagina/cartografia | Índice anuncia perímetros de bairros e localidades; leitor retornou página sem texto. Não se extraiu uma lista verificada. |
| Campo Magro | https://campomagro.pr.gov.br/noticias_individual/87 | Notícia municipal menciona bairros, mas não constitui inventário completo ou delimitação. |
| Campina Grande do Sul | https://campinagrandedosul.pr.gov.br/plano-diretor-mobilidade ; https://campinagrandedosul.ctmgeo.com.br/ | Índice/GIS localizado; não se confirmou relação nominal de bairros. |
| Quatro Barras | https://www.quatrobarras.pr.gov.br/uploads/pagina/arquivos/103P02ANALISE-TEMATICA-INTEGRADA-PARTE-03-ENTREGA-01.pdf | Diagnóstico localizado; classificação nominal precisa ser confrontada com anexos territoriais, sem confundir UTP e bairro. |
| Rio Branco do Sul | https://www.riobrancodosul.pr.leg.br/leis/plano-diretor/view | Índice legislativo localizado; inventário nominal não consolidado. |
| Itaperuçu | https://itaperucu.pr.gov.br/o-municipio/sobre-o-municipio/ | Apresentação municipal menciona quantidade de bairros, sem lista nominal verificada nesta consulta. |
| Lapa | https://www.lapa.pr.leg.br/arquivos-e-documentos/lei-3709-de-20-03-20-delimitacao-dos-perimetros-urbanos-anexo-i-mapa-do-perimetro-urbano-da-cidade-da-lapa.pdf/view | Mapa de perímetro urbano não equivale a relação de bairros. |
| Adrianópolis | https://www.adrianopolis.pr.gov.br/ ; https://www.cmadrianopolis.pr.gov.br/ | Notícias misturam bairros e localidades; não foi encontrada relação classificada suficiente. |
| Agudos do Sul | https://www.agudosdosul.pr.gov.br/ ; https://www.cmagudosdosul.pr.gov.br/ | Portais localizados, sem inventário nominal recuperado. Não confundir Agudos/SP. |
| Balsa Nova | https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf | Diagnóstico de revisão localizado; relação de bairros não consolidada separadamente de localidades. |
| Bocaiúva do Sul | https://www.bocaiuvadosul.pr.gov.br/pagina-site/72 | Índice de revisão do plano localizado, sem relação nominal confirmada. |
| Campo do Tenente | https://www.campodotenente.pr.gov.br/ | Portal oficial localizado; busca não recuperou lista classificada de bairros. |
| Cerro Azul | https://www.cerroazul.pr.gov.br/index.php?idSec=13&mod=944 | Urbanismo e notícias de localidades não forneceram lista completa classificada. |
| Contenda | https://contenda.pr.gov.br/pagina/mapas | Índice lido: anexos identificados como loteamentos, subdivisões e sistema viário. Não convertidos automaticamente em bairros. Não confundir com bairro Contenda/SJP. |
| Doutor Ulysses | https://www.doutorulysses.pr.gov.br/index.php?idNot=339&mod=988 | Divisão de equipes de saúde de 2026 agrupa bairros/comunidades; não comprova classificação territorial de cada nome. |
| Mandirituba | https://www.mandirituba.pr.gov.br/servicos-rapidos/plano-diretor | Índice identifica perímetro de sede e núcleos urbanos; isso não comprova lista de bairros. |
| Piên | https://www.pien.pr.gov.br/plano-diretor-2021-vigente | Índice de leis e mapas localizado; macrozoneamento e perímetro não equivalem a bairros. |
| Quitandinha | https://www.quitandinha.pr.gov.br/plano-diretor-2 | Índice sem lista nominal suficiente na extração. |
| Rio Negro | https://rionegro.ctmgeo.com.br/mapa/ ; https://rionegro.atende.net/ | GIS/portal localizados, sem extração nominal classificada nesta leitura. |
| Tijucas do Sul | https://www.tijucasdosul.pr.leg.br/proposicoes/Projetos-de-Lei-Executivo/2023/1/0/3485 | Busca encontrou projeto de divisão de bairros urbanos; leitura retornou HTTP 503. Projeto não foi tratado como lei aprovada. |
| Tunas do Paraná | https://tunasdoparana.pr.gov.br/ | Portal e mapa municipal IBGE localizados; mapa municipal não demonstra relação de bairros. |

## Dependências para expansão adicional com qualidade

A identidade territorial pode ser pesquisada publicamente; ela não comprova demanda, obra realizada, logística ou cobertura da empresa em cada bairro. Os 20 guias publicados representam cenários editoriais de planejamento e indicam explicitamente isso. Não há base para transformar os outros 205 nomes inventariados em 205 narrativas locais próprias sem repetir orientações gerais.

Para novas páginas com fatos particulares, o cliente pode fornecer bairros efetivamente atendidos, tipos de demanda por local, registros de obras autorizados para divulgação e restrições reais de deslocamento/montagem. Endereços de clientes e imagens identificáveis devem ser publicados somente quando autorizados. Não é necessário publicar informação privada para enriquecer um guia. Para os 22 municípios sem lista nominal consolidada, é necessária também fonte territorial classificada e datada (ou leitura adicional dos anexos/GIS indicados). Não foram feitas solicitações a prefeituras ou terceiros.

As 29 páginas municipais existentes continuam disponíveis, com os seis serviços e consulta de disponibilidade. Sete receberam diretório pesquisável de nomes oficiais versionados. Não houve remoção de indexação, troca de canonical para home ou eliminação de URLs herdadas. A expansão integral da RMC permanece incompleta; não se afirma ausência de impacto orgânico.

## Atualização de 24/10/2026, após 17:32 UTC

O responsável confirmou expressamente: “Alumimec atende sim todas as localidades onde chamarem” e “Isso alumimec se desloca a todos locais onde tem obras”. A pendência de cobertura comercial está resolvida. O atendimento pode ser declarado nos municípios/localidades por deslocamento à obra, sem criar filiais e sem prometer execução, frete, visita gratuita ou prazo. As observações anteriores deste relatório descrevem a evidência disponível na etapa 2 e foram superadas quanto à cobertura.

Pesquisa complementar desta rodada:

- Tijucas do Sul: o [SAPL, PLE 25/2024](https://sapl.tijucasdosul.pr.leg.br/materia/3608) confirma que existe a Lei 911, de 21/11/2023, sobre perímetro e divisão de bairros. A matéria propõe alterá-la, mas a página não fornece texto consolidado nem demonstra o resultado da alteração. Não foi publicada a relação do projeto de 2023 como se fosse a divisão vigente.
- Quatro Barras: o [edital municipal de 2025, página 4](https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/EDITAL-12-11-2025.pdf) relaciona 22 referências, incluindo quatro explicitamente rurais. É uma lista para política cultural, não uma lei de delimitação nem censo completo. Não foi usada sua classificação socioeconômica no marketing da Alumimec. O diagnóstico territorial Parte III excede o limite de leitura da ferramenta (24,7 MB); continua sem transcrição nominal consolidada.
- Campo Largo: o índice de cartografia continuou sem texto extraível. Notícias municipais chamam Ferraria tanto de bairro quanto de distrito. Essa divergência reforça a necessidade de fonte de delimitação; nenhuma página nova foi criada sob classificação inferida.

A etapa 3 acrescenta 14 guias de aplicações distintas nos nomes já verificados, totalizando 34. Restam 191 referências inventariadas sem guia individual. A confirmação comercial não cria fatos locais sobre obras, predominância de imóveis, acessos, terreno ou regras urbanísticas. O restante deve avançar com fontes específicas ou necessidades reais que sustentem conteúdo próprio, sem trocar apenas nomes nos textos publicados.

A consulta direta ao endpoint público SAPL de normas por número 911/ano 2023 retornou HTTP 200 e lista vazia em 24/10/2026. Isso não invalida a existência da lei citada na matéria; apenas impede obter seu texto por esse índice. Nenhuma negação de permissão ocorreu.

## Atualização da etapa 4 e fontes recuperadas

As ferramentas locais continuaram operacionais após a notificação transitória de conexão. Em 24/10/2026, a leitura pública recuperou 30 referências da notícia municipal de coleta seletiva de Itaperuçu (22/10/2026), 22 referências do edital cultural de Quatro Barras (p. 4) e 31 nomes no mapa Anexo II de Campina Grande do Sul disponibilizado junto da Lei 1.122/2026. Veja URLs e classificações em EXPANSAO-TERRITORIAL-ETAPA-4.md. O mapa de Campina preserva legenda “Bairros Propostos”, explicitada no site; não foi omitida essa ressalva.

O diagnóstico Parte III de Quatro Barras foi finalmente baixado por HTTP público e teve suas 89 páginas extraídas com PDF.js. As ocorrências de bairros nas páginas PDF 34 e 48 tratam de análise territorial/uso do solo de 2019, não fornecem inventário completo classificado. Não se publicaram parâmetros urbanísticos antigos nem se deduziu autorização de construção. A fonte de 22 referências permanece corretamente parcial. A limitação anterior de tamanho do leitor foi resolvida, mas o conteúdo do diagnóstico não resolveu a lacuna cadastral.

Resultado: dez diretórios, 308 referências (225 IBGE/lei anterior, 31 mapa anexo de Campina e 52 listas parciais), 41 guias e 267 referências sem página individual. A cobertura comercial foi confirmada; o que falta para novos guias é conteúdo específico verificável. Há 21 municípios sem inventário nominal territorial consolidado, incluindo os dois com listas parciais. O arquivo territorial-content-decisions.json registra a decisão para cada nome. As linhas anteriores são histórico de pesquisa e suas limitações de acesso foram atualizadas aqui.

## Fechamento do escopo viável

A rodada final preserva 196 URLs, acrescenta diretórios parciais de Contenda (13 referências cartográficas) e Piên (seis referências de publicação municipal), totalizando 327 referências em 12 municípios. Veja FECHAMENTO-TERRITORIAL.md e territorial-closure-audit.json para a revisão dos 21 municípios, barreiras de acesso sem contorno e as duas perguntas mínimas de conteúdo para o cliente. Os 267 nomes anteriores sem guia continuam em diretórios; não foram criadas páginas apenas trocando nomes. A soma agora inclui 19 referências adicionais sem guia: 286. A cobertura comercial permanece confirmada.
