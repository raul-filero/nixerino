import Link from "next/link";

export const metadata = { title: "Coaching" };

const SERVICIOS = [
  {
    title: "1v1 — Sesión individual",
    bullets: [
      "Revisión de VODs y decisiones macro/micro",
      "Plan personalizado según rol (bot lane LoL · duelista/iniciador Valorant)",
      "Mentalidad competitiva — herencia de +10 años en LAN",
    ],
  },
  {
    title: "Equipos — Scrim y review",
    bullets: [
      "Análisis de equipo amateur o semi-pro (ojo coach)",
      "Lectura de drafts, mid-game calls, comunicación in-game",
      "Feedback grabado y plan de mejora a 2–4 semanas",
    ],
  },
  {
    title: "Bootcamp express",
    bullets: [
      "Sesión intensiva 2-4 horas, un día concreto",
      "Pre-torneo, pre-ascenso o reset mental",
      "Pareja, dúo, dúo dinámico — formato cerrado contigo",
    ],
  },
];

export default function CoachingPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Vertical · 01
      </span>
      <h1 className="font-display text-[42px] md:text-[68px] leading-[1] tracking-[-0.03em] mt-3 mb-6">
        Coaching y análisis
      </h1>
      <p className="font-body text-[17px] leading-[1.75] max-w-[60ch] mb-12">
        Diez años jugando contra los mejores de España no son un manual, son una caja de herramientas. Esto es lo que
        sé hacer y se puede contratar. Sin paquetes de marketing, sin tarifas infladas, sin «niveles de mentoría».
      </p>

      <div className="grid gap-5 md:grid-cols-3 mb-16">
        {SERVICIOS.map((s) => (
          <div
            key={s.title}
            className="border border-[var(--color-line)] bg-[color:var(--color-elev)] p-6 card-lift"
          >
            <h3 className="font-display text-[20px] tracking-tight mb-4">{s.title}</h3>
            <ul className="space-y-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="font-body text-[14px] leading-[1.6] text-[color:var(--color-text-muted)] pl-4 relative"
                >
                  <span className="absolute left-0 top-[0.55em] w-[6px] h-[1px] bg-[color:var(--color-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="border border-[var(--color-accent)]/40 p-8 md:p-10 bg-[color:var(--color-elev)] grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Tarifa
          </span>
          <h2 className="font-display text-[28px] md:text-[34px] tracking-[-0.02em] mt-2 mb-3">
            A consultar — según formato y duración.
          </h2>
          <p className="font-body text-[15px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[52ch]">
            Cuéntame qué buscas (rol, juego, nivel, calendario) y te paso un presupuesto cerrado el mismo día. Si no
            encajamos, te digo dónde mirar.
          </p>
        </div>
        <Link
          href="/contacto?asunto=coaching"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors whitespace-nowrap"
        >
          Pedir presupuesto →
        </Link>
      </section>
    </article>
  );
}
