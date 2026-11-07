import { SERVICES } from "./constants";
import { APPLICATIONS, applicationPath } from "./application-content";
import { LOCAL_GUIDES } from "./local-guides";
import { getAllRoutes, servicePath } from "./routes";

export interface SemanticSection {
  title: string;
  intro: string;
  topics: [string, string][];
  checklist: string[];
  services: number[];
  subject: string;
}

// Original editorial guidance. These are questions for a project, not claims of
// a certified process, fixed price, structural capacity or guaranteed delivery.
const decisions: Record<number, { topics: [string, string][]; checklist: string[] }> = {
  1: {
    topics: [
      ["Galpão, barracão e a atividade que vai funcionar", "Galpão e barracão podem descrever espaços de armazenagem, produção ou apoio. O nome não define o projeto. Para estudar a estrutura metálica, apresente o fluxo de materiais, as máquinas previstas, as áreas de estoque e as passagens. Uma planta com a operação desenhada permite discutir a posição dos pilares e dos portões sem escolher a solução apenas pela área total."],
      ["O orçamento precisa mostrar as interfaces", "Peça uma relação do que pertence à estrutura e do que depende de outros profissionais. Fundações, piso, instalações, fechamentos e proteção contra incêndio não devem ser considerados incluídos por suposição. Informe também equipamentos suspensos e qualquer previsão de painéis solares: cargas adicionais precisam entrar no estudo, inclusive quando a instalação é futura."],
      ["Recebimento e uso depois da montagem", "Antes da entrega, combine quais documentos e orientações acompanharão a obra e quem verificará os itens contratados. Mudanças de uso, equipamentos novos ou ampliações exigem nova avaliação. Guardar desenhos, especificações de acabamento e registros de intervenções ajuda a planejar inspeções sem improvisar reforços ou alterar peças estruturais."],
    ],
    checklist: ["Layout de produção, estoque e circulação", "Altura necessária e dimensões dos acessos", "Equipamentos atuais e cargas futuras a avaliar", "Etapas incluídas e responsáveis pelas interfaces"],
  },
  2: {
    topics: [
      ["Estrutura e telhamento formam um conjunto", "A estrutura sustenta a cobertura; telhas, fixações, arremates e coleta de água completam a solução. Na conversa sobre uma cobertura metálica, explique se a prioridade é proteger veículos, mercadorias, circulação ou uma área de permanência. A escolha do telhamento deve considerar esse uso. Uma especificação termoacústica não autoriza prometer temperatura ou isolamento sem analisar o conjunto."],
      ["Encontros com paredes e saída da água", "Fotografe o encontro com a edificação, os limites do terreno e os pontos existentes de escoamento. Calhas, rufos e condutores precisam ter responsabilidades definidas na proposta, quando aplicáveis. Um detalhe de ligação pode alterar o orçamento tanto quanto a área coberta. Inclinação, drenagem e ação do vento dependem do projeto, não de uma medida escolhida a olho."],
      ["Conservação prevista desde a contratação", "Pergunte como acessar a cobertura para inspeções e quais cuidados se aplicam às telhas e ao acabamento escolhido. A revisão de fixações, vedações e drenagem deve seguir as orientações dos responsáveis. Não suba no telhado para medir ou fotografar: use registros feitos do solo e deixe trabalhos em altura para profissionais habilitados e equipados."],
    ],
    checklist: ["Área a proteger e uso durante o dia", "Fotos do encontro com paredes e coberturas", "Destino previsto para a água da chuva", "Telhamento, arremates e drenagem no escopo"],
  },
  3: {
    topics: [
      ["A nova estrutura precisa conversar com a casa", "Uma garagem coberta, um pergolado ou uma ampliação em aço mudam o uso do espaço e sua relação com portas, janelas e circulação. Informe quais ambientes devem manter iluminação e ventilação e quais elementos da fachada pretende preservar. A solução deve partir da arquitetura e do uso, em vez de reproduzir uma fotografia sem conferir o imóvel."],
      ["Apoio existente não é capacidade comprovada", "Muros, lajes e paredes aparentam oferecer apoio, mas essa impressão não confirma que possam receber uma estrutura nova. Reúna os projetos disponíveis e indique reformas anteriores. A avaliação profissional deve definir apoios e ligações, além da necessidade de documentação e aprovações aplicáveis. Medidas enviadas pelo cliente servem à consulta inicial, não à fabricação definitiva."],
      ["Acabamento e rotina da residência", "Explique se a estrutura ficará aparente e como o espaço será limpo e utilizado. Alinhe cor, proteção superficial, encontros e cuidados de conservação. Durante a obra, discuta a entrada de materiais, a proteção das áreas vizinhas e as passagens que precisam continuar disponíveis. Materiais, prazo e sequência só ficam definidos após a avaliação e a proposta."],
    ],
    checklist: ["Finalidade da garagem, pergolado ou ampliação", "Portas, janelas e circulação a preservar", "Projetos ou informações da construção atual", "Acabamento desejado e acesso para montagem"],
  },
  4: {
    topics: [
      ["Mais área útil começa pela carga de uso", "Um mezanino para escritório não tem as mesmas solicitações de um estoque de peças ou de equipamentos. Liste os usos previstos, a posição das cargas e a circulação de pessoas. A capacidade do piso deve ser definida em projeto. Não use a metragem, uma foto ou a aparência dos perfis para estimar quanto peso a estrutura suporta."],
      ["Piso, altura e acesso precisam caber juntos", "Meça aproximadamente a altura total do ambiente para a conversa inicial e mostre portas, instalações e interferências. O espaço útil acima e abaixo do mezanino depende da composição completa do piso e da estrutura. Escada, guarda-corpo, circulação e exigências de segurança e acessibilidade devem ser avaliados com os responsáveis, sem presumir que qualquer escada atende a qualquer utilização."],
      ["Mudar o estoque também muda o projeto", "Registre o uso e as cargas considerados na contratação. Adicionar máquinas, empilhar mercadorias ou deslocar cargas concentradas pode exigir verificação da estrutura e de seus apoios. Antes de aprovar a proposta, alinhe revestimento do piso, acessos, acabamentos, montagem e documentos. Uma comparação por metro quadrado só faz sentido entre soluções de escopo e utilização equivalentes."],
    ],
    checklist: ["Uso do nível novo e tipos de cargas", "Altura livre atual e interferências", "Posição pretendida para escada e circulação", "Piso, proteções e apoios incluídos no projeto"],
  },
  5: {
    topics: [
      ["Escada de circulação e acesso técnico têm usos diferentes", "Antes de escolher uma escada metálica reta, caracol ou de acesso técnico, descreva quem a utilizará, com que frequência e se haverá transporte de objetos. Um acesso eventual para manutenção não deve ser confundido com a circulação cotidiana ou uma saída de emergência. Geometria e aplicação precisam ser definidas pelos responsáveis pelo projeto."],
      ["O percurso importa além dos degraus", "Mostre o desnível, o espaço disponível, as portas próximas e a área de chegada. Patamares, corrimãos, guarda-corpos, piso e pontos de fixação fazem parte da avaliação. Informe exposição à chuva, umidade ou resíduos da atividade para discutir acabamento e superfície de circulação. Não é possível definir largura ou inclinação segura a partir de uma imagem de referência."],
      ["Integração com a estrutura e conferência", "Quando a escada se conecta a um mezanino ou galpão, a interface deve ser prevista antes da fabricação. Combine quem avalia os apoios e quais itens entram na entrega. Depois da instalação, alterações de uso ou deslocamento da escada exigem consulta técnica. Cuidados de conservação seguem as especificações do material e do acabamento adotados."],
    ],
    checklist: ["Desnível e espaço em planta", "Usuários, frequência e finalidade do acesso", "Ambiente interno ou externo", "Patamares, proteções e pontos de fixação"],
  },
  6: {
    topics: [
      ["O vão deve atender ao movimento real", "Em um portão industrial, a abertura precisa ser estudada junto com veículos, pedestres e operações de carga. Informe as dimensões aproximadas do vão, o tipo de veículo e a frequência de abertura. Mostre o espaço lateral e superior disponível. O modelo de movimento e a posição dos elementos dependem dessas condições, não apenas da largura da fachada."],
      ["Automação é uma interface a confirmar", "Preparação para automação não significa motor, comandos e instalação elétrica automaticamente incluídos. Se esse recurso for necessário, detalhe o uso esperado e peça que componentes, alimentação, segurança de operação e responsabilidades apareçam na proposta. A escolha deve considerar o conjunto e as orientações técnicas, sem adaptar um equipamento apenas porque cabe no local."],
      ["Piso, fechamento e conservação", "Desníveis, circulação próxima e condições de drenagem podem interferir no funcionamento. Envie fotos feitas de posição segura, incluindo os encontros do vão com a construção. Alinhe acabamento, ferragens e orientações de inspeção. Não tente corrigir travamentos forçando o portão ou retirando dispositivos: interrompa o uso inseguro e procure avaliação profissional."],
    ],
    checklist: ["Largura, altura e espaço de abertura", "Veículos, pedestres e frequência de uso", "Necessidade de automação e energia disponível", "Condições do piso e da estrutura de fixação"],
  },
};

const generalTopics: [string, string][] = [
  ["Compare soluções pelo uso que elas precisam atender", "Galpões, coberturas, mezaninos, estruturas residenciais, escadas e portões resolvem necessidades distintas e podem se complementar. Comece pelo objetivo: proteger uma área, ampliar espaço, organizar estoque ou melhorar um acesso. Depois, compare alternativas com o mesmo escopo, considerando estrutura, acabamento, transporte, montagem e interfaces com a construção."],
  ["Preço e prazo dependem de informações concretas", "Área e medidas aproximadas ajudam a iniciar a conversa, mas não determinam sozinhas o custo de uma estrutura metálica. Vãos, cargas, apoios, condições de acesso e materiais influenciam a proposta. Peça que etapas, responsabilidades e exclusões estejam claras. Fotos e referências ajudam a explicar a intenção; não substituem levantamento e avaliação técnica."],
  ["Planeje a vida da estrutura além da obra", "Pergunte quais orientações de conservação e documentos se aplicam ao serviço contratado. A exposição do local e o acabamento escolhido devem entrar nessa conversa. Novos equipamentos, mudança de uso ou ampliação podem alterar as solicitações da estrutura e precisam ser avaliados antes de qualquer intervenção. Não há capacidade, prazo ou garantia universal definida por esta página."],
];

const applicationTopics: Record<string, [string, string][]> = {
  "ampliacao-de-galpoes": [
    ["Planeje a ampliação como uma transição", "Marque as áreas que serão incorporadas e os fluxos que mudarão depois da obra. Um portão reposicionado pode alterar manobras, estoque e circulação, enquanto a nova cobertura pode exigir outra solução para a água. Relacione essas mudanças antes de comparar uma ampliação lateral com um mezanino ou uma área coberta de apoio."],
    ["Defina o que precisa continuar funcionando", "Separe o que é necessidade operacional do que é preferência de cronograma. Informe horários, áreas com restrição e locais de descarga. A equipe precisa avaliar a sequência possível; manter toda a operação em funcionamento não é uma condição presumida. Registre também quem prepara os apoios e libera cada etapa."],
    ["Deixe as interfaces documentadas", "Na proposta, identifique a estrutura nova, os encontros com a parte existente e os serviços complementares. Reaproveitamento de apoios, ligação de coberturas e alterações de carga precisam de avaliação. Guarde o escopo aprovado para que uma futura expansão não se baseie apenas em memória ou fotografia."],
  ],
  "cobertura-de-estacionamentos": [
    ["Proteção sem perder a utilidade das vagas", "Desenhe vagas, manobras, circulação a pé e entrada de veículos maiores. Posicionar apoios apenas para simplificar a estrutura pode comprometer o estacionamento; essa compatibilização faz parte do estudo. Indique também portas, janelas e saídas próximas que precisam permanecer utilizáveis."],
    ["Inclua o caminho da água na conversa", "Mostre as cotas disponíveis e os pontos de coleta existentes, sem tentar definir a drenagem por fotografia. A água precisa ter destino previsto no projeto, sem criar gotejamento nas passagens. Telhas, arremates, calhas e condutores devem ter escopo e responsabilidades esclarecidos quando necessários."],
    ["Organize implantação e conservação", "Informe se o estacionamento continuará em uso e onde materiais podem ser recebidos. Combine isolamento, acesso e etapas conforme a avaliação. Peça orientações para inspeção e limpeza da cobertura; a circulação sobre telhas não deve ser tratada como uma tarefa rotineira do usuário do imóvel."],
  ],
  "areas-de-carga-e-descarga": [
    ["Projete em torno da operação de recebimento", "Liste veículos, cargas, equipamentos de movimentação e trajetos de pessoas. A cobertura é uma parte do conjunto: altura de passagem, abertura de portas e posições de espera precisam ser estudadas sem criar conflito com pilares e acessos. As dimensões finais dependem da avaliação técnica da operação."],
    ["Separe a estrutura dos equipamentos", "Informe balanças, esteiras, instalações e qualquer carga que pretenda fixar à estrutura. Não presuma que docas, plataformas, equipamentos logísticos ou instalações estejam incluídos no serviço de cobertura. A proposta deve identificar as interfaces e os responsáveis por cada item."],
    ["Concilie a montagem com a logística", "Reúna horários de recebimento e espaços disponíveis para descarga de peças e montagem. Restrições devem ser discutidas antes de fechar prazo, pois podem mudar a sequência da obra. Para decidir, compare alternativas por proteção, circulação e compatibilidade operacional, não somente por área coberta."],
  ],
  "aproveitamento-de-grandes-areas": [
    ["Área disponível não é o mesmo que área utilizável", "Localize pilares, instalações, acessos e equipamentos em um croqui. O aproveitamento depende da atividade e das passagens necessárias. Em alguns projetos, reorganizar a área existente, estudar uma cobertura ou avaliar um mezanino são caminhos distintos; a escolha exige comparar o resultado funcional de cada opção."],
    ["Mezanino ou expansão no terreno?", "Um novo nível altera cargas, altura e acesso. A expansão lateral depende do terreno e da ligação com o imóvel. Descreva a capacidade de operação desejada e deixe a viabilidade de cada solução para o projeto. Não presuma que a alternativa com maior metragem ou menor valor inicial entrega o mesmo uso."],
    ["Contrate o conjunto que resolve a necessidade", "Peça uma lista de estrutura, piso, fechamento, acesso e acabamento, com os itens incluídos e as interfaces externas. Uma comparação clara também considera montagem, preparação do local e documentação. Eventuais fases futuras devem ser estudadas desde o início, sem promessa automática de expansão."],
  ],
};

const routes = getAllRoutes();
export function getSemanticContent(pathname: string): SemanticSection | null {
  const path = pathname.replace(/\/$/, "") || "/";
  const route = routes.find((r) => r.path === path);
  if (!route) return null; // Do not turn 404s or unregistered addresses into landing pages.
  const service = SERVICES.find((s) => servicePath(s.title) === path);
  const local = LOCAL_GUIDES.find((g) => g.path === path);
  const application = APPLICATIONS.find((a) => applicationPath(a.slug) === path);
  const localService = local ? SERVICES[local.service] : undefined;
  const selected = service || localService;
  const location = local ? `${local.name}, ${local.city}` : route.name;
  const title = service
    ? `${service.title}: defina o que sua obra precisa`
    : application
      ? `${application.title}: transforme a ideia em uma consulta`
      : route.type === "home"
        ? "Estruturas metálicas com uma proposta que faça sentido para sua obra"
        : route.type === "coverage"
          ? "Encontre o endereço da obra e organize o próximo passo"
          : `Seu projeto em ${location}: converse com a Alumimec`;
  const intro = service
    ? `Está pesquisando ${service.title.toLowerCase()} em Curitiba e região? A Alumimec trabalha com projeto, fabricação e montagem. Use os pontos abaixo para explicar sua necessidade e solicitar uma proposta com materiais, etapas e condições definidos para o imóvel.`
    : application
      ? `Para estudar ${application.title.toLowerCase()}, descreva o resultado esperado e as condições atuais do espaço. A Alumimec pode avaliar o projeto dentro dos serviços do seu catálogo; a combinação e os limites de cada entrega devem ficar claros na proposta.`
      : local
        ? `Ao consultar ${localService?.title.toLowerCase()} para ${location}, leve a situação tratada neste guia para uma conversa sobre o seu imóvel. Endereço completo, finalidade e fotos ajudam a organizar a avaliação. A Alumimec atende a partir da sede em São José dos Pinhais, sem filial declarada nesta localidade.`
        : route.type === "city"
          ? `Para uma obra em ${location}, reúna os dados do imóvel antes de comparar soluções em aço. A Alumimec atende os municípios da Região Metropolitana de Curitiba por deslocamento ao local. A sede fica no Afonso Pena, em São José dos Pinhais; acesso, projeto e agendamento são combinados com a equipe.`
          : route.type === "neighborhood"
            ? `Vai consultar uma estrutura para a região identificada como ${location}? Confirme também município, rua e CEP: referências locais e nomes populares não bastam para localizar a obra. A Alumimec avalia o endereço e a necessidade a partir de sua sede em São José dos Pinhais.`
            : route.type === "coverage"
              ? "Escolha primeiro o município e confirme o endereço completo. A consulta pode ser sobre galpão, cobertura, estrutura residencial, mezanino, escada ou portão industrial. As páginas locais ajudam no planejamento, mas não são filiais nem comprovam obras executadas em cada bairro."
              : "A escolha de uma estrutura em aço começa pelo uso do espaço e pelas condições da obra. A Alumimec reúne seis frentes de serviço para projetos industriais, comerciais e residenciais, com sede em São José dos Pinhais e atendimento em Curitiba e região metropolitana.";
  const content = selected ? decisions[selected.id] : undefined;
  return {
    title,
    intro,
    topics: application ? applicationTopics[application.slug] : content?.topics || generalTopics,
    checklist: application ? application.checklist : content?.checklist || ["Município, bairro, rua e CEP da obra", "Objetivo do projeto e uso do espaço", "Fotos seguras e medidas aproximadas", "Projetos disponíveis e restrições de acesso"],
    services: application?.services || (selected ? [selected.id] : SERVICES.map((s) => s.id)),
    subject: service
      ? `Quero consultar ${service.title.toLowerCase()}. Vou enviar o endereço, o uso do espaço e os dados da obra.`
      : application
        ? `Quero estudar ${application.title.toLowerCase()}. Vou enviar as condições do imóvel.`
        : location
          ? `Quero consultar um projeto para ${location}. Vou confirmar município, rua, CEP e o serviço necessário.`
          : "Quero consultar meu projeto de estrutura metálica. Vou enviar endereço, uso do espaço e fotos.",
  };
}
