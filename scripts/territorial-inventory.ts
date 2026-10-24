import fs from "node:fs";
import { CITIES, NEIGHBORHOODS } from "../constants";
import { LOCAL_GUIDES } from "../local-guides";
import { getAllRoutes, neighborhoodPath } from "../routes";
const source = fs.readFileSync("pages/LocationPage.tsx", "utf8");
const curitiba = source.match(/"(Abranches\|[^"]+)"/)![1].split("|");
const sjp =
  "Academia|Cachoeira|Dom Rodrigo|Rio Pequeno|Área Institucional Aeroportuária|Campina do Taquaral|Guatupê|Roseira de São Sebastião|Afonso Pena|Campo Largo da Roseira|Iná|Santo Antônio|Águas Belas|Centro|Ipê|São Cristóvão|Aristocrata|Cidade Jardim|Itália|São Domingos|Arujá|Colônia Rio Grande|Jurema|São Marcos|Aviação|Contenda|Miringuava|São Pedro|Barro Preto|Costeira|Ouro Fino|Zacarias|Bom Jesus|Cristal|Parque da Fonte|Boneca do Iguaçu|Cruzeiro|Pedro Moro|Borda do Campo|Del Rey|Quissisana".split(
    "|",
  );
const inventories = CITIES.map((city) => ({
  city,
  municipalPage:
    "/cidade/" +
    city
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-"),
  neighborhoodSource:
    city === "Curitiba"
      ? "https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912"
      : city === "São José dos Pinhais"
        ? "https://www.sjp.pr.gov.br/mapas-do-municipio/"
        : null,
  verifiedNames:
    city === "Curitiba" ? curitiba : city === "São José dos Pinhais" ? sjp : [],
  completedGuides: LOCAL_GUIDES.filter((g) => g.city === city).map(
    (g) => g.path,
  ),
  coverage:
    city === "São José dos Pinhais"
      ? "Sede e obra no portfólio municipal; confirmar cada endereço."
      : city === "Curitiba"
        ? "Atendimento municipal declarado no catálogo; confirmar cada endereço."
        : "Sem comprovação individual de cobertura; consulta obrigatória.",
  status:
    city === "Curitiba"
      ? "Inventário de 75 bairros confrontado com fonte municipal; 6 guias próprios nesta etapa."
      : city === "São José dos Pinhais"
        ? "41 entradas verificadas no índice municipal consultado; não tratar a fonte como censo atualizado exaustivo. 6 guias próprios."
        : "Inventário de bairros e conteúdo próprio pendentes; página municipal existente preservada.",
}));

const extra: Record<
  string,
  { source: string; names: string[]; status: string }
> = {
  Pinhais: {
    source:
      "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
    names:
      "Parque das Nascentes|Centro|Jardim Amélia|Weissópolis|Jardim Karla|Atuba|Pineville|Alphaville Graciosa|Vargem Grande|Parque das Águas|Maria Antonieta|Emiliano Perneta|Alto Tarumã|Jardim Cláudia|Estância Pinhais".split(
        "|",
      ),
    status:
      "15 nomes identificados no mapa oficial histórico 2011; validar limites atuais no GeoPinhais antes de produzir guias. Não reutilizar estatísticas de 2010 como atuais.",
  },
  Piraquara: {
    source: "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875",
    names:
      "Jardim Tropical|Holandês|Guarituba Redondo|Guaritubinha|Guarituba Central|Jardim Santa Mônica|Mossoró|Jardim dos Estados|Vicente|Bela Vista|Laranjeiras|São Tiago|Santa Maria|Vila Juliana|Centro|Araçatuba|Vila Rosa|Deodoro|São Cristóvão|Borda do Campo|Parque das Águas".split(
        "|",
      ),
    status:
      "21 bairros enumerados no art. 15 da lei 2672/2026, fonte oficial consultada. Guarituba como UTP é distinto de Guarituba Central/Redondo. Guias ainda pendentes.",
  },
  Colombo: {
    source:
      "https://prefeitura.colombo.pr.gov.br/downloads-secretaria-municipal-do-desenvolvimento-urbano-e-habitacao/",
    names: [],
    status:
      "Fonte oficial disponibiliza mapa de bairros e loteamentos 2021. PDF sem extração textual nesta leitura; relação ainda não transcrita ou validada. Não confundir os mais de 200 loteamentos com bairros.",
  },
  Araucária: {
    source:
      "https://araucaria.atende.net/cidadao/noticia/site-da-prefeitura-disponibiliza-mapas-das-areas-urbana-e-rural-do-sistema-viario-de-loteamentos-aprovados-entre-outros",
    names: [],
    status:
      "Portal municipal anuncia mapas urbanos/rurais e loteamentos. Índice localizado; relação de bairros ainda não extraída e validada.",
  },
};
for (const item of inventories) {
  const info = extra[item.city];
  if (info) {
    item.neighborhoodSource = info.source;
    item.verifiedNames = info.names;
    item.status = info.status;
  }
}

const legacy = NEIGHBORHOODS.map((name) => ({
  name,
  path: neighborhoodPath(name),
  classification: curitiba.includes(name)
    ? "Nome de bairro oficial de Curitiba confirmado na relação municipal"
    : "Nome herdado: município e classificação cadastral não confirmados neste inventário; pode ser nome popular, loteamento ou bairro de outro município.",
  enriched: LOCAL_GUIDES.some((g) => g.path === neighborhoodPath(name)),
}));
const report = {
  checkedAt: "2026-10-24",
  complete: false,
  stage: 1,
  routeCount: getAllRoutes().length,
  existingRoutesPreserved: 160,
  newRoutes: 6,
  enrichedExistingRoutes: 6,
  municipalities: inventories,
  legacyNames: legacy,
  limitations: [
    "Não confirma cobertura comercial em todos os bairros.",
    "As fontes territoriais incluem publicações históricas; não foram usados dados demográficos ou regras urbanísticas antigos como atuais.",
    "Não foram criadas páginas automáticas para todos os nomes; os 12 guias possuem seleção editorial e conteúdo específico de planejamento.",
    "25 municípios ainda sem relação de bairros conferida (Pinhais possui apenas conferência histórica); expansão da RMC incompleta.",
  ],
};
fs.writeFileSync(
  "docs/territorial-inventory.json",
  JSON.stringify(report, null, 2),
);
console.log(
  JSON.stringify({
    cities: CITIES.length,
    curitiba: curitiba.length,
    sjp: sjp.length,
    guides: LOCAL_GUIDES.length,
    routes: getAllRoutes().length,
  }),
);
