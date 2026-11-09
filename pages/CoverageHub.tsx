import React from "react";
import { SERVICES } from "../constants";
import { servicePath } from "../routes";
import CoverageExplorer from "../components/CoverageExplorer";
import {
  COVERAGE_REFERENCE,
  COVERAGE_TITLE,
  COVERAGE_DESCRIPTION,
} from "../coverage-area";
import EnhancedSEO from "../components/EnhancedSEO";
import ApplicationLinks from "../components/ApplicationLinks";
import ContactActions from "../components/ContactActions";
export default function CoverageHub() {
  return (
    <>
      <EnhancedSEO
        title={COVERAGE_TITLE}
        description={COVERAGE_DESCRIPTION}
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
        <h1>Curitiba, Região Metropolitana e entorno até 80 km</h1>
        <p>
          A Alumimec se desloca aos locais onde há obras. A sede fica em São
          José dos Pinhais; as páginas abaixo orientam a consulta em cada
          município e não representam filiais. Informe o endereço completo, o
          objetivo do projeto e as condições de acesso para combinar a avaliação
          e o agendamento.
        </p>
        <ContactActions subject="Quero informar a localidade e preparar meu projeto." />
        <div className="coverage-note">
          <h2>Uma sede. Atendimento no local da sua obra.</h2>
          <p>
            Atendemos os bairros de Curitiba, os 29 municípios da Região
            Metropolitana e localidades do entorno em um raio aproximado de 80
            km. Informe o endereço para avaliar o projeto, as condições de
            acesso, o deslocamento e o agendamento.
          </p>
          <p>
            O raio usa a{" "}
            <a href={COVERAGE_REFERENCE.source}>
              referência municipal de São José dos Pinhais
            </a>{" "}
            para orientar a consulta. Não é uma medição desde a porta da sede
            nem quilometragem por estrada. A lista metropolitana segue a{" "}
            <a href="https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba">
              AMEP
            </a>{" "}
            e inclui municípios que podem ficar além desse raio.
          </p>
        </div>
      </section>
      <CoverageExplorer />
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
