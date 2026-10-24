import React, { useRef } from "react";
export default function Photo(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const dialog = useRef<HTMLDialogElement>(null);
  const collage = props.src === "/bairro.jpg";
  return (
    <>
      <a
        className={"photo-frame" + (collage ? " photo-collage" : "")}
        href={props.src}
        aria-label={"Ampliar: " + props.alt}
        onClick={(e) => {
          e.preventDefault();
          dialog.current?.showModal();
        }}
      >
        <img {...props} />
      </a>
      <dialog
        className="photo-dialog"
        ref={dialog}
        aria-label="Fotografia completa"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button className="button" onClick={() => dialog.current?.close()}>
          Fechar fotografia
        </button>
        <img src={props.src} alt={props.alt} />
        <p>{props.alt}</p>
        <a href={props.src} target="_blank" rel="noreferrer">
          Abrir arquivo original
        </a>
      </dialog>
    </>
  );
}
