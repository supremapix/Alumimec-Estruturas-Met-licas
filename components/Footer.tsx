import React from "react";
import { servicePath } from "../routes";
import { COMPANY_INFO, SERVICES } from "../constants";
import { navigation } from "./Header";
import ContactActions from "./ContactActions";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-intro">
          <p className="eyebrow">VAMOS CONSTRUIR ESSA CONVERSA</p>
          <h2>
            Seu projeto começa
            <br />
            com as perguntas certas.
          </h2>
          <ContactActions />
        </div>
        <div className="footer-grid">
          <div>
            <h3>Alumimec</h3>
            <p>{COMPANY_INFO.address}</p>
            <a href={`tel:+55${COMPANY_INFO.phone1}`}>
              {COMPANY_INFO.phone1Display}
            </a>
            <a href="tel:+5541997221079">{COMPANY_INFO.phone2Display}</a>
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            <p>{COMPANY_INFO.hours}</p>
          </div>
          <div>
            <h3>Explore o site</h3>
            {navigation.map(([label, url]) => (
              <a key={label} href={url}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Nossos serviços</h3>
            {SERVICES.map((s) => (
              <a key={s.id} href={servicePath(s.title)}>
                {s.title}
              </a>
            ))}
            <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
          </div>
        </div>
        <div className="agency">
          <p>© {new Date().getFullYear()} Alumimec Estruturas Metálicas</p>
          <a
            href="https://www.supremasite.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Desenvolvido por</span>
            <img
              src="/suprema-oficial.svg"
              width="240"
              height="90"
              loading="lazy"
              alt="Suprema Sites Express"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
