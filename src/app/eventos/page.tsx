import Link from "next/link";

export const metadata = { title: "Eventos" };

const FORMATOS = [
  {
    title: "Presentaciones y entregas de premios",
    text:
      "Cara y voz para tu evento esports, gaming o de marca. Acostumbrado al directo, al guion improvisado y a la cámara cercana.",
  },
  {
    title: "Watch parties y co-streams",
    text:
      "Comento finales, derbies, jornadas y momentos clave con la audiencia de Twitch desde mi canal o desde el tuyo.",
  },
  {
    title: "Charlas y formación corporativa",
    text:
      "Mentalidad competitiva, gestión del fracaso, ciclo de vida del jugador pro. Eventos de empresa, universidades, jornadas locales.",
  },
  {
    title: "Podcasts y entrevistas",
    text:
      "Largo formato, entrevista pausada o cápsula breve. Sé estar en silla — y sé cuándo no estar.",
  },
];

export default function EventosPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Vertical · 02
      </span>
      <h1 className="font-display text-[42px] md:text-[68px] leading-[1] tracking-[-0.03em] mt-3 mb-6">
        Eventos y cameos
      </h1>
      <p className="font-body text-[17px] leading-[1.75] max-w-[60ch] mb-12">
        Diez años en escenarios, vestuarios y cabinas. Si tu evento necesita una cara conocida del ecosistema español
        que cumpla en directo y trate bien a tu equipo, podemos hablar.
      </p>

      <div className="grid gap-5 md:grid-cols-2 mb-16">
        {FORMATOS.map((f) => (
          <div
            key={f.title}
            className="border border-[var(--color-line)] bg-[color:var(--color-elev)] p-6 md:p-8 card-lift"
          >
            <h3 className="font-display text-[20px] tracking-tight mb-3">{f.title}</h3>
            <p className="font-body text-[14px] leading-[1.65] text-[color:var(--color-text-muted)]">{f.text}</p>
          </div>
        ))}
      </div>

      <section className="border border-[var(--color-accent)]/40 p-8 md:p-10 bg-[color:var(--color-elev)] grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Tarifa
          </span>
          <h2 className="font-display text-[28px] md:text-[34px] tracking-[-0.02em] mt-2 mb-3">
            A consultar — varía con ciudad, fechas y formato.
          </h2>
          <p className="font-body text-[15px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[52ch]">
            Cuéntame dónde, cuándo, cuánto tiempo y qué papel tendría yo en la jornada. Te respondo con tarifa cerrada
            y condiciones de viaje.
          </p>
        </div>
        <Link
          href="/contacto?asunto=eventos"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors whitespace-nowrap"
        >
          Proponer evento →
        </Link>
      </section>
    </article>
  );
}
