import React from "react";
import { useLocation } from "react-router-dom";
import { COMPANY_INFO, SERVICES } from "../constants";
import { servicePath } from "../routes";
import { getSemanticContent } from "../semantic-content";
import { whatsapp } from "./ContactActions";

/** Visible, server-rendered guidance for each registered page, before footer. */
export default function SemanticContactSection() {
  const { pathname } = useLocation();
  const content = getSemanticContent(pathname);
  if (!content) return null;
  return (
    <section className="semantic-contact" aria-labelledby="semantic-contact-title" data-semantic-section="2026-11">
      <div className="wrap">
        <div className="semantic-contact-lead">
          <figure className="semantic-contact-art">
            <img src="/alumimec-contato-250.svg" width="250" height="250" loading="lazy" decoding="async" alt={`Alumimec Estruturas Metálicas. WhatsApp ${COMPANY_INFO.phone1Display}; telefone ${COMPANY_INFO.phone2Display}. Sede em São José dos Pinhais.`} />
            <figcaption>Projeto, fabricação e montagem.<br />Condições definidas para cada obra.</figcaption>
          </figure>
          <div className="semantic-contact-intro">
            <p className="eyebrow">DA SUA IDEIA À CONSULTA TÉCNICA</p>
            <h2 id="semantic-contact-title">{content.title}</h2>
            <p>{content.intro}</p>
            <div className="semantic-contact-actions">
              <a className="button" href={whatsapp(content.subject)} target="_blank" rel="noreferrer">Consultar meu projeto no WhatsApp ↗</a>
              <a className="button secondary" href={`tel:+55${COMPANY_INFO.phone1}`}>Ligar {COMPANY_INFO.phone1Display}</a>
            </div>
          </div>
        </div>
        <div className="semantic-contact-topics">
          {content.topics.map(([heading, text], i) => (
            <article key={heading}>
              <span className="semantic-contact-number" aria-hidden="true">0{i + 1}</span>
              <h3>{heading}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="semantic-contact-next">
          <div>
            <h3>O que enviar para começar</h3>
            <ul>{content.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Não se coloque em risco para obter fotos ou medidas. A avaliação profissional define dimensionamento, segurança e viabilidade.</p>
          </div>
          <div>
            <h3>Contato direto com a Alumimec</h3>
            <p>{COMPANY_INFO.address}</p>
            <p>{COMPANY_INFO.hours}</p>
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            <nav aria-label="Serviços relacionados ao planejamento" className="semantic-contact-links">
              {SERVICES.filter((s) => content.services.includes(s.id)).map((s) => <a href={servicePath(s.title)} key={s.id}>{s.title} ↗</a>)}
              <a href="/atendimento">Consultar municípios e bairros ↗</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
