/**
 * Triagem geográfica, consultada em 09/11/2026. As coordenadas representam
 * referências municipais/publicadas, NUNCA a porta da sede ou toda a cidade.
 * Distâncias geodésicas aproximadas não são distância de estrada ou frete.
 */
export const COVERAGE_REFERENCE = {
  name: "referência municipal de São José dos Pinhais",
  latitude: -(25 + 32 / 60 + 5 / 3600),
  longitude: -(49 + 12 / 60 + 23 / 3600),
  source: "https://www.sjp.pr.gov.br/relevo/",
};
export const NEARBY_CITIES = [
  {
    city: "Morretes",
    state: "PR",
    latitude: -(25 + 28 / 60 + 44 / 3600),
    longitude: -(48 + 49 / 60 + 54 / 3600),
    source:
      "https://www.boaspraticasods.pr.gov.br/usuario/Prefeitura-Municpal-de-Morretes",
    guidance:
      "Informe o bairro ou a localidade rural, a estrada de acesso e a entrada da obra. A indicação do município não descreve as condições do trajeto final.",
  },
  {
    city: "Antonina",
    state: "PR",
    latitude: -25.43,
    longitude: -48.71,
    source:
      "https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_para_fins_de_levantamentos_estatisticos/censo_demografico_2022/mapas_urbanos_estatisticos/PR/antonina_4101200/410120005/antonina_410120005_antonina_05_mue_a0.pdf",
    guidance:
      "Identifique o imóvel e os acessos de carga. Em adaptações, reúna fotos e projetos da construção existente para discutir apoios e encontros da estrutura.",
  },
  {
    city: "Garuva",
    state: "SC",
    latitude: -(26 + 1 / 60 + 47 / 3600),
    longitude: -(48 + 51 / 60 + 48 / 3600),
    source:
      "https://apps.anatel.gov.br/participaanatel/VisualizarTextoConsulta.aspx?ConsultaId=20352&TelaDeOrigem=3",
    guidance:
      "Indique Garuva/SC, bairro, CEP e horário de acesso. Confirme transporte, montagem e responsáveis locais na proposta; o raio não equivale ao percurso por rodovia.",
  },
  {
    city: "Porto Amazonas",
    state: "PR",
    latitude: -(25 + 32 / 60 + 41 / 3600),
    longitude: -(49 + 53 / 60 + 25 / 3600),
    source:
      "https://www.idrparana.pr.gov.br/system/files/publico/Transparecia%20Institucional/TermosCooperacaoMunicipios/2022/P/PortoAmazonasPlano.pdf",
    guidance:
      "Informe rua ou estrada e uma referência de entrada. Para um galpão ou cobertura, descreva o uso previsto e como os materiais chegarão ao local de montagem.",
  },
  {
    city: "Paranaguá",
    state: "PR",
    latitude: -(25 + 31 / 60 + 12 / 3600),
    longitude: -(48 + 30 / 60 + 32 / 3600),
    source: "https://www.paranagua.pr.gov.br/conteudo/a-cidade/localizacao",
    guidance:
      "Informe o endereço completo e eventuais regras de acesso do imóvel. Fotos e projetos ajudam a avaliar a estrutura; acabamento, transporte e condições da obra entram na proposta.",
  },
  {
    city: "Guaratuba",
    state: "PR",
    latitude: -25.88,
    longitude: -48.58,
    source:
      "https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_para_fins_de_levantamentos_estatisticos/censo_demografico_2022/mapas_urbanos_estatisticos/PR/guaratuba_4109609/410960910/guaratuba_410960910_pedra_branca_do_araraquara_10_mue_a0.pdf",
    guidance:
      "Informe bairro ou localidade e confirme a rota de acesso com a equipe. O ponto municipal serve apenas à triagem; a distância real depende do endereço e do percurso.",
  },
  {
    city: "Matinhos",
    state: "PR",
    latitude: -25.82,
    longitude: -48.54,
    source:
      "https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_municipais/colecao_de_mapas_municipais/2020/PR/matinhos/4115705_MM.pdf",
    guidance:
      "Acrescente bairro ou balneário, rua e CEP. Para coberturas e ampliações, identifique passagens que devem permanecer livres e as interfaces com a construção existente.",
  },
  {
    city: "Campo Alegre",
    state: "SC",
    latitude: -(26 + 12 / 60 + 48 / 3600),
    longitude: -(49 + 15 / 60 + 12 / 3600),
    source:
      "https://campoalegre.sc.gov.br/uploads/sites/299/2021/12/1940137_CAMPO_ALEGRE_DIA_SOCIAL_FINAL.pdf",
    guidance:
      "Confirme Campo Alegre/SC e o endereço exato. A referência municipal está próxima do limite de 80 km; bairros, distritos e imóveis precisam de verificação individual.",
  },
];
export const approximateKm = (latitude: number, longitude: number) => {
  const radians = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = radians(latitude - COVERAGE_REFERENCE.latitude);
  const dLon = radians(longitude - COVERAGE_REFERENCE.longitude);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radians(COVERAGE_REFERENCE.latitude)) *
      Math.cos(radians(latitude)) *
      Math.sin(dLon / 2) ** 2;
  return Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};
export const COVERAGE_TITLE =
  "Atendimento em Curitiba, RMC e entorno até 80 km | Alumimec";
export const COVERAGE_DESCRIPTION =
  "Consulte bairros de Curitiba, os 29 municípios da RMC e cidades do entorno em raio aproximado de 80 km. Busque a localidade e prepare seu projeto com a Alumimec.";
