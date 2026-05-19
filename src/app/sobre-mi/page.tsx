import Link from "next/link";

export const metadata = { title: "Sobre mí" };

const TIMELINE: { year: string; head: string; body: string }[] = [
  {
    year: "2015",
    head: "Primer roster pro",
    body: "Overgaming y ThunderX3 Baskonia. ESL, primeros vestuarios de verdad, primer salario de jugador.",
  },
  {
    year: "2017–18",
    head: "G2 Vodafone",
    body: "Era samurái. Bot lane referente del talento español. SuperLiga, picos de audiencia, prensa esports apuntando al equipo.",
  },
  {
    year: "2018–22",
    head: "Vueltas por la SuperLiga",
    body: "X6tence, Dragons E.C., S2V, G2 Heretics, BCN Squad, Rebels Gaming. SuperLiga Summer 2021 con 73.000 espectadores simultáneos.",
  },
  {
    year: "2022–24",
    head: "Movistar Riders · Valorant",
    body: "Salto a Valorant. VCL Spain Rising. Team Spain en Spike Nations. Duelista e iniciador. Profesional en un segundo juego.",
  },
  {
    year: "2024 →",
    head: "Twitch Partner full-time",
    body: "Retirada formal del competitivo. Vida fuera del circuito pro, Twitch como casa, coaching y eventos cuando hay buen partner.",
  },
];

export default function SobreMiPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Sobre mí
      </span>

      <h1 className="font-display text-[42px] md:text-[68px] leading-[1] tracking-[-0.03em] mt-3 mb-10 max-w-[18ch]">
        Diez años en el ruido. Hoy, capibara.
      </h1>

      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-body text-[17px] leading-[1.75] mb-5">
            Me llamo <strong>Nicolás Canellas Colocho</strong>. En internet, Nixerino. Nací y crecí en la Costa
            Brava, en un entorno donde competir era cosa de toda la familia: ya había un hermano metido en{" "}
            <em>Day of Defeat</em> antes de que yo supiera deletrear «esports». Mi otro hermano,{" "}
            <Link href="https://liquipedia.net/counterstrike/Mixwell" className="underline decoration-[color:var(--color-accent)] hover:text-[color:var(--color-accent-soft)]" target="_blank" rel="noopener noreferrer">
              Mixwell
            </Link>
            , se hizo nombre en CS:GO y Valorant. Yo elegí <em>League of Legends</em>.
          </p>
          <p className="font-body text-[17px] leading-[1.75] mb-5">
            Empecé en 2015 con Overgaming y ThunderX3 Baskonia. Luego G2 Vodafone, en la era en la que la organización
            se llamaba a sí misma «samuráis» — me llevé el apodo y me quedé con él como con un anillo viejo. Pasé por
            X6tence, Dragons E.C., S2V, G2 Heretics, BCN Squad, Rebels Gaming. SuperLiga año tras año. AD Carry, bot
            lane, picos como aquel 73.000 simultáneos del Summer 2021 que se me grabó como un examen aprobado.
          </p>
          <p className="font-body text-[17px] leading-[1.75] mb-5">
            En 2022 me pasé a <strong>Valorant</strong>. Fiché por <strong>Movistar Riders</strong> a finales de ese
            año y competí en VCL Spain. Representé a España con Team Spain en Spike Nations. Hay muy poca gente en
            este país que pueda decir que fue profesional en dos juegos distintos — yo soy una de esas pocas, y no lo
            digo por presumir, lo digo porque condiciona cómo enseño.
          </p>
          <p className="font-body text-[17px] leading-[1.75] mb-5">
            En febrero de 2024 anuncié la retirada formal del competitivo. Hoy trabajo fuera del circuito pro y hago
            directo en <strong>Twitch como Partner</strong> sin depender del foco. Más tranquilo, más estable, con
            margen para hacer cosas con cabeza. La{" "}
            <span className="text-[color:var(--color-accent-soft)]">capibara</span> de la bio no es broma del todo: es
            la energía con la que quiero llevar esta etapa.
          </p>
          <p className="font-body text-[17px] leading-[1.75]">
            Si lees esto pensando en una colaboración —coaching, evento, una marca, un formato—{" "}
            <Link href="/contacto" className="underline decoration-[color:var(--color-accent)] hover:text-[color:var(--color-accent-soft)]">
              cuéntame qué tienes en mente
            </Link>{" "}
            y te respondo personalmente.
          </p>
        </div>

        <aside className="space-y-6">
          <figure className="border border-[var(--color-line)] bg-[color:var(--color-elev)] bg-hatch relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 grid place-items-center text-center px-4">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-mono-dim)]">
                  2015 — 2022
                </span>
                <span className="block font-display text-[44px] md:text-[56px] leading-[0.95] text-[color:var(--color-text)] mt-2">
                  ERA LOL
                </span>
                <span className="block font-body italic text-[14px] text-[color:var(--color-g2)] mt-3">
                  «el samurái»
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-text-muted)] mt-3">
                  G2 Vodafone · Heretics · Rebels
                </span>
              </div>
            </div>
          </figure>

          <figure className="border border-[var(--color-line)] bg-[color:var(--color-elev)] bg-hatch relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 grid place-items-center text-center px-4">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-mono-dim)]">
                  2022 — 2024
                </span>
                <span className="block font-display text-[44px] md:text-[56px] leading-[0.95] text-[color:var(--color-text)] mt-2">
                  ERA VALO
                </span>
                <span className="block font-body italic text-[14px] text-[color:var(--color-accent-soft)] mt-3">
                  duelista &amp; iniciador
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-text-muted)] mt-3">
                  Movistar Riders · Team Spain
                </span>
              </div>
            </div>
          </figure>
        </aside>
      </div>

      <section className="mt-20 border-t border-[var(--color-line)] pt-12">
        <h2 className="font-display text-[26px] md:text-[36px] tracking-[-0.02em] mb-10">Línea de tiempo</h2>
        <ol className="space-y-8">
          {TIMELINE.map((t, i) => (
            <li key={t.year} className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-10 items-baseline">
              <div className="font-mono text-[13px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] flex items-baseline gap-3">
                <span className="text-[color:var(--color-mono-dim)]">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                {t.year}
              </div>
              <div>
                <h3 className="font-display text-[18px] tracking-tight mb-1">{t.head}</h3>
                <p className="font-body text-[15px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[60ch]">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
