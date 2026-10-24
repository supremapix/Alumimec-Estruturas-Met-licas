import fs from "node:fs";
import { CITIES, NEIGHBORHOODS } from "../constants";
import { LOCAL_GUIDES } from "../local-guides";
import { getAllRoutes, neighborhoodPath, cityPath } from "../routes";
import territory from "../data/territories.json";
const curitiba = territory.municipalities
  .find((m) => m.city === "Curitiba")!
  .names.map((n) => n.name);
const municipalities = CITIES.map((city) => {
  const d = territory.municipalities.find((m) => m.city === city)!;
  return {
    city,
    municipalPage: cityPath(city),
    neighborhoodSource: d.source,
    sourceYear: d.year,
    sourceClassification: d.classification,
    sourceScope: d.scopeNote,
    verifiedNames: d.names.map((n) => n.name),
    completedGuides: LOCAL_GUIDES.filter((g) => g.city === city).map(
      (g) => g.path,
    ),
    coverage:
      "Atendimento por deslocamento a todas as localidades confirmado pelo responsável em 24/10/2026; projeto, acesso, condições e agendamento avaliados individualmente.",
    status: d.names.length
      ? d.scopeNote
      : "Sem inventário nominal consolidado; ver TERRITORIOS-FONTES.md.",
  };
});
const legacy = NEIGHBORHOODS.map((name) => ({
  name,
  path: neighborhoodPath(name),
  classification: curitiba.includes(name)
    ? "Nome na malha IBGE de Curitiba de 2022"
    : "Nome herdado: classificação e município não confirmados; não tratado como bairro oficial automaticamente.",
  enriched: LOCAL_GUIDES.some((g) => g.path === neighborhoodPath(name)),
}));
const report = {
  checkedAt: "2026-10-24",
  complete: false,
  stage: 5,
  closureOfAvailableEvidence: true,
  routeCount: getAllRoutes().length,
  existingRoutesPreserved: 196,
  newRoutes: getAllRoutes().length - 196,
  newTerritorialRoutes: 0,
  newHubRoutes: 0,
  guideCount: LOCAL_GUIDES.length,
  verifiedNames: municipalities.reduce((n, m) => n + m.verifiedNames.length, 0),
  cadastralOrLegalNames: territory.municipalities
    .filter((m) => ["malha-ibge", "lei-municipal"].includes(m.classification))
    .reduce((n, m) => n + m.names.length, 0),
  municipalMapNames: territory.municipalities
    .filter((m) => m.classification === "mapa-anexo-municipal")
    .reduce((n, m) => n + m.names.length, 0),
  serviceReferenceNames: territory.municipalities
    .filter((m) => m.classification === "referencias-servico-publico")
    .reduce((n, m) => n + m.names.length, 0),
  cartographicReferenceNames: territory.municipalities
    .filter((m) => m.classification === "referencias-cartograficas")
    .reduce((n, m) => n + m.names.length, 0),
  municipalities,
  legacyNames: legacy,
  limitations: [
    "Cobertura confirmada pelo responsável; avaliação técnica e agendamento continuam necessários.",
    "IBGE 2022 é uma base datada; Piraquara usa lei municipal de 2026.",
    "Não foram criadas páginas automáticas para todos os nomes; diretórios municipais preservam acesso ao catálogo e consulta contextual.",
    "21 municípios sem inventário nominal territorial consolidado; Itaperuçu, Quatro Barras, Piên e Contenda têm listas parciais de publicações municipais. Campina Grande do Sul tem 31 referências do mapa anexo, com ressalva de legenda registrada.",
    "Guias adicionais precisam de contexto próprio verificável; não atribuir demandas ou obras a um bairro apenas pelo nome.",
  ],
};
fs.writeFileSync(
  "docs/territorial-inventory.json",
  JSON.stringify(report, null, 2),
);
console.log({
  routes: report.routeCount,
  guides: report.guideCount,
  names: report.verifiedNames,
});
