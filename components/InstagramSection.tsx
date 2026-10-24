import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight, Instagram, ShieldCheck } from "lucide-react";

export interface InstagramSectionProps {
  /** Unique id when several instances share a document. */
  id: string;
  placement: "home" | "empresa" | "contato";
}
const PROFILE_URL = "https://www.instagram.com/alumimec/";
const EMBED_URL = "https://www.instagram.com/alumimec/embed";
const labels = {
  home: "Início",
  empresa: "Empresa",
  contato: "Contato",
} as const;

/** Profile embed, never a scraped feed. All navigation remains available without JavaScript. */
export default function InstagramSection({
  id,
  placement,
}: InstagramSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [embedHeight, setEmbedHeight] = useState<number>();
  useEffect(() => {
    // Instagram's own MEASURE messages; never read or modify its cross-origin DOM.
    const onMessage = (event: MessageEvent<unknown>) => {
      if (
        event.origin !== "https://www.instagram.com" ||
        event.source !== iframeRef.current?.contentWindow
      )
        return;
      let payload: unknown = event.data;
      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch {
          return;
        }
      }
      if (
        !payload ||
        typeof payload !== "object" ||
        !("type" in payload) ||
        payload.type !== "MEASURE" ||
        !("details" in payload)
      )
        return;
      const details = payload.details;
      if (!details || typeof details !== "object" || !("height" in details))
        return;
      const height = details.height;
      if (
        typeof height !== "number" ||
        !Number.isFinite(height) ||
        height <= 0 ||
        height > 10000
      )
        return;
      setEmbedHeight(Math.ceil(height) + 1);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: 0.1 });
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!inView || reducedMotion || !scope.current) return;
    const playback = animate(
      scope.current,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.55, ease: "easeOut" },
    );
    return () => {
      playback.stop();
    };
  }, [inView, reducedMotion, animate, scope]);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      data-instagram-section={placement}
      className="relative isolate overflow-hidden border-y border-gray-200 bg-gray-50/50 px-4 py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-12 -z-10 h-56 w-56 rounded-full bg-pink-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-8 -z-10 h-56 w-56 rounded-full bg-yellow-200/60 blur-3xl"
      />
      <div ref={scope} className="mx-auto w-full max-w-3xl min-w-0 text-center">
        <p className="mx-auto mb-6 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-800 via-pink-700 to-amber-800 px-4 py-3 font-mono text-sm font-bold uppercase tracking-wide text-white">
          <Instagram aria-hidden="true" className="h-6 w-6 shrink-0" />
          <span className="min-w-0 break-words">Social Real @alumimec</span>
        </p>
        <h3
          id={`${id}-title`}
          className="mb-4 break-words text-2xl font-black uppercase leading-tight text-black sm:text-4xl"
        >
          Acompanhe a Alumimec
          <br />
          <span className="text-orange-700">@alumimec</span>
        </h3>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-700">
          Conheça os bastidores e o dia a dia da Alumimec. Acompanhe as
          publicações e veja os stories diretamente no Instagram.
        </p>
        <motion.div
          initial={false}
          whileHover={reducedMotion ? undefined : { scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-lg sm:p-3"
        >
          <iframe
            ref={iframeRef}
            style={
              embedHeight
                ? { height: embedHeight, aspectRatio: "auto" }
                : undefined
            }
            src={EMBED_URL}
            title={`Perfil @alumimec no Instagram — ${labels[placement]}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block aspect-[9/11] w-full rounded-2xl border-0 bg-white sm:aspect-[4/5]"
          />
        </motion.div>
        <p className="mx-auto mb-6 mt-5 max-w-xl text-sm leading-relaxed text-gray-700">
          O conteúdo é fornecido pelo Instagram e pode solicitar login ou ficar
          indisponível. O link para @alumimec permanece disponível abaixo.
        </p>
        <motion.a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={false}
          whileHover={reducedMotion ? undefined : "hover"}
          className="mx-auto flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 px-5 py-4 text-base font-bold leading-normal text-gray-950 shadow-md focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          <span className="min-w-0">
            Seguir no Instagram Oficial
            <span className="sr-only"> @alumimec — abre em nova aba</span>
          </span>
          <motion.span
            aria-hidden="true"
            variants={{ hover: { x: 4, y: -4 } }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ArrowUpRight className="h-6 w-6" />
          </motion.span>
        </motion.a>
        <p className="mx-auto mt-6 flex w-fit max-w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm leading-relaxed text-gray-800">
          <ShieldCheck
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-green-700"
          />
          <span>Link direto para o perfil @alumimec</span>
        </p>
      </div>
    </section>
  );
}
