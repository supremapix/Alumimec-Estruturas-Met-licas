import type { LocalGuide } from "./local-guides";
const base = "https://www.sjp.pr.gov.br/mapas-do-municipio/";
export const STAGE_FOUR_GUIDES: LocalGuide[] = [
  {
    name: "Academia",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/academia",
    title: "Ampliação no Academia: diferencie jardim e bairro | Alumimec",
    description:
      "Prepare uma ampliação no bairro Academia com identificação do imóvel, áreas que permanecem em uso e ligação entre construção atual e espaço novo.",
    source: base + "academia/",
    territorial:
      "O perfil municipal do Academia inclui jardins, plantas e vilas, entre eles Marambaya e Cristal. Esses nomes não substituem o bairro cadastrado. A fonte reúne dados históricos; use o endereço atual do imóvel para o atendimento por deslocamento.",
    service: 2,
    sections: [
      [
        "Confirme a referência antes de marcar a avaliação",
        "Na mensagem, diferencie o nome pelo qual a região é conhecida e o bairro que aparece no cadastro do endereço. Inclua rua, número e CEP. O nome Cristal também aparece como bairro próprio no índice municipal; essa distinção evita encaminhar a consulta para uma referência diferente.",
      ],
      [
        "Mostre a transição entre o ambiente antigo e o novo",
        "Se pretende ampliar um espaço, desenhe onde termina a construção atual e qual área deseja incorporar. Indique aberturas, passagens e instalações que devem continuar funcionando. Não presuma que paredes ou apoios existentes possam receber novos elementos sem avaliação.",
      ],
      [
        "Defina o uso que motivou a ampliação",
        "Explique se o objetivo é uma área de apoio, circulação ou ambiente residencial. A proposta precisa esclarecer estrutura, cobertura, acabamentos e interfaces. A Alumimec atende por deslocamento, com projeto e agendamento avaliados para o imóvel.",
      ],
    ],
    faq: [
      [
        "Jardim Cristal e bairro Cristal identificam o mesmo endereço?",
        "Não se deve concluir isso apenas pelo nome. O perfil do Academia cita jardim Cristal, enquanto o índice municipal também apresenta um bairro Cristal. Use rua, número e CEP.",
      ],
      [
        "A área nova pode mudar a circulação da casa?",
        "Essa possibilidade deve ser considerada no planejamento. Mostre os percursos atuais e o que precisa permanecer acessível.",
      ],
    ],
  },
  {
    name: "Campo Largo da Roseira",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/campo-largo-da-roseira",
    title:
      "Galpões no Campo Largo da Roseira: identifique a unidade | Alumimec",
    description:
      "Organize uma consulta de galpão no Campo Largo da Roseira, em São José dos Pinhais, com entrada da unidade, escopo da expansão e interfaces operacionais.",
    source: base + "campo-largo-da-roseira/",
    territorial:
      "Campo Largo da Roseira é bairro de São José dos Pinhais, distinto do município Campo Largo. O perfil municipal relaciona o loteamento Industrial Automotivo e o jardim Montreal, entre outras referências. Isso não afirma clientes ou obras da Alumimec nesses locais.",
    service: 0,
    sections: [
      [
        "Informe a unidade e o acesso correto",
        "Para uma consulta em um conjunto de lotes ou instalações, indique a identificação da unidade e o acesso que deve ser utilizado. O endereço completo vem antes do ponto de referência. A lista municipal ajuda a distinguir os nomes, mas não informa condições atuais de entrada, descarga ou montagem.",
      ],
      [
        "Separe ampliação produtiva e área de apoio",
        "Explique se a necessidade é aumentar a área de trabalho, organizar estoque ou criar apoio externo. Marque a relação entre o espaço atual e o futuro. Equipamentos, circulação e uso devem ser informados para avaliação profissional, sem presumir vãos ou capacidades.",
      ],
      [
        "Coordene as interfaces da proposta",
        "Identifique quem acompanha o projeto e quais serviços serão contratados separadamente. Estrutura, fechamento, piso e instalações devem ter responsabilidades claras. A Alumimec se desloca ao local da obra mediante combinação do atendimento; não há prazo de montagem definido por bairro.",
      ],
    ],
    faq: [
      [
        "Devo informar Campo Largo ou Campo Largo da Roseira?",
        "Para o bairro deste guia, informe Campo Largo da Roseira, São José dos Pinhais. Campo Largo é outro município da RMC.",
      ],
      [
        "A presença do loteamento Industrial Automotivo significa experiência local comprovada?",
        "Não. É uma referência da fonte municipal e não uma declaração de cliente, credenciamento ou obra da Alumimec.",
      ],
    ],
  },
  {
    name: "Colônia Rio Grande",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/colonia-rio-grande",
    title:
      "Cobertura na Colônia Rio Grande: preserve áreas compartilhadas | Alumimec",
    description:
      "Prepare o estudo de uma cobertura com circulação compartilhada na Colônia Rio Grande, identificando responsáveis, acessos e o escopo do fornecimento.",
    source: base + "colonia-rio-grande/",
    territorial:
      "O perfil municipal da Colônia Rio Grande relaciona o jardim dos Bandeirantes e a planta Froelich. Use essas referências como complemento ao endereço cadastrado. Os dados demográficos históricos da fonte não foram usados para presumir o tipo atual de imóvel.",
    service: 1,
    sections: [
      [
        "Identifique quem utiliza e quem decide sobre a área",
        "Se a cobertura atender um espaço compartilhado, informe os usos e quem representa os responsáveis pelo imóvel. Explique se existem vagas, passagem ou área de apoio que precisam coexistir. O estudo deve partir do uso real, sem presumir que todo imóvel do bairro seja condomínio.",
      ],
      [
        "Marque o que não pode perder acesso",
        "Inclua entradas, equipamentos e caminhos utilizados por outras pessoas. Fotografe a área completa e os encontros com construções existentes. A posição da estrutura e a configuração da cobertura precisam ser avaliadas com essas interfaces.",
      ],
      [
        "Registre as decisões antes da contratação",
        "Reúna as referências visuais e os requisitos acordados entre os responsáveis. Materiais, acabamento, preparação do local e limites do fornecimento devem aparecer na proposta. A visita e a execução são combinadas após avaliação; a página não constitui agendamento.",
      ],
    ],
    faq: [
      [
        "A Alumimec decide pelas pessoas que compartilham o imóvel?",
        "Não. Identifique quem representa os responsáveis e apresente as necessidades acordadas para análise da proposta.",
      ],
      [
        "Posso informar apenas Jardim dos Bandeirantes?",
        "Inclua também Colônia Rio Grande, São José dos Pinhais, rua e CEP para identificar corretamente a consulta.",
      ],
    ],
  },
  {
    name: "Contenda",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/contenda",
    title: "Estruturas no Contenda de São José dos Pinhais | Alumimec",
    description:
      "Diferencie bairro Contenda e município Contenda ao preparar uma consulta de galpão, cobertura ou aproveitamento de área em São José dos Pinhais.",
    source: base + "contenda/",
    territorial:
      "Este guia trata do bairro Contenda de São José dos Pinhais. O perfil municipal inclui o jardim Paulista. O município Contenda é outra referência da RMC e tem página própria no site; informe município e CEP ao solicitar atendimento.",
    service: 0,
    sections: [
      [
        "Diferencie localização e referência de chegada",
        "Envie o município junto com o bairro, mesmo quando o nome da região pareça suficiente. Caso o imóvel seja conhecido por jardim Paulista, acrescente essa informação sem retirar rua e CEP. Confirme também qual entrada deve ser utilizada para o atendimento no local.",
      ],
      [
        "Descreva a função da área disponível",
        "Se pretende aproveitar uma área para galpão ou cobertura, explique o que será feito nela e quais construções já existem. Indique circulação, equipamentos e limites de uso conhecidos. O nome do bairro não permite inferir solo, acesso ou condição rural de um imóvel específico.",
      ],
      [
        "Organize levantamento e escopo",
        "Disponibilize fotos e desenhos existentes, e diferencie informações aproximadas de medidas confirmadas. O projeto deve orientar estrutura, apoios e montagem. Peça que a proposta esclareça o que cabe à Alumimec e o que depende de outros profissionais ou fornecedores.",
      ],
    ],
    faq: [
      [
        "Este guia é para o município Contenda?",
        "Não. Ele trata do bairro Contenda em São José dos Pinhais. O município Contenda também é atendido por deslocamento, mas precisa ser identificado corretamente.",
      ],
      [
        "A referência territorial define o tipo de galpão?",
        "Não. A solução depende da atividade, do imóvel, do levantamento e do projeto.",
      ],
    ],
  },
  {
    name: "Aviação",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/aviacao",
    title: "Estruturas no Aviação: planeje garagem e área de apoio | Alumimec",
    description:
      "Prepare uma consulta de estrutura residencial no Aviação, distinguindo o bairro da área aeroportuária e organizando garagem, passagem e apoio.",
    source: base + "aviacao/",
    territorial:
      "O perfil municipal do Aviação inclui os conjuntos Apolo e Habitat Aeroporto e distingue o bairro da Área Institucional Aeroportuária. Um nome associado a aeroporto no endereço não comprova que a obra seja dentro de instalação aeroportuária.",
    service: 2,
    sections: [
      [
        "Identifique o imóvel, além do conjunto",
        "Informe Aviação, São José dos Pinhais, junto com rua, número e CEP. Acrescente o nome do conjunto ou jardim quando ajudar a localizar a entrada. O atendimento da Alumimec ocorre por deslocamento; a equipe precisa conhecer o endereço real para combinar a avaliação.",
      ],
      [
        "Separe garagem, passagem e apoio",
        "Quando a mesma área precisa cumprir mais de uma função, desenhe o uso em cada momento. Explique onde o veículo permanece e por onde as pessoas passam. Isso ajuda a discutir a ampliação sem transformar toda área disponível em área ocupada pela estrutura.",
      ],
      [
        "Apresente as ligações com a residência",
        "Mostre portas, janelas, instalações e cobertura existentes. A solução deve considerar os encontros e o funcionamento do imóvel. Materiais e acabamento precisam ser especificados na proposta, e apoios existentes só podem ser considerados após avaliação técnica.",
      ],
    ],
    faq: [
      [
        "Habitat Aeroporto significa obra no aeroporto?",
        "Não se deve fazer essa associação. O perfil municipal cita Habitat Aeroporto como conjunto do Aviação. Identifique o endereço e a natureza do imóvel.",
      ],
      [
        "A empresa declara credenciamento aeroportuário nesta página?",
        "Não. A página apresenta atendimento ao bairro por deslocamento, sem afirmar credenciamento ou contratos com instalações aeroportuárias.",
      ],
    ],
  },
  {
    name: "Cristal",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/cristal",
    title: "Área de trabalho no Cristal: planeje o anexo ao imóvel | Alumimec",
    description:
      "Prepare a avaliação de um anexo com estrutura metálica no bairro Cristal, definindo uso, acesso independente e ligação com a construção existente.",
    source: base + "cristal/",
    territorial:
      "Cristal consta como bairro no índice municipal. Seu perfil cita jardins como Cruzeiro do Sul e Safira II e a vila Namur. A referência deve ser diferenciada de nomes semelhantes citados em outros perfis, usando o endereço atual.",
    service: 2,
    sections: [
      [
        "Defina o uso do anexo",
        "Explique se o espaço pretendido servirá de apoio, organização ou trabalho e como ele se relacionará com a construção atual. Liste os equipamentos previstos e os acessos necessários. A ideia deve ser avaliada conforme as condições e exigências do imóvel, sem presumir autorização para uma atividade.",
      ],
      [
        "Estude a separação dos percursos",
        "Se deseja uma entrada independente, mostre por onde ocorrerá a chegada e como os demais ambientes continuarão acessíveis. Indique portões, portas e circulação existente. A configuração do anexo precisa ser discutida junto com a estrutura e a cobertura.",
      ],
      [
        "Esclareça o que é novo e o que permanece",
        "Marque nas fotos os elementos a manter e a área desejada. Informe projetos existentes e necessidades de instalações. Compatibilidade, apoios e interfaces dependem de avaliação profissional, mesmo quando a intenção inicial pareça uma pequena extensão.",
      ],
    ],
    faq: [
      [
        "Um anexo pode ter acesso independente?",
        "Essa intenção pode ser estudada. Informe os percursos e as condições do imóvel para avaliar a configuração e as exigências aplicáveis.",
      ],
      [
        "Cristal é apenas o nome de um jardim?",
        "O índice municipal apresenta um bairro Cristal. Há também referências semelhantes em outros perfis; por isso rua e CEP são essenciais.",
      ],
    ],
  },
  {
    name: "Miringuava",
    city: "São José dos Pinhais",
    path: "/bairro/sao-jose-dos-pinhais/miringuava",
    title: "Cobertura no Miringuava: organize apoio e conservação | Alumimec",
    description:
      "Planeje uma área coberta de apoio no Miringuava com identificação do endereço, acesso para conservação e integração com instalações do imóvel.",
    source: base + "miringuava/",
    territorial:
      "O perfil municipal do Miringuava inclui os jardins Carmen, Carmen II, Fabiola I e Fabiola II. A identificação territorial não descreve as condições do seu terreno ou das vias de acesso. Informe endereço e referências atuais.",
    service: 1,
    sections: [
      [
        "Separe proteção de área e guarda de materiais",
        "Explique o que ficará sob a cobertura e quais atividades ocorrerão ali. Informe se há equipamentos, materiais ou circulação de pessoas que precisam de acesso contínuo. A finalidade deve orientar o estudo sem presumir uma configuração única para toda a região.",
      ],
      [
        "Considere a conservação do conjunto",
        "Mostre as instalações e elementos próximos que precisam permanecer acessíveis. Peça que encontros e itens previstos para escoamento sejam esclarecidos no escopo. A manutenção futura deve ser discutida com os responsáveis pelo projeto; não se recomenda acesso improvisado à cobertura.",
      ],
      [
        "Prepare informações para o deslocamento",
        "Além de bairro, rua e CEP, indique a entrada do imóvel e restrições que você conhece. Fotos do acesso ajudam a conversar sobre logística, sem prometer equipamento de montagem ou prazo antes da avaliação. A Alumimec combina o atendimento diretamente com o solicitante.",
      ],
    ],
    faq: [
      [
        "Informar Jardim Carmen substitui o bairro?",
        "Use a referência como complemento e informe também Miringuava, município, rua e CEP.",
      ],
      [
        "A consulta define como fazer manutenção na cobertura?",
        "Não. Solicite orientações para os componentes contratados e avaliação profissional para intervenções; esta página organiza a contratação.",
      ],
    ],
  },
];
