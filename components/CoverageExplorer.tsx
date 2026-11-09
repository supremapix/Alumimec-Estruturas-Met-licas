import React, { useState } from "react";
import { CITIES } from "../constants";
import { cityPath } from "../routes";
import { NEARBY_CITIES, approximateKm } from "../coverage-area";
import territory from "../data/territories.json";
import { whatsapp } from "./ContactActions";
import ProjectPlanner from "./ProjectPlanner";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
const municipalData = new Map(territory.municipalities.map((m) => [m.city, m]));
const allCities = [...CITIES, ...NEARBY_CITIES.map((c) => c.city)];

export default function CoverageExplorer() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("all");
  const [city, setCity] = useState("Curitiba");
  const needle = normalize(query);
  const metropolitan =
    scope === "nearby"
      ? []
      : CITIES.filter(
          (name) =>
            normalize(name).includes(needle) ||
            municipalData
              .get(name)
              ?.names.some((n) => normalize(n.name).includes(needle)),
        );
  const nearby =
    scope === "rmc"
      ? []
      : NEARBY_CITIES.filter((item) =>
          normalize(item.city + " " + item.state).includes(needle),
        );
  const resultCount = metropolitan.length + nearby.length;
  const selectedNearby = NEARBY_CITIES.find((item) => item.city === city);
  const plannerCity = selectedNearby ? `${city}/${selectedNearby.state}` : city;
  const referenceCount = territory.municipalities.reduce(
    (total, m) => total + m.names.length,
    0,
  );
  return (
    <>
      <section className="section wrap coverage-explorer" id="localidades">
        <p className="eyebrow">CIDADE, BAIRRO E ENDEREÇO</p>
        <h2>Encontre sua localidade</h2>
        <p>
          Os 29 municípios da RMC, incluindo Curitiba, mais oito cidades do
          entorno. São {referenceCount} referências de bairros e localidades nas
          fontes indicadas. Listas parciais não representam todos os bairros
          atuais; um nome ausente não impede a consulta do projeto.
        </p>
        <div className="coverage-filters">
          <label htmlFor="coverage-search">
            Buscar cidade, bairro ou localidade
            <input
              id="coverage-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ex.: Curitiba, Afonso Pena, Morretes"
            />
          </label>
          <label htmlFor="coverage-scope">
            Área de consulta
            <select
              id="coverage-scope"
              value={scope}
              onChange={(event) => setScope(event.target.value)}
            >
              <option value="all">Todas as áreas</option>
              <option value="rmc">Curitiba e Região Metropolitana</option>
              <option value="nearby">Entorno: referência de 80 km</option>
            </select>
          </label>
        </div>
        <p role="status">
          {resultCount}{" "}
          {resultCount === 1
            ? "município encontrado"
            : "municípios encontrados"}
          .
        </p>
        {metropolitan.length > 0 && (
          <>
            <h3>Curitiba e Região Metropolitana</h3>
            <p>
              Todos os 29 municípios metropolitanos permanecem atendidos por
              deslocamento. A divisão administrativa da RMC não corresponde a um
              círculo de 80 km.
            </p>
            <ul className="territory-list coverage-cards">
              {metropolitan.map((name) => {
                const data = municipalData.get(name);
                const names =
                  data?.names.filter(
                    (n) =>
                      normalize(name).includes(needle) ||
                      normalize(n.name).includes(needle),
                  ) ?? [];
                return (
                  <li key={name}>
                    <h4>
                      <a href={cityPath(name)}>{name}</a>
                    </h4>
                    <p>
                      {data?.names.length
                        ? `${data.names.length} ${data.names.length === 1 ? "referência territorial" : "referências territoriais"} com fonte.`
                        : "Consulta por bairro ou endereço, inclusive localidades rurais."}
                    </p>
                    {names.length > 0 && (
                      <details key={needle} open={needle.length > 0}>
                        <summary>
                          Ver {names.length}{" "}
                          {names.length === 1 ? "referência" : "referências"} de{" "}
                          {name}
                        </summary>
                        <ul className="coverage-names">
                          {names.map((n) => (
                            <li key={n.name}>
                              <a
                                href={whatsapp(
                                  `Quero consultar uma obra em ${n.name}, ${name}. Vou informar endereço, CEP e detalhes do projeto.`,
                                )}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {n.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <p className="muted">
                          {data?.scopeNote}{" "}
                          <a href={data?.source}>Fonte: {data?.sourceLabel}</a>.
                        </p>
                      </details>
                    )}
                    <a
                      className="text-link"
                      href={cityPath(name) + "#planejar"}
                    >
                      Preparar projeto em {name} →
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {nearby.length > 0 && (
          <>
            <h3>Cidades do entorno: referência aproximada de 80 km</h3>
            <p>
              Distâncias em linha reta entre a referência municipal de São José
              dos Pinhais e os pontos publicados nas fontes de cada cidade. Não
              são distâncias de estrada ou da porta da Alumimec. Cada endereço
              precisa ser conferido, inclusive os próximos ao limite.
            </p>
            <ul className="territory-list coverage-cards">
              {nearby.map((item) => (
                <li key={item.city}>
                  <h4>
                    {item.city}/{item.state}
                  </h4>
                  <p className="coverage-distance">
                    ≈ {approximateKm(item.latitude, item.longitude)} km em linha
                    reta
                  </p>
                  <p>{item.guidance}</p>
                  <a href={item.source}>Fonte da referência geográfica</a>
                  <a
                    className="text-link"
                    href={whatsapp(
                      `Quero consultar atendimento em ${item.city}/${item.state}. Vou informar bairro, endereço, CEP e detalhes da obra para avaliar acesso, deslocamento e agendamento.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar obra em {item.city} ↗
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {metropolitan.length + nearby.length === 0 && (
          <p>
            Não encontramos esse nome no diretório. Tente apenas o município ou
            informe o endereço completo no pedido abaixo. A lista não é um
            cadastro completo de todos os bairros.
          </p>
        )}
        <div className="coverage-note">
          <h3>Seu bairro ou cidade não aparece?</h3>
          <p>
            Informe município, estado, bairro ou localidade, rua e CEP. Partes
            de municípios podem estar dentro ou fora do raio, como ocorre nas
            áreas limítrofes de Pontal do Paraná e Palmeira. A equipe avalia
            cada endereço e a logística da obra.
          </p>
          <a
            className="text-link"
            href={whatsapp(
              "Quero consultar uma obra em uma localidade que não encontrei no diretório. Vou informar município, estado, bairro, endereço e CEP para avaliar o atendimento.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Consultar outro endereço ↗
          </a>
        </div>
      </section>
      <div className="wrap coverage-planner-city">
        <label htmlFor="coverage-project-city">
          Selecione o município para preparar o pedido
          <select
            id="coverage-project-city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            {allCities.map((name) => (
              <option key={name} value={name}>
                {name}
                {NEARBY_CITIES.find((item) => item.city === name)
                  ? `/${NEARBY_CITIES.find((item) => item.city === name)!.state}`
                  : ""}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ProjectPlanner key={city} city={plannerCity} />
    </>
  );
}
