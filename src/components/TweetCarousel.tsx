"use client";

import { useEffect, useRef, useState } from "react";
import { SpeechBubble } from "./Manga";

type Tweet = { quote: string; date: string; url: string };

// Tweets reales verificados de @n1xerino (fuente: x.com).
// Mantener este array como fuente única — añadir o quitar entradas re-rota automáticamente.
const TWEETS: Tweet[] = [
  {
    quote: "La vida cuando uno escapa de los esports 😅",
    date: "feb 2025",
    url: "https://x.com/n1xerino/status/1894712643136389122",
  },
  {
    quote:
      "Uno está más tranquilo currando fuera de los esports y haciendo vida normal sin depender de Twitch. Más estabilidad para alguien pequeño como aquí un servidor 🫡🖤",
    date: "jun 2024",
    url: "https://x.com/n1xerino/status/1798393913302204472",
  },
  {
    quote: "LA JUDGE ES UN ARMA COMPLETAMENTE BALANCEADA!",
    date: "sep 2023",
    url: "https://x.com/n1xerino/status/1705907317399515450",
  },
  {
    quote:
      "Mañana PRENDO DIRECTO. Jugaremos Valorant y también hablaremos de la vida que hace mucho que no sabéis nada de mi. Fav si te vienes 🤪",
    date: "jul 2025",
    url: "https://x.com/n1xerino/status/1950269205414101466",
  },
  {
    quote:
      "Tweet informativo: Mañana jugamos las finales de Valorant y también semis de LoL en la TLP. Seguiremos informando.",
    date: "sep 2024",
    url: "https://x.com/n1xerino/status/1831384418600231277",
  },
  {
    quote:
      "Vamos a estar jugando el torneo de Marvel Rivals europeo con pricepool y todo, representando a ESPAÑITAAAAAAAA",
    date: "jul 2024",
    url: "https://x.com/n1xerino/status/1818317264384561168",
  },
  {
    quote:
      "Estamos todos de acuerdo de que jugar al The Finals solo es MUY tedioso. Hemos creado un discord para la comunidad hispanohablante.",
    date: "dic 2023",
    url: "https://x.com/n1xerino/status/1737170047708135626",
  },
  {
    quote:
      "Un par de meses y ya tendré 19 años, es acojonante. Aún seré un crió pero lo rápido que pasa el tiempo me da miedo.",
    date: "ene 2018",
    url: "https://x.com/n1xerino/status/949634799320387584",
  },
];

const ROTATE_MS = 7000;

export default function TweetCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TWEETS.length);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const t = TWEETS[index];

  const next = () => setIndex((i) => (i + 1) % TWEETS.length);
  const prev = () => setIndex((i) => (i - 1 + TWEETS.length) % TWEETS.length);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <SpeechBubble tail="br" className="max-w-[300px] block">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">
            @n1xerino · {t.date}
          </span>
          <a
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-red)] hover:underline"
            aria-label="Ver tweet en X"
          >
            X ↗
          </a>
        </div>
        <div
          key={index}
          className="font-serif text-[15px] leading-snug min-h-[60px] animate-[fadein_400ms_ease-out]"
        >
          &quot;{t.quote}&quot;
        </div>
        <div className="mt-2 flex items-center justify-between border-t-[1.5px] border-dashed border-[color:var(--color-ink)]/30 pt-2">
          <div className="flex gap-1">
            {TWEETS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir al tweet ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-[color:var(--color-red)]" : "bg-[color:var(--color-ink)]/25 hover:bg-[color:var(--color-ink)]/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button
              onClick={prev}
              aria-label="Tweet anterior"
              className="font-mono text-[11px] leading-none px-1.5 py-0.5 border-[1.5px] border-[color:var(--color-ink)]/30 hover:border-[color:var(--color-ink)] hover:bg-[color:var(--color-paper-2)]"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Siguiente tweet"
              className="font-mono text-[11px] leading-none px-1.5 py-0.5 border-[1.5px] border-[color:var(--color-ink)]/30 hover:border-[color:var(--color-ink)] hover:bg-[color:var(--color-paper-2)]"
            >
              →
            </button>
          </div>
        </div>
      </SpeechBubble>

      <style jsx>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
