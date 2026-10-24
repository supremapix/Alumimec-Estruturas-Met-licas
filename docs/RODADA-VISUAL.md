# Rodada visual — 24/10/2026

## Entrega
- Fotos originais preservadas byte a byte. Cards 4:3 com `object-fit: cover`; pontos focais específicos para mezanino, cobertura, Forvia e ponte. A montagem `bairro.jpg` recebe recorte CSS não destrutivo do painel inferior. Hero ocupa toda a moldura.
- Lightbox nativo em fotos da home, catálogo, galeria e interiores: imagem inteira, Escape, fechamento, retorno do foco e acesso ao arquivo original. Logo e artes locais 250×250 permanecem sem recorte.
- Conjunto flutuante único WhatsApp/Compartilhar reutiliza ContactActions. Faixa de 88px reservada fora da área rolável, junto do retorno ao topo. Menu com WhatsApp, Facebook, copiar e compartilhamento nativo quando disponível; nenhum compartilhamento real foi enviado nos testes.
- Seis etapas originais em lista ordenada, com números e ícones. IntersectionObserver anima apenas o marcador; texto permanece no HTML, visível sem JavaScript. Redução de movimento desativa a animação.
- Favicons renderizados localmente a partir do símbolo vetorial Alumimec já existente, conferido contra a logo original: PNG 16/32/48/96, ICO com 16/32/48, Apple 180, Android 192/512 e máscara 512 separada com margem de segurança. SVG existente preservado. Manifest usa a cor da interface e distingue `any` de `maskable`.

## Referências
Consultadas as páginas oficiais https://realfavicongenerator.net/ e https://realfavicongenerator.net/faq em 24/10/2026. A FAQ mistura itens legados com atuais; não foram adicionados browserconfig/Windows Metro ou Touch Bar, explicitamente descontinuados no próprio documento. Sem upload da logo para terceiros.

## Preservação e verificação
160 rotas e sitemap mantidos; nenhum canonical/robots alterado. Seis serviços, nove fotos de galeria e três vídeos preservados. Inventário identifica cinco arquivos de favicon regenerados como alteração autorizada; nenhuma fotografia original alterada.
Capturas antes/depois: `docs/qa/cards-before.png`, `cards-after-320.png`, `cards-after-1440.png`, `gallery-after-390.png`, `share-320.png`. Resultados: `docs/qa/visual-round.json`, demais relatórios de QA.

## Próxima etapa independente
A expansão territorial solicitada posteriormente ainda não está incluída nesta publicação visual. Exige inventário oficial por município e conteúdo editorial próprio; não será considerada concluída por contagem de rotas.
## Checkpoint de publicação visual
A rodada visual foi publicada no commit `a5b40f5` e verificada em produção: 160 URLs, sitemap, oito endpoints de ícones/manifest e teste mobile de share/lightbox/passos. Na etapa territorial seguinte, a faixa dos controles passou a ajustar sua altura ao texto ampliado (ResizeObserver), e as capturas completas dos cards foram refeitas sem recortes causados pela área rolável.
