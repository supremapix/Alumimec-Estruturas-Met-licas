import type { FAQ } from "./types";
export interface ServiceGuide {
  id: number;
  intro: string;
  sections: string[][];
  questions: string[][];
  checklist: string[];
}
export const SERVICE_GUIDES: ServiceGuide[] = [
  {
    id: 1,
    intro:
      "Galpões industriais precisam acomodar a operação de hoje e as possibilidades de uso do espaço. A Alumimec apresenta estruturas metálicas para indústria e logística em seu catálogo; a solução deve ser definida a partir do projeto e das condições da obra.",
    sections: [
      [
        "Comece pela operação, não apenas pela metragem",
        "Um galpão usado para armazenagem tem necessidades diferentes de uma área de produção ou de circulação de veículos. Informe o uso, os equipamentos previstos, as aberturas necessárias e a organização interna. Vão livre e pé-direito são requisitos a discutir; não devem ser deduzidos somente de uma fotografia.",
      ],
      [
        "O que comparar na proposta",
        "Separe estrutura, fechamento, cobertura, acessos e eventuais instalações complementares. Confira quais etapas estão incluídas: projeto, fabricação, tratamento das peças, transporte e montagem. Esclareça também quem prepara o terreno e os apoios. Uma comparação entre propostas só é útil quando os escopos são equivalentes.",
      ],
      [
        "Prepare o local para receber a estrutura",
        "A montagem depende das condições de acesso, da área para descarga e da compatibilidade com os apoios previstos. Envie fotos do terreno e dos caminhos de entrada. Se houver atividade no imóvel, explique como ela funciona para discutir a sequência do serviço e as interferências. O cronograma deve resultar dessa avaliação.",
      ],
    ],
    questions: [
      [
        "Posso pedir um orçamento sem projeto pronto?",
        "Você pode iniciar a conversa com medidas aproximadas, fotos e uma descrição da atividade. A equipe informa quais levantamentos e documentos serão necessários para definir a proposta.",
      ],
      [
        "A foto do portfólio define o modelo que será entregue?",
        "Não. O acervo ajuda a conhecer soluções anteriores, mas dimensões, materiais e detalhes de cada galpão dependem do projeto contratado.",
      ],
      [
        "O galpão poderá ser ampliado depois?",
        "Informe essa intenção desde o início. A possibilidade de ampliação depende do projeto, dos apoios e das condições futuras; não é uma característica garantida de qualquer estrutura.",
      ],
    ],
    checklist: [
      "Atividade e equipamentos previstos",
      "Vão livre, pé-direito e área aproximados",
      "Acessos, fotos do terreno e apoios existentes",
      "Fechamentos e etapas desejadas no orçamento",
    ],
  },
  {
    id: 2,
    intro:
      "Coberturas metálicas aparecem no catálogo da Alumimec para comércios, quadras e residências. A escolha envolve o uso da área, a solução estrutural e o conjunto da cobertura — não apenas o tipo de telha.",
    sections: [
      [
        "Proteção e conforto começam pelas necessidades",
        "Explique se a área será aberta ou fechada, como recebe sol e chuva e quais atividades acontecem sob a cobertura. Se conforto térmico ou ruído forem preocupações, leve esses pontos à consulta sobre materiais. A presença de uma telha específica, isoladamente, não comprova o desempenho de todo o ambiente.",
      ],
      [
        "Encontros, águas e materiais",
        "Calhas, rufos, arremates e ligação com construções existentes precisam ser considerados junto com a estrutura. Envie fotos dos encontros com paredes e coberturas vizinhas. Consulte as opções termoacústicas citadas no catálogo e peça que tipo de telha, acabamento e componentes incluídos sejam descritos na proposta.",
      ],
      [
        "Substituição de cobertura existente",
        "Informe o estado aparente da cobertura atual e se o imóvel permanecerá em uso. Retirada de materiais, proteção provisória e destinação de resíduos devem ter responsabilidades definidas. As condições dos apoios existentes precisam de avaliação antes de decidir o reaproveitamento.",
      ],
    ],
    questions: [
      [
        "A Alumimec trabalha com cobertura termoacústica?",
        "O catálogo original cita telhas termoacústicas e telha sanduíche. Consulte a equipe sobre materiais disponíveis e adequação ao seu projeto; não há desempenho ou composição padrão garantidos nesta página.",
      ],
      [
        "Calhas e rufos estão incluídos?",
        "Confirme expressamente no orçamento. A proposta deve discriminar esses componentes e os pontos de encontro com a construção existente.",
      ],
      [
        "É possível aproveitar a estrutura atual?",
        "Isso depende da avaliação dos apoios, das peças e da nova solução. Fotos ajudam a iniciar a conversa, mas não substituem a análise necessária.",
      ],
    ],
    checklist: [
      "Uso da área e dimensões aproximadas",
      "Fotos de paredes, apoios e cobertura existente",
      "Necessidades de ventilação, iluminação e conforto",
      "Calhas, rufos e retirada a incluir na consulta",
    ],
  },
  {
    id: 3,
    intro:
      "Garagens, pergolados e estruturas metálicas aparentes fazem parte das soluções residenciais apresentadas pela Alumimec. O planejamento precisa conciliar o uso cotidiano, a arquitetura e os pontos de ligação com a casa.",
    sections: [
      [
        "Defina o que o espaço precisa resolver",
        "Uma garagem pode precisar acomodar abertura de portas e circulação; um pergolado pode ter finalidade de sombreamento ou integração com o jardim. Informe a finalidade antes de escolher a aparência. Em áreas cobertas, discuta também água da chuva e encontros com a fachada, sem presumir que todo pergolado oferece proteção contra chuva.",
      ],
      [
        "Acabamento e integração com a residência",
        "Leve fotos do imóvel e referências do acabamento desejado. Peças aparentes, cor, encontros e fixações influenciam o resultado visual e devem ser discutidos antes da fabricação. A seleção de materiais e proteção superficial considera exposição e cuidados previstos, com especificações registradas na proposta.",
      ],
      [
        "Obra em uma casa ocupada",
        "Avise se haverá moradores durante a execução, quais acessos podem ser usados e onde materiais poderão ser recebidos. Combine preparação do local, proteção das áreas próximas e sequência de montagem. Restrições de condomínio e autorizações aplicáveis precisam ser verificadas pelos responsáveis antes de executar.",
      ],
    ],
    questions: [
      [
        "Posso consultar uma garagem ou pergolado pequeno?",
        "O catálogo inclui garagens e pergolados residenciais. Envie as medidas e o endereço para a equipe confirmar disponibilidade e escopo.",
      ],
      [
        "A estrutura pode ficar aparente?",
        "Estruturas aparentes são citadas no catálogo. O desenho e o acabamento devem ser alinhados ao projeto da residência e à proposta.",
      ],
      [
        "Qual cor ou pintura posso escolher?",
        "Consulte as opções e suas condições de aplicação. Informe se a estrutura ficará exposta ao tempo e peça a especificação do acabamento na proposta.",
      ],
    ],
    checklist: [
      "Finalidade: garagem, pergolado ou outra estrutura",
      "Medidas e fotos da residência",
      "Referências visuais e acabamento desejado",
      "Acessos e condições de uso da casa durante a obra",
    ],
  },
  {
    id: 4,
    intro:
      "Mezaninos metálicos podem criar uma nova área de uso em lojas, estoques e escritórios, aplicações presentes no catálogo Alumimec. A decisão começa pelo uso do piso e pelas condições do imóvel, antes da definição da estrutura.",
    sections: [
      [
        "O que ficará sobre o mezanino?",
        "Descreva circulação de pessoas, móveis, estoque e equipamentos. Informe como o material será distribuído e movimentado. A área em metros quadrados sozinha não determina a solução: as cargas e os pontos de apoio precisam ser avaliados pelos responsáveis pelo projeto.",
      ],
      [
        "Acesso, altura e circulação",
        "Considere como as pessoas e os objetos chegarão ao novo piso. Escadas, guarda-corpos, aberturas e altura disponível devem ser discutidos em conjunto. Informe restrições de passagem no pavimento inferior para que o estudo considere a operação do espaço existente.",
      ],
      [
        "Converse sobre o conjunto completo",
        "A proposta deve deixar claro o escopo da estrutura, do piso, dos acessos e dos acabamentos. Fotos do imóvel e plantas existentes ajudam a organizar a consulta. Eventuais adequações do edifício, instalações e exigências aplicáveis precisam ser avaliadas; não se presume instalação sem intervenções ou continuidade irrestrita da operação.",
      ],
    ],
    questions: [
      [
        "O mezanino serve para estoque e escritório?",
        "Esses usos aparecem no catálogo, mas exigem avaliações próprias. Informe exatamente o que será colocado no piso e como o espaço será utilizado.",
      ],
      [
        "A escada e o guarda-corpo acompanham o orçamento?",
        "Confirme esses itens na proposta. Acessos e proteções precisam ser planejados junto com o novo piso, mesmo quando contratados em escopos separados.",
      ],
      [
        "Posso instalar sobre uma estrutura existente?",
        "A viabilidade depende do imóvel e dos apoios. A consulta deve incluir plantas disponíveis, fotos e dados do uso pretendido para orientar a avaliação.",
      ],
    ],
    checklist: [
      "Uso e ocupação do novo piso",
      "Materiais, móveis e equipamentos previstos",
      "Alturas disponíveis e restrições abaixo do piso",
      "Acesso por escada e documentos existentes",
    ],
  },
  {
    id: 5,
    intro:
      "O catálogo Alumimec apresenta escadas metálicas retas, caracol e tipo marinheiro para aplicações industriais e comerciais. São soluções com usos distintos; a escolha depende do acesso necessário e do projeto.",
    sections: [
      [
        "Entenda a função do acesso",
        "Informe o desnível, o espaço disponível e a frequência de utilização. Uma circulação cotidiana de pessoas é diferente de um acesso técnico. Não escolha um modelo apenas por ocupar menos área: conforto de circulação, transporte de objetos e requisitos aplicáveis precisam entrar na avaliação.",
      ],
      [
        "Componentes a especificar",
        "Degraus, patamares, corrimãos, guarda-corpos e acabamento devem ser tratados como partes do conjunto. Em áreas externas, exposição ao tempo e condições de conservação também importam. Peça que os materiais e componentes previstos estejam discriminados, sem depender somente de uma imagem de referência.",
      ],
      [
        "Ligação com a construção",
        "Envie fotos dos pontos de chegada e saída e dos apoios previstos. Portas, circulação próxima e obstáculos existentes podem influenciar o estudo. A posição e a solução de fixação precisam ser definidas no projeto; medidas aproximadas servem apenas para iniciar a consulta.",
      ],
    ],
    questions: [
      [
        "Qual modelo de escada é adequado?",
        "Reta, caracol e marinheiro têm finalidades distintas. Informe o uso do acesso e o espaço disponível para a equipe orientar a avaliação, sem assumir equivalência entre modelos.",
      ],
      [
        "Pode ser usada em área externa?",
        "Consulte a solução de material, acabamento e conservação apropriada à exposição prevista. As condições devem ser especificadas para o seu caso.",
      ],
      [
        "O orçamento precisa de medidas exatas?",
        "Medidas aproximadas e fotos ajudam no primeiro contato. Confirme como será feito o levantamento necessário antes da fabricação.",
      ],
    ],
    checklist: [
      "Desnível e área disponível",
      "Uso cotidiano ou acesso técnico",
      "Fotos dos pontos de apoio e chegada",
      "Exposição ao tempo e acabamento desejado",
    ],
  },
  {
    id: 6,
    intro:
      "Portões industriais para acessos de veículos e controle de entrada integram o catálogo Alumimec. Dimensões da abertura, operação cotidiana e eventual automação precisam ser considerados juntos.",
    sections: [
      [
        "Comece pelo fluxo de acesso",
        "Explique quais veículos passam, a frequência de abertura e o espaço livre de manobra. Informe as medidas aproximadas do vão e envie fotos dos dois lados do acesso. A solução de abertura precisa considerar o espaço disponível e os apoios, sem pressupor que qualquer modelo cabe no local.",
      ],
      [
        "Estrutura e automação são decisões relacionadas",
        "O catálogo cita portões de grande porte preparados para automação. Isso não significa que motor, comandos, instalação elétrica ou recursos de segurança estejam automaticamente incluídos. Confirme a compatibilidade e a responsabilidade por cada componente na proposta.",
      ],
      [
        "Planeje montagem e conservação",
        "Avise se o acesso precisa continuar funcionando durante o serviço e se existe um portão a remover. Combine a sequência de trabalho e a preparação dos apoios. Solicite orientações de uso, inspeção e conservação dos componentes efetivamente instalados; não há promessa universal de baixa manutenção.",
      ],
    ],
    questions: [
      [
        "O portão já vem automatizado?",
        "A automação deve ser confirmada na proposta. O catálogo menciona preparação e compatibilidade, mas os componentes e a instalação incluídos precisam ser especificados.",
      ],
      [
        "É possível substituir um portão existente?",
        "Envie fotos, dimensões e informações sobre os apoios. A equipe avalia o escopo, inclusive retirada, preparação e solução de abertura.",
      ],
      [
        "Que informações ajudam no primeiro orçamento?",
        "Dimensões aproximadas do acesso, tipo de veículo, frequência de uso, fotos e intenção de automatizar ajudam a organizar a consulta.",
      ],
    ],
    checklist: [
      "Largura e altura aproximadas do acesso",
      "Tipos de veículos e frequência de abertura",
      "Fotos dos apoios e espaço de manobra",
      "Automação, retirada e instalações a consultar",
    ],
  },
];
export const guideFaqs = (guide: ServiceGuide): FAQ[] =>
  guide.questions.map(([question, answer]) => ({ question, answer }));
