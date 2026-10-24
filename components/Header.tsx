import React, { useState, useRef } from "react";
import { COMPANY_INFO } from "../constants";
export const navigation = [
  ["Início", "/"],
  ["Serviços", "/#servicos"],
  ["Galeria", "/#galeria"],
  ["Vídeos", "/#videos"],
  ["Sobre", "/#sobre"],
  ["Região", "/#regiao"],
  ["Dúvidas", "/#faq"],
  ["Contato", "/#contato"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Alumimec — início">
          <img
            src={COMPANY_INFO.logo}
            width="1200"
            height="1200"
            alt="Alumimec Estruturas Metálicas"
          />
        </a>
        <div className="brand-caption">
          ESTRUTURAS METÁLICAS<span>São José dos Pinhais · Paraná</span>
        </div>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Principal"
          className={open ? "navigation open" : "navigation"}
        >
          <p className="navigation-title">Navegue pelo site</p>
          {navigation.map(([name, url]) => (
            <a key={name} href={url} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
