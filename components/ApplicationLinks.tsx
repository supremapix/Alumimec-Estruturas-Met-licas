import ContextPreview from "./ContextPreview";
import { SERVICES } from "../constants";
import React from "react";
import { APPLICATIONS, applicationPath } from "../application-content";
export default function ApplicationLinks({
  serviceId,
}: {
  serviceId?: number;
}) {
  const items = APPLICATIONS.filter(
    (a) => serviceId === undefined || a.services.includes(serviceId),
  );
  return (
    <section className="section wrap" id="aplicacoes">
      <p className="eyebrow">PLANEJE PELO USO DO ESPAÇO</p>
      <h2>Aplicações para discutir no projeto</h2>
      <p>
        Comece pelo objetivo da obra. Estes guias conectam necessidades aos
        serviços do catálogo; a viabilidade depende da avaliação do imóvel.
      </p>
      <div className="application-grid">
        {items.map((a) => (
          <article key={a.slug}>
            <h3>
              <a href={applicationPath(a.slug)}>{a.title}</a>
            </h3>
            <p>{a.description}</p>
            <ContextPreview
              title={a.title}
              image={SERVICES.find((s) => s.id === a.services[0])!.image}
              href={applicationPath(a.slug)}
              paragraphs={a.sections.slice(0, 2)}
            />
            <a className="text-link" href={applicationPath(a.slug)}>
              Ver decisões e perguntas
            </a>
          </article>
        ))}
      </div>
      <a className="text-link" href="/atendimento">
        Encontre seu município e prepare a consulta
      </a>
    </section>
  );
}
