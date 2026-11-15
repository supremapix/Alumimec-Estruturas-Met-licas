import React from "react";

const guides: Record<string, {title:string;intro:string;items:[string,string][]}> = {
  "Fazenda Rio Grande": {
    title: "Vai adaptar um imóvel em Fazenda Rio Grande? Planeje antes de fabricar",
    intro: "Uma loja que precisa de área coberta, um estoque que cresceu e um imóvel alugado exigem decisões diferentes. Para consultar a Alumimec em Fazenda Rio Grande, comece pelo uso pretendido e pelo que já existe no espaço. A fabricação sob medida deve acompanhar um escopo definido, não apenas uma foto de referência.",
    items: [
      ["Posso colocar um mezanino em um imóvel alugado?", "Antes de encomendar, alinhe com o proprietário as intervenções pretendidas e registre o que foi combinado. Reúna desenhos disponíveis e descreva o uso do piso superior, as cargas previstas e os acessos necessários. A viabilidade depende de avaliação técnica do imóvel; autorização do proprietário, por si só, não comprova que a estrutura pode receber a intervenção."],
      ["Se eu mudar de endereço, consigo levar a estrutura?", "Informe essa intenção na consulta. Desmontagem e reinstalação não são garantidas: o novo imóvel pode exigir outras dimensões, apoios e condições de montagem. Peça que o responsável avalie a possibilidade e seus limites no projeto. Considere também retirada, transporte, armazenamento e adequações; não compare uma solução permanente com outra relocável apenas pelo preço inicial."],
      ["O acesso é estreito. Isso impede uma cobertura ou mezanino?", "Não é possível concluir apenas por uma foto. Mostre o percurso da entrega até a área de montagem, incluindo portões, corredores, curvas e obstáculos aparentes. Informe se existem horários ou áreas compartilhadas que precisam ser preservados. A equipe avaliará a logística e a solução de montagem antes de confirmar o serviço, sem presumir que peças grandes entrarão pelo mesmo caminho usado pelas pessoas."],
      ["Como evitar encomendar algo diferente do que imaginei?", "Separe função e aparência: diga o que será protegido ou armazenado, quais passagens precisam ficar livres e qual acabamento espera. Marque nas referências o que você quer aproveitar, sem tratá-las como projeto pronto. Antes da fabricação, confirme medidas levantadas, desenho ou descrição aprovada, itens incluídos e como mudanças serão registradas. Envie o endereço completo em Fazenda Rio Grande para não confundir a referência do bairro com outro município."],
    ],
  },
  "Colombo": {
    title: "Cobertura ou barracão em Colombo: comece pelo uso do imóvel",
    intro: "Cobrir uma área para veículos e preparar um barracão para uma oficina são decisões diferentes. Ao pedir atendimento em Colombo, explique o que precisa funcionar no espaço, envie o endereço e mostre os acessos. A Alumimec tem sede em São José dos Pinhais; a consulta não representa uma filial em Colombo nem uma visita já agendada.",
    items: [
      ["Quero cobrir o pátio. Preciso mudar a circulação?", "Descreva quais veículos e pessoas usam a área e onde acontecem manobras, carga e descarga. Mostre portões, janelas e passagens que devem permanecer livres. A posição dos apoios e a altura disponível precisam ser estudadas junto com a circulação, não escolhidas apenas para aproveitar toda a área do lote. Medidas iniciais ajudam a conversa, mas não substituem o levantamento técnico."],
      ["O terreno tem desnível. Posso pedir preço só pela metragem?", "A metragem permite iniciar a consulta, mas não define a solução nem o custo final. Apresente fotos seguras do acesso e informações disponíveis sobre níveis, apoios existentes e histórico de intervenções. O responsável técnico deverá avaliar o terreno e as interfaces necessárias ao projeto. Não escolha fundações ou intervenções no solo por comparação com a obra de um vizinho."],
      ["Uma cobertura aberta pode virar oficina fechada depois?", "Informe a intenção antes do projeto. Fechamentos, portas, circulação, ventilação e instalações podem mudar as necessidades do espaço e da estrutura. Peça avaliação do uso pretendido e das condições para a futura adaptação. Não considere o fechamento uma simples adição de telhas laterais, nem presuma que a estrutura existente foi preparada para essa mudança."],
      ["Como registrar o que vou receber e cuidar após a entrega?", "Solicite uma proposta com desenhos ou descrição do escopo, acabamento previsto, itens fornecidos e responsabilidades de montagem. Combine os documentos e orientações que acompanharão a entrega, inclusive como comunicar dúvidas de manutenção e eventuais ocorrências. Pergunte pelas condições de garantia por escrito, sem presumir prazo ou cobertura. Para inspecionar partes elevadas, procure equipe habilitada; não suba na cobertura."],
    ],
  },
  "Pinhais": {
    title: "Estrutura metálica em Pinhais: o que conferir antes de fechar a proposta",
    intro: "Uma consulta para cobertura, galpão ou mezanino em Pinhais fica mais útil quando separa materiais, fabricação, montagem e preparação do imóvel. O endereço completo define o atendimento; não confunda Pinhais com São José dos Pinhais, onde fica a sede da Alumimec. As orientações abaixo ajudam a organizar a conversa, sem substituir o projeto técnico.",
    items: [
      ["Posso comprar os materiais e contratar somente a montagem?", "Apresente essa intenção antes de pedir a proposta e confirme se a equipe aceita esse formato para o serviço. A lista e as especificações precisam ser compatíveis com o projeto. Combine quem compra, confere, transporta e armazena as peças e como serão tratadas faltas ou divergências. Comprar antecipadamente pelo menor preço pode gerar retrabalho se os componentes não atenderem ao escopo."],
      ["O que precisa aparecer no orçamento de mão de obra?", "Peça a descrição das etapas contratadas e do que depende de terceiros: preparação dos apoios, montagem, fechamento, acabamento e limpeza, conforme o caso. Esclareça equipamentos necessários, transporte, descarga e condições de acesso. Não presuma que a palavra montagem inclui todos os recursos e materiais. Registre exclusões e responsabilidades antes de aprovar."],
      ["E se eu quiser colocar equipamentos na cobertura depois?", "Informe já na fase de estudo qualquer intenção de instalar equipamentos, painéis ou sistemas suspensos. Peso, posição e forma de ligação precisam de avaliação dos responsáveis técnicos. Não perfure ou sobrecarregue uma cobertura existente com base apenas na aparência, nem use uma foto como prova de capacidade. A mudança de uso exige análise antes da intervenção."],
      ["Como planejar conforto e montagem sem decidir só pela telha?", "Explique o uso do ambiente, os horários de ocupação e os problemas percebidos. Cobertura, ventilação, iluminação e drenagem devem ser discutidas em conjunto. Para a execução em Pinhais, mostre também entrada, área de descarga e circulação que precisa ser preservada. Peça um cronograma condicionado às etapas do projeto, sem tomar a estimativa inicial como data garantida."],
    ],
  },
  "São José dos Pinhais": {
    title: "Faltou espaço: mezanino ou ampliação do galpão?",
    intro: "Para quem planeja uma obra em São José dos Pinhais, a primeira decisão não é comprar mais aço: é entender o que está impedindo o uso do espaço. Estoque apertado, circulação misturada e escritório improvisado pedem estudos diferentes. A sede da Alumimec fica no Afonso Pena; a proposta depende do imóvel, não apenas do bairro.",
    items: [
      ["Meu estoque cresceu. Um mezanino resolve?", "Pode ser uma alternativa, mas indique o que será armazenado, pesos conhecidos, equipamentos e como os materiais chegam ao novo nível. Um piso para escritório não deve ser tratado como piso para estoque. Inclua no estudo a escada, a circulação abaixo e acima, as proteções e a avaliação dos apoios. Não compre a estrutura somente pela área em metros quadrados."],
      ["Preciso manter a loja ou o galpão funcionando", "Faça uma lista dos acessos que não podem ser interrompidos, dos horários de recebimento e dos produtos que exigem proteção. Combine com os responsáveis uma sequência de execução e separação das áreas. Não presuma montagem sem parada: a viabilidade de manter atividades depende da avaliação do local e do planejamento de segurança."],
      ["Por que dois orçamentos para a mesma área são diferentes?", "Compare finalidade, projeto, perfis previstos, piso, escada, guarda-corpo, acabamento, transporte, montagem e preparação dos apoios. Peça a indicação do que não está incluído. Uma proposta com apenas a estrutura não equivale a outra que inclua piso e acessos. O preço por metro quadrado, isolado, não permite comparar o custo final."],
      ["Quais informações aceleram uma resposta útil?", "Envie o endereço completo em São José dos Pinhais, fotografias amplas do ambiente, altura e medidas aproximadas, objetivo da ampliação e desenhos existentes. Diferencie medidas estimadas de levantamento técnico. Diga se a necessidade principal é guardar produtos, criar escritório ou liberar circulação: isso torna o primeiro contato mais objetivo."],
    ],
  },
  "Araucária": {
    title: "Galpão em Araucária: planeje o custo além da estrutura",
    intro: "Ao consultar um galpão ou uma cobertura em Araucária, descreva o funcionamento da área e os limites do fornecimento. Uma estrutura pronta para montar não significa um imóvel pronto para operar. A Alumimec atende por deslocamento a partir de São José dos Pinhais; não há filial declarada em Araucária.",
    items: [
      ["O orçamento inclui tudo para usar o galpão?", "Confira separadamente terreno e fundações, estrutura, cobertura, fechamentos, portões, drenagem, piso e instalações necessárias ao uso. Defina quem fornece cada etapa e quem coordena as interfaces. A proposta deve dizer o que está incluído e o que será contratado à parte, evitando descobrir uma etapa essencial somente durante a montagem."],
      ["Quero ampliar depois. Posso deixar para decidir?", "Informe a expansão pretendida já na consulta inicial, incluindo novos acessos e usos possíveis. Ligações, apoios e interferências devem ser avaliados no projeto. Modularidade não garante que qualquer galpão possa crescer sem adaptações. Peça que a possibilidade estudada e suas condições sejam documentadas, em vez de considerar a ampliação futura uma promessa automática."],
      ["Como evitar surpresa com transporte e montagem?", "Mostre a entrada do imóvel em Araucária, largura e altura disponíveis, área de descarga e interferências aparentes. Informe horários de recebimento e regras do estabelecimento. Combine quem providencia preparação da área e recursos necessários à montagem. A existência de acesso para automóveis não comprova acesso adequado para entrega das peças."],
      ["Cobertura metálica resolve calor e goteiras?", "A solução precisa considerar o conjunto: material da telha, encontros, drenagem, ventilação e uso do ambiente. Para cobertura existente, registre onde e quando o problema aparece e apresente fotos feitas de um local seguro. Não suba no telhado para avaliar. Trocar a telha sem investigar a causa pode deixar o problema sem solução; peça avaliação e escopo definidos antes de contratar."],
    ],
  },
};

export default function LocalDecisionGuide({city}:{city:string}) {
  const guide=guides[city];
  if(!guide) return null;
  return <section className="section wrap" aria-label={`Dúvidas sobre estruturas metálicas em ${city}`}>
    <p className="eyebrow">DECISÕES ANTES DA OBRA</p>
    <h2>{guide.title}</h2><p>{guide.intro}</p>
    <div className="faq-list">{guide.items.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    <p>Para conversar sobre sua obra em {city}, use o planejador abaixo. Você revisa a mensagem antes de abrir o WhatsApp; nenhum orçamento ou agendamento é confirmado automaticamente.</p>
    <a className="text-link" href="#planejar">Organizar informações da minha obra →</a>
  </section>;
}
