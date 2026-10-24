import React from "react";
import { useParams } from "react-router-dom";
import { APPLICATIONS, applicationPath } from "../application-content";
import { SERVICES } from "../constants";
import { servicePath } from "../routes";
import EnhancedSEO from "../components/EnhancedSEO";
import Photo from "../components/Photo";
import ContactActions from "../components/ContactActions";
import ApplicationLinks from "../components/ApplicationLinks";
import NotFound from "./NotFound";
export default function ApplicationPage() {
  const { applicationName } = useParams();
  const g = APPLICATIONS.find((a) => a.slug === applicationName);
  if (!g) return <NotFound />;
  const services = SERVICES.filter((s) => g.services.includes(s.id));
  const faqs = g.faq.map(([question, answer]) => ({ question, answer }));
  return (
    <>
      <EnhancedSEO
        title={g.title + " | Alumimec"}
        description={g.description}
        canonical={applicationPath(g.slug)}
        ogImage={services[0].image}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: g.title, url: applicationPath(g.slug) },
        ]}
        faqItems={faqs}
        services={services.map((s) => ({
          name: s.title,
          description: s.description,
        }))}
      />
      <nav className="wrap breadcrumb" aria-label="Você está aqui">
        <a href="/">Início</a> / <a href="/#aplicacoes">Aplicações</a> /{" "}
        {g.title}
      </nav>
      <section className="local-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">DA NECESSIDADE AO ESCOPO</p>
            <h1>{g.title}</h1>
            <p>{g.intro}</p>
            <ContactActions
              subject={"Quero avaliar " + g.title.toLowerCase() + "."}
            />
          </div>
          <figure>
            <Photo
              src={services[0].image}
              width="800"
              height="600"
              alt={services[0].title + " — foto original do catálogo Alumimec"}
            />
            <figcaption>
              Imagem do catálogo; não representa uma solução dimensionada para
              sua obra.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section wrap split">
        <div className="service-guide">
          {g.sections.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <aside className="quote-form">
          <h2>Leve estas informações à consulta</h2>
          <ul className="local-checklist">
            {g.checklist.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>
            Vãos, apoios, cargas e segurança dependem de projeto e avaliação
            profissional. Não há cálculo estrutural ou promessa de preço, prazo
            ou viabilidade nesta página.
          </p>
          <a className="text-link" href="/atendimento">
            Preparar consulta na minha localidade
          </a>
        </aside>
      </section>
      <section className="section region">
        <div className="wrap">
          <h2>Serviços que podem compor o estudo</h2>
          <nav aria-label="Serviços relacionados à aplicação">
            {services.map((s) => (
              <a key={s.id} className="text-link" href={servicePath(s.title)}>
                {s.title}
              </a>
            ))}
          </nav>
          <div className="faq-list">
            <h2>Perguntas sobre esta aplicação</h2>
            {faqs.map((f) => (
              <details key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
          <p>
            A Alumimec tem sede em São José dos Pinhais e atende por
            deslocamento ao local da obra. Endereço, acesso e agendamento são
            avaliados com a equipe.
          </p>
          <a className="text-link" href="/cidade/sao-jose-dos-pinhais#planejar">
            Planejar em São José dos Pinhais
          </a>
          <a className="text-link" href="/cidade/curitiba#planejar">
            Planejar em Curitiba
          </a>
        </div>
      </section>
      <ApplicationLinks />
    </>
  );
}
