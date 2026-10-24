# Protocolo Suprema — Alumimec

Implementação de 24/10/2026. Base: 5c1b8e2a79ed8d41f46ee92d3c979a512a97bd10.

## Inventário e preservação

- 6 serviços, 9 itens distintos na galeria, 3 vídeos, 29 municípios e 124 nomes locais herdados.
- 154 rotas mantidas; redirects históricos de vercel.json preservados.
- 37 imagens/favicons originais preservados, conferidos por SHA-256; nenhuma duplicação binária dentro da galeria.
- Telefones, endereço, e-mail e redes preservados. O commit de origem documenta o endereço fornecido pelo proprietário.
- Fotos permanecem no acervo; imagens de cartões e galeria usam object-fit: contain e moldura uniforme, sem deformação.
- Inventários completos: inventory-before.json e inventory-after.json.

## Implementação

Nova composição de hero, serviços com critérios de consulta, processo em seis etapas, galeria filtrável, vídeos carregados sob escolha, FAQs, região e formulário que prepara mensagem no WhatsApp sem armazenar dados.
Menu legível, logo mobile centralizada, Escape e foco, link de salto, rodapé amplo, links de telefone/e-mail, compartilhamento nativo com cópia alternativa, retorno ao topo em faixa reservada e respeito a movimento reduzido.
Logo Suprema obtida de https://www.supremasite.com.br/banner/suprema-sites-express.svg; somente o enquadramento SVG foi ajustado para exibir a marca oficial. A referência Paver usava https://supremamidia.com/suprema-img.png, que retornava 404 na consulta.
Sem imagens geradas substituindo obras reais.

## Conteúdo e território

Métricas +850/100%, depoimentos não documentados, comparações de vida útil, garantia de prazo, visita gratuita universal e condições financeiras foram retirados da interface. Conteúdo útil foi reescrito como orientação e consulta.
Curitiba e São José dos Pinhais têm páginas próprias e artes 250×250 com logo e telefone confirmado. As outras 151 páginas permanecem acessíveis para compatibilidade, com noindex, follow e fora do sitemap; não constituem novas páginas promocionais.
Nomes fora da relação oficial são identificados como referências herdadas a confirmar. Não há declaração de filiais, vizinhança inferida por ordem alfabética ou cobertura garantida.
Fontes:

- https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba
- https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912
- https://ippuc.org.br/perfil-fisico-territorial-e-socioeconomico-75-bairros-de-curitiba-2
  A classificação usa a relação municipal; a página IPPUC apresentou timeout no leitor durante a consulta. Não foram criadas páginas novas para a lista territorial.

## SEO / GEO / AIO

HTML pré-renderizado, um H1 por página, títulos próprios, descrição, canonical no domínio www confirmado, Open Graph, favicons preservados, dados estruturados sem avaliações ou coordenadas inventadas.
Removida declaração de cobertura estadual no schema. Sitemap limitado a 3 URLs indexáveis. robots permite leitura; llms.txt foi alinhado ao conteúdo, sem promessa de ranking. Falhas de pré-render agora interrompem build, inclusive 404.
Não há garantia de indexação, posição no Google ou menção por LLMs.

## Validação

- npm run build: 154/154 páginas + 404.
- npm run lint e npm run typecheck.
- npm test: 5.855 referências internas e 328 ocorrências de imagem; títulos, H1, canonical, JSON-LD, sitemap/noindex.
- Playwright: desktop 1440 e mobile 320/360/390/430; texto 200%; reflow, menu aberto/Escape, FAQ por teclado, link de salto, galeria, formulários, compartilhamento nativo e cópia.
- axe-core WCAG A/AA: sem violações nas cinco larguras da home e nas páginas Curitiba, sede e Ecoville.
- Nenhum erro JavaScript detectado; fotos decodificadas; sem sobreposição entre retorno ao topo e links/botões no cenário de rodapé.
- Capturas em docs/qa; resultados em results.json e interactions.json. Capturas extensas ficam locais para não inflar o repositório.
- Testes de mensagem usam mocks: nenhuma comunicação foi enviada.

## Dependências e limites

Lockfile original não permitia npm ci. Foi corrigido e recebeu atualizações compatíveis, lint e ferramentas de QA.
npm audit passou de 12 alertas (8 altos) para 5 moderados, nas famílias React Router e seletor PostCSS/Tailwind. A solução sugerida exige versões maiores e deve ser tratada como migração específica. Nenhum alerta alto restante na auditoria executada.
Vídeos e redes são referências herdadas; disponibilidade dos provedores externos não é garantida. Os testes automatizados cobrem arquivos e links internos, não autenticidade de depoimentos, desempenho técnico de obras ou atendimento futuro.
Publicação deve ser confirmada pelo SHA remoto, status Vercel e conteúdo/rotas no domínio. Autorização explícita de push/deploy recebida após os testes locais iniciais.
