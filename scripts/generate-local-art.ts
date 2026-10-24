import fs from "node:fs";
import { LOCAL_GUIDES } from "../local-guides";
const logo = fs
  .readFileSync("public/local-sjp.svg", "utf8")
  .match(/<image[^>]*\/>/)![0];
fs.mkdirSync("public/local-guides", { recursive: true });
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
for (const g of LOCAL_GUIDES) {
  const city = g.city === "Curitiba" ? "CURITIBA" : "SÃO JOSÉ DOS PINHAIS";
  const art = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" role="img"><title>Alumimec — ${esc(g.name)}, ${city}</title><desc>Consulte seu projeto pelo telefone (41) 99631-5885. Atendimento sob avaliação.</desc><rect width="250" height="250" rx="8" fill="#e9ede8"/>${logo}<g font-family="Arial,sans-serif" text-anchor="middle" fill="#172322"><text x="125" y="137" font-size="${g.name.length > 17 ? 15 : 17}" font-weight="bold">${esc(g.name)}</text><text x="125" y="158" font-size="11">${city}</text><text x="125" y="185" font-size="15" font-weight="bold">(41) 99631-5885</text><text x="125" y="210" font-size="13">Consulte seu projeto</text><text x="125" y="232" font-size="11">Atendimento sob avaliação</text></g></svg>`;
  fs.writeFileSync(
    "public/local-guides/" + g.path.split("/").slice(-2).join("-") + ".svg",
    art,
  );
}
