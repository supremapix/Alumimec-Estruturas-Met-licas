import React from "react";
import { useParams } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import NotFound from "./NotFound";
import {
  COMMERCIAL_WHATSAPP, CONSTRUCTIONS, CONSTRUCTION_BASE, CONSTRUCTION_GROUPS,
  CONSTRUCTION_TITLE, CONSTRUCTION_DESCRIPTION, constructionImage, constructionMedia,
  constructionPath, constructionTitle, type GroupKey,
} from "../construction-content";

const groupKeys = Object.keys(CONSTRUCTION_GROUPS) as GroupKey[];
const homeCrumb = { name: "Início", url: "/" };
const hubCrumb = { name: CONSTRUCTION_TITLE, url: CONSTRUCTION_BASE };

function QuoteLink() {
  return (
    <a className="button" href={COMMERCIAL_WHATSAPP} target="_blank" rel="noopener noreferrer">
      Consultar obra pelo WhatsApp ↗
    </a>
  );
}

function Example({ media, alt, eager = false }: { media: string; alt: string; eager?: boolean }) {
  return (
    <figure className="construction-image">
      <img src={constructionImage(media)} alt={alt} width={1200} height={675}
        loading={eager ? "eager" : "lazy"} decoding="async" />
      <figcaption>Imagem ilustrativa gerada por IA. Não retrata uma obra executada pela Alumimec.</figcaption>
    </figure>
  );
}

function CategoryLinks({ local = false }: { local?: boolean }) {
  return (
    <div className="construction-topic-links">
      {groupKeys.map((key) => (
        <a key={key} className="button secondary" href={local ? `#${key}` : `${CONSTRUCTION_BASE}#${key}`}>
          {CONSTRUCTION_GROUPS[key].name}
        </a>
      ))}
    </div>
  );
}

export function ConstructionHomeSection() {
  return (
    <section className="section wrap construction-home" id="construcoes" aria-labelledby="construction-home-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PROJETOS POR TIPO DE OBRA</p>
          <h2 id="construction-home-title">{CONSTRUCTION_TITLE}</h2>
        </div>
        <p>{CONSTRUCTION_DESCRIPTION}</p>
      </div>
      <CategoryLinks />
      <a className="button" href={CONSTRUCTION_BASE}>Ver todos os 16 serviços</a>
    </section>
  );
}

export function ConstructionHub() {
  return (
    <>
      <EnhancedSEO
        title={constructionTitle(CONSTRUCTION_TITLE)}
        description={CONSTRUCTION_DESCRIPTION}
        canonical={CONSTRUCTION_BASE}
        ogImage={constructionImage("galpoes")}
        breadcrumbs={[homeCrumb, hubCrumb]}
        services={CONSTRUCTIONS.map(({ title, description }) => ({ name: title, description }))}
      />
      <nav className="wrap breadcrumb" aria-label="Você está aqui"><a href="/">Início</a> / Construções</nav>
      <section className="local-hero">
        <div className="wrap">
          <p className="eyebrow">ALUMIMEC / CONSTRUÇÕES</p>
          <h1>{CONSTRUCTION_TITLE}</h1>
          <p>{CONSTRUCTION_DESCRIPTION}</p>
          <p>Sede em São José dos Pinhais. Atendimento em Curitiba, Região Metropolitana e entorno por avaliação do endereço, da operação e do acesso à obra.</p>
          <div className="construction-topic-links">
            <a className="button secondary" href="#todos-os-servicos">Ver todos os 16 serviços</a>
            <QuoteLink />
          </div>
        </div>
      </section>
      <section className="section wrap construction-catalog" id="todos-os-servicos" aria-labelledby="construction-catalog-title">
        <h2 id="construction-catalog-title">Escolha pelo uso da construção</h2>
        <CategoryLinks local />
        <div className="construction-categories">
          {groupKeys.map((key) => {
            const group = CONSTRUCTION_GROUPS[key];
            return (
              <section id={key} className="construction-category" key={key} aria-labelledby={`${key}-titulo`}>
                <Example media={group.media} alt={group.alt} />
                <div className="construction-category-body">
                  <h3 id={`${key}-titulo`}>{group.name}</h3>
                  <ul>
                    {CONSTRUCTIONS.filter((entry) => entry.group === key).map((entry) => (
                      <li key={entry.slug}><a href={constructionPath(entry.slug)}>{entry.title}</a></li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
        <section className="construction-note">
          <h2>Como começar uma consulta de obra</h2>
          <p>Informe cidade e bairro, uso pretendido, área aproximada, fotos seguras e se já existe projeto. Indique atividades que continuarão no local e restrições de manobra ou descarga. O orçamento deve esclarecer o que está incluído, quem prepara o terreno e quais projetos ou instalações são de terceiros.</p>
          <p>Estrutura leve e Steel Frame são soluções possíveis, não uma indicação universal. Fundações, vãos, cargas, interfaces, documentação, prazos e investimento dependem da análise do projeto.</p>
          <QuoteLink />
        </section>
      </section>
    </>
  );
}

export function ConstructionDetail() {
  const { constructionName } = useParams();
  const entry = CONSTRUCTIONS.find((item) => item.slug === constructionName);
  if (!entry) return <NotFound />;
  const path = constructionPath(entry.slug);
  const image = constructionMedia(entry);
  const group = CONSTRUCTION_GROUPS[entry.group];
  const related = CONSTRUCTIONS.filter((item) => item.group === entry.group && item.slug !== entry.slug).slice(0, 3);
  return (
    <>
      <EnhancedSEO
        title={constructionTitle(entry.title)}
        description={entry.description}
        canonical={path}
        ogImage={constructionImage(image.media)}
        breadcrumbs={[homeCrumb, hubCrumb, { name: entry.title, url: path }]}
        services={[{ name: entry.title, description: entry.description }]}
        faqItems={[{ question: entry.q, answer: entry.a }]}
      />
      <nav className="wrap breadcrumb" aria-label="Você está aqui">
        <a href="/">Início</a> / <a href={CONSTRUCTION_BASE}>Construções</a> / {entry.title}
      </nav>
      <section className="local-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{group.name}</p>
            <h1>{entry.title}</h1>
            <p>{entry.description}</p>
            <div className="construction-topic-links"><QuoteLink /></div>
          </div>
          <Example media={image.media} alt={image.alt} eager />
        </div>
      </section>
      <section className="section wrap">
        <div className="split">
          <div className="service-guide">
            <article><h2>O que alinhar no escopo</h2><p>{entry.scope}</p></article>
            <article><h2>O que depende de avaliação</h2><p>{entry.limit}</p></article>
            <article><h2>Dúvida frequente</h2><details><summary>{entry.q}</summary><p>{entry.a}</p></details></article>
          </div>
          <aside className="quote-form">
            <h2>O que enviar para a consulta</h2>
            <p>{entry.checklist}</p>
            <p>Inclua o endereço da obra e avise se já existe projeto. Para ver locais e condições, consulte <a href="/atendimento">a área de atendimento da Alumimec</a>.</p>
            <QuoteLink />
          </aside>
        </div>
        <section className="construction-note" aria-labelledby="construction-related">
          <h2 id="construction-related">Conheça soluções relacionadas</h2>
          <ul>{related.map((item) => <li key={item.slug}><a className="text-link" href={constructionPath(item.slug)}>{item.title}</a></li>)}</ul>
          <a className="button secondary" href={CONSTRUCTION_BASE}>Ver todos os 16 serviços</a>
        </section>
      </section>
    </>
  );
}
