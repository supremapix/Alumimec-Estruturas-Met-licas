import fs from "node:fs";
const logo = fs.readFileSync("public/logo-alumimec.jpg").toString("base64");
for (const [slug, lines] of [
  ["curitiba", ["CURITIBA", "Consulte seu projeto"]],
  ["sjp", ["SÃO JOSÉ DOS PINHAIS", "Conheça nossa sede"]],
]) {
  fs.writeFileSync(
    "public/local-" + slug + ".svg",
    `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250"><rect width="250" height="250" fill="#e9ede8"/><image href="data:image/jpeg;base64,${logo}" x="75" y="12" width="100" height="100"/><g font-family="Arial,sans-serif" text-anchor="middle" fill="#172322"><text x="125" y="140" font-size="15" font-weight="bold">${lines[0]}</text><text x="125" y="166" font-size="14">${lines[1]}</text><text x="125" y="195" font-size="16" font-weight="bold">(41) 99631-5885</text><text x="125" y="222" font-size="12">Atendimento sob consulta</text></g></svg>`,
  );
}
