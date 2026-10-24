import type { LocalGuide } from "./local-guides";
import territory from "./data/territories.json";
type Draft = {
  name: string;
  city: string;
  slug: string;
  topic: string;
  description: string;
  service: number;
  sections: [string, string][];
  faq: [string, string][];
};
const drafts: Draft[] = [
  {
    name: "Hauer",
    city: "Curitiba",
    slug: "hauer",
    topic: "Mezanino para área administrativa no Hauer",
    description:
      "Avalie um novo espaço administrativo em mezanino: separação de atividades, instalações, acesso e integração com o pavimento inferior.",
    service: 3,
    sections: [
      [
        "Descreva as atividades de cada pavimento",
        "Se a intenção é instalar uma área administrativa acima de outro ambiente, informe quantas funções precisam coexistir e como as pessoas circularão entre elas. Explique se haverá atendimento, trabalho individual ou arquivo. O objetivo é definir o uso antes de discutir o formato da estrutura.",
      ],
      [
        "Inclua as instalações no estudo",
        "Identifique iluminação, pontos elétricos, comunicação e ventilação existentes. Fechamentos e instalações devem ser compatibilizados com o mezanino; não se presume isolamento acústico ou conforto térmico apenas por escolher aço. Leve essas necessidades para os responsáveis pelos respectivos projetos.",
      ],
      [
        "Organize a proposta além do piso",
        "Confira se escada, guarda-corpos, piso, fechamentos e acabamento estão no mesmo escopo. Informe também o funcionamento do pavimento inferior durante a intervenção. A solução estrutural e os acessos dependem de projeto, sem capacidade ou dimensões presumidas.",
      ],
    ],
    faq: [
      [
        "O mezanino inclui divisórias de escritório?",
        "Somente se estiverem previstas na proposta. Descreva a organização desejada para compatibilizar estrutura, fechamentos e instalações.",
      ],
      [
        "Posso usar o mesmo projeto para escritório e arquivo?",
        "Os usos devem ser informados ao responsável técnico. Uma mudança de finalidade pode exigir revisão, inclusive dos equipamentos e materiais previstos.",
      ],
    ],
  },
  {
    name: "Portão",
    city: "Curitiba",
    slug: "portao",
    topic: "Estacionamento coberto no Portão: circulação compartilhada",
    description:
      "Planeje uma cobertura de estacionamento considerando vagas, passagem de pedestres, abertura de portas e conexão com o acesso do imóvel.",
    service: 1,
    sections: [
      [
        "Mapeie os percursos compartilhados",
        "Desenhe as posições de parada e o caminho de quem chega a pé. Indique portas, acesso à edificação e pontos onde veículos precisam manobrar. Essa informação ajuda a estudar a cobertura sem tratar toda área livre como espaço disponível para apoios.",
      ],
      [
        "Teste o uso pretendido no desenho",
        "Registre os veículos que utilizarão a área e se haverá parada simultânea ou alternada. Explique como funciona a entrada e a saída. A distribuição final precisa ser avaliada no projeto; não se fornece quantidade garantida de vagas pela metragem aproximada.",
      ],
      [
        "Integre cobertura e acesso",
        "Inclua portão, iluminação, drenagem e ligação com a entrada na conversa. Se a instalação ocorrer em imóvel compartilhado, identifique quem aprova a proposta. Combine escopo e sequência antes de reorganizar a área de uso cotidiano.",
      ],
    ],
    faq: [
      [
        "A cobertura determina o número de vagas?",
        "Não sozinha. Geometria, circulação, acessos e condições do imóvel precisam ser avaliados em conjunto.",
      ],
      [
        "Devo informar se pedestres passam pela garagem?",
        "Sim. Esse percurso deve aparecer no levantamento e no planejamento do espaço coberto.",
      ],
    ],
  },
  {
    name: "Águas Belas",
    city: "São José dos Pinhais",
    slug: "aguas-belas",
    topic: "Área de carga em Águas Belas: cobertura e operação",
    description:
      "Organize o estudo de cobertura para recebimento de materiais em Águas Belas, com percurso da carga, interfaces do galpão e espaço de descarga.",
    service: 1,
    sections: [
      [
        "Siga o material do veículo até o destino",
        "Explique como o material chega, onde é descarregado e por onde entra no imóvel. Informe se há equipamentos de movimentação e pontos de espera. Esse percurso deve orientar o estudo da área coberta, evitando limitar a consulta à dimensão da telha.",
      ],
      [
        "Mostre os encontros com a edificação",
        "Fotografe o acesso de carga e a cobertura existente, sem subir em estruturas. Indique portas, instalações e elementos que precisam permanecer acessíveis. A compatibilidade entre a nova cobertura e o galpão deve ser verificada tecnicamente.",
      ],
      [
        "Separe cobertura de adaptações operacionais",
        "Peça que a proposta identifique estrutura, fechamento e acabamento previstos. Alterações em piso, acesso e instalações devem ter responsabilidades esclarecidas. Informe se a atividade continuará durante a obra para discutir a organização, sem presumir que a operação ficará ininterrupta.",
      ],
    ],
    faq: [
      [
        "Uma cobertura elimina toda exposição à chuva?",
        "A proteção depende da configuração, dos fechamentos e do uso. Descreva o percurso completo para que os limites da solução sejam avaliados.",
      ],
      [
        "A Alumimec executou a obra mostrada neste bairro?",
        "A imagem é do catálogo original e ilustra o serviço; não está identificada como uma obra em Águas Belas.",
      ],
    ],
  },
  {
    name: "São Marcos",
    city: "São José dos Pinhais",
    slug: "sao-marcos",
    topic: "Escada industrial em São Marcos: acesso para manutenção",
    description:
      "Prepare o estudo de acesso metálico para manutenção, informando equipamento, frequência de uso e interfaces com a estrutura existente.",
    service: 4,
    sections: [
      [
        "Identifique o destino do acesso",
        "Explique a que equipamento ou nível a escada deve conduzir e o que será feito ao chegar. Informe se haverá transporte de ferramentas ou materiais e como ocorre a manutenção hoje. A finalidade é essencial para o responsável técnico estudar a solução apropriada.",
      ],
      [
        "Documente o ponto de chegada",
        "Envie fotos do espaço inferior, do destino e dos obstáculos aparentes. Registre instalações e portas que não podem perder acesso. Escada, chegada e proteção devem ser consideradas em conjunto, sem transformar medidas aproximadas em dimensionamento executivo.",
      ],
      [
        "Defina interfaces e responsabilidades",
        "Se outro fornecedor cuida do equipamento, alinhe as informações necessárias entre as equipes. Verifique quais elementos de apoio, fixação, acabamento e proteção fazem parte do fornecimento. O atendimento ocorre por deslocamento e precisa de agendamento compatível com a avaliação do local.",
      ],
    ],
    faq: [
      [
        "Uma escada de manutenção serve como acesso de uso frequente?",
        "A finalidade e as condições de uso precisam ser avaliadas pelo responsável técnico; não se presume equivalência entre soluções.",
      ],
      [
        "Posso escolher o modelo só pela altura?",
        "Não. Destino, circulação, espaço, interfaces e requisitos do projeto também precisam ser considerados.",
      ],
    ],
  },
  {
    name: "Weissópolis",
    city: "Pinhais",
    slug: "weissopolis",
    topic: "Portão em Weissópolis: abertura e exposição comercial",
    description:
      "Organize a consulta de portão metálico para um espaço comercial, conciliando abertura, circulação, fechamento e funcionamento do imóvel.",
    service: 5,
    sections: [
      [
        "Explique como o acesso funciona durante o dia",
        "Informe se o portão permanece aberto, se há entradas frequentes ou se ele é usado principalmente para fechamento. Descreva a passagem de pessoas e materiais. O modo de uso ajuda a discutir o conjunto, sem presumir um modelo adequado para todo comércio.",
      ],
      [
        "Registre o espaço que a abertura ocupa",
        "Fotografe laterais, parte superior do vão e elementos próximos. Indique vitrines, portas e instalações que devem permanecer acessíveis. A solução precisa ser compatibilizada com o imóvel e não pode ser escolhida apenas pela aparência da fachada.",
      ],
      [
        "Especifique acabamento e componentes",
        "Apresente a identidade visual desejada e peça a descrição dos materiais e acabamento. Caso exista interesse em automação ou integração com outro fechamento, esclareça os itens incluídos. Não se presume que instalações elétricas ou equipamentos adicionais acompanhem o portão.",
      ],
    ],
    faq: [
      [
        "Posso pedir um portão com acabamento alinhado à fachada?",
        "Sim, apresente referências e o uso previsto para avaliar materiais e acabamento no orçamento.",
      ],
      [
        "A troca pode ocorrer com o imóvel funcionando?",
        "Informe essa necessidade. A possibilidade e a sequência dependem da avaliação e do planejamento da intervenção.",
      ],
    ],
  },
  {
    name: "Vargem Grande",
    city: "Pinhais",
    slug: "vargem-grande",
    topic: "Grande área coberta em Vargem Grande: organize usos",
    description:
      "Planeje um espaço coberto para mais de uma atividade, separando circulação, trabalho e armazenamento antes de definir a estrutura metálica.",
    service: 0,
    sections: [
      [
        "Liste as atividades que compartilharão a área",
        "Para estudar um espaço amplo, identifique o que ocorre ao mesmo tempo e o que pode alternar horários. Desenhe as zonas de trabalho, guarda de materiais e circulação. Essa organização permite discutir a solução sem atribuir uma vocação industrial ao bairro.",
      ],
      [
        "Preserve as conexões importantes",
        "Marque entradas, saídas e ligações com construções existentes. Informe quais equipamentos precisam permanecer no local e onde há instalações aparentes. A posição dos apoios e a configuração da cobertura dependem de avaliação técnica do conjunto.",
      ],
      [
        "Preveja como o espaço poderá mudar",
        "Descreva mudanças de uso que já estão no planejamento, sem assumir que uma estrutura servirá a qualquer expansão. Peça que os limites e interfaces da proposta fiquem claros. A Alumimec se desloca até a obra, com logística e agendamento combinados para o projeto.",
      ],
    ],
    faq: [
      [
        "Posso planejar uma área para usos alternados?",
        "Sim, informe cada uso e como ocorrerá a alternância para que o projeto considere as necessidades relevantes.",
      ],
      [
        "Uma grande cobertura precisa fechar todas as laterais?",
        "A configuração deve ser estudada conforme finalidade e condições do imóvel; não há uma resposta única para todos os projetos.",
      ],
    ],
  },
  {
    name: "Maracanã",
    city: "Colombo",
    slug: "maracana",
    topic: "Mezanino no Maracanã: organize separação de estoque",
    description:
      "Prepare uma consulta para área de separação e organização de estoque, distinguindo armazenagem, circulação e movimentação entre pavimentos.",
    service: 3,
    sections: [
      [
        "Diferencie guardar, separar e movimentar",
        "Explique o que ficará no nível elevado e o que continuará no piso inferior. Identifique se a atividade é armazenamento, separação de pedidos ou apoio administrativo. São funções diferentes e devem ser apresentadas com os equipamentos e materiais previstos.",
      ],
      [
        "Descreva como os itens chegarão ao nível elevado",
        "Informe o percurso atual e os meios de movimentação desejados, sem improvisar transporte pela escada. Os acessos e interfaces com equipamentos devem ser estudados profissionalmente. A fotografia do catálogo não informa capacidade de carga para o seu estoque.",
      ],
      [
        "Inclua a organização futura no escopo",
        "Compartilhe a disposição pretendida de prateleiras e estações, se já existir. Avise sobre possíveis alterações antes da definição do projeto. Estrutura, piso, proteção e acesso precisam ser coordenados, com responsabilidades claras entre fornecedores.",
      ],
    ],
    faq: [
      [
        "O mezanino suporta qualquer tipo de estoque?",
        "Não. Materiais, equipamentos, distribuição e uso precisam ser informados para avaliação e dimensionamento profissional.",
      ],
      [
        "O piso superior pode mudar de função depois?",
        "A mudança deve ser verificada tecnicamente; o uso previsto no projeto não deve ser alterado por suposição.",
      ],
    ],
  },
  {
    name: "Roça Grande",
    city: "Colombo",
    slug: "roca-grande",
    topic: "Galpão na Roça Grande: organize o primeiro orçamento",
    description:
      "Prepare a contratação de um galpão novo na Roça Grande, separando programa de uso, documentação, estrutura e interfaces de outros serviços.",
    service: 0,
    sections: [
      [
        "Comece pelo programa de uso",
        "Descreva o que o galpão abrigará e quais atividades precisam acontecer dentro e fora dele. Liste equipamentos, acesso de veículos e espaços de apoio desejados. Um programa de uso claro ajuda a comparar alternativas sem escolher uma solução apenas por área aproximada.",
      ],
      [
        "Reúna o que existe sobre o imóvel",
        "Envie endereço, fotos, levantamentos e projetos já disponíveis. Informe se há construções ou instalações no terreno que precisam ser mantidas. Condições do solo, apoios e exigências aplicáveis devem ser avaliadas por profissionais; o bairro não determina essas características.",
      ],
      [
        "Compare o mesmo conjunto de entregas",
        "Confira quem será responsável por projeto, preparação do local, estrutura, cobertura, fechamentos e instalações. Peça que exclusões também estejam descritas. A proposta precisa permitir identificar interfaces, sem presumir que todo serviço necessário ao galpão está incluído no fornecimento metálico.",
      ],
    ],
    faq: [
      [
        "Uma metragem aproximada basta para contratar?",
        "Ela ajuda na conversa inicial, mas finalidade, levantamento, projeto e escopo precisam ser definidos antes da execução.",
      ],
      [
        "A proposta inclui fundações e instalações?",
        "A inclusão deve ser confirmada expressamente. Esses itens não devem ser presumidos a partir do nome galpão metálico.",
      ],
    ],
  },
  {
    name: "Capela Velha",
    city: "Araucária",
    slug: "capela-velha",
    topic: "Estacionamento na Capela Velha: cobertura por etapas",
    description:
      "Estude a cobertura de um estacionamento com implantação por fases, considerando setores, circulação e uso da área durante o planejamento.",
    service: 1,
    sections: [
      [
        "Divida o estudo em setores de uso",
        "Marque no desenho as áreas que precisam de cobertura primeiro e os acessos que conectam cada setor. Explique se o estacionamento atende funcionários, clientes ou veículos de trabalho. Essa informação orienta a avaliação das etapas sem prometer continuidade de uso durante a montagem.",
      ],
      [
        "Planeje as interfaces entre as fases",
        "Informe desde o começo a intenção de ampliar a cobertura. Ligações, apoios e escoamento precisam ser considerados no projeto. Uma primeira etapa não garante que qualquer extensão posterior será possível sem revisão.",
      ],
      [
        "Alinhe operação e montagem",
        "Descreva horários, áreas que podem ser liberadas e restrições conhecidas pelo contratante. Combine responsabilidades pela preparação e organização do local. A sequência e o prazo serão definidos conforme a solução e as condições avaliadas, não por uma regra do bairro.",
      ],
    ],
    faq: [
      [
        "Preciso decidir todas as etapas agora?",
        "Informe ao menos a intenção de expansão, para que as interfaces e limitações sejam discutidas antes de contratar a primeira fase.",
      ],
      [
        "É garantido manter todas as vagas durante a obra?",
        "Não. A possibilidade de uso parcial depende do planejamento da intervenção e das condições do local.",
      ],
    ],
  },
  {
    name: "Campina da Barra",
    city: "Araucária",
    slug: "campina-da-barra",
    topic: "Área de serviço na Campina da Barra: cobertura integrada",
    description:
      "Planeje uma estrutura metálica para área de serviço, considerando equipamentos, circulação, instalações e encontro com a residência.",
    service: 2,
    sections: [
      [
        "Desenhe a rotina da área de serviço",
        "Indique onde ficam equipamentos, pontos de trabalho e passagem para outros ambientes. Explique se pretende apenas cobrir a área ou ampliar seu uso. Essa definição evita que a nova estrutura reduza acessos necessários à rotina da casa.",
      ],
      [
        "Observe instalações e aberturas existentes",
        "Fotografe janelas, portas, tubulações e a cobertura atual. Informe quais elementos precisam permanecer acessíveis. Ventilação, iluminação e encontros entre construções devem ser avaliados no projeto; não há promessa de desempenho baseada somente no material metálico.",
      ],
      [
        "Delimite as adaptações necessárias",
        "Separe o fornecimento da estrutura de eventuais mudanças em equipamentos, instalações e piso. Peça uma proposta que explicite materiais, acabamento e interfaces. A equipe atende por deslocamento à obra, mediante avaliação e combinação do atendimento.",
      ],
    ],
    faq: [
      [
        "Cobrir a área dispensa avaliar ventilação?",
        "Não. A configuração e o uso do ambiente precisam ser considerados junto com aberturas e instalações.",
      ],
      [
        "A estrutura nova pode ser apoiada na casa?",
        "A possibilidade depende de avaliação técnica da construção existente e do projeto da ampliação.",
      ],
    ],
  },
  {
    name: "Nações",
    city: "Fazenda Rio Grande",
    slug: "nacoes",
    topic: "Estacionamento nas Nações: entrada e saída independentes",
    description:
      "Organize o estudo de cobertura quando o imóvel tem dois acessos, distinguindo circulação, manobra, vagas e ligação com a edificação.",
    service: 1,
    sections: [
      [
        "Represente os dois acessos no mesmo desenho",
        "Se o imóvel dispõe de mais de uma entrada, informe como cada uma é utilizada e se os sentidos mudam ao longo do dia. Desenhe a circulação desejada antes de definir a área coberta. O estudo não pressupõe que todos os imóveis do bairro tenham essa configuração.",
      ],
      [
        "Inclua o acesso à edificação",
        "Marque a passagem de pedestres, portas e pontos de chegada ao prédio. Explique se há veículos com dimensões diferentes ou paradas temporárias. Essas informações ajudam a discutir a disposição da cobertura sem prometer ganho automático de vagas.",
      ],
      [
        "Revise as interfaces com portões e drenagem",
        "Mostre o movimento dos portões e a configuração das coberturas próximas. A solução deve considerar encontros, apoios e escoamento sob avaliação profissional. Defina o que entra no orçamento e quais adequações dependem de outros serviços.",
      ],
    ],
    faq: [
      [
        "Dois acessos permitem dispensar área de manobra?",
        "Não é possível concluir sem estudar a geometria e o uso. Informe os veículos e percursos previstos.",
      ],
      [
        "A cobertura pode ser estudada junto com novos portões?",
        "Sim. Informe os dois objetivos para que as interfaces e os itens de fornecimento sejam avaliados em conjunto.",
      ],
    ],
  },
  {
    name: "Gralha Azul",
    city: "Fazenda Rio Grande",
    slug: "gralha-azul",
    topic: "Passagem coberta na Gralha Azul: conecte ambientes",
    description:
      "Prepare uma consulta de cobertura para passagem entre ambientes, com atenção a portas, percurso de pessoas e ligação com coberturas existentes.",
    service: 1,
    sections: [
      [
        "Identifique os pontos que precisam ser conectados",
        "Explique de onde as pessoas saem e aonde precisam chegar. Desenhe portas, mudanças de direção e trechos compartilhados com veículos. O objetivo do estudo é proteger o percurso sem reduzir a clareza e o espaço de circulação.",
      ],
      [
        "Mostre as diferentes alturas e encontros",
        "Envie fotos das fachadas e coberturas envolvidas, além de medidas aproximadas. Não execute adaptações provisórias para unir estruturas. Os encontros e apoios precisam ser avaliados conforme a configuração real do imóvel.",
      ],
      [
        "Esclareça o que permanecerá aberto",
        "Informe a necessidade de ventilação, iluminação e acesso a equipamentos próximos. Fechamentos laterais, quando desejados, devem ser discutidos como parte do projeto. A configuração final não é definida apenas pela intenção de criar uma passagem coberta.",
      ],
    ],
    faq: [
      [
        "A passagem pode ligar duas edificações existentes?",
        "A possibilidade depende de avaliação das construções e do projeto; fotografias ajudam a explicar a intenção, mas não comprovam compatibilidade.",
      ],
      [
        "Uma cobertura exige fechamento lateral?",
        "Não necessariamente. A decisão deve considerar uso, proteção desejada e condições do local.",
      ],
    ],
  },
  {
    name: "Jardim dos Estados",
    city: "Piraquara",
    slug: "jardim-dos-estados",
    topic: "Equipamentos no Jardim dos Estados: planeje o abrigo",
    description:
      "Organize o estudo de cobertura para equipamentos com acesso de operação, manutenção e interfaces com instalações existentes.",
    service: 1,
    sections: [
      [
        "Explique o que precisa ser protegido",
        "Informe quais equipamentos ocuparão a área e como são utilizados. Compartilhe os requisitos disponíveis do fabricante com o responsável pelo projeto. Não presuma que uma cobertura genérica seja compatível com ventilação, operação ou manutenção de qualquer equipamento.",
      ],
      [
        "Reserve os percursos de manutenção",
        "Identifique os lados que precisam permanecer acessíveis e como ocorrerá a retirada ou troca de componentes. Mostre portas, passagens e instalações próximas. A avaliação deve considerar o ciclo de uso, e não apenas o espaço ocupado quando o equipamento está parado.",
      ],
      [
        "Coordene estrutura e instalações",
        "Esclareça as responsabilidades por ligações elétricas, tubulações e outros sistemas. A cobertura metálica não substitui o projeto dessas instalações. A Alumimec se desloca até a obra e combina a avaliação a partir do endereço e das informações fornecidas.",
      ],
    ],
    faq: [
      [
        "O abrigo pode impedir acesso a componentes?",
        "Os acessos necessários devem ser informados e considerados no projeto. Envie os requisitos de manutenção disponíveis.",
      ],
      [
        "A estrutura inclui a instalação do equipamento?",
        "Isso precisa estar expressamente definido. O fornecimento de cobertura não implica montagem ou conexão de equipamentos.",
      ],
    ],
  },
  {
    name: "Vila Rosa",
    city: "Piraquara",
    slug: "vila-rosa",
    topic: "Escada externa na Vila Rosa: acesso e acabamento",
    description:
      "Prepare a avaliação de uma escada metálica externa, identificando percurso, chegada, exposição e integração com o imóvel.",
    service: 4,
    sections: [
      [
        "Descreva o uso do acesso externo",
        "Explique quais ambientes serão conectados e quem utilizará a escada. Informe se ela servirá a circulação cotidiana ou a uma atividade específica. A escolha da solução depende dessa finalidade e de projeto profissional, sem recomendações de dimensionamento nesta página.",
      ],
      [
        "Mostre chegada, portas e circulação inferior",
        "Fotografe o ponto de partida e o de chegada, incluindo obstáculos e instalações. Indique o que precisa permanecer livre sob ou próximo ao acesso. Escada e proteções devem ser compatibilizadas com a edificação existente.",
      ],
      [
        "Discuta conservação desde a proposta",
        "Informe as condições de exposição observadas no imóvel e peça a especificação da preparação e do acabamento. Solicite orientações de conservação dos componentes contratados. Não se atribui um ambiente corrosivo específico à Vila Rosa nem se promete vida útil sem avaliação.",
      ],
    ],
    faq: [
      [
        "Toda escada metálica usa o mesmo acabamento?",
        "A escolha deve considerar condições de uso e exposição avaliadas no projeto e na proposta.",
      ],
      [
        "Posso definir a escada sem avaliar a chegada?",
        "A chegada faz parte do acesso e deve ser considerada junto com portas, circulação e proteções.",
      ],
    ],
  },
];
export const STAGE_THREE_GUIDES: LocalGuide[] = drafts.map((d) => {
  const m = territory.municipalities.find((m) => m.city === d.city)!;
  if (!m.names.some((n) => n.name === d.name))
    throw new Error("Local não verificado: " + d.name);
  const citySlug = d.city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll(" ", "-");
  return {
    ...d,
    path:
      d.city === "Curitiba"
        ? "/bairro/" + d.slug
        : "/bairro/" + citySlug + "/" + d.slug,
    title: d.topic + " | Alumimec",
    source: m.source,
    territorial: `${d.name} consta na ${d.city === "Piraquara" ? "Lei municipal 2672/2026 de Piraquara" : "malha de bairros do IBGE de 2022 para " + d.city}. A Alumimec atende por deslocamento ao local da obra, com avaliação do projeto e agendamento. Este guia apresenta uma aplicação possível do serviço; não afirma uma obra realizada ou uma característica predominante do bairro.`,
  };
});
