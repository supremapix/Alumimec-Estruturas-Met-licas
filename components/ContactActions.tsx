import React, { useState } from "react";
import { COMPANY_INFO } from "../constants";
export const whatsapp = (
  subject = "Gostaria de conversar sobre meu projeto.",
) =>
  `https://wa.me/55${COMPANY_INFO.phone1}?text=${encodeURIComponent("Olá, Alumimec! " + subject)}`;
export default function ContactActions({ subject }: { subject?: string }) {
  const [message, setMessage] = useState("");
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({ title: document.title, url: location.href });
      else {
        await navigator.clipboard.writeText(location.href);
        setMessage("Link copiado.");
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError"))
        setMessage("Copie o endereço na barra do navegador para compartilhar.");
    }
  }
  return (
    <div className="contact-actions">
      <a
        className="button"
        href={whatsapp(subject)}
        target="_blank"
        rel="noreferrer"
      >
        Conversar no WhatsApp ↗
      </a>
      <button className="button secondary" onClick={share}>
        Compartilhar
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
