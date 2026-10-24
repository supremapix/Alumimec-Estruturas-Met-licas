export const MUNICIPAL_CONTEXT: Record<
  string,
  { title: string; text: string; planning: string; sources: [string, string][] }
> = {
  Contenda: {
    title: "Informe o loteamento junto do endereço",
    text: "O índice cartográfico municipal identifica loteamentos, jardins e chácaras. O nome do loteamento ajuda a localizar o imóvel, mas não substitui rua, número e cadastro. Contenda é também nome de um bairro de São José dos Pinhais; deixe o município explícito.",
    planning:
      "Para estudar cobertura ou ampliação, envie fotos da entrada e identifique o lote ou unidade. Explique o uso pretendido e quais passagens precisam permanecer livres.",
    sources: [
      [
        "Mapas municipais de Contenda",
        "https://contenda.pr.gov.br/pagina/mapas",
      ],
    ],
  },
  Piên: {
    title: "Confirme a referência e a grafia do endereço",
    text: "A publicação municipal de saúde de outubro de 2026 usa Campina dos Crispins; outras publicações municipais usam Crespins. O nome sozinho pode gerar dúvidas. A lei do quadro urbano trata de perímetros e não deve ser usada como se fosse uma lista completa de bairros.",
    planning:
      "No pedido de galpão, cobertura ou acesso, informe rua ou estrada, número e referência de entrada. Se houver mais de uma entrada no imóvel, indique qual poderá ser avaliada para o serviço.",
    sources: [
      [
        "Referências municipais de outubro de 2026",
        "https://www.pien.pr.gov.br/noticias/acoes-de-saude-da-mulher-ocorrem-em-horario-estendido-em-seis-unidades-de-pien-nesta-quarta-feira",
      ],
      [
        "Lei do quadro urbano, 2021",
        "https://www.pien.pr.gov.br/storage/files/2021/11/lei-n-1436-2021-altera-o-quadro-urbano.pdf",
      ],
    ],
  },
  "Balsa Nova": {
    title: "Diferencie distrito, localidade e imóvel",
    text: "O diagnóstico municipal distingue a sede, Bugre e São Luiz do Purunã como distritos, além de outras localidades. É uma referência de planejamento, não comprovação de uma lista atual de bairros. Informe a identificação completa da obra dentro do município.",
    planning:
      "Ao solicitar uma estrutura, descreva onde fica a entrada da propriedade e quais espaços serão usados. Fotos do percurso interno e da área pretendida ajudam a discutir transporte e montagem, sem presumir condições da estrada ou do terreno.",
    sources: [
      [
        "Diagnóstico municipal, página 11 do PDF",
        "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
      ],
    ],
  },
  "Doutor Ulysses": {
    title: "Área de saúde não substitui o endereço da obra",
    text: "O mapa municipal de equipes de saúde agrupa referências nas áreas Cerrado, Caraguatá e Sete Quedas. Essas áreas de atendimento não devem ser confundidas automaticamente com três bairros ou usadas como endereço completo.",
    planning:
      "Informe a comunidade ou referência conhecida e a entrada exata do imóvel. Para uma cobertura, galpão ou ampliação, separe fotos do espaço da obra e fotos do acesso, explicando o que já existe e o que pretende acrescentar.",
    sources: [
      [
        "Mapa e explicação da Prefeitura",
        "https://www.doutorulysses.pr.gov.br/index.php?idNot=339&mod=988",
      ],
    ],
  },
  Lapa: {
    title: "Use o cadastro do imóvel como referência",
    text: "O SAPL registra a revogação da lei de delimitação de bairros de 1998. O texto de 2003 consultado distingue sede urbana e distrito de Mariental, sem fornecer um cadastro atual completo de bairros. Uma planta antiga não resolve sozinha a identificação atual.",
    planning:
      "Reúna endereço, identificação do imóvel e projetos disponíveis antes de discutir o acréscimo de área ou a ligação de uma cobertura à construção existente. A avaliação técnica deve considerar o imóvel concreto.",
    sources: [
      [
        "Situação da lei de 1998 no SAPL",
        "https://sapl.lapa.pr.leg.br/norma/1159",
      ],
      [
        "Texto municipal de 2003",
        "https://sapl.lapa.pr.leg.br/media/sapl/public/normajuridica/2003/891/891_texto_integral.pdf",
      ],
    ],
  },
  "Almirante Tamandaré": {
    title: "Separe a consulta do projeto das informações cadastrais",
    text: "O portal municipal de Urbanismo reúne orientações de Consulta Prévia e procedimentos ligados a projetos. Para esclarecer a identificação e as condições do imóvel, use os canais oficiais correspondentes. A página comercial não substitui essa consulta.",
    planning:
      "Para ampliar um galpão ou criar um novo nível, reúna o que existe de projeto e explique a mudança de uso pretendida. Confirme na proposta quais levantamentos e responsabilidades estão incluídos; não se presume aprovação municipal ou regularização como parte do serviço.",
    sources: [
      [
        "Urbanismo e Consulta Prévia municipal",
        "https://tamandare.pr.gov.br/secretarias/urbanismo",
      ],
    ],
  },
};
