import { STAGE_FOUR_GUIDES } from "./local-guides-stage4";
import { STAGE_THREE_GUIDES } from "./local-guides-stage3";
import { STAGE_TWO_GUIDES } from "./local-guides-stage2";
export interface LocalGuide {
  name: string;
  city: string;
  path: string;
  title: string;
  description: string;
  source: string;
  territorial: string;
  service: number;
  sections: [string, string][];
  faq: [string, string][];
}
const curitiba =
  "https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912";
const sjp = "https://www.sjp.pr.gov.br/mapas-do-municipio/";
export const LOCAL_GUIDES: LocalGuide[] = [
  {
    name: "Afonso Pena",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/afonso-pena",
    title: "Estruturas no Afonso Pena: converse com a sede | Alumimec",
    description:
      "Prepare sua consulta na sede Alumimec, no Afonso Pena: ampliação de estruturas, fotos, medidas e integração com a construção existente.",
    source: sjp + "afonso-pena/",
    territorial:
      "Afonso Pena é o bairro da sede informada pela Alumimec. O perfil municipal distingue o bairro dos conjuntos Júpiter e Urano e dos jardins que o compõem. Use o bairro cadastrado, a rua e o CEP na consulta.",
    service: 2,
    sections: [
      [
        "Comece pela construção que já existe",
        "Uma ampliação precisa considerar a relação entre a estrutura nova e a edificação atual. Envie fotos da fachada, dos apoios aparentes, da cobertura e dos limites do espaço que pretende aproveitar. A proximidade da sede não substitui a avaliação do imóvel nem confirma disponibilidade imediata.",
      ],
      [
        "Transforme a ideia em um escopo",
        "Explique se pretende cobrir uma garagem, criar uma área de trabalho ou integrar uma nova estrutura à casa. Separe o que deve ser mantido do que deseja alterar. Projeto, proteção contra corrosão, acabamento e conexão com a cobertura existente precisam estar definidos na proposta.",
      ],
      [
        "Converse antes de visitar",
        "O endereço da sede é apresentado abaixo. Combine o atendimento antes de se deslocar e leve os documentos ou desenhos já disponíveis. Para galpões, mezaninos, escadas e portões, descreva também os acessos e o uso futuro.",
      ],
    ],
    faq: [
      [
        "Posso levar apenas uma fotografia?",
        "Ela ajuda na conversa inicial. Inclua medidas aproximadas e explique a finalidade; fotos não determinam os apoios ou substituem o levantamento técnico.",
      ],
      [
        "A visita à sede confirma a execução?",
        "Não. Escopo, disponibilidade e condições de execução precisam ser avaliados e formalizados para a obra.",
      ],
    ],
  },
  {
    name: "Guatupê",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/guatupe",
    title: "Galpões no Guatupê: planeje a ampliação | Alumimec",
    description:
      "Guia de consulta para ampliar galpões no Guatupê: separar áreas em uso, acessos, armazenamento e interfaces da estrutura. Atendimento sob consulta.",
    source: sjp + "guatupe/",
    territorial:
      "O perfil da Prefeitura inclui no Guatupê a Vila Itatiaia e diversos jardins. Esses nomes ajudam na localização, mas não são tratados aqui como novos bairros ou endereços de filiais.",
    service: 0,
    sections: [
      [
        "Desenhe a área de expansão",
        "Para consultar uma ampliação de galpão, marque em um croqui a construção atual e a área pretendida. Informe atividade, posição de portões, circulação de pessoas e entrada de materiais. A área desejada precisa ser confrontada com o projeto e com as condições reais do terreno.",
      ],
      [
        "Separe produção, estoque e montagem",
        "Caso o imóvel continue em uso, descreva quais operações precisam permanecer acessíveis. O espaço destinado a peças, equipamentos e montagem deve fazer parte da conversa; não presuma que o pátio inteiro ficará disponível. Essa informação ajuda a organizar alternativas sem prometer execução com a operação funcionando.",
      ],
      [
        "Avalie a conexão entre estruturas",
        "Alturas, coberturas e apoios antigos precisam ser levantados antes de ligar uma ampliação. Não reutilize um pilar ou uma fundação apenas porque aparenta estar em bom estado. A decisão e o dimensionamento cabem aos responsáveis técnicos.",
      ],
    ],
    faq: [
      [
        "Como explicar uma ampliação por etapas?",
        "Indique a área final desejada e a primeira parte que pretende estudar. Peça que interfaces futuras sejam avaliadas no projeto, sem assumir que qualquer estrutura poderá crescer depois.",
      ],
      [
        "Um mezanino pode substituir a ampliação externa?",
        "Pode ser uma alternativa a estudar. Uso, altura disponível, acesso e cargas precisam de projeto específico; não é uma troca automática.",
      ],
    ],
  },
  {
    name: "Cidade Jardim",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/cidade-jardim",
    title: "Cobertura de estacionamento no Cidade Jardim | Alumimec",
    description:
      "Organize a consulta de cobertura para estacionamento no Cidade Jardim: circulação, posição de apoios, água da chuva e acesso. Viabilidade sob consulta.",
    source: sjp + "cidade-jardim/",
    territorial:
      "A Prefeitura identifica Cidade Jardim como bairro e relaciona plantas Cidade Jardim I e II e jardins Elvira e Eunice dentro dele. Informe o nome usado no cadastro do imóvel para evitar confusão entre bairro e parcelamento.",
    service: 1,
    sections: [
      [
        "Conte como o estacionamento funciona",
        "Antes de escolher a forma da cobertura, informe o tipo de veículo, a entrada, a saída e os caminhos de pedestres. Marque obstáculos e os pontos onde não pode haver pilares. Quantidade de vagas e circulação devem ser avaliadas em conjunto com o projeto.",
      ],
      [
        "Pense também na água e na luz",
        "Indique onde estão as descidas de água existentes e as áreas que precisam de iluminação. Telhas, calhas, pontos de apoio e eventuais fechamentos precisam aparecer no escopo. Esta página não define inclinações ou dimensionamento de drenagem.",
      ],
      [
        "Compare propostas pelo mesmo desenho",
        "Uma comparação útil considera a mesma área, materiais, acabamento e responsabilidades. Pergunte o que está incluído na montagem e quais preparações do local ficam fora da proposta. Medidas aproximadas servem para iniciar a consulta, não para fabricar.",
      ],
    ],
    faq: [
      [
        "É possível cobrir só parte das vagas?",
        "A área pode ser estudada conforme a necessidade, mas a solução deve manter a circulação prevista e ter seus apoios avaliados.",
      ],
      [
        "Posso usar o muro como apoio?",
        "Somente uma avaliação técnica pode definir essa possibilidade. Não considere um muro existente como apoio estrutural por aparência.",
      ],
    ],
  },
  {
    name: "Borda do Campo",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/borda-do-campo",
    title: "Grandes áreas na Borda do Campo: estudo de galpão | Alumimec",
    description:
      "Prepare um estudo de galpão na Borda do Campo com informações sobre terreno, ocupação, acessos e expansão futura. Consulte a viabilidade com a Alumimec.",
    source: sjp + "borda-do-campo/",
    territorial:
      "O perfil municipal diferencia o bairro Borda do Campo de jardins, plantas e vilas que o integram. A fonte inclui Dom Bosco e Santa Catarina entre os jardins. O nome do bairro não permite presumir condições de um terreno específico.",
    service: 0,
    sections: [
      [
        "Defina o uso antes de preencher o terreno",
        "Em uma área grande, explique quais partes serão cobertas, quais precisam permanecer abertas e como pessoas e veículos se deslocarão. Um esboço do programa de uso é mais útil que pedir apenas um preço por área. Não é possível concluir aproveitamento ou permissões urbanísticas só pelo nome do bairro.",
      ],
      [
        "Mostre por onde a montagem pode chegar",
        "Fotografe a entrada e informe obstáculos conhecidos no caminho interno. Área de descarga, espaço de manobra e local para armazenar peças precisam ser discutidos. A equipe deve confirmar as condições; esta orientação não pressupõe estradas ou acessos de um tipo específico no bairro.",
      ],
      [
        "Reserve perguntas para o projeto",
        "Discuta possibilidade de expansão, fechamentos, iluminação e interfaces de cobertura antes da fabricação. As escolhas sobre vãos e cargas dependem de projeto profissional. Documentos do terreno e autorizações aplicáveis devem ser verificados pelos responsáveis.",
      ],
    ],
    faq: [
      [
        "Um terreno amplo permite um galpão em toda a área?",
        "Não necessariamente. Regras aplicáveis ao imóvel, acessos, necessidades de operação e projeto condicionam a ocupação.",
      ],
      [
        "O orçamento pode prever uma ampliação futura?",
        "Informe essa intenção desde a consulta. A possibilidade precisa ser estudada e descrita no projeto; não é uma capacidade presumida da estrutura.",
      ],
    ],
  },
  {
    name: "Parque da Fonte",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/parque-da-fonte",
    title: "Mezanino no Parque da Fonte: aproveitamento interno | Alumimec",
    description:
      "Consulte mezaninos para aproveitar espaços no Parque da Fonte: uso do piso, circulação, escadas e documentação. Sem estimar cargas sem projeto.",
    source: sjp + "parque-da-fonte/",
    territorial:
      "Parque da Fonte tem perfil próprio no diretório de bairros da Prefeitura de São José dos Pinhais. Informe rua, número e CEP; o nome sozinho não confirma acesso, viabilidade ou disponibilidade de atendimento.",
    service: 3,
    sections: [
      [
        "Liste o que ficará em cada nível",
        "Um mezanino muda a organização interna do imóvel. Explique o que permanecerá no térreo e o que pretende levar ao piso elevado: pessoas, estoque ou equipamentos. Cada uso traz requisitos diferentes, que precisam ser analisados profissionalmente.",
      ],
      [
        "Inclua a circulação na área desejada",
        "A escada e os caminhos de acesso ocupam espaço. Marque portas, equipamentos, passagens e alturas disponíveis no croqui. O ganho de área deve considerar o funcionamento do conjunto, e não apenas a superfície do piso novo.",
      ],
      [
        "Leve informações da edificação",
        "Plantas existentes, fotos dos apoios e registros de intervenções ajudam a orientar a avaliação. Não é seguro deduzir capacidade de suporte a partir de medidas isoladas. Peça que piso, proteção, acesso e responsabilidades técnicas estejam claros no escopo.",
      ],
    ],
    faq: [
      [
        "Qual carga o mezanino suporta?",
        "A capacidade é definida no projeto para o uso previsto. Esta página não fornece valores nem autoriza alterar o uso de uma estrutura existente.",
      ],
      [
        "É possível manter a circulação sob ele?",
        "A necessidade deve ser informada e estudada com alturas, apoios e acessos. A solução depende do levantamento e do projeto.",
      ],
    ],
  },
  {
    name: "Barro Preto",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/barro-preto",
    title: "Portões e acessos no Barro Preto | Alumimec",
    description:
      "Prepare uma consulta de portão industrial no Barro Preto: abertura, circulação de veículos e compatibilidade com a estrutura. Atendimento sob avaliação.",
    source: sjp + "barro-preto/",
    territorial:
      "Barro Preto consta como bairro no perfil oficial de São José dos Pinhais. A Prefeitura o relaciona territorialmente com Ouro Fino, Costeira, Del Rey e Arujá; essa referência não afirma obras ou cobertura da Alumimec nesses locais.",
    service: 5,
    sections: [
      [
        "Meça o acesso e descreva o movimento",
        "Informe a abertura existente, os veículos que precisam passar e o espaço de manobra. Registre se há diferença de nível ou obstáculos no percurso. As dimensões de fabricação e os apoios devem ser conferidos pela equipe técnica.",
      ],
      [
        "Compatibilize portão e cobertura",
        "Quando um portão faz parte de um galpão ou de uma área coberta, suas interfaces precisam ser consideradas no mesmo estudo. Pilares, fechamentos e circulação não devem ser definidos isoladamente. Explique se haverá intervenção na estrutura atual.",
      ],
      [
        "Separe a estrutura da automação",
        "Se desejar automação, peça a definição do escopo correspondente na proposta. Não presuma que motor, instalação elétrica ou comandos estejam incluídos. A consulta deve esclarecer necessidades de uso e as responsabilidades de cada parte.",
      ],
    ],
    faq: [
      [
        "A foto do catálogo define o modelo do meu portão?",
        "Não. Ela é referência visual de acervo. Abertura, acabamento e funcionamento precisam ser definidos para o seu acesso.",
      ],
      [
        "Posso aproveitar os apoios existentes?",
        "A condição e a compatibilidade devem ser avaliadas tecnicamente antes de confirmar o reaproveitamento.",
      ],
    ],
  },
  {
    name: "Boqueirão",
    city: "Curitiba",
    path: "/bairro/boqueirao",
    title: "Galpão no Boqueirão: organização da ampliação | Alumimec",
    description:
      "Guia para estudar ampliação de galpão no Boqueirão, Curitiba: uso, acessos, estoque e integração entre coberturas. Consulte a Alumimec.",
    source: curitiba,
    territorial:
      "Boqueirão aparece como bairro na relação oficial da Prefeitura de Curitiba. A regional também se chama Boqueirão, mas bairro e regional são recortes diferentes. Use o endereço completo para localizar sua obra.",
    service: 0,
    sections: [
      [
        "Explique o que precisa crescer",
        "Ao ampliar um galpão, indique se a necessidade vem de estoque, produção ou circulação. Marque a área existente e a pretendida, as entradas de veículos e os pontos que precisam permanecer livres. A solução deve responder ao uso, não apenas aumentar a metragem.",
      ],
      [
        "Compare expansão e reorganização",
        "Uma nova cobertura externa, uma alteração do arranjo interno ou um mezanino são estudos diferentes. Descreva as alternativas que aceita discutir e as restrições do imóvel. A escolha depende da análise dos responsáveis técnicos e das condições de contratação.",
      ],
      [
        "Considere as interfaces da obra",
        "Encontros entre telhados, diferença de altura e conexão com estruturas antigas precisam de levantamento. Envie plantas disponíveis e fotos dos acessos. Não presuma capacidade de pilares ou fundações existentes.",
      ],
    ],
    faq: [
      [
        "Boqueirão de Cima é uma filial da Alumimec?",
        "Não. O site não declara filial com esse nome. Denominações locais devem acompanhar rua e CEP para identificar o endereço.",
      ],
      [
        "Como pedir uma proposta comparável?",
        "Informe o mesmo programa de uso e solicite escopo, materiais, acabamento, montagem e responsabilidades claramente discriminados.",
      ],
    ],
  },
  {
    name: "Uberaba",
    city: "Curitiba",
    path: "/bairro/uberaba",
    title: "Estacionamento coberto no Uberaba | Alumimec",
    description:
      "No Uberaba, prepare a consulta de cobertura de estacionamento com acessos, circulação, obstáculos e coleta de água. Solução sujeita a projeto.",
    source: curitiba,
    territorial:
      "Uberaba integra a relação oficial de bairros de Curitiba. Ao consultar a obra, identifique também a cidade para diferenciar o bairro de municípios ou localidades com o mesmo nome.",
    service: 1,
    sections: [
      [
        "Descreva o percurso dos veículos",
        "Para estudar um estacionamento coberto, apresente entrada, saída, áreas de manobra e passagem de pedestres. Informe quais veículos utilizam o espaço. Posição de pilares e altura livre precisam ser compatibilizadas com o uso por profissionais responsáveis.",
      ],
      [
        "Avalie os encontros com a edificação",
        "Mostre portas, janelas e coberturas próximas. O projeto deve considerar a relação entre a cobertura nova e o imóvel, inclusive água da chuva e acesso para conservação. Não há uma telha ou solução universal indicada apenas pelo bairro.",
      ],
      [
        "Organize o local para a avaliação",
        "Fotos gerais e detalhes dos possíveis apoios ajudam no primeiro contato. Informe se o estacionamento precisa continuar funcionando durante alguma fase, para que essa necessidade seja analisada sem pressupor uma operação simultânea garantida.",
      ],
    ],
    faq: [
      [
        "O número de vagas define sozinho o tamanho da cobertura?",
        "Não. Circulação, veículos, acessos e apoios também entram no estudo. Envie um croqui do espaço disponível.",
      ],
      [
        "A Alumimec confirma atendimento apenas pelo bairro?",
        "A equipe precisa avaliar endereço e características da obra. Não há filial declarada no Uberaba.",
      ],
    ],
  },
  {
    name: "Água Verde",
    city: "Curitiba",
    path: "/bairro/agua-verde",
    title: "Mezanino no Água Verde: planeje o espaço | Alumimec",
    description:
      "Estude o aproveitamento interno com mezanino no Água Verde: finalidade, altura, escadas e interferências. Capacidades somente com projeto técnico.",
    source: curitiba,
    territorial:
      "Água Verde consta na relação municipal de bairros de Curitiba. Essa identificação orienta a consulta do endereço e não informa, por si, regras ou condições de um imóvel.",
    service: 3,
    sections: [
      [
        "Comece pela finalidade do piso",
        "Escritório, circulação e armazenamento são usos distintos. Para conversar sobre um mezanino, liste o que ficará sobre ele e o que continuará embaixo. A avaliação profissional transforma esse programa em requisitos de projeto; não utilize estimativas de carga de outros imóveis.",
      ],
      [
        "Confira as interferências do ambiente",
        "Registre alturas, janelas, portas, instalações e espaços de circulação. A escada precisa entrar no desenho desde o início. Um estudo de aproveitamento deve considerar o acesso e o funcionamento dos dois níveis.",
      ],
      [
        "Prepare a documentação existente",
        "Se houver plantas ou registros de reformas, informe sua disponibilidade. Identifique alterações desejadas e acabamentos. A proposta deve esclarecer o conjunto contratado, incluindo piso e proteções quando fizerem parte do escopo.",
      ],
    ],
    faq: [
      [
        "Um espaço alto sempre comporta mezanino?",
        "Não. Altura é apenas um dos dados; apoios, uso, acesso e exigências aplicáveis precisam ser avaliados.",
      ],
      [
        "Posso mudar de escritório para estoque depois?",
        "Uma mudança de uso exige avaliação dos responsáveis técnicos. A capacidade projetada não deve ser presumida nem aumentada sem análise.",
      ],
    ],
  },
  {
    name: "Xaxim",
    city: "Curitiba",
    path: "/bairro/xaxim",
    title: "Portão industrial no Xaxim: consulta de acesso | Alumimec",
    description:
      "Planeje o acesso com portão industrial no Xaxim: abertura, movimentação, apoios e relação com a cobertura. Confira o escopo antes de contratar.",
    source: curitiba,
    territorial:
      "Xaxim é listado pela Prefeitura entre os bairros de Curitiba. Não confunda a localização da obra com a sede Alumimec, que fica em São José dos Pinhais.",
    service: 5,
    sections: [
      [
        "Conte como a entrada será usada",
        "Descreva os tipos de veículos e a frequência de passagem. Fotografias da fachada e do lado interno ajudam a entender espaço de manobra, interferências e possibilidades de abertura. As medidas finais precisam ser conferidas antes da fabricação.",
      ],
      [
        "Relacione portão, fechamento e estrutura",
        "Uma entrada deve ser estudada com seus apoios e com o fechamento ao redor. Informe se a obra inclui galpão novo, troca de portão ou reforma de acesso. Essa distinção evita comparar propostas com trabalhos diferentes.",
      ],
      [
        "Detalhe os itens opcionais",
        "Automação, alimentação elétrica e acabamento devem ser discutidos explicitamente. Peça esclarecimento sobre materiais e responsabilidades de instalação. A fotografia do catálogo não representa configuração ou preço obrigatório.",
      ],
    ],
    faq: [
      [
        "O portão pode ser escolhido antes do galpão?",
        "O aspecto visual pode orientar a conversa, mas abertura e apoios precisam ser compatibilizados com o projeto do conjunto.",
      ],
      [
        "Uma medida aproximada basta para fabricar?",
        "Não. Ela inicia a consulta; fabricação depende de levantamento e definições confirmadas.",
      ],
    ],
  },
  {
    name: "Santa Felicidade",
    city: "Curitiba",
    path: "/bairro/santa-felicidade",
    title: "Estrutura residencial em Santa Felicidade | Alumimec",
    description:
      "Planeje estruturas residenciais em Santa Felicidade: garagens, áreas de convivência, acabamento e integração com a casa. Atendimento sob consulta.",
    source: curitiba,
    territorial:
      "Santa Felicidade é nome de bairro e de regional administrativa de Curitiba. Informe a rua e o bairro do cadastro, pois a regional abrange outros bairros e não identifica um imóvel específico.",
    service: 2,
    sections: [
      [
        "Defina a relação com a casa",
        "Explique se deseja proteger uma garagem, organizar uma área de convivência ou ampliar uma parte coberta. Envie fotos que mostrem o conjunto arquitetônico, janelas e passagens. O acabamento deve ser escolhido com os demais elementos do imóvel.",
      ],
      [
        "Observe o uso durante o dia",
        "Descreva a necessidade de iluminação, ventilação e proteção contra chuva. Essas informações ajudam a discutir cobertura e fechamento, sem determinar soluções apenas por aparência. Fixações e apoios exigem análise técnica.",
      ],
      [
        "Converse sobre conservação",
        "Peça que os materiais e acabamentos propostos venham acompanhados das orientações de conservação aplicáveis. Não se presume uma garantia ou vida útil específica. A proposta deve definir o que será entregue e quais trabalhos complementares serão necessários.",
      ],
    ],
    faq: [
      [
        "Uma foto de referência pode orientar o acabamento?",
        "Sim, como referência visual. Ela não substitui projeto, levantamento ou definição dos materiais para o seu imóvel.",
      ],
      [
        "Santa Felicidade na página significa atendimento imediato?",
        "Não. A equipe confirma disponibilidade para o endereço e para o escopo solicitado.",
      ],
    ],
  },
  {
    name: "Pinheirinho",
    city: "Curitiba",
    path: "/bairro/pinheirinho",
    title: "Escadas e aproveitamento de área no Pinheirinho | Alumimec",
    description:
      "Prepare a consulta de escadas no Pinheirinho: desnível, circulação, patamares e integração com mezaninos. Definições técnicas mediante projeto.",
    source: curitiba,
    territorial:
      "Pinheirinho consta como bairro e também dá nome a uma regional de Curitiba. A regional inclui outros bairros; confirme a identificação do imóvel ao enviar o endereço.",
    service: 4,
    sections: [
      [
        "Mostre o percurso entre os níveis",
        "Informe o desnível aproximado, o espaço disponível e o uso esperado da escada. Fotografe a chegada e a saída, não apenas o ponto de instalação. A circulação precisa ser entendida no conjunto do imóvel.",
      ],
      [
        "Integre a escada à área que será criada",
        "Em um mezanino ou ampliação, o acesso deve ser planejado junto com o piso. Patamares, guarda-corpos, interferências e apoios fazem parte da avaliação. Esta orientação não define medidas mínimas ou capacidade de carga para execução.",
      ],
      [
        "Separe referência visual e especificação",
        "O catálogo mostra uma escada do acervo, mas cada instalação tem condições próprias. Leve desenhos existentes e explique preferências de acabamento. A solução, as responsabilidades técnicas e as etapas de montagem precisam ser confirmadas na contratação.",
      ],
    ],
    faq: [
      [
        "Posso adaptar uma escada só pelas medidas da fotografia?",
        "Não. A fotografia não informa dimensões, apoios ou requisitos do projeto. O local precisa ser levantado.",
      ],
      [
        "A escada deve entrar no orçamento do mezanino?",
        "Esclareça se será contratada no mesmo escopo. Mesmo quando os contratos forem separados, os projetos precisam ser compatibilizados.",
      ],
    ],
  },
  ...STAGE_TWO_GUIDES,
  ...STAGE_THREE_GUIDES,
  ...STAGE_FOUR_GUIDES,
];
