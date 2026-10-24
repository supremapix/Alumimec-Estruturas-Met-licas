# Instagram Alumimec — componente reutilizável

Código completo: [InstagramSection.tsx](../components/InstagramSection.tsx).

## Dependências explícitas

React/React DOM 18.3.1, TypeScript 5.8, `motion` 14.6.0 (importação `motion/react`), `lucide-react` 0.344 e Tailwind CSS 3.4. O lockfile fixa as versões instaladas. Não há token, SDK do Instagram, raspagem ou serviço de feed adicional. As classes Tailwind requerem `components/**/*.tsx` no content da configuração, como neste projeto.

```sh
npm install motion@14.6.0 lucide-react@^0.344.0
```

```tsx
import InstagramSection from './components/InstagramSection';

<InstagramSection id="instagram-home" placement="home" />
<InstagramSection id="instagram-empresa" placement="empresa" />
<InstagramSection id="instagram-contato" placement="contato" />
```

Cada instância precisa de `id` único. `placement` aceita somente `home`, `empresa` ou `contato` e identifica o título acessível do iframe. Perfil e embed são constantes de @alumimec, sem parâmetros externos.

## Integração nas rotas reais

O site usa uma Home com seções: [Home](https://www.alumimec.com.br/), [Empresa/Sobre](https://www.alumimec.com.br/#sobre) e [Contato](https://www.alumimec.com.br/#contato). Não existem páginas separadas /empresa e /contato. As três instâncias foram colocadas após Sobre, após Vídeos e após Contato em `pages/Home.tsx`, sem criar URLs duplicadas. As 196 URLs, canonicals e sitemap permanecem preservados.

## Comportamento e acessibilidade

O conteúdo permanece no HTML pré-renderizado. Entrada por viewport usa Motion, fade-up de 30 px; prefere movimento reduzido desativa entrada, hover e seta animada. O iframe tem carregamento lazy, título único, proporção 9/11 em celulares e 4/5 a partir de 640 px. O CTA sempre oferece link direto acessível por teclado, com aviso de nova aba. O selo identifica apenas o destino do link; não afirma certificação ou verificação Meta. Não há modal nem bloqueio do formulário.

## Limite real do Instagram

A resposta HTTP 200 e o evento load não demonstram que um feed foi exibido. O endpoint foi testado diretamente e dentro do site: inicialmente mostrou uma área vazia; após aguardar a resposta da plataforma, as três instâncias apresentaram a identificação do perfil @alumimec, publicações e o acesso ao perfil completo. Essa observação não garante carregamento imediato nem exibição de todas as publicações para todos os visitantes. Login, cookies, políticas de incorporação ou disponibilidade da plataforma podem limitar a apresentação; não foi inferida uma causa específica. O componente mantém o iframe solicitado, uma explicação visível e o link direto sempre disponível. Não promete que stories aparecerão dentro do embed: o texto direciona sua visualização ao Instagram.

## Validação

`npm run build`, `npm run lint`, `npm run typecheck`, `npm test` e `node scripts/instagram-qa.mjs`. O QA específico verifica as três instâncias em 320/360/390/430/1440 px, texto 100%/200%, foco, proporções, ausência de overflow, separação do conjunto flutuante, âncoras reais, reduced motion e axe. Evidências: `docs/qa/instagram.json`, capturas `instagram-320.png` e `instagram-1440.png`.

Documentação oficial: [Motion React](https://motion.dev/docs/react), [movimento reduzido](https://motion.dev/docs/react-use-reduced-motion), [acessibilidade](https://motion.dev/docs/react-accessibility).
