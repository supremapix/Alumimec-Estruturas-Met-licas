export interface ApplicationGuide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  services: number[];
  sections: [string, string][];
  checklist: string[];
  faq: [string, string][];
}
export const APPLICATIONS: ApplicationGuide[] = [
  {
    slug: "ampliacao-de-galpoes",
    title: "Ampliação de galpões industriais",
    description:
      "Planeje a ampliação de um galpão: operação existente, área nova, acessos e interfaces entre estruturas. Consulte o escopo com a Alumimec.",
    intro:
      "Ampliar um galpão começa por entender o que precisa crescer: produção, armazenamento, circulação ou área de apoio. A estrutura metálica é parte desse estudo. O catálogo Alumimec inclui galpões, coberturas, mezaninos e acessos; a combinação depende do projeto.",
    services: [1, 2, 4, 6],
    sections: [
      [
        "Descreva o limite da ampliação",
        "Separe em um croqui a área existente e a área pretendida. Indique equipamentos, corredores, portas e setores que permanecerão em uso. Informe se a intenção é ampliar no terreno ou estudar o aproveitamento da altura. São alternativas diferentes, que não podem ser comparadas apenas por metragem.",
      ],
      [
        "Compatibilize o novo com o existente",
        "Reúna os projetos disponíveis e fotos dos apoios, fechamentos e encontros da cobertura. A estrutura atual não deve receber peças ou cargas adicionais por suposição. A avaliação profissional define o que pode ser mantido, adaptado ou precisa de solução independente. Projetos inexistentes podem exigir levantamento.",
      ],
      [
        "Organize as interfaces da contratação",
        "Peça que a proposta separe estrutura, cobertura, acessos, preparação dos apoios e responsabilidades complementares. Discuta áreas para descarga, armazenamento e montagem, além da operação que continuará no imóvel. Não há promessa de executar sem interrupção: a sequência precisa ser combinada para o caso concreto.",
      ],
    ],
    checklist: [
      "Uso atual e aumento de capacidade pretendido",
      "Croqui da área existente e da expansão",
      "Projetos disponíveis e fotos dos apoios",
      "Rotas de circulação e atividades que permanecerão",
    ],
    faq: [
      [
        "Mezanino e ampliação lateral são equivalentes?",
        "Não. Um mezanino cria outro nível; uma ampliação lateral incorpora área no terreno. Uso, acessos, apoios e avaliação do imóvel definem as possibilidades.",
      ],
      [
        "A estrutura existente pode ser reaproveitada?",
        "Somente após avaliação. Fotos e medidas iniciais não comprovam capacidade de receber novos elementos.",
      ],
      [
        "A Alumimec atende na minha cidade?",
        "A empresa atende por deslocamento ao local da obra. Envie endereço e escopo para avaliar projeto, acesso e agendamento.",
      ],
    ],
  },
  {
    slug: "cobertura-de-estacionamentos",
    title: "Cobertura metálica para estacionamentos",
    description:
      "Prepare a consulta de cobertura para estacionamento: vagas, manobras, circulação de pedestres, encontros e escoamento da água.",
    intro:
      "Cobrir um estacionamento é uma aplicação a avaliar dentro do serviço de coberturas metálicas. O planejamento precisa conciliar proteção da área e uso das vagas, sem presumir que uma foto de cobertura seja um modelo pronto para qualquer imóvel.",
    services: [2, 6],
    sections: [
      [
        "Desenhe o uso das vagas e das passagens",
        "Mostre a posição das vagas, portões, portas e caminhos de pedestres. Informe quais veículos precisam circular e onde ocorrem manobras. Apoios e altura livre são decisões de projeto; não indique posições definitivas apenas para aumentar a quantidade de vagas.",
      ],
      [
        "Considere o conjunto da cobertura",
        "Inclua na consulta telhas, arremates, calhas e encontros com construções existentes. Explique se iluminação, ventilação, calor ou ruído são preocupações. As opções termoacústicas citadas no catálogo devem ser discutidas no contexto do conjunto, sem promessa de desempenho fixo.",
      ],
      [
        "Planeje a instalação em uma área utilizada",
        "Informe se o estacionamento continuará funcionando e quais acessos são indispensáveis. Defina com os responsáveis as áreas de trabalho e de circulação durante a instalação. Retirada de elementos existentes e preparação dos apoios precisam ter escopo e responsáveis identificados na proposta.",
      ],
    ],
    checklist: [
      "Fotos gerais das vagas, portões e acessos",
      "Croqui de circulação de carros e pedestres",
      "Tipo de veículos e uso da área",
      "Pontos de encontro e cobertura existente",
    ],
    faq: [
      [
        "É possível definir a altura da cobertura pela foto?",
        "Não. O tipo de veículo, os percursos e o projeto precisam ser avaliados. A página não fornece dimensionamento.",
      ],
      [
        "A proposta inclui calhas e rufos?",
        "Esses itens devem ser confirmados e discriminados na proposta; não se presumem incluídos.",
      ],
      [
        "Posso pedir uma cobertura e um portão juntos?",
        "O catálogo inclui coberturas e portões industriais. Descreva os dois escopos para avaliar sua compatibilidade e contratação.",
      ],
    ],
  },
  {
    slug: "areas-de-carga-e-descarga",
    title: "Estruturas para áreas de carga e descarga",
    description:
      "Organize o estudo de cobertura e acessos em áreas de carga e descarga, com fluxos, veículos, operação e limites do escopo metálico.",
    intro:
      "Uma área de carga e descarga pode envolver cobertura, galpão e portão industrial, serviços presentes no catálogo Alumimec. O estudo deve partir do movimento de pessoas, materiais e veículos. Equipamentos de doca e instalações logísticas não são presumidos como serviços da empresa.",
    services: [1, 2, 6],
    sections: [
      [
        "Registre o percurso completo da operação",
        "Explique onde o veículo chega, aguarda, manobra e sai. Mostre como os materiais chegam ao armazenamento e por onde circulam as pessoas. Informe equipamentos utilizados e situações em que duas atividades acontecem ao mesmo tempo. Esse levantamento orienta a conversa sem determinar um layout técnico.",
      ],
      [
        "Separe cobertura, acesso e equipamentos",
        "Descreva a proteção desejada e o vão necessário para o acesso. Portão, cobertura, estrutura e sistemas complementares devem ter responsabilidades claras. Não se presume fornecimento de niveladoras, pavimentação, automação ou equipamentos só porque a área é destinada à logística.",
      ],
      [
        "Prepare as informações da instalação",
        "Envie imagens da fachada, do pátio, dos obstáculos e da construção existente. Informe horários e restrições operacionais que precisam ser discutidos, sem assumir uma janela garantida de montagem. Apoios, ligações e interferências dependem de avaliação profissional e do escopo aprovado.",
      ],
    ],
    checklist: [
      "Tipos de veículos e equipamentos em uso",
      "Percursos de materiais e de pedestres",
      "Fotos do pátio, fachada e portões",
      "Itens metálicos desejados e demais responsáveis",
    ],
    faq: [
      [
        "A Alumimec fornece todos os equipamentos de uma doca?",
        "Esse fornecimento não está confirmado no catálogo utilizado. Consulte a empresa sobre o escopo metálico e esclareça separadamente os equipamentos.",
      ],
      [
        "Posso manter a operação durante a montagem?",
        "Isso precisa ser discutido a partir das condições reais do imóvel e do planejamento da obra. Não há garantia prévia de operação ininterrupta.",
      ],
      [
        "A consulta já define o vão ou capacidade da estrutura?",
        "Não. A consulta reúne necessidades; dimensionamento e segurança exigem projeto e avaliação profissional.",
      ],
    ],
  },
  {
    slug: "aproveitamento-de-grandes-areas",
    title: "Aproveitamento de grandes áreas",
    description:
      "Compare cobertura, galpão, mezanino e ampliação residencial conforme o uso do espaço, os acessos e os limites técnicos do imóvel.",
    intro:
      "Aproveitar uma área não significa necessariamente ocupá-la por inteiro. Primeiro defina a atividade que precisa de espaço e o que deve continuar livre. O catálogo de estruturas metálicas permite discutir alternativas de cobertura, galpão, ambiente residencial ou novo nível, conforme avaliação.",
    services: [1, 2, 3, 4, 5],
    sections: [
      [
        "Transforme a área disponível em um programa de uso",
        "Liste as atividades pretendidas: circulação, armazenamento, trabalho ou apoio residencial. Identifique portas, janelas, instalações, acessos e espaços que devem permanecer disponíveis. Divida o estudo em necessidades imediatas e futuras, sem supor que todo terreno ou toda altura possam ser ocupados.",
      ],
      [
        "Compare soluções que resolvem necessidades diferentes",
        "Uma cobertura protege uma área; um galpão organiza um volume de uso; um mezanino cria um nível e exige acessos. Estruturas residenciais podem compor uma ampliação específica. Compare alternativas pelo uso atendido e pelo conjunto de intervenções, não apenas pela quantidade de metal ou área anunciada.",
      ],
      [
        "Inclua acesso, projeto e condições do imóvel",
        "O aproveitamento deve considerar entrada de pessoas e materiais, ligações com o existente e informações do terreno. Mezaninos podem exigir estudo de escadas e circulação. Consulte os responsáveis técnicos sobre dimensionamento e viabilidade; licenças e adequações do imóvel não se presumem incluídas no serviço.",
      ],
    ],
    checklist: [
      "Finalidade de cada área e espaços que devem ficar livres",
      "Fotos, croqui e medidas aproximadas",
      "Uso atual, uso futuro e acessos",
      "Projetos existentes e etapas desejadas",
    ],
    faq: [
      [
        "Um mezanino sempre é a melhor forma de ganhar área?",
        "Não. A escolha depende do uso, da altura disponível, dos apoios e dos acessos, avaliados no projeto.",
      ],
      [
        "Cobrir o terreno permite usar toda a área?",
        "Não é possível concluir isso genericamente. Condições do imóvel, uso pretendido e exigências aplicáveis precisam ser avaliados pelos responsáveis.",
      ],
      [
        "Como comparar propostas para soluções diferentes?",
        "Descreva a mesma necessidade e peça escopos discriminados, incluindo estrutura, cobertura, acessos e responsabilidades complementares.",
      ],
    ],
  },
];
export const applicationPath = (slug: string) => `/aplicacoes/${slug}`;
