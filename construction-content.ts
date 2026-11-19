export const CONSTRUCTION_BASE = "/construcoes";
export const COMMERCIAL_WHATSAPP = "https://wa.me/5541996646761?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Engeum%20e%20quero%20um%20or%C3%A7amento%20para%20obra%20comercial.";
export const CONSTRUCTION_TITLE = "Construções comerciais, industriais e rurais";
export const CONSTRUCTION_DESCRIPTION =
  "Barracões, galpões, lojas, escritórios, depósitos, alojamentos e estruturas rurais em Steel Frame e estruturas leves. Consulte o sistema adequado ao projeto.";

export const CONSTRUCTION_GROUPS = {
  galpoes: { name: "Barracões e galpões", media: "galpoes", alt: "Ilustração de galpão metálico com áreas de acesso para carga" },
  comercial: { name: "Lojas e escritórios", media: "lojas", alt: "Ilustração de fachada comercial com entrada e exposição de loja" },
  rural: { name: "Estruturas rurais", media: "rural", alt: "Ilustração de estrutura metálica aberta em propriedade rural" },
  modular: { name: "Alojamentos e módulos", media: "modular", alt: "Ilustração de edificações modulares organizadas em conjunto" },
} as const;
export type GroupKey = keyof typeof CONSTRUCTION_GROUPS;
export interface ConstructionEntry {
  group: GroupKey;
  slug: string;
  title: string;
  description: string;
  scope: string;
  limit: string;
  checklist: string;
  q: string;
  a: string;
}

export const CONSTRUCTIONS: readonly ConstructionEntry[] = [
  {
    "group": "galpoes",
    "slug": "barracao-comercial",
    "title": "Construção de barracão comercial",
    "description": "Planeje um barracão para receber mercadorias, atender clientes ou apoiar a operação de uma empresa. Comece pelo fluxo cotidiano, não apenas pela área total.",
    "scope": "A proposta pode distinguir estrutura, cobertura, fechamentos e acabamentos. Mostre por onde entram pessoas e veículos, onde a carga fica temporariamente e se haverá áreas abertas ao público.",
    "limit": "Área e pé-direito não determinam, sozinhos, o sistema construtivo. Fundações, instalações e condições de funcionamento precisam ser avaliadas conforme o terreno e a atividade.",
    "checklist": "Endereço, croqui com entradas e descrição do maior veículo que usará o portão.",
    "q": "Posso combinar área de atendimento e estoque?",
    "a": "Sim, essa é uma possibilidade de projeto. Informe horários, volumes e acessos para avaliar como separar fluxos e quais ambientes devem entrar no escopo."
  },
  {
    "group": "galpoes",
    "slug": "barracoes-steel-frame",
    "title": "Construção de barracões em Steel Frame",
    "description": "Avalie onde uma solução em Steel Frame faz sentido para um barracão, principalmente nos fechamentos e ambientes de apoio. Leve a finalidade, os vãos desejados e a necessidade de expansão.",
    "scope": "Elementos leves podem compor a solução conforme projeto. Diga se você precisa de um ambiente fechado, espaço parcialmente aberto, áreas internas separadas ou integração a uma estrutura existente.",
    "limit": "Vãos grandes, cargas suspensas e atividades com impacto exigem análise profissional. O nome do sistema não substitui a especificação da estrutura nem confirma que a solução atende ao uso.",
    "checklist": "Área aproximada, altura livre, posição das aberturas e lista de equipamentos fixos ou suspensos.",
    "q": "Steel Frame precisa ser usado em todo o barracão?",
    "a": "Não necessariamente. Uma solução pode combinar sistemas conforme os vãos, apoios, cargas e fechamentos. O projeto define onde cada um entra."
  },
  {
    "group": "galpoes",
    "slug": "galpoes-comerciais",
    "title": "Construção de galpões comerciais",
    "description": "Organize um galpão para operação comercial com recebimento, armazenamento e expedição. Mapeie as manobras antes de decidir a posição das portas e dos espaços internos.",
    "scope": "A comparação de propostas deve identificar vãos livres, acessos, cobertura, fechamentos e a interface com o piso. Informe corredores, paletes, empilhadeiras ou docas que possam fazer parte da operação.",
    "limit": "A estrutura metálica não define, por si, a capacidade do piso nem a viabilidade de instalar docas. Terreno, operação e compatibilidade dos projetos precisam ser verificados.",
    "checklist": "Medidas aproximadas do lote, fluxo de entrada e saída, estoque e necessidade de doca ou portões amplos.",
    "q": "É possível planejar uma ampliação futura?",
    "a": "Apresente a expansão pretendida no início. O projeto deve esclarecer os pontos de ligação e o que precisaria ser reavaliado caso a ampliação ocorra."
  },
  {
    "group": "comercial",
    "slug": "estruturas-comerciais",
    "title": "Construção de estruturas comerciais",
    "description": "Planeje a parte estrutural de um novo espaço comercial ou de uma ampliação. Descreva a atividade, a ocupação prevista e a relação da estrutura com o imóvel existente.",
    "scope": "Separe estrutura, apoios, cobertura e interfaces de fachada. Quando houver adaptação, informe o que deve permanecer em funcionamento e quais elementos não podem ser removidos sem avaliação.",
    "limit": "A estrutura nova não deve ser apoiada na edificação existente sem análise. O uso pretendido e os requisitos aplicáveis precisam orientar a definição das responsabilidades.",
    "checklist": "Fotos gerais, localização de apoios conhecidos e desenho disponível do imóvel.",
    "q": "Dá para ampliar mantendo o comércio aberto?",
    "a": "Depende da obra e dos acessos. Informe a rotina do comércio para avaliar a possibilidade de fases, isolamento e eventuais interrupções."
  },
  {
    "group": "comercial",
    "slug": "lojas",
    "title": "Construção de lojas",
    "description": "Uma loja combina exposição, circulação, estoque e acesso. Descreva como os clientes chegam, como a mercadoria entra e que experiência você quer oferecer no ponto de venda.",
    "scope": "Liste face de vitrine, entrada, área de atendimento, provadores ou depósito, se aplicável. Fechamento, fachada, forro, instalações e acabamentos devem constar de forma separada no escopo.",
    "limit": "A posição da vitrine e do letreiro não basta para definir a estrutura. Confirme se há diretrizes do imóvel, condomínio ou empreendimento e quem responde pela compatibilização.",
    "checklist": "Largura da frente, atividade da loja, layout de referência e locais de carga e descarga.",
    "q": "Posso contratar apenas a estrutura e resolver o interior depois?",
    "a": "Leve essa intenção à consulta. A proposta precisa deixar claros os limites da entrega e as interfaces com instalações e acabamentos posteriores."
  },
  {
    "group": "comercial",
    "slug": "salas-comerciais",
    "title": "Construção de salas comerciais",
    "description": "Ao planejar salas para locação ou uso próprio, pense em como dividir e operar o conjunto. Entradas, banheiros e instalações podem ter requisitos diferentes para unidades independentes.",
    "scope": "Leve a quantidade de salas, o uso pretendido, o acesso comum e a necessidade de alterar divisórias no futuro. Compare se a proposta contempla apenas estrutura ou também fechamentos e interfaces.",
    "limit": "A mudança posterior de atividade pode exigir nova avaliação. Não presuma que salas com a mesma área atendam a qualquer tipo de operação.",
    "checklist": "Número de salas, áreas aproximadas, entradas e necessidades de isolamento ou privacidade.",
    "q": "Posso unir duas salas no futuro?",
    "a": "É possível estudar essa intenção desde o início. O projeto deve indicar quais divisões podem ser alteradas e quais elementos precisam permanecer."
  },
  {
    "group": "comercial",
    "slug": "escritorios",
    "title": "Construção de escritórios",
    "description": "Planeje um escritório para a rotina da equipe, com espaços de trabalho, reuniões e apoio. Informe onde se deseja luz natural, privacidade ou maior flexibilidade de layout.",
    "scope": "A estrutura e os fechamentos precisam conversar com instalações, circulação e acabamento. Quando a obra é anexa a um galpão, indique a relação com ruído, poeira e acessos do setor produtivo.",
    "limit": "Conforto térmico e acústico depende do conjunto especificado, não apenas do material da estrutura. Peça que a proposta explicite o que será estudado e entregue.",
    "checklist": "Número de pessoas, tipos de ambiente, layout de referência e relação com as áreas operacionais.",
    "q": "Posso construir o escritório junto de uma área de produção?",
    "a": "Pode ser estudado. Apresente a rotina da produção e o acesso necessário para discutir separação física, instalações e conforto sem assumir uma solução pronta."
  },
  {
    "group": "galpoes",
    "slug": "depositos",
    "title": "Construção de depósitos",
    "description": "Descreva o que será armazenado, como o material será movimentado e com que frequência o depósito será aberto. Isso ajuda a diferenciar necessidades de estoque seco, apoio de loja ou operação maior.",
    "scope": "Organize áreas de recebimento, corredores, altura de armazenamento, pontos de suporte e possibilidade de ventilação. Se houver estantes, informe o tipo e se há projeto delas.",
    "limit": "A compatibilidade entre piso, estrutura e estantes requer avaliação. Produtos com condições especiais de guarda precisam ser informados antes de definir os materiais e o fechamento.",
    "checklist": "Tipo de material, quantidade aproximada, altura de estocagem e equipamento de movimentação.",
    "q": "A estrutura do depósito já inclui estantes?",
    "a": "Não presuma que sim. Peça que a proposta identifique estantes, piso e infraestrutura, inclusive quando algum desses itens for de outro fornecedor."
  },
  {
    "group": "galpoes",
    "slug": "oficinas",
    "title": "Construção de oficinas",
    "description": "Uma oficina precisa de áreas de trabalho e corredores compatíveis com o equipamento e com os veículos atendidos. Planeje a movimentação antes de fixar as aberturas.",
    "scope": "Informe boxes, altura útil, área de ferramentas, itens suspensos e locais destinados a funcionamento ou manutenção de equipamentos. Combine quais instalações deverão ser coordenadas com outros projetos.",
    "limit": "Piso, apoios para equipamento, ventilação e eventuais sistemas de exaustão não podem ser presumidos no escopo da estrutura. Informe a atividade real para a equipe avaliar o caso.",
    "checklist": "Equipamentos, veículos atendidos, altura necessária e áreas para receber insumos.",
    "q": "Posso prever pontos para equipamentos ainda não comprados?",
    "a": "Leve dados do equipamento pretendido e marque o que está indefinido. O projeto deve assinalar o que depende da definição final antes de executar apoios ou ligações."
  },
  {
    "group": "comercial",
    "slug": "saloes-comerciais",
    "title": "Construção de salões comerciais",
    "description": "Para um salão de uso comercial, comece pelo público e pela circulação que pretende acomodar. A organização muda se o espaço for para eventos, atendimento, exposição ou múltiplos usos.",
    "scope": "Informe ocupação estimada, localização das entradas, área de apoio e necessidade de piso livre. A proposta deve diferenciar a estrutura de itens como tratamento acústico, elétrica e acabamento.",
    "limit": "Capacidade, acessos e requisitos de funcionamento dependem da atividade e do projeto. A imagem ou o tamanho aproximado de um salão não define as condições para uso.",
    "checklist": "Atividade, público estimado, horários de uso e ambientes complementares.",
    "q": "Preciso definir um único uso para começar o orçamento?",
    "a": "Não, mas descreva os usos prováveis e quais são indispensáveis. Isso ajuda a equipe a identificar diferenças de escopo e pontos que exigem estudo."
  },
  {
    "group": "rural",
    "slug": "estruturas-rurais",
    "title": "Construção de estruturas rurais",
    "description": "Planeje uma estrutura para apoiar a rotina de uma propriedade, como abrigo ou área de trabalho. Explique a atividade, a exposição e como veículos e materiais chegam ao local.",
    "scope": "Compare o que a proposta inclui em estrutura, cobertura, fechamentos e eventual base. Destaque rotas agrícolas, períodos de maior movimento, distância de abastecimento e disponibilidade de área para montagem.",
    "limit": "Condições de acesso, manutenção, exposição e terreno variam. O acabamento e os materiais devem ser definidos para o uso e a propriedade, sem presumir um padrão para toda área rural.",
    "checklist": "Município, referência de acesso, finalidade, fotos de local seguro e dimensões desejadas.",
    "q": "É necessário enviar o endereço completo na primeira conversa?",
    "a": "Informe pelo menos município e referência de acesso. A localização exata pode ser combinada para avaliar atendimento, logística e eventual visita."
  },
  {
    "group": "rural",
    "slug": "anexos-rurais",
    "title": "Construção de anexos rurais",
    "description": "Um anexo amplia ou complementa uma estrutura da propriedade. Descreva a relação com o espaço existente e o que precisa continuar em uso.",
    "scope": "Informe de onde virão água, energia e acesso, se aplicável, e como a obra se aproxima da cobertura existente. O levantamento orienta a discussão sobre uma estrutura independente ou integrada.",
    "limit": "Não se deve assumir que paredes, fundações ou telhados existentes aceitam novos apoios. A proposta precisa esclarecer o que está incluído e como a edificação será avaliada.",
    "checklist": "Fotos do encontro previsto, dimensões disponíveis, desníveis e uso atual do imóvel.",
    "q": "O anexo pode ficar separado do prédio existente?",
    "a": "Pode ser estudado. Usos, circulação, terreno e interferências ajudam a decidir se será independente ou conectado."
  },
  {
    "group": "modular",
    "slug": "alojamentos",
    "title": "Construção de alojamentos",
    "description": "Planeje alojamentos a partir de quem vai utilizar o espaço, por quanto tempo e em que rotina. Diferencie dormitórios, sanitários e áreas de convivência ou apoio.",
    "scope": "Considere circulação, ventilação, privacidade, instalações e como áreas de serviço serão conectadas. Confirme quais ambientes e acabamentos serão incluídos na proposta.",
    "limit": "A capacidade e os requisitos aplicáveis dependem do uso e da ocupação. Estrutura, instalações e condições do terreno precisam ser compatibilizadas.",
    "checklist": "Quantidade prevista de usuários, duração do uso, ambientes e dados do local de instalação.",
    "q": "Um alojamento pode ser construído por módulos?",
    "a": "Essa alternativa pode ser estudada. Leve a quantidade de unidades e os pontos de conexão pretendidos para avaliar logística, implantação e escopo."
  },
  {
    "group": "modular",
    "slug": "edificacoes-modulares",
    "title": "Construção de edificações modulares",
    "description": "Uma edificação modular parte de unidades que podem compor um conjunto. Descreva o uso, a quantidade inicial e se haverá mudança de posição ou ampliação no futuro.",
    "scope": "Envie a planta ou esquema pretendido, a área de montagem e a relação com redes, base e acessos. Compare se a proposta cobre fornecimento, transporte, montagem e interligações.",
    "limit": "Modular não significa dispensar projeto, base ou análise do local. Dimensões, transporte, equipamentos de movimentação e desempenho são definidos para cada implantação.",
    "checklist": "Quantidade de unidades, dimensões do espaço, acesso de caminhões e previsão de expansão.",
    "q": "É possível acrescentar novos módulos depois?",
    "a": "A expansão deve ser discutida no projeto, com os pontos de conexão e o espaço para circulação e montagem. Não presuma encaixe com qualquer módulo."
  },
  {
    "group": "modular",
    "slug": "estruturas-metalicas-leves",
    "title": "Construção de estruturas metálicas leves",
    "description": "Estruturas leves podem apoiar diferentes tipos de fechamento ou ampliação. Explique a função da peça, as dimensões desejadas e o que será instalado sobre ela.",
    "scope": "Informe apoios, elementos que precisam ser preservados e qualquer carga ou interface prevista. Peça especificação de qual sistema será usado para estrutura e quais revestimentos serão considerados.",
    "limit": "O termo leve não confirma capacidade nem dispensa verificação dos apoios. Materiais, perfis, ligações e proteção dependem do projeto e da exposição.",
    "checklist": "Planta disponível, fotografias do local, uso pretendido e eventual equipamento acoplado.",
    "q": "Qual a diferença entre estrutura leve e o fechamento?",
    "a": "A estrutura e seus apoios têm função distinta das placas ou revestimentos de fechamento. A proposta deve explicar como eles trabalham juntos sem confundir as etapas."
  },
  {
    "group": "comercial",
    "slug": "espacos-comerciais-personalizados",
    "title": "Construção de espaços comerciais personalizados",
    "description": "Personalizar um espaço comercial é adaptar estrutura e layout à atividade e à circulação, em vez de copiar uma planta genérica. Comece pelas etapas do atendimento e pela rotina de quem trabalha ali.",
    "scope": "Leve referências de fachada e ambientes, mas também descreva fila, estoque, entregas e horários. Esclareça quais partes precisam mudar com o tempo e o que deve permanecer visível ou reservado.",
    "limit": "Um acabamento visual não define o escopo da obra. A proposta precisa delimitar estrutura, fechamentos, instalações, itens de terceiros e condicionantes do imóvel.",
    "checklist": "Referências visuais, atividade, fluxo de clientes e prioridades em ordem de importância.",
    "q": "Dá para separar a execução em etapas?",
    "a": "Pode ser avaliado conforme funcionamento, acessos e interfaces. Informe o que precisa ficar disponível em cada etapa para a proposta indicar o que é viável."
  }
];

export const constructionPath = (slug: string) => `${CONSTRUCTION_BASE}/${slug}`;
const mediaExtensions: Record<string, string> = {
  "galpoes": "png",
  "barracoes": "png",
  "rural": "png",
  "modular": "png",
  "estruturas-leves": "png",
  "personalizados": "png",
  "lojas": "webp",
  "escritorios": "webp",
  "saloes": "webp",
  "oficinas": "webp"
};
export const constructionImage = (key: string) => `/construcoes-media/${key}.${mediaExtensions[key]}`;
export const constructionTitle = (title: string) => `${title} | Alumimec`;

const individualMedia: Partial<Record<string, {media: string; alt: string}>> = {
  "barracao-comercial": {media: "barracoes", alt: "Ilustração de barracão comercial, estrutura em montagem e acesso externo"},
  "barracoes-steel-frame": {media: "barracoes", alt: "Ilustração de barracão com perfis leves expostos em montagem"},
  "estruturas-metalicas-leves": {media: "estruturas-leves", alt: "Ilustração conceitual de detalhe de perfis metálicos leves"},
  "espacos-comerciais-personalizados": {media: "personalizados", alt: "Ilustração de espaço comercial com diferentes áreas de atendimento"},
  escritorios: {media: "escritorios", alt: "Ilustração de escritório integrado a uma edificação comercial"},
  "salas-comerciais": {media: "escritorios", alt: "Ilustração de ambientes internos em edificação comercial"},
  oficinas: {media: "oficinas", alt: "Ilustração de oficina com boxes e corredores de trabalho"},
  "saloes-comerciais": {media: "saloes", alt: "Ilustração de salão comercial com espaço interno aberto"},
};

export function constructionMedia(entry: ConstructionEntry) {
  return individualMedia[entry.slug] ?? CONSTRUCTION_GROUPS[entry.group];
}
