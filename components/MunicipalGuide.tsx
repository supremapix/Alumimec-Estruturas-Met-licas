import React from "react";
import { COMPANY_INFO } from "../constants";
export default function MunicipalGuide({ name }: { name: string }) {
  const sede = name === "São José dos Pinhais";
  return (
    <section className="section region">
      <div className="wrap">
        <p className="eyebrow">PLANEJAMENTO DA CONTRATAÇÃO</p>
        <h2>Organize sua obra em {name}.</h2>
        <p>
          A Alumimec atende {name} e se desloca ao local da obra a partir da
          sede em São José dos Pinhais. Endereço, projeto, condições de acesso e
          agendamento são avaliados com a equipe. O atendimento por deslocamento
          não representa uma filial neste município.
        </p>
        <div className="process-grid">
          <article>
            <h3>Uso e documentação</h3>
            <p>
              Explique o que será construído e como o espaço será utilizado.
              Envie plantas ou projetos existentes e identifique quem acompanha
              a obra. Confirme com os responsáveis quais documentos e aprovações
              se aplicam ao imóvel; esta página não substitui essa verificação.
            </p>
          </article>
          <article>
            <h3>Materiais e escopo</h3>
            <p>
              Peça que a proposta discrimine estrutura, cobertura, fechamentos,
              piso, acabamentos e acessos conforme o serviço. Confira
              responsabilidades por levantamento, projeto, fabricação,
              transporte e montagem. Uma lista clara evita comparar orçamentos
              de escopos diferentes.
            </p>
          </article>
          <article>
            <h3>Acesso e transporte</h3>
            <p>
              Informe rua, CEP e condições de entrada, inclusive limitações que
              você conheça. Fotos do trajeto final, dos portões e da área de
              descarga ajudam a planejar a consulta. Custos de deslocamento e
              condições de entrega precisam ser confirmados; não há distância ou
              frete presumidos.
            </p>
          </article>
          <article>
            <h3>Preparação do local</h3>
            <p>
              Descreva apoios existentes, área disponível e interferências
              aparentes. Combine quem prepara o terreno, protege áreas vizinhas
              e retira materiais, quando necessário. O reaproveitamento de peças
              ou apoios depende de avaliação, não apenas de fotos.
            </p>
          </article>
          <article>
            <h3>Sequência e operação</h3>
            <p>
              Se o imóvel continuará em uso, explique os horários e a circulação
              de pessoas ou veículos. A sequência de montagem deve considerar
              essas condições. O prazo desejado é informação para análise, não
              confirmação automática de data ou duração.
            </p>
          </article>
          <article>
            <h3>Proposta e entrega</h3>
            <p>
              Antes de aprovar, confira itens incluídos e excluídos, pagamento,
              responsabilidades e cronograma. Combine a conferência da entrega e
              solicite orientações de conservação para os componentes
              instalados. Preços e garantias não são padronizados por município
              nesta página.
            </p>
          </article>
        </div>
        <div className="faq-list">
          <h2>Perguntas para alinhar com a equipe.</h2>
          <details>
            <summary>Existe uma filial da Alumimec em {name}?</summary>
            <p>
              {sede
                ? "A sede informada é " +
                  COMPANY_INFO.address +
                  ". Combine o atendimento antes de se deslocar."
                : "Não há filial declarada em " +
                  name +
                  ". A sede informada é em São José dos Pinhais, no bairro Afonso Pena."}
            </p>
          </details>
          <details>
            <summary>Uma visita ao endereço está confirmada?</summary>
            <p>
              Não. Envie cidade, bairro, CEP e informações da obra para
              consultar disponibilidade, condições e eventual custo da visita. A
              existência da página não representa um agendamento.
            </p>
          </details>
          <details>
            <summary>
              Essas orientações são regras específicas de {name}?
            </summary>
            <p>
              São orientações gerais de contratação e planejamento aplicadas à
              sua consulta. Não foram presumidas regras municipais, condições de
              terreno, clima, distâncias ou restrições locais. Esses pontos
              devem ser verificados conforme o endereço e o projeto.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
