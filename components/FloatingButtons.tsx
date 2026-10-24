import React, { useEffect, useState } from "react";
export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <aside className="top-rail" aria-label="Retorno ao início">
      {visible && (
        <button
          aria-label="Voltar ao topo"
          onClick={() => {
            window.scrollTo({
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
  );
}
