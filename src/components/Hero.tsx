import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 bg-hatch opacity-50 pointer-events-none" />
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24 grid gap-12 md:grid-cols-[1.2fr_1fr] items-center relative">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--color-g2)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-text-muted)]">
              Twitch Partner · Capibara lover
            </span>
          </div>
          <h1 className="font-display text-[44px] leading-[0.95] sm:text-[64px] md:text-[88px] tracking-[-0.03em] mb-6">
            NIXERINO
          </h1>
          <p className="font-body text-[18px] md:text-[22px] leading-[1.45] max-w-[36ch] mb-2">
            <span className="text-[color:var(--color-accent-soft)]">+10 años</span> compitiendo al máximo nivel en{" "}
            <span className="font-display tracking-tight">LEAGUE OF LEGENDS</span> y{" "}
            <span className="font-display tracking-tight">VALORANT</span>.
          </p>
          <p className="font-body text-[15px] leading-[1.6] text-[color:var(--color-text-muted)] max-w-[44ch] mb-10">
            Profesional en dos juegos distintos. Hoy: coaching, eventos, colabs y contenido para marcas y comunidades.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors"
            >
              Hablar conmigo →
            </Link>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-line)] font-mono uppercase tracking-[0.22em] text-[11px] hover:border-[color:var(--color-accent)] transition-colors"
            >
              Quién soy
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square w-full max-w-[420px] ml-auto border border-[var(--color-accent)]/40 relative overflow-hidden bg-[color:var(--color-elev)] bg-hatch">
            {/* Placeholder editorial — sustituir cuando haya foto definitiva del propio Nixerino.
                Sin <Image> para evitar 404 en static export. */}
            <div className="absolute inset-0 grid place-items-center text-center px-6">
              <div>
                <span className="block font-display text-[112px] md:text-[156px] leading-[0.9] text-[color:var(--color-accent)] select-none">
                  N1
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-text-muted)] mt-3">
                  +10 años · 2 juegos
                </span>
              </div>
            </div>
            <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] bg-[color:var(--color-base)]/85 px-2 py-1 border border-[var(--color-line)]">
              @n1xerino
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
              <span className="bg-[color:var(--color-base)]/80 px-2 py-1 border border-[var(--color-line)]">
                Twitch Partner
              </span>
              <a
                href="https://www.twitch.tv/n1xerino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[color:var(--color-g2)]/90 px-2 py-1 hover:bg-[color:var(--color-g2)]"
              >
                Ver en directo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
