# Reparo mobile — 24/10/2026

Prioridade solicitada após a etapa territorial 2. O lote territorial seguinte foi guardado no stash, sem entrar nesta publicação.

## Causa e alteração

A regra mobile `.wrap` reservava 22 px à esquerda e 60 px à direita. Essa reserva lateral era redundante: o conjunto flutuante já possui uma faixa inferior própria. A assimetria comprimira o conteúdo.

Agora as telas até 430 px usam gutter de 12 px em ambos os lados; até 800 px, 16 px. Wrappers aninhados não somam padding. Cards, legendas e formulários têm espaçamento interno reduzido, mantendo foco visível e respiro para leitura. Em 320 px, o card principal cresceu de 238 para 296 px. Em 360 px, de 278 para 336 px. Fotos mantêm object-fit cover e enquadramento existente.

Menu mobile: logo centralizada, botão de abrir/fechar em toda a largura, texto explícito, uma coluna de navegação, alvos de pelo menos 56 px, contraste alto, Escape e retorno de foco. Rodapé: três grupos delimitados, links separados e alvos grandes, logo Alumimec e assinatura Suprema centralizadas. Mudanças de layout restritas ao breakpoint mobile; desktop mantém sua distribuição.

## QA

Capturas antes/depois das cinco larguras: 320/360/390/430/1440 px, cards, hero, menu e footer. Quatro tipos de página (home, serviço, bairro e município) em cinco larguras e texto 100%/200%, total de 40 combinações, com menu, Escape/foco, rolagem até assinatura, overflow e separação do dock. Axe nas quatro páginas em 390 px. Inspeção visual manual de cards/menu/rodapé e páginas internas nas capturas.

Suítes: build, lint, tipos, npm test, indexabilidade. As 172 URLs, sitemap, canonicals e conteúdo territorial permanecem. Nenhuma fotografia original foi editada. Nenhum compartilhamento foi enviado durante testes.

Evidências: `docs/qa/mobile-fix-before.json`, `mobile-fix-after.json`, `mobile-repair.json`; capturas `mobile-fix-before-*` e `mobile-fix-after-*`. Os JSON registram resultados efetivamente executados. Produção verificada após push pelo release `suprema-alumimec-mobile-alignment-2026-10-24`.
