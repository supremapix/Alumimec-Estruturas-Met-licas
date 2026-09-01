/**
 * Configuração canônica do site.
 *
 * IMPORTANTE: todos os dados abaixo foram lidos do próprio repositório
 * (constants.ts, componentes e conteúdo publicado). Nada aqui foi inventado.
 * Itens marcados com REQUER VALIDAÇÃO estão listados no relatório de auditoria.
 */

/**
 * Host canônico único. O site oficial responde em www.
 * O servidor/CDN deve redirecionar 301: http -> https e não-www -> www.
 */
export const SITE_URL = 'https://www.alumimec.com.br';

/** @id estáveis do grafo de entidade — nunca duplicar a empresa no JSON-LD. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BRAND = {
  themeColor: '#1a3a6c',
  backgroundColor: '#ffffff',
};

/**
 * NAP — Nome, Endereço, Telefone.
 * Endereço confirmado pelo proprietário: bairro Afonso Pena,
 * São José dos Pinhais/PR (o CEP 83045-000 pertence a São José dos Pinhais).
 * Coordenadas geográficas NÃO são declaradas: o repositório não possui
 * coordenadas verificadas e não devem ser inventadas.
 */
export const NAP = {
  legalName: 'Alumimec Estruturas Metálicas',
  streetAddress: 'R. Dep. Arnaldo Faivro Busato',
  addressLocality: 'São José dos Pinhais',
  addressRegion: 'PR',
  postalCode: '83045-000',
  addressCountry: 'BR',
};

/** Cidades com relevância comercial comprovada no conteúdo do site. */
export const PRIORITY_CITIES = [
  'Curitiba',
  'São José dos Pinhais',
  'Pinhais',
  'Araucária',
  'Colombo',
  'Campo Largo',
  'Fazenda Rio Grande',
];

/** Serviços que a Alumimec declara executar no próprio site. */
export const SERVICE_ENTITIES = [
  {
    name: 'Estruturas Metálicas',
    description:
      'Projeto, fabricação e montagem de estruturas metálicas para obras industriais, comerciais e residenciais.',
  },
  {
    name: 'Galpões Industriais',
    description:
      'Galpões metálicos pré-fabricados com vãos livres amplos para indústria e logística.',
  },
  {
    name: 'Coberturas Metálicas',
    description:
      'Coberturas metálicas e termoacústicas para indústrias, comércios, quadras e residências.',
  },
  {
    name: 'Mezaninos Metálicos',
    description:
      'Mezaninos estruturais metálicos para ampliar área útil de estoques, lojas e escritórios.',
  },
  {
    name: 'Escadas Industriais',
    description:
      'Escadas metálicas retas, caracol e tipo marinheiro para ambientes industriais.',
  },
  {
    name: 'Portões Industriais',
    description:
      'Portões metálicos de grande porte, preparados para automação e controle de acesso.',
  },
];
