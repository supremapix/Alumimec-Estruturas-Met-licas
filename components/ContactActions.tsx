import React, { useRef, useState } from "react";
import { COMPANY_INFO } from "../constants";
export const whatsapp = (
  subject = "Gostaria de conversar sobre meu projeto.",
) =>
  `https://wa.me/55${COMPANY_INFO.phone1}?text=${encodeURIComponent("Olá, Alumimec! " + subject)}`;
export default function ContactActions({
  subject,
  compact = false,
}: {
  subject?: string;
  compact?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [url, setUrl] = useState("");
  const [canShare,setCanShare]=useState(false);
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setMessage("Link copiado.");
    } catch {
      setMessage("Selecione e copie o endereço abaixo.");
    }
  }
  async function nativeShare() {
    try {
      await navigator.share({ title: document.title, url });
    } catch (e) {
      if (!(e instanceof DOMException && e.name === "AbortError"))
        setMessage("Escolha outro modo de compartilhar.");
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
        {compact ? "WhatsApp" : "Conversar no WhatsApp ↗"}
      </a>
      <button
        className="button secondary"
        aria-haspopup="dialog"
        onClick={() => {
          setUrl(location.href);
          setCanShare(Boolean(navigator.share));
          setMessage("");
          dialog.current?.showModal();
        }}
      >
        Compartilhar
      </button>
      <dialog
        className="share-dialog"
        ref={dialog}
        aria-label="Compartilhar esta página"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="button secondary"
          onClick={() => dialog.current?.close()}
        >
          Fechar compartilhamento
        </button>
        <h2>Compartilhar esta página</h2>
        <p>Escolha como enviar o link. Você confirma o envio no aplicativo.</p>
        <div className="share-options">
          <a
            className="button"
            href={"https://wa.me/?text=" + encodeURIComponent(url)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="button"
            href={
              "https://www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(url)
            }
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <button className="button" onClick={copy}>
            Copiar link
          </button>
          <button
            className="button"
            onClick={nativeShare}
            disabled={!canShare}
          >
            Mais opções do aparelho
          </button>
        </div>
        <label>
          Endereço da página
          <input
            readOnly
            value={url}
            onFocus={(e) => e.currentTarget.select()}
          />
        </label>
        <p role="status">{message}</p>
      </dialog>
    </div>
  );
}
