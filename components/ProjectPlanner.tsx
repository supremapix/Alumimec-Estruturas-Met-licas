import React, { useState } from "react";
import { SERVICES } from "../constants";
import territory from "../data/territories.json";
import { whatsapp } from "./ContactActions";
const prompts = [
  {
    goal: "Construir ou ampliar um galpão",
    questions: [
      "Que atividade ocupará o galpão e quais equipamentos estão previstos?",
      "Como materiais e veículos entram, circulam e saem?",
      "O que já existe no terreno e o que deverá permanecer?",
    ],
  },
  {
    goal: "Cobrir estacionamento, passagem ou área de trabalho",
    questions: [
      "Qual percurso ou atividade precisa de proteção?",
      "Onde ficam portões, portas e áreas que precisam continuar livres?",
      "A cobertura será independente ou se aproximará de uma construção existente?",
    ],
  },
  {
    goal: "Criar ou ampliar um ambiente residencial",
    questions: [
      "Qual será o uso da área nova e sua ligação com a casa?",
      "Quais portas, janelas e instalações precisam permanecer acessíveis?",
      "Há desenhos ou projetos da construção existente disponíveis?",
    ],
  },
  {
    goal: "Aproveitar a altura com um mezanino",
    questions: [
      "O novo nível será usado para trabalho, estoque ou outra atividade?",
      "Que equipamentos e materiais serão utilizados?",
      "Como pessoas e materiais chegarão ao nível elevado?",
    ],
  },
  {
    goal: "Criar ou substituir uma escada",
    questions: [
      "Quais níveis ou ambientes o acesso precisa conectar?",
      "Qual a finalidade e frequência de uso do acesso?",
      "Como são os pontos de partida, chegada e as instalações próximas?",
    ],
  },
  {
    goal: "Criar ou substituir um portão",
    questions: [
      "Quais veículos, pessoas ou materiais usarão o acesso?",
      "Como o portão deve abrir e que espaço está disponível nas laterais?",
      "Existe interesse em automação que precise ser avaliado separadamente?",
    ],
  },
];
export default function ProjectPlanner({ city }: { city: string }) {
  const [service, setService] = useState(0);
  const [stage, setStage] = useState("Construção nova");
  const [place, setPlace] = useState("");
  const [notes, setNotes] = useState("");
  const names =
    territory.municipalities.find((m) => m.city === city)?.names ?? [];
  const topic = prompts[service];
  const message = `Olá, Alumimec. Quero planejar ${SERVICES[service].title.toLowerCase()} em ${place.trim() ? place.trim() + ", " : ""}${city}.\nObjetivo: ${topic.goal}.\nSituação: ${stage}.\n${notes.trim() ? "Informações iniciais: " + notes.trim() + "\n" : ""}Vou complementar com endereço, CEP, fotos e medidas aproximadas. Gostaria de combinar a avaliação do projeto e o atendimento no local da obra.`;
  return (
    <section className="section wrap project-planner" id="planejar">
      <p className="eyebrow">PREPARE SEU PEDIDO</p>
      <h2>O que você quer criar em {city}?</h2>
      <p>
        Escolha o serviço para organizar as primeiras informações. A Alumimec se
        desloca ao local da obra; projeto, acesso e agendamento são avaliados
        com a equipe.
      </p>
      <div className="planner-grid">
        <div className="planner-fields">
          <label htmlFor="project-service">
            Serviço
            <select
              id="project-service"
              value={service}
              onChange={(e) => setService(Number(e.target.value))}
            >
              {SERVICES.map((s, i) => (
                <option key={s.id} value={i}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="project-stage">
            Situação do espaço
            <select
              id="project-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              <option>Construção nova</option>
              <option>Ampliação de uma construção existente</option>
              <option>Substituição ou adaptação de um elemento</option>
              <option>Ainda preciso avaliar as possibilidades</option>
            </select>
          </label>
          <label htmlFor="project-place">
            Bairro ou referência em {city}
            <input
              id="project-place"
              list="project-places"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              maxLength={120}
              autoComplete="address-level3"
              placeholder="Informe o bairro, se souber"
            />
          </label>
          <datalist id="project-places">
            {names.map((n) => (
              <option value={n.name} key={n.name} />
            ))}
          </datalist>
          <label htmlFor="project-notes">
            Conte sua ideia (opcional)
            <textarea
              id="project-notes"
              rows={4}
              maxLength={600}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: ampliar a área de trabalho mantendo o acesso de veículos."
            />
          </label>
          <p className="muted">
            Os campos apenas preparam a mensagem no seu navegador. Você revisa e
            decide o envio no WhatsApp.
          </p>
        </div>
        <div className="planner-result">
          <h3>{topic.goal}</h3>
          <p>
            <strong>{SERVICES[service].title}</strong> — {stage}.
          </p>
          <p>Separe estas informações para a conversa:</p>
          <ol>
            {topic.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
          {stage === "Ampliação de uma construção existente" && (
            <p>
              Para ampliação, identifique o que será mantido e compartilhe os
              projetos existentes. Reaproveitar apoios ou peças depende de
              avaliação técnica.
            </p>
          )}
          {stage === "Substituição ou adaptação de um elemento" && (
            <p>
              Para substituição, fotografe o conjunto e os encontros com outros
              elementos. Não remova peças para produzir as imagens.
            </p>
          )}
          <details>
            <summary>Conferir mensagem preparada</summary>
            <p className="prepared-message">{message}</p>
          </details>
          <a
            className="button"
            href={whatsapp(message)}
            target="_blank"
            rel="noreferrer"
          >
            Revisar no WhatsApp ↗
          </a>
          <p className="muted">
            A preparação do pedido não calcula cargas, dimensões, preços ou
            prazos e não agenda uma visita automaticamente.
          </p>
        </div>
      </div>
    </section>
  );
}
