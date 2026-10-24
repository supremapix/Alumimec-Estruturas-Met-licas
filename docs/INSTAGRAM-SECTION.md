# Instagram Alumimec — componente reutilizável

Código completo: [InstagramSection.tsx](../components/InstagramSection.tsx).

## Dependências e uso

React/React DOM 18.3.1, TypeScript 5.8, `motion` 14.6.0 (importação `motion/react`), `lucide-react` 0.344 e Tailwind CSS 3.4. O lockfile fixa as versões instaladas. Tailwind precisa incluir `components/**/*.tsx` no content, como neste projeto. Não há token, SDK adicional ou raspagem de feed.

```sh
npm install motion@14.6.0 lucide-react@^0.344.0
```

```tsx
import InstagramSection from './components/InstagramSection';

<InstagramSection id="instagram-home" placement="home" />
```

Use **uma única instância por página**. `id` identifica a seção; `placement` aceita `home`, `empresa` ou `contato` apenas para contextualizar o título acessível caso reutilizado em outra página independente. Perfil e embed são constantes de @alumimec.

## Integração real e correção da duplicação

[Home](https://www.alumimec.com.br/), [Empresa/Sobre](https://www.alumimec.com.br/#sobre) e [Contato](https://www.alumimec.com.br/#contato) são âncoras da mesma página. A inserção anterior de três instâncias foi uma regressão. Agora existe somente uma seção após Vídeos, antes de Região, em `pages/Home.tsx`: nenhum iframe redundante ou oculto. As 196 URLs, canonicals e sitemap permanecem preservados.

## Dimensionamento sem recorte

A proporção fixa anterior produzia altura de 593,75 px no desktop para conteúdo medido pelo Instagram em 493 px: aproximadamente 101 px de espaço excedente. Em 320 px, os 322,66 px disponíveis eram menores que o conteúdo de 353 px. Padding não era a causa principal.

O componente ouve a mensagem `MEASURE` emitida pelo embed e aplica a altura informada, arredondada com 1 px de tolerância. Confere **origem exata** `https://www.instagram.com` e **janela de origem** igual ao iframe atual; aceita somente altura numérica finita, positiva e até 10.000 px. Ignora mensagens de estilos, altura zero de inicialização, payload inválido ou outra janela. Remove o listener ao desmontar.

O site não lê nem modifica o DOM cross-origin. Não usa crop, margem negativa ou máscara para esconder publicações/controles. As proporções 9/11 mobile e 4/5 desktop são apenas reserva inicial enquanto não chega uma medição válida. O Instagram pode manter cerca de 49 px próprios abaixo das imagens; esse espaço interno é preservado, não escondido. Mudanças futuras da plataforma podem alterar as mensagens ou o conteúdo.

## Acessibilidade e disponibilidade

Texto e link permanecem no HTML pré-renderizado. Entrada de 30 px e hover respeitam movimento reduzido. Iframe lazy, título acessível, CTA com foco visível e aviso de nova aba; selo factual, sem alegar verificação Meta. O link direto permanece disponível quando o Instagram demora, solicita login ou falha. HTTP 200 e load não são tratados como prova de feed carregado.

## Validação

`npm run build`, `npm run lint`, `npm run typecheck`, `npm test`, `node scripts/check-indexability.mjs` e `node scripts/instagram-qa.mjs` com preview em 4174.

QA verifica uma única seção/iframe nas três âncoras, 320/360/390/430/1440 px, texto 100%/200%, teclado, reduced motion, axe, separação dos controles flutuantes e carregamento real tardio. Inspeção automatizada do navegador compara a altura com o conteúdo do frame e verifica que a última imagem cabe; isso é apenas teste, não acesso cross-origin pelo componente. Mensagem de outra janela é rejeitada. Evidências em `docs/qa/instagram.json`, `instagram-sizing-before.json` e capturas `instagram-fixed-*.png`; capturas anteriores permanecem para comparação.

Documentação oficial: [Motion React](https://motion.dev/docs/react), [movimento reduzido](https://motion.dev/docs/react-use-reduced-motion), [acessibilidade](https://motion.dev/docs/react-accessibility).
