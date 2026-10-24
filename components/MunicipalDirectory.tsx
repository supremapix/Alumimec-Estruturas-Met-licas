import React, { useState } from "react";
import territory from "../data/territories.json";
import { LOCAL_GUIDES } from "../local-guides";
import { whatsapp } from "./ContactActions";
const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export default function MunicipalDirectory({ city }: { city: string }) {
  const [query, setQuery] = useState("");
  const data = territory.municipalities.find((m) => m.city === city);
  if (!data?.names.length) return null;
  const names = data.names.filter((n) =>
    normalize(n.name).includes(normalize(query)),
  );
  return (
    <section className="section wrap" id="bairros">
      <p className="eyebrow">IDENTIFIQUE O ENDEREÇO DA OBRA</p>
      <h2>
        {["referencias-servico-publico", "mapa-anexo-municipal"].includes(
          data.classification,
        )
          ? "Bairros e referências de "
          : "Bairros de "}
        {city}
      </h2>
      <p>
        Referências da {data.sourceLabel}. Nomes de loteamentos e regiões
        populares podem ser diferentes do bairro cadastrado. A Alumimec atende
        estas localidades por deslocamento ao local da obra. Informe o endereço
        para avaliar o projeto, o acesso e combinar o atendimento.
      </p>
      <p>{data.scopeNote}</p>
      <p>
        <a href={data.source}>Consultar fonte oficial</a>. Informe rua, número e
        CEP, especialmente quando o mesmo nome existir em municípios diferentes.
      </p>
      <label htmlFor="bairro-search">
        Buscar bairro
        <input
          id="bairro-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do bairro"
        />
      </label>
      <p role="status">{names.length} referências encontradas.</p>
      <ul className="territory-list">
        {names.map((n) => {
          const guide = LOCAL_GUIDES.find(
            (g) => g.city === city && normalize(g.name) === normalize(n.name),
          );
          return (
            <li key={n.name}>
              <h3>{n.name}</h3>
              <p>
                {city} · referência {data.year}
              </p>
              {guide && (
                <a className="text-link" href={guide.path}>
                  Ler guia de planejamento
                </a>
              )}
              <a
                className="text-link"
                href={whatsapp(
                  `Quero consultar um projeto em ${n.name}, ${city}. Vou informar rua, CEP, fotos e finalidade da estrutura.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Consultar projeto em {n.name}
              </a>
            </li>
          );
        })}
      </ul>
      {!names.length && (
        <p>
          O nome pode ser popular ou ter outra classificação. Envie o endereço
          completo para a equipe localizar a consulta.
        </p>
      )}
    </section>
  );
}
