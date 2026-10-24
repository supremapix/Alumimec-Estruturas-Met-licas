import React, { useRef, useEffect, useId } from "react";
import { whatsapp } from "./ContactActions";
export default function ContextPreview({
  title,
  image,
  paragraphs,
  href,
  showImage = false,
}: {
  title: string;
  image: string;
  paragraphs: [string, string][];
  href: string;
  showImage?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement>(null),
    restore = useRef<() => void>(() => {});
  const id = useId();
  const close = () => dialog.current?.close();
  useEffect(() => {
    const handle = () => dialog.current?.close();
    window.addEventListener("popstate", handle);
    return () => {
      window.removeEventListener("popstate", handle);
      restore.current();
    };
  }, []);
  function open() {
    const root = document.querySelector<HTMLElement>(".app-scroll");
    const previous = root?.style.overflowY ?? "";
    restore.current = () => {
      if (root) root.style.overflowY = previous;
    };
    if (root) root.style.overflowY = "hidden";
    dialog.current?.showModal();
  }
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={
          showImage
            ? "photo-frame context-image-trigger"
            : "button context-trigger"
        }
        aria-haspopup="dialog"
        aria-label={"Entender: " + title}
        onClick={open}
      >
        {showImage ? (
          <img
            src={image}
            width="600"
            height="450"
            loading="lazy"
            alt={title + " — fotografia original do catálogo Alumimec"}
          />
        ) : (
          <>Entender {title.toLowerCase()}</>
        )}
      </button>
      <dialog
        className="context-dialog"
        ref={dialog}
        aria-labelledby={id}
        onClose={() => {
          restore.current();
          trigger.current?.focus({ preventScroll: true });
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button className="button dialog-close" onClick={close}>
          Fechar explicação
        </button>
        <h2 id={id}>{title}</h2>
        <figure>
          <img
            src={image}
            alt={title + " — imagem inteira do catálogo Alumimec"}
          />
          <figcaption>
            Foto original do catálogo; não define dimensões nem identifica uma
            obra na sua localidade.
          </figcaption>
        </figure>
        {paragraphs.map(([h, t]) => (
          <section key={h}>
            <h3>{h}</h3>
            <p>{t}</p>
          </section>
        ))}
        <p>
          Dimensionamento e segurança dependem de avaliação profissional.
          Escopo, materiais e condições precisam ser confirmados na proposta.
        </p>
        <a className="button" href={href}>
          Ler página completa
        </a>
        <a
          className="button button-light"
          href={whatsapp(
            "Quero conversar sobre " +
              title.toLowerCase() +
              ". Vou informar endereço e objetivo do projeto.",
          )}
        >
          Preparar consulta no WhatsApp
        </a>
      </dialog>
    </>
  );
}
