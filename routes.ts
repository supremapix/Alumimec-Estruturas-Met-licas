import { CITIES, NEIGHBORHOODS } from './constants';

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
}

export const getAllRoutes = (): RouteConfig[] => {
  const routes: RouteConfig[] = [];

  routes.push({
    path: '/',
    title: 'Alumimec Estruturas Metálicas | Galpões e Coberturas em Curitiba',
    description: 'Especialistas em estruturas metálicas, galpões industriais e coberturas em Curitiba. Mais de 14 anos de experiência. Orçamento Grátis!'
  });

  CITIES.forEach(city => {
    const encodedCity = encodeURIComponent(city.toLowerCase());
    routes.push({
      path: `/cidade/${encodedCity}`,
      title: `Estruturas Metálicas em ${city} | Alumimec`,
      description: `Procurando Estruturas Metálicas em ${city}? A Alumimec é especialista em Galpões, Coberturas e Serralheria Industrial com atendimento em ${city}. Orçamento Grátis.`
    });
  });

  NEIGHBORHOODS.forEach(neighborhood => {
    const encodedNeighborhood = encodeURIComponent(neighborhood.toLowerCase());
    routes.push({
      path: `/bairro/${encodedNeighborhood}`,
      title: `Estruturas Metálicas no bairro ${neighborhood} | Alumimec`,
      description: `Procurando Estruturas Metálicas no bairro ${neighborhood}? A Alumimec é especialista em Galpões, Coberturas e Serralheria Industrial com atendimento no bairro ${neighborhood}. Orçamento Grátis.`
    });
  });

  return routes;
};

export const getTotalRoutes = (): number => {
  return 1 + CITIES.length + NEIGHBORHOODS.length;
};
