import fs from "node:fs";
import { LOCAL_GUIDES } from "../local-guides";
import territory from "../data/territories.json";
const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const rows = territory.municipalities.flatMap((m) =>
  m.names.map((n) => {
    const guide = LOCAL_GUIDES.find(
      (g) => g.city === m.city && norm(g.name) === norm(n.name),
    );
    const airport = norm(n.name).includes("aeroportuaria");
    return {
      city: m.city,
      name: n.name,
      source: m.source,
      classification: m.classification,
      decision: guide ? "guia-publicado" : "diretorio-com-preparador",
      guide: guide?.path ?? null,
      availableEvidence: guide
        ? "Identidade territorial e pauta editorial específica documentadas."
        : m.classification.startsWith("referencias-")
          ? "Referência usada por publicação pública municipal; delimitação cadastral não confirmada."
          : "Nome/código em base territorial; sem pauta local própria consolidada nesta entrega.",
      nextEvidenceNeeded: guide
        ? null
        : airport
          ? "Escopo específico e requisitos do contratante para eventual obra em instalação aeroportuária; não inferir credenciamento da cobertura geográfica."
          : m.classification.startsWith("referencias-")
            ? "Fonte cadastral que classifique o nome e contexto de aplicação distinto."
            : "Necessidade de uso ou informação territorial relevante que sustente uma orientação própria, sem repetir outro guia. Nenhuma obra ou filial será presumida.",
    };
  }),
);
fs.writeFileSync(
  "docs/territorial-content-decisions.json",
  JSON.stringify(
    {
      checkedAt: "2026-10-24",
      scope:
        "Decisão editorial com as fontes reunidas; não afirma inexistência de outras informações públicas.",
      guides: rows.filter((r) => r.guide).length,
      directoryOnly: rows.filter((r) => !r.guide).length,
      rows,
    },
    null,
    2,
  ),
);
console.log({
  guides: rows.filter((r) => r.guide).length,
  directoryOnly: rows.filter((r) => !r.guide).length,
});
