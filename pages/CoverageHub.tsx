import React from "react";
import { CITIES, SERVICES } from "../constants";
import { cityPath, servicePath } from "../routes";
import territory from "../data/territories.json";
import EnhancedSEO from "../components/EnhancedSEO";
import ApplicationLinks from "../components/ApplicationLinks";
import ContactActions from "../components/ContactActions";
export default function CoverageHub() {
  return (
    <>
      <EnhancedSEO
        title="Atendimento em Curitiba e Região Metropolitana | Alumimec"
        description="Encontre os 29 municípios da RMC, consulte referências de bairros e prepare seu projeto. Atendimento Alumimec por deslocamento ao local da obra."
        canonical="/atendimento"
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: "Atendimento", url: "/atendimento" },
        ]}
      />
      <nav className="wrap breadcrumb" aria-label="Você está aqui">
        <a href="/">Início</a> / Atendimento
      </nav>
      <section className="section wrap">
        <p className="eyebrow">LOCALIZE SUA OBRA</p>
        <h1>Atendimento em Curitiba e Região Metropolitana</h1>
        <p>
          A Alumimec se desloca aos locais onde há obras. A sede fica em São
          José dos Pinhais; as páginas abaixo orientam a consulta em cada
          município e não representam filiais. Informe o endereço completo, o
          objetivo do projeto e as condições de acesso para combinar a avaliação
          e o agendamento.
        </p>
        <ContactActions subject="Quero informar a localidade e preparar meu projeto." />
        <h2>Escolha o município antes do bairro</h2>
        <p>
          Nomes iguais podem identificar locais diferentes. Use rua, número e
          CEP. Os diretórios distinguem bases territoriais datadas, mapas
          municipais e listas parciais; não são promessa de uma relação completa
          de todos os bairros atuais.
        </p>
        <ul className="territory-list">
          {CITIES.map((city) => {
            const d = territory.municipalities.find((x) => x.city === city)!;
            return (
              <li key={city}>
                <h3>
                  <a href={cityPath(city)}>{city}</a>
                </h3>
                <p>
                  {d.names.length
                    ? `${d.names.length} referências identificadas na fonte municipal ou territorial indicada na página.`
                    : "Consulta por endereço; relação de bairros ainda não consolidada."}
                </p>
                <a className="text-link" href={cityPath(city) + "#planejar"}>
                  Preparar projeto em {city}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="section region">
        <div className="wrap">
          <h2>Conecte a localidade ao serviço</h2>
          <p>
            Galpões e coberturas têm decisões diferentes de mezaninos, escadas e
            portões. Leia o guia do serviço e leve a necessidade ao planejador
            municipal. Não é necessário haver uma página para cada combinação de
            serviço e bairro para solicitar atendimento.
          </p>
          <nav aria-label="Hubs de serviços">
            {SERVICES.map((s) => (
              <a key={s.id} className="text-link" href={servicePath(s.title)}>
                {s.title}
              </a>
            ))}
          </nav>
          <h2>O que confirmar com a equipe</h2>
          <p>
            Descreva o uso pretendido, compartilhe fotos e projetos disponíveis
            e informe se o imóvel permanecerá em operação. A avaliação define os
            próximos levantamentos, escopo e agendamento. Não se presume filial
            local, visita gratuita, taxa de deslocamento ou prazo fixo.
          </p>
        </div>
      </section>
      <ApplicationLinks />
    </>
  );
}
