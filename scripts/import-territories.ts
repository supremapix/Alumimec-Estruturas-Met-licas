import fs from "node:fs";
import { createHash } from "node:crypto";
import { CITIES } from "../constants";
const rows = JSON.parse(fs.readFileSync("../ibge-pr-bairros.json", "utf8"));
const old = JSON.parse(
  fs.readFileSync("docs/territorial-inventory.json", "utf8"),
);
const source =
  "https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/bairros/shp/UF/PR_bairros_CD2022.zip";
const municipalities = CITIES.map((city) => {
  const list = rows.filter((r: Record<string, string>) => r.NM_MUN === city);
  const pira = city === "Piraquara";
  return {
    city,
    source: pira
      ? "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875"
      : source,
    year: pira ? 2026 : 2022,
    names: pira
      ? old.municipalities
          .find(
            (m: { city: string; verifiedNames: string[] }) => m.city === city,
          )
          .verifiedNames.map((name: string) => ({ name, code: null }))
      : list
          .map((r: Record<string, string>) => ({
            name: r.NM_BAIRRO,
            code: r.CD_BAIRRO,
          }))
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name, "pt-BR"),
          ),
  };
});
fs.mkdirSync("data", { recursive: true });
fs.writeFileSync(
  "data/territories.json",
  JSON.stringify(
    {
      checkedAt: "2026-10-24",
      source,
      sha256: createHash("sha256")
        .update(fs.readFileSync("../PR_bairros_CD2022.zip"))
        .digest("hex"),
      note: "Ausência de registros não prova inexistência de bairros. A base de 2022 não representa alterações posteriores. Piraquara usa a lei municipal 2672/2026.",
      municipalities,
    },
    null,
    2,
  ),
);
console.log(
  municipalities.map((m) => ({ city: m.city, names: m.names.length })),
);
console.log(
  "Total",
  municipalities.reduce((n, m) => n + m.names.length, 0),
);
