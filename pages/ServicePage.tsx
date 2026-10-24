import Photo from "../components/Photo";
import React from "react";
import { useParams } from "react-router-dom";
import { SERVICES } from "../constants";
import { SERVICE_GUIDES, guideFaqs } from "../service-content";
import { slugify } from "../lib/slug";
import { servicePath } from "../routes";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions from "../components/ContactActions";
import NotFound from "./NotFound";
export default function ServicePage() {
  const { serviceName } = useParams();
  const service = SERVICES.find((s) => slugify(s.title) === serviceName);
  const guide = SERVICE_GUIDES.find((g) => g.id === service?.id);
  if (!service || !guide) return <NotFound />;
  const path = servicePath(service.title);
  return (
    <>
      <EnhancedSEO
        title={service.title + " em Curitiba e região | Alumimec"}
        description={
          service.description +
          " Consulte materiais, planejamento e condições para seu projeto com a Alumimec."
        }
        canonical={path}
        ogImage={service.image}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: service.title, url: path },
        ]}
        services={[{ name: service.title, description: service.description }]}
      />
      <nav className="wrap breadcrumb" aria-label="Você está aqui">
        <a href="/">Início</a> / <a href="/#servicos">Serviços</a> /{" "}
        {service.title}
      </nav>
      <section className="local-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">SERVIÇOS ALUMIMEC / 0{service.id}</p>
            <h1>{service.title}</h1>
            <p>{guide.intro}</p>
            <ContactActions
              subject={
                "Tenho interesse em " +
                service.title +
                ". Gostaria de consultar meu projeto."
              }
            />
          </div>
          <figure>
            <Photo
              src={service.image}
              width="800"
              height="600"
              alt={service.title + " — imagem original do catálogo Alumimec"}
            />
            <figcaption className="muted">
              Imagem original do catálogo. A solução da sua obra depende do
              projeto.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section wrap">
        <div className="split">
          <div className="service-guide">
            {guide.sections.map(([title, text]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <aside className="quote-form">
            <h2>Prepare sua consulta</h2>
            <ul className="local-checklist">
              {guide.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Envie endereço, fotos e dados disponíveis. Medidas aproximadas
              ajudam na conversa inicial; materiais, custos e prazo dependem da
              avaliação e da proposta.
            </p>
            <ContactActions
              subject={"Quero preparar um orçamento de " + service.title + "."}
            />
            <p>
              A sede fica em São José dos Pinhais.{" "}
              <a href="/cidade/sao-jose-dos-pinhais">Conheça a sede</a> ou veja{" "}
              <a href="/cidade/curitiba">orientações para Curitiba</a>. A
              Alumimec atende todos os municípios da RMC por deslocamento ao
              local da obra, com avaliação do projeto e agendamento.
            </p>
          </aside>
        </div>
      </section>
      <section className="section region">
        <div className="wrap">
          <p className="eyebrow">DÚVIDAS SOBRE O SERVIÇO</p>
          <h2>Antes de definir a solução.</h2>
          <div className="faq-list">
            {guideFaqs(guide).map((f) => (
              <details key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <h2>Outras soluções para sua obra.</h2>
        <p>
          Projetos podem reunir mais de um serviço. Consulte os escopos
          necessários e compare propostas com os mesmos itens.
        </p>
        <nav aria-label="Outros serviços">
          {SERVICES.filter((s) => s.id !== service.id).map((s) => (
            <a className="text-link" key={s.id} href={servicePath(s.title)}>
              {s.title} →
            </a>
          ))}
        </nav>
        <a className="text-link" href="/#contato">
          Falar com a Alumimec →
        </a>
      </section>
    </>
  );
}
