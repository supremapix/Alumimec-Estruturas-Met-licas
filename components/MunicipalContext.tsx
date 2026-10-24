import React from "react";
import { MUNICIPAL_CONTEXT } from "../municipal-context";
export default function MunicipalContext({ city }: { city: string }) {
  const c = MUNICIPAL_CONTEXT[city];
  if (!c) return null;
  return (
    <section className="section wrap municipal-context" id="referencia-local">
      <p className="eyebrow">ORIENTAÇÃO PARA LOCALIZAR A CONSULTA</p>
      <h2>{c.title}</h2>
      <p>{c.text}</p>
      <p>{c.planning}</p>
      <nav aria-label={"Fontes municipais de " + city}>
        {c.sources.map(([label, url]) => (
          <a className="text-link" href={url} key={url}>
            {label}
          </a>
        ))}
      </nav>
      <a className="text-link" href="#planejar">
        Preparar informações do projeto em {city}
      </a>
    </section>
  );
}
