import { CITIES, NEIGHBORHOODS } from './constants';
import { slugify } from './lib/slug';
import { PRIORITY_CITIES } from './site.config';

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  type: 'home' | 'city' | 'neighborhood';
  /** Nome oficial do local (para cidade/bairro). */
  name?: string;
  priority: number;
  changefreq: string;
}

export const HOME_TITLE = 'Alumimec Estruturas Metálicas | Galpões e Coberturas em Curitiba';
export const HOME_DESCRIPTION =
  'Alumimec: estruturas metálicas, galpões industriais, coberturas metálicas, mezaninos, escadas e portões industriais em Curitiba, São José dos Pinhais e Região Metropolitana.';

export const cityPath = (city: string) => `/cidade/${slugify(city)}`;
export const neighborhoodPath = (n: string) => `/bairro/${slugify(n)}`;

/**
 * Locais vizinhos, usados tanto no bloco de links internos da página quanto na
 * meta description — garantem que cada página tenha conteúdo e metadados
 * distintos em vez de apenas trocar o nome da localidade.
 */
export const nearbyOf = (name: string, list: string[], count = 4): string[] => {
  const index = list.indexOf(name);
  if (index < 0) return list.slice(0, count);
  const out: string[] = [];
  for (let step = 1; out.length < count && step < list.length; step++) {
    const before = list[(index - step + list.length) % list.length];
    const after = list[(index + step) % list.length];
    if (before !== name && !out.includes(before) && out.length < count) out.push(before);
    if (after !== name && !out.includes(after) && out.length < count) out.push(after);
  }
  return out;
};

export const cityTitle = (city: string) =>
  city === 'Curitiba'
    ? 'Estruturas Metálicas em Curitiba | Galpões e Coberturas | Alumimec'
    : `Estruturas Metálicas em ${city} | Galpões e Coberturas | Alumimec`;

export const cityDescription = (city: string) => {
  const nearby = nearbyOf(city, CITIES, 3).join(', ');
  const focus = PRIORITY_CITIES.includes(city)
    ? 'Projeto, fabricação e montagem de galpões industriais, coberturas metálicas e mezaninos'
    : 'Galpões industriais, coberturas metálicas, mezaninos, escadas e portões industriais';
  return `${focus} em ${city}/PR. A Alumimec atende ${city} e cidades vizinhas como ${nearby}. Orçamento sem custo.`;
};

export const neighborhoodTitle = (n: string) =>
  `Estruturas Metálicas no ${n}, Curitiba | Alumimec`;

export const neighborhoodDescription = (n: string) => {
  const nearby = nearbyOf(n, NEIGHBORHOODS, 3).join(', ');
  return `Estruturas metálicas, coberturas, mezaninos e serralheria industrial no bairro ${n}, em Curitiba. A Alumimec atende ${n} e bairros próximos como ${nearby}. Orçamento sem custo.`;
};

export const getAllRoutes = (): RouteConfig[] => {
  const routes: RouteConfig[] = [
    {
      path: '/',
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      type: 'home',
      priority: 1.0,
      changefreq: 'weekly',
    },
  ];

  CITIES.forEach((city) => {
    routes.push({
      path: cityPath(city),
      title: cityTitle(city),
      description: cityDescription(city),
      type: 'city',
      name: city,
      priority: PRIORITY_CITIES.includes(city) ? 0.8 : 0.5,
      changefreq: 'monthly',
    });
  });

  NEIGHBORHOODS.forEach((neighborhood) => {
    routes.push({
      path: neighborhoodPath(neighborhood),
      title: neighborhoodTitle(neighborhood),
      description: neighborhoodDescription(neighborhood),
      type: 'neighborhood',
      name: neighborhood,
      priority: 0.4,
      changefreq: 'monthly',
    });
  });

  return routes;
};

export const getTotalRoutes = (): number => 1 + CITIES.length + NEIGHBORHOODS.length;
