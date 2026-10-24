import React from "react";
import { useLocation } from "react-router-dom";
import { LOCAL_GUIDES, LocalGuide } from "../local-guides";
import { COMPANY_INFO, SERVICES } from "../constants";
import { cityPath, servicePath } from "../routes";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions from "../components/ContactActions";
import Photo from "../components/Photo";
import NotFound from "./NotFound";
export default function NeighborhoodGuide({ guide }: { guide?: LocalGuide }) {
  const { pathname } = useLocation();
  const g = guide ?? LOCAL_GUIDES.find((x) => x.path === pathname);
  if (!g) return <NotFound />;
  const service = SERVICES[g.service];
  const art = "/local-guides/" + g.path.split("/").slice(-2).join("-") + ".svg";
  const faqs = [
    ...g.faq.map(([question, answer]) => ({ question, answer })),
    {
      question: "Como confirmar atendimento e preparar o orçamento?",
      answer: `Envie o endereço em ${g.name}, ${g.city}, com CEP, fotos, medidas aproximadas e finalidade da obra. A Alumimec confirma viabilidade e condições. A sede é em Afonso Pena, São José dos Pinhais; não há outra filial declarada.`,
    },
  ];
  return (
    <>
      <EnhancedSEO
        title={g.title}
        description={g.description}
        canonical={g.path}
        ogImage={service.image}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: g.city, url: cityPath(g.city) },
          { name: g.name, url: g.path },
        ]}
        faqItems={faqs}
      />
      <nav className="wrap breadcrumb" aria-label="Caminho da página">
        <a href="/">Início</a> / <a href={cityPath(g.city)}>{g.city}</a> /{" "}
        {g.name}
      </nav>
      <section className="local-hero">
        <div className="wrap local-grid">
          <div>
            <p className="eyebrow">
              {g.city.toUpperCase()} / CONSULTA DE PROJETO
            </p>
            <h1>{g.title.split(" | ")[0]}</h1>
            <p>{g.description}</p>
            <ContactActions
              subject={`Quero consultar ${service.title.toLowerCase()} em ${g.name}, ${g.city}. Vou enviar endereço, fotos e finalidade.`}
            />
          </div>
          <img
            className="local-art"
            src={art}
            width="250"
            height="250"
            alt={`Alumimec — ${g.name}, ${g.city}. Consulte seu projeto: (41) 99631-5885.`}
          />
        </div>
      </section>
      <section className="section wrap">
        <div className="split">
          <div className="service-guide">
            <h2>Localize a obra com precisão</h2>
            <p>{g.territorial}</p>
            <p>
              <a href={g.source}>Consultar referência territorial oficial</a>.
              Fonte consultada em 24/10/2026 para identificar o local; não
              substitui consulta cadastral ou urbanística atual do imóvel.
            </p>
            {g.sections.map(([heading, text]) => (
              <article key={heading}>
                <h2>{heading}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside>
            <figure>
              <Photo
                src={service.image}
                alt={
                  service.title +
                  " — fotografia original do catálogo Alumimec, sem atribuição a uma obra neste bairro"
                }
                width="800"
                height="600"
                loading="lazy"
              />
              <figcaption className="muted">
                Acervo original. A imagem apresenta o serviço e não comprova uma
                obra em {g.name}.
              </figcaption>
            </figure>
            <div className="quote-form">
              <h2>Antes de pedir a proposta</h2>
              <ul className="local-checklist">
                <li>Rua, número, município e CEP.</li>
                <li>Fotos do espaço e dos acessos.</li>
                <li>Uso atual e uso pretendido.</li>
                <li>Medidas aproximadas e projeto existente, se houver.</li>
              </ul>
              <p>
                Vãos, cargas, apoios e segurança dependem de projeto e avaliação
                profissional. Nenhum dimensionamento desta página autoriza
                execução.
              </p>
              <p>
                <strong>Sede confirmada:</strong> {COMPANY_INFO.address}
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section region">
        <div className="wrap">
          <h2>Serviços para compor o estudo</h2>
          <p>
            O foco deste guia é {service.title.toLowerCase()}. Se sua
            necessidade envolver outras partes da obra, consulte também o
            catálogo completo. Escopo e disponibilidade são confirmados caso a
            caso.
          </p>
          <div className="service-links">
            {SERVICES.map((s) => (
              <a key={s.id} className="text-link" href={servicePath(s.title)}>
                {s.title}
              </a>
            ))}
          </div>
          <div className="faq-list">
            <h2>Perguntas para esta consulta</h2>
            {faqs.map((f) => (
              <details key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
          <ContactActions
            subject={`Gostaria de preparar uma proposta para ${g.name}, ${g.city}.`}
          />
          <h3>Outros guias no mesmo município</h3>
          <p>
            Organizados por município; esta lista não afirma proximidade entre
            bairros.
          </p>
          {LOCAL_GUIDES.filter(
            (x) => x.city === g.city && x.path !== g.path,
          ).map((x) => (
            <a className="text-link" key={x.path} href={x.path}>
              {x.name}: {SERVICES[x.service].title.toLowerCase()}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
