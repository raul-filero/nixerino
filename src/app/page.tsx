import Link from "next/link";
import Capybara, { type CapyVariant } from "@/components/Capybara";
import { MangaPanel, PhotoSlot, Sfx, PageBreak, Tone } from "@/components/Manga";
import TweetCarousel from "@/components/TweetCarousel";

type Vertical = {
  num: string;
  icon: CapyVariant;
  href: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
};

const VERTICALS: Vertical[] = [
  {
    num: "01", icon: "sensei", href: "/coaching",
    kicker: "vertical · coaching", title: "Coaching", cta: "Ir a coaching",
    body: "1v1, equipos amateur, scrim review. Diez años leyendo partidas. Acepto si te tomas el juego en serio.",
    points: ["1v1 / equipos", "VOD & scrim review", "LoL · Valorant"],
  },
  {
    num: "02", icon: "mic", href: "/eventos",
    kicker: "vertical · eventos", title: "Eventos", cta: "Ir a eventos",
    body: "Watch parties, cameos, charlas a estudiantes, presencia en finales. Voy a casi cualquier sitio si la idea mola.",
    points: ["watch parties", "cameos & charlas", "presencial / online"],
  },
  {
    num: "03", icon: "merch", href: "/colabs",
    kicker: "vertical · colabs", title: "Colabs", cta: "Ir a colabs",
    body: "Sponsorships, embajadas, integración orgánica. Solo marcas que usaría yo. Pregunta sin miedo, digo que no rápido.",
    points: ["sponsorships", "embajadas", "merch / drops"],
  },
  {
    num: "04", icon: "streamer", href: "/contenido",
    kicker: "vertical · contenido", title: "Contenido", cta: "Ir a contenido",
    body: "Streams patrocinados, vídeos sponsoreados, integraciones de producto. Honesto, autoirónico, sin guion robot.",
    points: ["streams sponsored", "YouTube · TikTok", "integraciones nativas"],
  },
];

function VerticalCard({ v }: { v: Vertical }) {
  return (
    <Link
      href={v.href}
      className="group text-left relative bg-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:translate-x-0.5"
      style={{ boxShadow: "8px 8px 0 var(--color-ink)" }}
    >
      <div className="absolute top-0 left-0 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] font-mono text-[10px] tracking-widest px-2 py-1 uppercase z-10">
        N° {v.num}
      </div>
      <div className="relative h-[160px] border-b-[3px] border-[color:var(--color-ink)] overflow-hidden bg-[color:var(--color-paper-2)]">
        <Tone pattern="dots-lg" className="absolute inset-0 opacity-50" />
        <div aria-hidden="true" className="absolute -right-6 -bottom-6 opacity-90">
          <Capybara variant={v.icon} size={180} />
        </div>
        <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-[color:var(--color-paper)] border-[2px] border-[color:var(--color-ink)] px-2 py-0.5">
          {v.kicker}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="font-display text-3xl leading-[0.95] tracking-tight">{v.title}</div>
        <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/85">{v.body}</p>
        <ul className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--color-ink)]/70 flex flex-col gap-1 mt-1">
          {v.points.map((p) => <li key={p}>· {p}</li>)}
        </ul>
        <div className="mt-auto pt-4 flex items-center justify-between border-t-[2px] border-dashed border-[color:var(--color-ink)]/40">
          <span className="font-mono text-[11px] uppercase tracking-widest">
            Tarifa · <b className="text-[color:var(--color-red)]">Consultar</b>
          </span>
          <span className="font-display text-base group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            {v.cta} →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b-[3px] border-[color:var(--color-ink)]">
        <Tone pattern="dots-sparse" className="absolute inset-0 opacity-25" />
        <Tone pattern="speed" className="absolute inset-0 opacity-15" />
        <div className="relative max-w-[1280px] mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-2 py-1">cap. 01</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/70">disparo de salida</span>
            </div>
            <h1 className="font-display text-[clamp(64px,11vw,168px)] leading-[0.82] tracking-[-0.02em] uppercase">
              <span className="block">Shot.</span>
              <span className="block">Reload.</span>
              <span className="block relative">
                Apuntando al{" "}
                <span className="relative inline-block text-[color:var(--color-red)]">
                  éxito
                  <svg className="absolute -bottom-3 left-0 w-full" height="14" viewBox="0 0 200 14" preserveAspectRatio="none">
                    <path d="M2 8 Q60 2, 100 8 T 198 6" stroke="#D33A2C" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                .
              </span>
            </h1>
            <p className="font-serif text-[19px] leading-snug max-w-[560px]">
              Nicolás Canellas, <b>27</b>. Diez años apuntando alto en <b>League of Legends</b> y <b>Valorant</b>.
              <b> Twitch Partner</b> activo, aim entrenado, cabeza fría. Contratable para cuatro cosas concretas.
              Cero postureo.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contacto"
                className="font-display text-xl uppercase tracking-wide bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-6 py-3 border-[3px] border-[color:var(--color-ink)] hover:bg-[color:var(--color-red)] hover:border-[color:var(--color-red)] transition-colors"
                style={{ boxShadow: "6px 6px 0 var(--color-red)" }}
              >
                Contratar → empezar
              </Link>
              <Link
                href="/contenido"
                className="font-display text-xl uppercase tracking-wide bg-[color:var(--color-paper)] text-[color:var(--color-ink)] px-6 py-3 border-[3px] border-[color:var(--color-ink)]"
                style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
              >
                Ver contenido
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 border-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-paper)]" style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}>
              <div className="p-4 border-r-[3px] border-[color:var(--color-ink)]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">circuito</div>
                <div className="font-display text-3xl leading-none mt-1">2015 <span className="text-[color:var(--color-ink)]/40">→</span> 24</div>
              </div>
              <div className="p-4 border-r-[3px] border-[color:var(--color-ink)]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">juegos pro</div>
                <div className="font-display text-3xl leading-none mt-1">LoL · VAL</div>
              </div>
              <div className="p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">ahora</div>
                <div className="font-display text-3xl leading-none mt-1 text-[color:var(--color-red)]">EN VIVO</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <MangaPanel label="retrato · pág. 1" className="relative">
              <PhotoSlot
                src="/img/avatar-twitch.png"
                alt="Nixerino — retrato editorial, pelo platino, fondo magenta+azul"
                aspect="5/6"
                tone="lines"
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
              />
              <div className="absolute -bottom-6 -left-6 z-20">
                <TweetCarousel />
              </div>
              <Sfx className="absolute -top-8 -right-2 z-20" rotate={10} color="var(--color-red)" size={56}>POG!</Sfx>
            </MangaPanel>
            <div className="absolute -left-4 top-1/2 rotate-[-8deg] bg-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
              ex · G2 vodafone
            </div>
            <div className="absolute -right-3 -bottom-3 rotate-[6deg] bg-[color:var(--color-red)] text-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
              twitch partner
            </div>
          </div>
        </div>

        <div className="relative border-t-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] py-2 overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap font-display text-xl uppercase tracking-wide">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-10">
                <span>· coaching</span><span className="text-[color:var(--color-red)]">●</span>
                <span>· eventos &amp; cameos</span><span className="text-[color:var(--color-red)]">●</span>
                <span>· colabs de marca</span><span className="text-[color:var(--color-red)]">●</span>
                <span>· contenido patrocinado</span><span className="text-[color:var(--color-red)]">●</span>
                <span>· streamings semanales</span><span className="text-[color:var(--color-red)]">●</span>
                <span>· capibara enjoyer</span><span className="text-[color:var(--color-red)]">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 pt-16">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">página 02 · servicios</div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight uppercase mt-1">¿En qué me contratas?</h2>
          </div>
          <p className="font-serif text-[16px] max-w-[420px] text-[color:var(--color-ink)]/80">
            Cuatro cosas. Ni una más. Si lo tuyo no cuadra en ninguna, escríbeme igual — si me apetece, hablamos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {VERTICALS.map((v) => <VerticalCard key={v.num} v={v} />)}
        </div>
      </section>

      <PageBreak label="intermedio · pág. 03" sfx="…" />

      <section className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <MangaPanel className="lg:col-span-7 p-8" label="bio · resumen">
            <div className="flex items-start gap-4 mb-4">
              <Capybara variant="idle" size={80} />
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">capítulo en curso</div>
                <h3 className="font-display text-4xl tracking-tight uppercase">Tres etapas, un capibara.</h3>
              </div>
            </div>
            <p className="font-serif text-[17px] leading-relaxed text-[color:var(--color-ink)]/90">
              Empecé en 2015 con quince años. Pasé por <b>G2 Vodafone</b> — me llamaban &quot;el samurái&quot; — y por{" "}
              <b>Movistar Riders</b> en Valorant. Diez años en el circuito enseñan una cosa: cuándo es el momento de
              bajar el ratón, encender una cámara, y empezar a contarlo desde fuera. <b>Esa parte es ahora.</b>
            </p>
            <Link
              href="/sobre-mi"
              className="mt-6 inline-block font-display text-xl uppercase tracking-wide bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-5 py-2.5 border-[3px] border-[color:var(--color-ink)]"
              style={{ boxShadow: "5px 5px 0 var(--color-red)" }}
            >
              Leer la historia →
            </Link>
          </MangaPanel>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <MangaPanel className="p-3" label="2015">
              <PhotoSlot src="/img/nixerino-jersey-back.jpg" alt="Espalda jersey NIXERINO, azul cinemático" aspect="3/4" tone="lines" />
              <div className="font-mono text-[10px] uppercase tracking-widest mt-2 text-center">era · LoL</div>
            </MangaPanel>
            <MangaPanel className="p-3 mt-6" label="2022">
              <PhotoSlot src="/img/movistar-riders-era.png" alt="Poster oficial Movistar Riders, peace sign" aspect="3/4" tone="dots-lg" />
              <div className="font-mono text-[10px] uppercase tracking-widest mt-2 text-center">era · VAL</div>
            </MangaPanel>
            <MangaPanel className="p-3 col-span-2" label="2024 → hoy">
              <PhotoSlot src="/img/nixerino-streaming-reaction.jpg" alt="En stream con gafas y headset rojo" aspect="16/9" tone="dots-lg" />
              <div className="font-mono text-[10px] uppercase tracking-widest mt-2 text-center">era · twitch partner</div>
            </MangaPanel>
          </div>
        </div>
      </section>

      <PageBreak label="redes · pág. 04" />

      <section className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <h2 className="font-display text-5xl uppercase tracking-tight">Donde estoy.</h2>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">verificadas · 2026</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { p: "Twitch", h: "twitch.tv/n1xerino", t: "Partner · directos casi diarios", red: true, url: "https://www.twitch.tv/n1xerino" },
            { p: "YouTube", h: "youtube · n1xerino", t: "VODs + highlights", url: "https://www.youtube.com/channel/UCST4RuLhR-DfA7fUG170j8A" },
            { p: "X", h: "@n1xerino", t: "Pensamientos sin filtro", url: "https://x.com/n1xerino" },
            { p: "Instagram", h: "@nixerino", t: "Stories · BTS", url: "https://www.instagram.com/nixerino/" },
            { p: "TikTok", h: "@n1xerino", t: "Clips · capibaras", url: "https://www.tiktok.com/@n1xerino" },
          ].map((s) => (
            <a
              key={s.p}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="block hover:-translate-y-1 transition-transform"
            >
              <MangaPanel className="p-4 flex flex-col gap-2 h-full" bg={s.red ? "ink" : "paper"}>
                <div className={`font-mono text-[10px] uppercase tracking-widest ${s.red ? "text-[color:var(--color-paper)]/60" : "text-[color:var(--color-ink)]/60"}`}>plataforma</div>
                <div className="font-display text-3xl leading-none">{s.p}</div>
                <div className={`font-mono text-[11px] ${s.red ? "text-[color:var(--color-red)]" : "text-[color:var(--color-ink)]/70"} break-all`}>{s.h}</div>
                <div className={`font-serif text-[13px] mt-auto ${s.red ? "text-[color:var(--color-paper)]/80" : "text-[color:var(--color-ink)]/80"}`}>{s.t}</div>
              </MangaPanel>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
