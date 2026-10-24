import type { LocalGuide } from "./local-guides";
const source =
  "https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/bairros/shp/UF/PR_bairros_CD2022.zip";
export const STAGE_TWO_GUIDES: LocalGuide[] = [
  {
    name: "Cajuru",
    city: "Curitiba",
    path: "/bairro/cajuru",
    title: "Mezanino no Cajuru: organize circulação e uso | Alumimec",
    description:
      "Planeje o aproveitamento vertical de um imóvel no Cajuru: atividade, acessos, instalações existentes e informações para consultar um mezanino metálico.",
    source,
    territorial:
      "Cajuru consta na malha de bairros do IBGE de 2022 para Curitiba. Informe rua e CEP para identificar o imóvel; a Alumimec atende por deslocamento à obra, com avaliação do projeto e agendamento.",
    service: 3,
    sections: [
      [
        "Desenhe os percursos antes de ocupar o piso",
        "Se a intenção é aproveitar a altura do imóvel, comece pelo que circulará em cada nível. Marque em um desenho simples a entrada, a posição dos equipamentos e o percurso até a área elevada. Diferencie espaço de trabalho, armazenamento e circulação; essa informação orienta o levantamento, mas não determina a capacidade da estrutura.",
      ],
      [
        "Inclua a escada desde a primeira conversa",
        "O acesso ocupa área no pavimento inferior e interfere na organização do novo espaço. Fotografe portas, corredores e instalações próximas. Escada, guarda-corpo e piso precisam ser compatibilizados pelo responsável técnico; não escolha a solução apenas pela área livre aparente.",
      ],
      [
        "Compare propostas com o mesmo uso declarado",
        "Envie a finalidade de cada ambiente e os equipamentos previstos, sem estimar cargas por conta própria. Esclareça o que está incluído em projeto, fabricação, montagem e acabamento. Avise se o imóvel continuará funcionando para que a possibilidade de separar as atividades seja avaliada.",
      ],
    ],
    faq: [
      [
        "Uma foto define o tamanho possível do mezanino?",
        "Não. A foto ajuda a explicar a ideia, mas geometria, apoios, uso e instalações dependem de levantamento e projeto profissional.",
      ],
      [
        "Posso contratar a escada depois?",
        "A contratação pode ser discutida, mas a integração do acesso deve entrar no planejamento inicial para evitar incompatibilidades.",
      ],
    ],
  },
  {
    name: "Bacacheri",
    city: "Curitiba",
    path: "/bairro/bacacheri",
    title: "Cobertura no Bacacheri: concilie garagem e acesso | Alumimec",
    description:
      "Organize a consulta de cobertura metálica no Bacacheri com fotos da garagem, percurso do portão e ligação com a construção existente.",
    source,
    territorial:
      "Bacacheri é identificado como bairro de Curitiba na base IBGE de 2022. A orientação abaixo trata de uma possível cobertura de garagem, sem atribuir esse projeto a uma obra realizada no bairro.",
    service: 1,
    sections: [
      [
        "Observe o espaço com o portão aberto",
        "Para estudar uma garagem coberta, registre o portão aberto e fechado e explique como o veículo entra. Inclua no desenho a passagem de pedestres e as portas da casa. Apoios e fechamento da cobertura precisam respeitar os percursos definidos no projeto.",
      ],
      [
        "Mostre a ligação com a casa",
        "Fotografe a cobertura atual, a fachada e os pontos por onde passam instalações aparentes. Explique se pretende uma estrutura independente ou uma integração visual; a possibilidade de ligação estrutural não pode ser concluída pelas fotos. Drenagem e encontros entre coberturas devem ser avaliados tecnicamente.",
      ],
      [
        "Defina o que a nova área precisa oferecer",
        "Descreva se a prioridade é abrigo do veículo, circulação coberta ou uso compartilhado com outra atividade. Peça que materiais e acabamento estejam especificados na proposta. A escolha de telha, fechamento e apoios depende da solução projetada e não de uma regra geral para o bairro.",
      ],
    ],
    faq: [
      [
        "A cobertura pode usar o muro como apoio?",
        "Isso exige avaliação técnica do elemento existente. A aparência do muro não comprova que ele possa receber uma estrutura.",
      ],
      [
        "Quais fotos ajudam na consulta?",
        "Envie uma visão geral, o portão em suas posições, a fachada e as instalações próximas, com medidas aproximadas e o endereço.",
      ],
    ],
  },
  {
    name: "Iná",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/ina",
    title: "Ampliação no Iná: integre a área nova à existente | Alumimec",
    description:
      "Prepare uma ampliação com estrutura metálica no Iná: identifique o que permanece, os encontros de cobertura e as etapas a avaliar no imóvel.",
    source,
    territorial:
      "Iná consta como bairro de São José dos Pinhais na malha IBGE de 2022. A sede da Alumimec fica no Afonso Pena; esta página não representa uma filial no Iná. Consulte disponibilidade para o endereço.",
    service: 2,
    sections: [
      [
        "Separe manutenção de ampliação",
        "Na consulta, identifique o que deve permanecer e o que você pretende criar. Uma foto marcada pode diferenciar a área atual da extensão desejada. Informe o uso futuro e a ligação esperada com os ambientes existentes para evitar que reparos e novos elementos sejam confundidos no orçamento.",
      ],
      [
        "Documente os encontros entre estruturas",
        "Envie imagens dos limites da cobertura, portas, janelas e instalações próximas. Se houver desenhos ou projeto da construção atual, compartilhe-os com a equipe. A união entre elementos novos e antigos depende de avaliação; não presuma que um apoio existente possa ser reaproveitado.",
      ],
      [
        "Planeje o uso do imóvel durante a intervenção",
        "Explique quais acessos precisam permanecer disponíveis e onde há circulação cotidiana. A sequência de execução deve ser definida conforme o projeto e as condições encontradas, sem antecipar prazos. Materiais, proteção e acabamento da área nova precisam constar no escopo.",
      ],
    ],
    faq: [
      [
        "Uma extensão exige trocar toda a cobertura?",
        "Não é possível concluir antes da avaliação. Informe o estado e a configuração existentes para discutir as alternativas.",
      ],
      [
        "O orçamento inclui corrigir problemas antigos?",
        "Esse escopo deve ser explicitado na proposta. A solicitação de ampliação não define automaticamente reparos na construção existente.",
      ],
    ],
  },
  {
    name: "Atuba",
    city: "Pinhais",
    path: "/bairro/pinhais/atuba",
    title: "Cobertura no Atuba, Pinhais: planeje a substituição | Alumimec",
    description:
      "Identifique corretamente Atuba em Pinhais e prepare a avaliação de uma cobertura: conservação, uso da área, componentes e acesso para montagem.",
    source,
    territorial:
      "Esta página se refere ao Atuba de Pinhais, identificado no IBGE de 2022. O nome também aparece em outros municípios; envie município, rua e CEP. A Alumimec atende por deslocamento à obra; o projeto e o agendamento são avaliados com a equipe.",
    service: 1,
    sections: [
      [
        "Esclareça se a intenção é reparar ou substituir",
        "Registre a área completa e os pontos que motivaram a consulta. Explique se busca renovar o fechamento, alterar a cobertura ou estudar uma estrutura nova. Uma mancha ou deformação aparente não permite diagnosticar a causa nem define quais peças podem ser mantidas.",
      ],
      [
        "Considere a atividade que acontece abaixo",
        "Informe se existem veículos, estoque ou equipamentos na área e se eles podem ser deslocados. A proteção do local e o planejamento da montagem precisam integrar a avaliação. Não remova peças para produzir fotografias e não use o telhado como ponto de observação.",
      ],
      [
        "Confira os limites do fornecimento",
        "Solicite a descrição dos componentes previstos, acabamento, encontros e itens de drenagem avaliados. Havendo retirada de materiais, esclareça responsabilidades e destinação na proposta. A consulta inicial deve conter endereço completo e condições de acesso, sem presumir atendimento confirmado.",
      ],
    ],
    faq: [
      [
        "Atuba no endereço é suficiente?",
        "Não. Inclua Pinhais, rua e CEP para evitar confusão com bairros homônimos de outros municípios.",
      ],
      [
        "É possível reaproveitar todas as peças?",
        "O reaproveitamento depende da avaliação de conservação e compatibilidade com o projeto; não pode ser prometido por fotografia.",
      ],
    ],
  },
  {
    name: "Guaraituba",
    city: "Colombo",
    path: "/bairro/colombo/guaraituba",
    title: "Galpão no Guaraituba: organize expansão e carga | Alumimec",
    description:
      "Prepare uma consulta de ampliação de galpão no Guaraituba, Colombo: fluxo de materiais, acessos, espaço existente e escopo técnico.",
    source,
    territorial:
      "Guaraituba consta na base IBGE de 2022 para Colombo. Não deve ser confundido com Guarituba, em Piraquara. Não há filial ou obra local afirmada nesta página; o atendimento ocorre por deslocamento à obra, com avaliação do projeto e agendamento.",
    service: 0,
    sections: [
      [
        "Identifique o gargalo que motiva a expansão",
        "Explique se falta espaço para armazenar, movimentar materiais ou organizar uma área de trabalho. Desenhe o percurso desde o acesso até o ponto de uso. A nova área pode exigir rever a circulação existente, além de ampliar a cobertura, e essa necessidade deve ser apresentada antes da proposta.",
      ],
      [
        "Registre as interfaces com o galpão atual",
        "Fotografe a estrutura, os fechamentos, os acessos e as instalações visíveis. Disponibilize os projetos existentes, quando houver. Compatibilidade entre estrutura nova e antiga, apoios e fundações exige análise profissional, sem extrapolar capacidade a partir da aparência.",
      ],
      [
        "Inclua recebimento e montagem no planejamento",
        "Informe dimensões dos veículos que precisam acessar o imóvel, espaços disponíveis e restrições de funcionamento conhecidas pelo contratante. Isso ajuda a discutir logística e sequência, sem confirmar viabilidade ou prazo. Portões e eventual cobertura da área de carga devem aparecer como itens claros no escopo.",
      ],
    ],
    faq: [
      [
        "Guaraituba e Guarituba são a mesma referência?",
        "Não nesta consulta: este guia é para Guaraituba, Colombo. Confirme município e CEP para identificar corretamente o imóvel.",
      ],
      [
        "Ampliar a cobertura resolve qualquer falta de espaço?",
        "Não necessariamente. Explique os fluxos e usos para que a solução seja avaliada junto com circulação, acessos e estrutura.",
      ],
    ],
  },
  {
    name: "Guarituba Central",
    city: "Piraquara",
    path: "/bairro/piraquara/guarituba-central",
    title: "Projeto no Guarituba Central: comece pelo endereço | Alumimec",
    description:
      "Organize a consulta de estrutura metálica no Guarituba Central com referência territorial, finalidade da área e documentação disponível do imóvel.",
    source: "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875",
    territorial:
      "Guarituba Central aparece no artigo 15 da Lei municipal 2672/2026 de Piraquara. A denominação não equivale a toda a região conhecida como Guarituba e é distinta de Guarituba Redondo. A relação territorial não comprova autorização de obra. A Alumimec atende por deslocamento, mediante avaliação do projeto e agendamento.",
    service: 2,
    sections: [
      [
        "Use o endereço cadastrado na consulta",
        "Envie rua, número, CEP e a identificação disponível do imóvel. Se conhece a região por outro nome, informe também essa referência, sem substituir o endereço. A identificação correta evita associar o pedido a um bairro ou município diferente.",
      ],
      [
        "Descreva a área que pretende criar",
        "Explique se deseja uma área coberta de circulação, uma extensão de uso residencial ou um espaço de trabalho. Envie fotos do local e indique o que precisa permanecer livre. Essa descrição orienta a conversa sobre estruturas e coberturas sem presumir a possibilidade de construir no terreno.",
      ],
      [
        "Reúna os documentos antes de definir a solução",
        "Compartilhe desenhos, projetos e informações do imóvel que já possui. Responsáveis técnicos e órgãos competentes devem avaliar as exigências aplicáveis ao caso; esta página não fornece autorização urbanística. Consulte a equipe sobre disponibilidade e escopo antes de combinar execução ou deslocamento.",
      ],
    ],
    faq: [
      [
        "O nome Guarituba identifica sozinho o bairro?",
        "A lei consultada distingue Guarituba Central e Guarituba Redondo. Informe o endereço completo e a referência cadastral disponível.",
      ],
      [
        "Estar na lista de bairros confirma que posso ampliar?",
        "Não. A lista identifica uma referência territorial; as condições do imóvel e as exigências para o projeto precisam de avaliação própria.",
      ],
    ],
  },
  {
    name: "Tindiquera",
    city: "Araucária",
    path: "/bairro/araucaria/tindiquera",
    title: "Grandes áreas na Tindiquera: planeje o uso por fases | Alumimec",
    description:
      "Organize uma consulta de galpão ou grande área coberta na Tindiquera, Araucária, com usos, interfaces e necessidades de expansão bem definidos.",
    source,
    territorial:
      "Tindiquera consta na malha de bairros de Araucária do IBGE de 2022. O exemplo de planejamento abaixo não descreve uma obra da Alumimec no bairro. A Alumimec atende por deslocamento à obra; combine a avaliação e o agendamento.",
    service: 0,
    sections: [
      [
        "Diferencie a necessidade atual da expansão futura",
        "Em um desenho do imóvel, marque a área necessária agora e os usos que você pretende avaliar depois. Registre acessos e instalações que precisam continuar funcionando. Uma execução por fases é uma possibilidade a estudar, não uma garantia de que qualquer estrutura aceitará ampliação futura.",
      ],
      [
        "Defina as interfaces entre as áreas",
        "Explique como pessoas, equipamentos e materiais circularão entre o espaço atual e o novo. Informe se pretende incluir estacionamento coberto, área de apoio ou armazenamento. Cada finalidade pode exigir soluções diferentes e deve ser discutida no projeto, sem adotar dimensões ou capacidades genéricas.",
      ],
      [
        "Organize a contratação por itens verificáveis",
        "Peça que projeto, materiais, fabricação, montagem, proteção e acabamento estejam descritos. Se houver interfaces com outros fornecedores, esclareça responsabilidades. A sequência de obra e a logística dependem da avaliação do local; não se presume uma condição específica das vias do bairro.",
      ],
    ],
    faq: [
      [
        "Posso deixar a ampliação para uma segunda fase?",
        "Essa intenção precisa ser informada desde o início. A viabilidade e a preparação para etapas futuras dependem do projeto.",
      ],
      [
        "Uma área coberta pode servir a qualquer atividade?",
        "O uso deve ser definido e avaliado tecnicamente. Alterar a atividade pode exigir revisar a solução e as condições de utilização.",
      ],
    ],
  },
  {
    name: "Eucaliptos",
    city: "Fazenda Rio Grande",
    path: "/bairro/fazenda-rio-grande/eucaliptos",
    title:
      "Portão nos Eucaliptos: compatibilize entrada e cobertura | Alumimec",
    description:
      "Prepare o estudo de um portão industrial nos Eucaliptos, Fazenda Rio Grande: abertura, percurso, veículos e integração com a área coberta.",
    source,
    territorial:
      "Eucaliptos é uma referência de bairro de Fazenda Rio Grande na base IBGE de 2022. A página não afirma presença física da Alumimec no bairro; consulte disponibilidade para o imóvel.",
    service: 5,
    sections: [
      [
        "Fotografe todo o percurso da abertura",
        "Além da frente do vão, registre as laterais e o espaço interno disponível. Informe como o portão atual funciona e quais dificuldades motivam a mudança. O desenho do acesso precisa considerar o movimento da folha e os elementos próximos, sem escolher o sistema apenas pela foto frontal.",
      ],
      [
        "Considere os veículos e a passagem de pessoas",
        "Explique que veículos usam o imóvel e se há entrada separada para pedestres. Quando existir cobertura próxima, mostre também essa estrutura e suas ligações. A integração entre portão, fechamento e cobertura deve ser analisada para que cada item tenha função e escopo definidos.",
      ],
      [
        "Esclareça acionamento e acabamento na proposta",
        "Informe se procura acionamento manual ou deseja consultar uma solução automatizada. Não presuma que motores, instalações elétricas ou controles estejam incluídos no fornecimento metálico. Materiais, preparação, acabamento e interfaces devem ser descritos antes da contratação.",
      ],
    ],
    faq: [
      [
        "O orçamento do portão já inclui automação?",
        "A inclusão precisa estar expressa na proposta. Informe a intenção de automatizar para que as interfaces sejam avaliadas.",
      ],
      [
        "Só a largura do vão é suficiente?",
        "Não. Envie altura aproximada, fotos das laterais, obstáculos, modo de uso e endereço. O levantamento técnico confirma as medidas necessárias.",
      ],
    ],
  },
];
