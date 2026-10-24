import ContactActions from "./ContactActions";
import React, { useEffect, useState } from "react";
export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scroller = document.querySelector(".app-scroll");
    const update = () => setVisible((scroller?.scrollTop ?? 0) > 500);
    update();
    const dock = document.querySelector(".floating-contact");
    const resize = new ResizeObserver(() => {
      if (dock) {
        dock.setAttribute(
          "data-large-text",
          String(
            parseFloat(getComputedStyle(document.documentElement).fontSize) >=
              27,
          ),
        );
        document.documentElement.style.setProperty(
          "--dock-space",
          `${Math.ceil(dock.getBoundingClientRect().height) + 24}px`,
        );
      }
    });
    if (dock) resize.observe(dock);
    scroller?.addEventListener("scroll", update, { passive: true });
    return () => {
      scroller?.removeEventListener("scroll", update);
      resize.disconnect();
    };
  }, []);
  return (
    <>
      <aside
        className="floating-contact"
        aria-label="Contato e compartilhamento"
      >
        <ContactActions compact />
      </aside>
      <aside className="top-rail" aria-label="Retorno ao início">
        {visible && (
          <button
            aria-label="Voltar ao topo"
            onClick={() => {
              document.querySelector(".app-scroll")?.scrollTo({
                top: 0,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              });
              document
                .querySelector<HTMLAnchorElement>(".brand")
                ?.focus({ preventScroll: true });
            }}
          >
            ↑
          </button>
        )}
      </aside>
    </>
  );
}
