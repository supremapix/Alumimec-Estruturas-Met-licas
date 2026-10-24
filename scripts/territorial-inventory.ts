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
    verifiedNames: d.names.map((n) => n.name),
    completedGuides: LOCAL_GUIDES.filter((g) => g.city === city).map(
      (g) => g.path,
    ),
    coverage:
      "Atendimento por deslocamento a todas as localidades confirmado pelo responsável em 24/10/2026; projeto, acesso, condições e agendamento avaliados individualmente.",
    status: d.names.length
      ? `Inventário de ${d.names.length} referências da fonte ${d.year}; não comprova alterações territoriais posteriores.`
      : "Sem registros na malha IBGE de bairros 2022; não significa ausência de bairros. Pesquisa complementar documentada em TERRITORIOS-FONTES.md.",
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
  stage: 3,
  routeCount: getAllRoutes().length,
  existingRoutesPreserved: 172,
  newRoutes: getAllRoutes().length - 172,
  guideCount: LOCAL_GUIDES.length,
  verifiedNames: municipalities.reduce((n, m) => n + m.verifiedNames.length, 0),
  municipalities,
  legacyNames: legacy,
  limitations: [
    "Cobertura confirmada pelo responsável; avaliação técnica e agendamento continuam necessários.",
    "IBGE 2022 é uma base datada; Piraquara usa lei municipal de 2026.",
    "Não foram criadas páginas automáticas para todos os nomes; diretórios municipais preservam acesso ao catálogo e consulta contextual.",
    "22 municípios ainda exigem consolidação nominal de fontes que distinguem bairros, localidades e loteamentos.",
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
