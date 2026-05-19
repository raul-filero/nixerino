import Link from "next/link";

export const metadata = { title: "Colabs de marca" };

const VENTAJAS = [
  {
    head: "Audiencia gaming-esports española real",
    text:
      "Twitch Partner activo, comunidad fiel desde la era LoL. La gente que me sigue es la que de verdad consume gaming en España, no curiosos de paso.",
  },
  {
    head: "Tono cercano, anti-postureo",
    text:
      "No vendo nada en lo que no creo. Si la marca no encaja, te lo digo en privado en lugar de hacer un anuncio tibio que no convierte.",
  },
  {
    head: "Formato flexible",
    text:
      "Integraciones en directo, vídeo dedicado, segmento patrocinado, sorteos, presencia en eventos. Yo me adapto al briefing — y discuto los KPIs si hace falta.",
  },
];

export default function ColabsPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Vertical · 03
      </span>
      <h1 className="font-display text-[42px] md:text-[68px] leading-[1] tracking-[-0.03em] mt-3 mb-6">
        Colabs de marca
      </h1>
      <p className="font-body text-[17px] leading-[1.75] max-w-[60ch] mb-12">
        Hablamos de sponsorships, embajadas, lanzamientos, integraciones. La audiencia que traigo es la que ha estado
        ahí desde la era SuperLiga, así que no esperes números de TikTok influencer — espera engagement de gente que
        vino a quedarse.
      </p>

      <div className="grid gap-5 md:grid-cols-3 mb-16">
        {VENTAJAS.map((v) => (
          <div
            key={v.head}
            className="border border-[var(--color-line)] bg-[color:var(--color-elev)] p-6 md:p-8 card-lift"
          >
            <h3 className="font-display text-[20px] tracking-tight mb-3">{v.head}</h3>
            <p className="font-body text-[14px] leading-[1.65] text-[color:var(--color-text-muted)]">{v.text}</p>
          </div>
        ))}
      </div>

      <section className="border border-[var(--color-accent)]/40 p-8 md:p-10 bg-[color:var(--color-elev)] grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            Tarifa
          </span>
          <h2 className="font-display text-[28px] md:text-[34px] tracking-[-0.02em] mt-2 mb-3">
            A consultar — depende del briefing y la campaña.
          </h2>
          <p className="font-body text-[15px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[52ch]">
            Si tienes media kit, brief o ficha del producto, mándamelo en el formulario. Te respondo personalmente con
            propuesta y números.
          </p>
        </div>
        <Link
          href="/contacto?asunto=colabs"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors whitespace-nowrap"
        >
          Hablar de la marca →
        </Link>
      </section>
    </article>
  );
}
