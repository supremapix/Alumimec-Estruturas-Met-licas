import React from "react";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions from "../components/ContactActions";
import { ORGANIZATION_ID, SITE_URL } from "../site.config";
import { BLOG_BASE, ROOF_GUIDE_PATH, ROOF_GUIDE_TITLE, ROOF_GUIDE_DESCRIPTION } from "../routes";

const BRAND_IMAGE = "/cobertura-metalica.jpg";
const home = { name: "Início", url: "/" };
const blog = { name: "Blog", url: BLOG_BASE };
const faq = [
  { question: "Por que duas propostas para a mesma metragem podem ter preços diferentes?",
    answer: "Porque uma pode incluir levantamento, projeto, apoios, fabricação, frete, montagem, telhas e drenagem, enquanto a outra inclui apenas parte disso. Coloque as inclusões e exclusões lado a lado antes de comparar o total." },
  { question: "Dá para montar a cobertura com a empresa funcionando?",
    answer: "Depende de acesso, método de montagem, equipamentos e separação segura das áreas. Informe o horário de operação e peça um plano de isolamento e liberação por etapas, sem presumir que a operação poderá continuar normalmente." },
  { question: "O que o pedido de orçamento deve dizer sobre a frota?",
    answer: "Informe o tipo de veículo que passa no trecho, a altura de operação, pontos de manobra e onde as portas ou equipamentos precisam ficar livres. As medidas finais e os apoios devem ser confirmados no local." },
  { question: "A proposta inclui calhas, condutores e o destino da água?",
    answer: "Não presuma que inclui. Peça que o orçamento indique cada componente e onde termina a responsabilidade do fornecedor. Se houver ligação à rede existente, indique quem avalia essa rede e executa a conexão." },
];

export function BlogHub() {
  return <>
    <EnhancedSEO title="Blog de estruturas metálicas | Alumimec"
      description="Guias de planejamento para quem vai contratar coberturas e estruturas metálicas para comércios e indústrias."
      canonical={BLOG_BASE} ogImage={BRAND_IMAGE} breadcrumbs={[home, blog]} />
    <nav className="wrap breadcrumb" aria-label="Você está aqui"><a href="/">Início</a> / Blog</nav>
    <section className="local-hero"><div className="wrap">
      <p className="eyebrow">ALUMIMEC / BLOG</p>
      <h1>Guias para planejar sua estrutura metálica</h1>
      <p>Orientações práticas para conversar com fornecedores e organizar a contratação, da visita ao local à entrega.</p>
    </div></section>
    <section className="section wrap service-guide" aria-labelledby="blog-titulo">
      <h2 id="blog-titulo">Artigos do blog</h2>
      <article><h3><a href={ROOF_GUIDE_PATH}>{ROOF_GUIDE_TITLE}</a></h3><p>{ROOF_GUIDE_DESCRIPTION}</p>
      <a className="button" href={ROOF_GUIDE_PATH}>Ler o guia de coberturas</a></article>
    </section>
  </>;
}

export function RoofGuide() {
  const url = SITE_URL + ROOF_GUIDE_PATH;
  const schema = {
    "@context": "https://schema.org", "@type": "Article", "@id": url + "#article",
    headline: ROOF_GUIDE_TITLE, description: ROOF_GUIDE_DESCRIPTION, inLanguage: "pt-BR",
    url, mainEntityOfPage: { "@id": url + "#webpage" }, image: SITE_URL + BRAND_IMAGE,
    author: { "@id": ORGANIZATION_ID }, publisher: { "@id": ORGANIZATION_ID },
  };
  return <>
    <EnhancedSEO title={ROOF_GUIDE_TITLE + " | Alumimec"} description={ROOF_GUIDE_DESCRIPTION}
      canonical={ROOF_GUIDE_PATH} ogImage={BRAND_IMAGE} ogType="article" faqItems={faq}
      breadcrumbs={[home, blog, { name: ROOF_GUIDE_TITLE, url: ROOF_GUIDE_PATH }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav className="wrap breadcrumb" aria-label="Você está aqui"><a href="/">Início</a> / <a href={BLOG_BASE}>Blog</a> / Coberturas metálicas</nav>
    <section className="local-hero"><div className="wrap">
      <p className="eyebrow">ALUMIMEC / PLANEJAMENTO DE COBERTURAS</p>
      <h1>{ROOF_GUIDE_TITLE}</h1>
      <p>Num estabelecimento em funcionamento, o objetivo não é só cobrir uma área. O projeto precisa permitir que caminhões manobrem, equipes circulem e equipamentos continuem acessíveis. Entre duas propostas, compare primeiro a operação que cada cobertura permite. Depois, compare o preço.</p>
    </div></section>
    <section className="section wrap split" aria-label="Como comparar propostas">
      <div className="service-guide">
        <article><h2>Defina o que precisa ficar livre de pilares</h2>
          <p>Em uma doca, marque onde a carroceria encosta, onde portas e rampas abrem e a altura realmente usada nas manobras. Em um estacionamento, registre vagas, corredores e entradas de pedestres. Num pátio de estoque, inclua o raio de giro dos equipamentos. A cobertura que cabe no croqui pode não funcionar no dia a dia se esses pontos forem omitidos.</p></article>
        <figure className="roof-guide-photo">
          <img src="/editorial/cobertura/fechamento-edificacao-blocos.webp" alt="Edificação em execução, com blocos cinza e fechamento lateral escuro" width={1600} height={1201} loading="lazy" decoding="async" />
          <figcaption>Foto de referência: fechamento lateral escuro em uma edificação em execução. Não é registro de obra da Alumimec.</figcaption>
        </figure>
        <article><h2>Compare a estrutura e o que será entregue com ela</h2>
          <p>Peça que as propostas separem levantamento, projeto, apoios ou fundações, estrutura, tratamento de superfície, telhas, arremates, drenagem, transporte, equipamentos e montagem. Se um item ficar com outro fornecedor, anote quem assume e em que etapa. Verifique também o que será entregue ao final, como plantas, orientações de manutenção e condições de garantia.</p></article>
        <figure className="roof-guide-photo">
          <img src="/editorial/cobertura/chapas-perfiladas-empilhadas.webp" alt="Chapas perfiladas empilhadas dentro de um galpão" width={900} height={1600} loading="lazy" decoding="async" />
          <figcaption>Foto de referência: chapas perfiladas empilhadas. A imagem não comprova a composição nem o desempenho do material.</figcaption>
        </figure>
        <article><h2>Combine as janelas de montagem sem improvisar</h2>
          <p>Indique o horário de recebimento, as áreas de passagem que não podem ser bloqueadas e possíveis interferências de cabos, portões ou construções vizinhas. Quando houver necessidade de içamento, pergunte como serão combinados o acesso dos equipamentos, o isolamento da área e a reabertura por etapas. Não use a passagem sob a área de montagem antes de autorização da equipe responsável.</p></article>
        <article><h2>Inclua a água da chuva e o conforto no escopo</h2>
          <p>Observe para onde a água escoa hoje; numa cobertura nova, não deixe a descarga cair sobre a doca ou a circulação. Se calor, ruído da chuva ou iluminação forem importantes, descreva quais ambientes precisam de conforto e em que horário são usados. A escolha da telha, o isolamento e os detalhes de ventilação e fechamento devem ser avaliados em conjunto.</p></article>
      </div>
      <aside className="quote-form">
        <h2>O que enviar para o primeiro orçamento</h2>
        <ul className="local-checklist">
          <li>Endereço, uso da área e medidas aproximadas.</li>
          <li>Fotos feitas do chão das entradas, apoios e interferências.</li>
          <li>Tipos de veículos, acesso e horários que precisam ficar livres.</li>
          <li>Indicação de quem cuidará de fundações e drenagem, se já definida.</li>
        </ul>
        <p>A Alumimec tem sede em São José dos Pinhais e avalia o atendimento no local da obra. O guia não substitui projeto, vistoria ou dimensionamento por profissional habilitado.</p>
        <ContactActions subject="Quero conversar sobre uma cobertura metálica para a minha empresa." />
      </aside>
    </section>
    <section className="section region"><div className="wrap">
      <div className="faq-list"><h2>Dúvidas antes de contratar uma cobertura</h2>
        {faq.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </div>
      <nav aria-label="Leituras relacionadas">
        <a className="text-link" href="/servicos/coberturas-metalicas">Conhecer as coberturas metálicas</a><br />
        <a className="text-link" href="/aplicacoes/areas-de-carga-e-descarga">Planejar áreas de carga e descarga</a><br />
        <a className="text-link" href="/aplicacoes/cobertura-de-estacionamentos">Planejar a cobertura de estacionamento</a><br />
        <a className="text-link" href={BLOG_BASE}>Voltar ao blog</a>
      </nav>
    </div></section>
  </>;
}
