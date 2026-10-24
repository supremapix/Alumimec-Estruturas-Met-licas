import fs from "node:fs";
const path = "data/territories.json";
const d = JSON.parse(fs.readFileSync(path, "utf8"));
const supplements = JSON.parse(
  fs.readFileSync("data/territory-supplements.json", "utf8"),
);
d.municipalities = d.municipalities.map(
  (m) =>
    supplements.find((s) => s.city === m.city) ?? {
      ...m,
      sourceLabel:
        m.year === 2026
          ? "lei municipal 2672/2026 de Piraquara"
          : "malha de bairros do IBGE de 2022",
      classification: m.year === 2026 ? "lei-municipal" : "malha-ibge",
      scopeNote:
        m.year === 2026
          ? "Referências do artigo 15; não equivalem à UTP Guarituba."
          : "Base datada de 2022. Não demonstra alterações territoriais posteriores.",
    },
);
fs.writeFileSync(path, JSON.stringify(d, null, 2));
console.log(
  d.municipalities
    .filter((m) => m.names.length)
    .map((m) => ({
      city: m.city,
      names: m.names.length,
      classification: m.classification,
    })),
);
