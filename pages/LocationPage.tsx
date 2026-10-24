import { LOCAL_GUIDES } from "../local-guides";
import NeighborhoodGuide from "./NeighborhoodGuide";
import Photo from "../components/Photo";
import React from "react";
import { useParams } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions from "../components/ContactActions";
import { CITIES, NEIGHBORHOODS, COMPANY_INFO, SERVICES } from "../constants";
import { resolveLocation } from "../lib/slug";
import { cityPath, neighborhoodPath, servicePath } from "../routes";
import MunicipalGuide from "../components/MunicipalGuide";
import NotFound from "./NotFound";
const official = new Set(
  "Abranches|Água Verde|Ahú|Alto Boqueirão|Alto da Glória|Alto da XV|Atuba|Augusta|Bacacheri|Bairro Alto|Barreirinha|Batel|Bigorrilho|Boa Vista|Bom Retiro|Boqueirão|Butiatuvinha|Cabral|Cachoeira|Cajuru|Campina do Siqueira|Campo Comprido|Campo de Santana|Capão da Imbuia|Capão Raso|Cascatinha|Caximba|Centro|Centro Cívico|Cidade Industrial de Curitiba|Cristo Rei|Fanny|Fazendinha|Ganchinho|Guabirotuba|Guaíra|Hauer|Hugo Lange|Jardim Botânico|Jardim das Américas|Jardim Social|Juvevê|Lamenha Pequena|Lindóia|Mercês|Mossunguê|Novo Mundo|Orleans|Parolin|Pilarzinho|Pinheirinho|Portão|Prado Velho|Rebouças|Riviera|Santa Cândida|Santa Felicidade|Santa Quitéria|Santo Inácio|São Braz|São Francisco|São João|São Lourenço|São Miguel|Seminário|Sítio Cercado|Taboão|Tarumã|Tatuquara|Tingui|Uberaba|Umbará|Vila Izabel|Vista Alegre|Xaxim".split(
    "|",
  ),
);
export default function LocationPage({
  type,
}: {
  type: "city" | "neighborhood";
}) {
  const { locationName = "" } = useParams();
  const city = type === "city";
  const name = resolveLocation(locationName, city ? CITIES : NEIGHBORHOODS);
  if (!name) return <NotFound />;
  const headquarters = city && name === "São José dos Pinhais";
  const curitiba = city && name === "Curitiba";
  const justified = headquarters || curitiba;
  const path = city ? cityPath(name) : neighborhoodPath(name);
  const curated = LOCAL_GUIDES.find((g) => g.path === path);
  if (curated) return <NeighborhoodGuide guide={curated} />;
  const title = `${headquarters ? "Sede Alumimec" : "Consulta de estruturas metálicas"} em ${name} | Alumimec`;
  const description = headquarters
    ? "Conheça a sede da Alumimec em Afonso Pena, São José dos Pinhais. Endereço, contato e orientações para consultar seu projeto de estrutura metálica."
    : `Planeje sua consulta de estruturas metálicas para ${name}. Envie endereço, medidas e uso do espaço à Alumimec; atendimento e condições sujeitos a confirmação.`;
  return (
    <>
      <EnhancedSEO
        title={title}
        description={description}
        canonical={path}
        noindex={false}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name, url: path },
        ]}
      />
      <div className="wrap breadcrumb">
        <a href="/">Início</a> / {name}
      </div>
      <section className="local-hero">
        <div className="wrap local-grid">
          <div>
            <p className="eyebrow">
              {headquarters ? "NOSSA SEDE" : "PLANEJE SUA CONSULTA"}
            </p>
            <h1>
              {headquarters
                ? "Alumimec em São José dos Pinhais"
                : `Estruturas metálicas: consulta para ${name}`}
            </h1>
            <p>{description}</p>
            <ContactActions
              subject={`Gostaria de consultar estruturas metálicas para ${name}. Vou enviar o endereço e os detalhes da obra.`}
            />
          </div>
          {justified && (
            <img
              className="local-art"
              src={headquarters ? "/local-sjp.svg" : "/local-curitiba.svg"}
              alt={`Alumimec — ${name}. Contato: (41) 99631-5885. Atendimento sob consulta.`}
              width="250"
              height="250"
            />
          )}
        </div>
      </section>
      <section className="section wrap">
        <div className="split">
          <div>
            <h2>
              {headquarters
                ? "Uma sede, contato direto."
                : curitiba
                  ? "Sua obra em Curitiba começa pelo endereço."
                  : "Confirme a localização da obra."}
            </h2>
            {headquarters ? (
              <>
                <p>
                  A sede informada pela empresa fica em {COMPANY_INFO.address}.
                  Antes de se deslocar, converse com a equipe para combinar o
                  atendimento.
                </p>
                <p>
                  O acervo do site registra o barracão industrial para Forvia em
                  São José dos Pinhais. A fotografia é uma referência de
                  portfólio, não uma especificação para outras obras.
                </p>
                <figure>
                  <Photo
                    src="/barracao-sao-jose-dos-pinhais-barracao-forvia.jpg"
                    width="800"
                    height="600"
                    alt="Barracão industrial Forvia, identificado no portfólio original em São José dos Pinhais"
                    loading="lazy"
                  />
                  <figcaption className="muted">
                    Obra identificada no acervo original.
                  </figcaption>
                </figure>
              </>
            ) : curitiba ? (
              <>
                <p>
                  A Alumimec informa atendimento em Curitiba a partir de sua
                  sede em São José dos Pinhais. Para avaliar um galpão,
                  cobertura ou mezanino, indique bairro, CEP, uso do imóvel e
                  condições de acesso ao terreno.
                </p>
                <p>
                  Curitiba possui bairros oficiais e denominações populares
                  usadas para orientar endereços. Nomes como Ecoville não devem
                  ser tratados automaticamente como bairros oficiais. Consulte o
                  cadastro do endereço ao preencher a solicitação.
                </p>
                <p>
                  Acesso para transporte, espaço de montagem, apoios existentes
                  e escoamento de água precisam ser avaliados no local. Licenças
                  e responsabilidades técnicas devem ser alinhadas conforme o
                  projeto.
                </p>
              </>
            ) : (
              <>
                <p>
                  {city
                    ? `${name} consta na relação de municípios da Região Metropolitana de Curitiba publicada pela AMEP.`
                    : official.has(name)
                      ? `${name} consta na relação de bairros de Curitiba. Informe também rua e CEP para localizar a obra.`
                      : `O nome “${name}” foi preservado do diretório anterior. Não está tratado aqui como bairro oficial de Curitiba; pode ser denominação popular, referência regional ou cadastro que precisa de correção. Confirme município, bairro e CEP.`}
                </p>
                <p>
                  A presença desta página não confirma uma filial, uma obra
                  realizada no local ou disponibilidade de atendimento. A equipe
                  precisa avaliar a solicitação.
                </p>
              </>
            )}
            <p>
              Fontes territoriais:{" "}
              <a href="https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba">
                municípios da RMC — AMEP
              </a>{" "}
              e{" "}
              <a href="https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912">
                bairros por regional — Prefeitura de Curitiba
              </a>
              .
            </p>
          </div>
          <div>
            <h3>Prepare uma consulta completa</h3>
            <ol className="local-checklist">
              <li>Endereço, cidade, bairro e CEP.</li>
              <li>Uso pretendido e medidas aproximadas.</li>
              <li>Fotos dos acessos, terreno e estruturas existentes.</li>
              <li>Projeto disponível e prazo desejado para análise.</li>
            </ol>
            <h3>Escolha o assunto da conversa</h3>
            {SERVICES.map((s) => (
              <a className="text-link" key={s.id} href={servicePath(s.title)}>
                {s.title} →
              </a>
            ))}
            <a className="text-link" href="/#contato">
              Contatos e formulário →
            </a>
            <a className="text-link" href="/#regiao">
              Consultar outro município →
            </a>
          </div>
        </div>
      </section>
      {city && <MunicipalGuide name={name} />}
      {city && LOCAL_GUIDES.some((g) => g.city === name) && (
        <section className="section wrap">
          <h2>Guias de bairros verificados</h2>
          <p>
            Seleção editorial em expansão. A lista não representa cobertura
            confirmada de todos os endereços.
          </p>
          {LOCAL_GUIDES.filter((g) => g.city === name).map((g) => (
            <a className="text-link" href={g.path} key={g.path}>
              {g.name} — {SERVICES[g.service].title}
            </a>
          ))}
        </section>
      )}
    </>
  );
}
