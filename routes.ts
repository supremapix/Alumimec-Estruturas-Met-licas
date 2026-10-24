import { CITIES, NEIGHBORHOODS, SERVICES } from "./constants";
import { slugify } from "./lib/slug";
import { PRIORITY_CITIES } from "./site.config";

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  type: "home" | "city" | "neighborhood" | "service";
  /** Nome oficial do local (para cidade/bairro). */
  name?: string;
  priority: number;
  changefreq: string;
}

export const HOME_TITLE =
  "Alumimec Estruturas Metálicas | Galpões e Coberturas em Curitiba";
export const HOME_DESCRIPTION =
  "Empresa de estruturas metálicas sediada em São José dos Pinhais/PR, com atendimento em Curitiba e Região Metropolitana: galpões industriais, coberturas metálicas e mezaninos.";

export const servicePath = (name: string) => `/servicos/${slugify(name)}`;
export const cityPath = (city: string) => `/cidade/${slugify(city)}`;
export const neighborhoodPath = (n: string) => `/bairro/${slugify(n)}`;

/** Legacy URLs remain available; names do not imply coverage or geographic proximity. */
export const cityTitle = (city: string) =>
  `Consulta de estruturas metálicas em ${city} | Alumimec`;
export const cityDescription = (city: string) =>
  `Consulte seu projeto de estrutura metálica para ${city}. Sede em São José dos Pinhais; atendimento e condições dependem da avaliação do endereço e da obra.`;
export const neighborhoodTitle = (name: string) =>
  `Consulta para ${name} | Alumimec Estruturas Metálicas`;
export const neighborhoodDescription = (name: string) =>
  `Informe o endereço e as características de sua obra em ${name}. Consulte disponibilidade com a Alumimec, sem pressupor filial ou cobertura confirmada.`;

export const getAllRoutes = (): RouteConfig[] => {
  const routes: RouteConfig[] = [
    {
      path: "/",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      type: "home",
      priority: 1.0,
      changefreq: "weekly",
    },
  ];

  CITIES.forEach((city) => {
    routes.push({
      path: cityPath(city),
      title: cityTitle(city),
      description: cityDescription(city),
      type: "city",
      name: city,
      priority: PRIORITY_CITIES.includes(city) ? 0.8 : 0.5,
      changefreq: "monthly",
    });
  });

  NEIGHBORHOODS.forEach((neighborhood) => {
    routes.push({
      path: neighborhoodPath(neighborhood),
      title: neighborhoodTitle(neighborhood),
      description: neighborhoodDescription(neighborhood),
      type: "neighborhood",
      name: neighborhood,
      priority: 0.4,
      changefreq: "monthly",
    });
  });

  SERVICES.forEach((service) =>
    routes.push({
      path: servicePath(service.title),
      title: service.title + " | Alumimec",
      description: service.description,
      type: "service",
      name: service.title,
      priority: 0.8,
      changefreq: "monthly",
    }),
  );
  return routes;
};

export const getTotalRoutes = (): number =>
  1 + CITIES.length + NEIGHBORHOODS.length + SERVICES.length;
