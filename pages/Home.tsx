import ProcessSteps from "../components/ProcessSteps";
import Photo from "../components/Photo";
import React, { useState } from "react";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions, { whatsapp } from "../components/ContactActions";
import {
  COMPANY_INFO,
  SERVICES,
  GALLERY_IMAGES,
  VIDEOS,
  CITIES,
  FAQs,
} from "../constants";
import { HOME_TITLE, HOME_DESCRIPTION, cityPath, servicePath } from "../routes";
const guidance = [
  "Informe a atividade prevista, o vão necessário, o pé-direito e o acesso de caminhões. Esses dados orientam o estudo da estrutura e da montagem.",
  "Além das medidas, avalie escoamento de água, ventilação e incidência solar. Tipo de telha, isolamento e acabamento devem constar na proposta.",
  "Garagens, pergolados e estruturas aparentes precisam conversar com a arquitetura da casa. Informe dimensões, pontos de apoio e acabamento desejado.",
  "O uso do piso determina as cargas que precisam ser consideradas. Estoque, circulação de pessoas e equipamentos exigem avaliações distintas.",
  "Informe desnível, espaço disponível e frequência de uso. Degraus, patamares, guarda-corpos e acesso devem ser definidos no projeto.",
  "Meça o acesso e explique o fluxo de veículos. A abertura, os apoios e a eventual automação precisam ser compatibilizados antes da fabricação.",
];
export default function Home() {
  const [category, setCategory] = useState("Todos");
  const [video, setVideo] = useState("");
  const categories = [
    "Todos",
    ...new Set(GALLERY_IMAGES.map((p) => p.category)),
  ];
  return (
    <>
      <EnhancedSEO
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        canonical="/"
        isHomePage
        services={SERVICES.map((s) => ({
          name: s.title,
          description: s.description,
        }))}
      />
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">ALUMIMEC / ESTRUTURAS METÁLICAS</p>
            <h1>
              Mais espaço.
              <br />
              Novas possibilidades.
              <br />
              <em>Estrutura para realizar.</em>
            </h1>
            <p>
              Galpões, coberturas e soluções em aço para projetos industriais,
              comerciais e residenciais em Curitiba e região.
            </p>
            <ContactActions />
            <a className="text-link" href="#servicos">
              Encontre a solução para sua obra ↓
            </a>
          </div>
          <figure className="hero-photo">
            <Photo
              src="/galpoes-metalicos-pre-fabricados-hero-imagem.jpg"
              alt="Estrutura metálica de galpão do acervo Alumimec, com pilares e treliças de cobertura"
              width="1200"
              height="800"
              fetchPriority="high"
            />
            <figcaption>
              DO PROJETO À MONTAGEM <span>Acervo Alumimec</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-strip wrap">
          <span>01 / Projeto</span>
          <span>02 / Fabricação</span>
          <span>03 / Montagem</span>
        </div>
      </section>
      <section id="servicos" className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SOLUÇÕES EM AÇO</p>
            <h2>
              O uso do espaço
              <br />
              orienta o projeto.
            </h2>
          </div>
          <p>
            Conheça as seis frentes de trabalho da Alumimec. Dimensões,
            materiais, prazos e condições são definidos após avaliar a sua
            necessidade.
          </p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <article className="service-card" id={`servico-${s.id}`} key={s.id}>
              <figure>
                <Photo
                  src={s.image}
                  alt={s.title + " — fotografia do acervo Alumimec"}
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <figcaption>
                  0{s.id} / {s.title}
                </figcaption>
              </figure>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <p>{guidance[i]}</p>
                <a className="text-link" href={servicePath(s.title)}>
                  Conhecer {s.title.toLowerCase()} →
                </a>
                <a
                  className="text-link"
                  href={whatsapp("Tenho interesse em " + s.title + ".")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre {s.title.toLowerCase()} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="sobre" className="section about">
        <div className="wrap split">
          <div>
            <p className="eyebrow">QUEM ESTÁ POR TRÁS DA ESTRUTURA</p>
            <h2>
              Alumimec.
              <br />
              Da ideia ao aço.
            </h2>
            <p>
              A Alumimec trabalha com projeto, fabricação e montagem de
              estruturas metálicas para diferentes usos. Nossa sede fica no
              bairro Afonso Pena, em São José dos Pinhais, no Paraná.
            </p>
            <p>
              Para conversar sobre uma obra em Curitiba ou na região
              metropolitana, envie o endereço e as características do projeto. A
              equipe confirma a viabilidade de atendimento e as condições da
              proposta.
            </p>
            <a className="text-link" href="#contato">
              Conheça nossos canais de contato ↗
            </a>
          </div>
          <figure>
            <Photo
              src="/barracao-sao-jose-dos-pinhais-barracao-forvia.jpg"
              alt="Barracão industrial identificado no acervo da Alumimec como obra Forvia em São José dos Pinhais"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption>
              Barracão industrial para Forvia · São José dos Pinhais/PR.
              Registro do portfólio original.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section wrap" id="processo">
        <p className="eyebrow">COMO ORGANIZAR SUA OBRA</p>
        <h2>Uma etapa prepara a próxima.</h2>
        <ProcessSteps />
      </section>
      <section id="galeria" className="section gallery-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MATERIAIS, ESCALAS E POSSIBILIDADES</p>
              <h2>O aço em diferentes formas.</h2>
            </div>
            <p>
              Fotografias preservadas do acervo original. Abra uma imagem para
              ver os detalhes; especificações e disponibilidade devem ser
              consultadas.
            </p>
          </div>
          <div className="filters" aria-label="Filtrar galeria">
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {GALLERY_IMAGES.filter(
              (p) => category === "Todos" || p.category === category,
            ).map((p) => (
              <figure key={p.id}>
                <Photo
                  src={p.image}
                  alt={p.title + " — acervo original"}
                  width="600"
                  height="450"
                  loading="lazy"
                />
                <figcaption>
                  <strong>{p.title}</strong>
                  <span>{p.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section id="videos" className="section wrap">
        <p className="eyebrow">ACOMPANHE O ACERVO</p>
        <h2>Estruturas em movimento.</h2>
        <p>
          Vídeos vinculados no site original. A reprodução carrega conteúdo do
          YouTube somente após sua escolha.
        </p>
        <div className="video-choices">
          {VIDEOS.map((v) => (
            <button
              className="button secondary"
              key={v.id}
              aria-pressed={video === v.videoId}
              onClick={() => setVideo(v.videoId)}
            >
              ▷ {v.title}
            </button>
          ))}
        </div>
        {video && (
          <div className="video-player">
            <iframe
              key={video}
              title={VIDEOS.find((v) => v.videoId === video)?.title}
              src={`https://www.youtube-nocookie.com/embed/${video}`}
              allowFullScreen
            />
            <button className="button secondary" onClick={() => setVideo("")}>
              Fechar vídeo
            </button>
          </div>
        )}
        <a
          className="text-link"
          href={COMPANY_INFO.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Veja também o Instagram da Alumimec ↗
        </a>
      </section>
      <section id="regiao" className="section region">
        <div className="wrap split">
          <div>
            <p className="eyebrow">CURITIBA E REGIÃO METROPOLITANA</p>
            <h2>
              Perto da sua ideia.
              <br />
              Atendimento sob consulta.
            </h2>
            <p>
              A sede é em São José dos Pinhais. Não há filiais declaradas em
              outros municípios ou bairros. Informe cidade, bairro e CEP para
              confirmar deslocamento, visita e execução.
            </p>
            <p>
              A região metropolitana reúne 29 municípios, conforme a{" "}
              <a href="https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba">
                AMEP
              </a>
              . Fazer parte dessa região não confirma disponibilidade da equipe
              para cada endereço.
            </p>
            <a className="text-link" href={cityPath("São José dos Pinhais")}>
              Conheça a sede e prepare sua consulta ↗
            </a>
            <a className="text-link" href={cityPath("Curitiba")}>
              Planejando uma obra em Curitiba ↗
            </a>
          </div>
          <div>
            <h3>Onde será sua obra?</h3>
            <label htmlFor="city">Município para consulta</label>
            <select
              id="city"
              defaultValue=""
              onChange={(e) => {
                if (e.target.value)
                  window.location.assign(cityPath(e.target.value));
              }}
            >
              <option value="" disabled>
                Selecione um município
              </option>
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <p>
              Bairros oficiais e nomes populares são referências diferentes.
              Curitiba tem 75 bairros; consulte a{" "}
              <a href="https://ippuc.org.br/perfil-fisico-territorial-e-socioeconomico-75-bairros-de-curitiba-2">
                relação do IPPUC
              </a>{" "}
              ao informar seu endereço.
            </p>
            <ContactActions subject="Quero confirmar atendimento para meu endereço." />
          </div>
        </div>
      </section>
      <section className="section wrap" id="faq">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ANTES DE COMEÇAR</p>
            <h2>
              Informação que ajuda
              <br />a decidir.
            </h2>
          </div>
          <p>
            Respostas para preparar uma conversa mais produtiva sobre sua
            estrutura.
          </p>
        </div>
        <div className="faq-list">
          {FAQs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="contato" className="section wrap">
        <div className="split">
          <div>
            <p className="eyebrow">CONTE O QUE VOCÊ PRECISA</p>
            <h2>
              Vamos tirar seu
              <br />
              projeto do papel?
            </h2>
            <p>
              Envie fotos, medidas aproximadas, finalidade da estrutura e
              endereço da obra. A proposta depende da avaliação técnica e
              comercial.
            </p>
            <p>
              <strong>Sede:</strong> {COMPANY_INFO.address}
            </p>
            <p>
              <strong>Horário:</strong> {COMPANY_INFO.hours}
            </p>
            <ContactActions />
          </div>
          <form
            className="quote-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              window.open(
                whatsapp(
                  `Meu nome é ${data.get("name")}. Local da obra: ${data.get("place")}. Serviço: ${data.get("service")}. Detalhes: ${data.get("message")}`,
                ),
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <label>
              Seu nome
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Cidade e bairro
              <input name="place" required maxLength={180} />
            </label>
            <label>
              Serviço
              <select name="service">
                {SERVICES.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Conte sobre sua obra
              <textarea name="message" rows={4} required maxLength={2000} />
            </label>
            <p>
              O botão abre uma mensagem no WhatsApp. Você revisa e decide se
              deseja enviá-la. Este formulário não armazena os dados.
            </p>
            <button className="button" type="submit">
              Preparar mensagem no WhatsApp ↗
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
