import React, { useEffect, useRef } from "react";
import {
  MessageSquare,
  Ruler,
  ClipboardCheck,
  Factory,
  Wrench,
  CheckCircle,
} from "lucide-react";
const steps = [
  [
    "Conversa inicial",
    "Compartilhe o uso do espaço, o endereço, fotos e medidas aproximadas.",
    MessageSquare,
  ],
  [
    "Projeto",
    "Avalie vãos, cargas, apoios e requisitos técnicos com os responsáveis pelo projeto.",
    Ruler,
  ],
  [
    "Proposta",
    "Confira escopo, materiais, documentação, custos e cronograma antes de aprovar.",
    ClipboardCheck,
  ],
  [
    "Fabricação",
    "A produção segue os detalhes e acabamentos definidos para a estrutura.",
    Factory,
  ],
  [
    "Montagem",
    "Planeje acessos, preparação do local e sequência de instalação com a equipe.",
    Wrench,
  ],
  [
    "Entrega e cuidados",
    "Alinhe a conferência do serviço e as orientações de conservação aplicáveis.",
    CheckCircle,
  ],
] as const;
export default function ProcessSteps() {
  const root = useRef<HTMLOListElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-arrived");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.25 },
    );
    root.current?.querySelectorAll("li").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <ol ref={root} className="process-grid process-steps">
      {steps.map(([title, text, Icon], i) => (
        <li key={title}>
          <div className="step-marker">
            <span>0{i + 1}</span>
            <Icon aria-hidden="true" size={32} />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
