import Link from "next/link";
import Capybara, { type CapyVariant } from "./Capybara";
import { MangaPanel, Tone, SpeechBubble, Sfx, PageBreak } from "./Manga";

type Slug = "coaching" | "eventos" | "colabs";

type VerticalData = {
  num: string;
  slug: Slug;
  capy: CapyVariant;
  title: string;
  kicker: string;
  tagline: string;
  sfx: string;
  sfxLabel: string;
  intro: string;
  points: { k: string; v: string }[];
  process: [string, string, string][];
  redBox: string;
};

export const VERTICAL_DATA: Record<Slug, VerticalData> = {
  coaching: {
    num: "01", slug: "coaching", capy: "sensei",
    title: "Coaching", kicker: "vertical · 01",
    tagline: "Diez años leyendo partidas. Ahora la cabeza la pongo donde tú decidas.",
    sfx: "斬", sfxLabel: "FOCUS",
    intro: "Si te tomas el juego en serio, esto va en serio. No vendo magia de tres sesiones, vendo criterio. Empezamos hablando, miramos VODs, decidimos juntos si pinta o no.",
    points: [
      { k: "1v1 individual", v: "Macro, mentalidad, gestión de tilt. Foco en una cosa por sesión." },
      { k: "Equipos amateur", v: "Scrim review, calls, role definition. Para equipos que ya entrenan." },
      { k: "VOD review", v: "Te mando notas escritas + voz. Tiempo asíncrono, sin agenda." },
      { k: "Juegos", v: "League of Legends · Valorant. Cualquier rango. Sí, también Iron." },
    ],
    process: [
      ["01", "Escribes", "Cuéntame qué juegas, rango, qué buscas. 5 líneas bastan."],
      ["02", "Llamada 15'", "Vemos si encajamos. Si no, te recomiendo a alguien."],
      ["03", "Sesión", "Voz + pantalla. Una cosa concreta. Sin relleno."],
      ["04", "Tarea", "Te vas con deberes. Si no haces los deberes, no hay segunda."],
    ],
    redBox: "Lo que NO hago: prometer subidas de elo, decirte que en una semana llegas a master, fingir que el juego es justo siempre.",
  },
  eventos: {
    num: "02", slug: "eventos", capy: "mic",
    title: "Eventos", kicker: "vertical · 02",
    tagline: "Cameos, watch parties, charlas. Voy a casi cualquier sitio si la idea mola.",
    sfx: "WOO!", sfxLabel: "STAGE",
    intro: "Diez años en eventos a los dos lados del escenario. Sé qué funciona en un photocall y qué no. Si quieres a alguien que llene un sofá de Twitch o suba a charlar, escríbeme.",
    points: [
      { k: "Watch parties", v: "Co-stream de finales, partidas grandes, eventos comunidad." },
      { k: "Cameos", v: "Apariciones puntuales en stream, lives, podcasts ajenos." },
      { k: "Charlas", v: "Universidades, escuelas de esports, eventos para padres curiosos." },
      { k: "Presencial", v: "Finales, ferias, activaciones de marca. Voy si la fecha cuadra." },
    ],
    process: [
      ["01", "Brief", "Qué evento, fechas, formato, audiencia. Cuanto más concreto, mejor."],
      ["02", "Hueco", "Vemos calendario. Si no llegas a la fecha, no llegas."],
      ["03", "Confirmación", "Acuerdo escrito, sin sorpresas, todo en email."],
      ["04", "Día D", "Estoy allí. Pregunta a quien me haya contratado antes."],
    ],
    redBox: "Lo que NO hago: leer guiones que no son míos, fingir entusiasmo por un juego que no he tocado, presentar galas donde no me dejan ser yo.",
  },
  colabs: {
    num: "03", slug: "colabs", capy: "merch",
    title: "Colabs", kicker: "vertical · 03",
    tagline: "Sponsorships, embajadas, integración orgánica. Solo marcas que usaría yo.",
    sfx: "DEAL!", sfxLabel: "BRAND",
    intro: "Mi cara sale en muchas cosas. Solo en cosas que tendría yo. Tengo el lujo de decir que no y lo uso bastante. Si vienes con un brief decente, hablamos.",
    points: [
      { k: "Sponsorships", v: "Periferia, hardware, energéticas, productos de mi vida diaria." },
      { k: "Embajadas largas", v: "Trato de varios meses, integración natural, no spam." },
      { k: "Merch / drops", v: "Colab capsule, drops limitados, capibara-friendly." },
      { k: "Activaciones puntuales", v: "Lanzamientos, day-one, eventos con marca presente." },
    ],
    process: [
      ["01", "Brief con cifras", "Qué producto, qué objetivo, qué KPIs. Si dices 'awareness', concreta."],
      ["02", "Encaje", "Si la marca no encaja, digo que no rápido. Os ahorro tiempo."],
      ["03", "Propuesta", "Volvemos con formato, plazos, derechos de uso. Por email."],
      ["04", "Activación", "Lo hacemos. Si funciona, repetimos. Si no, lo decimos."],
    ],
    redBox: "Lo que NO hago: trampas de marketing, fingir que llevo un producto que no abro, eventos de criptomonedas dudosas, casas de apuestas.",
  },
};

const FAQ: [string, string][] = [
  ["¿Cuánto cuesta?", "Consultar. Depende del formato, del tiempo, de si lo grabamos o no. Te lo digo en el primer email."],
  ["¿En cuánto tiempo respondes?", "48–72h en días laborables. Si tardo más, escríbeme otra vez sin disculparte."],
  ["¿Trabajas con quien no tiene marca grande detrás?", "Sí. Lo importante es el brief, no el logo."],
  ["¿Inglés / catalán / francés?", "Los tres. El stream es en castellano principalmente."],
];

export default function VerticalPageContent({ slug }: { slug: Slug }) {
  const d = VERTICAL_DATA[slug];
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-6">
      <div className="relative mb-10 grid lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/{d.slug} · {d.kicker}</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] uppercase tracking-tight mt-2 break-words">
            {d.title}<span className="text-[color:var(--color-red)]">.</span>
          </h1>
          <p className="font-serif text-[19px] leading-snug mt-3 max-w-[560px] text-[color:var(--color-ink)]/85">{d.tagline}</p>
          <div className="flex items-center gap-4 mt-5 flex-wrap">
            <div className="font-mono text-[12px] uppercase tracking-widest bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-3 py-2">
              Tarifa · <b className="text-[color:var(--color-red)]">Consultar</b>
            </div>
            <Link
              href={`/contacto?asunto=${d.slug}`}
              className="font-display text-lg uppercase tracking-wide bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-5 py-2.5 border-[3px] border-[color:var(--color-ink)]"
              style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
            >
              Pedir presupuesto
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <MangaPanel label={`pose · ${d.capy}`} className="p-6 flex items-center justify-center bg-[color:var(--color-paper-2)] aspect-[4/3] overflow-hidden">
            <Tone pattern="dots-lg" className="absolute inset-0 opacity-40" />
            <div className="relative">
              <Capybara variant={d.capy} size={280} />
            </div>
          </MangaPanel>
          <Sfx className="absolute -top-4 -right-2 z-10" rotate={-8} color="var(--color-red)" size={70}>{d.sfx}</Sfx>
          <div className="absolute -bottom-3 left-6 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] font-mono text-[10px] uppercase tracking-widest px-3 py-1 border-[2px] border-[color:var(--color-ink)]">
            {d.sfxLabel}
          </div>
        </div>
      </div>

      <PageBreak label="qué incluye" />

      <div className="grid lg:grid-cols-12 gap-6 mb-12">
        <MangaPanel className="lg:col-span-5 p-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60 mb-2">cómo lo planteo</div>
          <p className="font-serif text-[18px] leading-relaxed text-[color:var(--color-ink)]/90">{d.intro}</p>
          <div className="mt-5 flex items-center gap-3 border-t-[2px] border-dashed border-[color:var(--color-ink)]/40 pt-4">
            <Capybara variant={d.capy} size={56} />
            <SpeechBubble small tail="l">
              <div className="font-serif text-[14px] italic">&quot;Sin postureo, sin guion, sin paja.&quot;</div>
            </SpeechBubble>
          </div>
        </MangaPanel>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {d.points.map((p, i) => (
            <MangaPanel key={p.k} className="p-5 relative">
              <div className="absolute top-3 right-3 font-display text-3xl text-[color:var(--color-ink)]/15 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-2xl uppercase tracking-tight">{p.k}</div>
              <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/80 mt-1">{p.v}</p>
            </MangaPanel>
          ))}
        </div>
      </div>

      <PageBreak label="proceso" sfx={d.sfx} />

      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {d.process.map(([n, t, b], i) => (
          <MangaPanel key={n} className="p-5 relative">
            <div className="absolute -top-4 -left-2 bg-[color:var(--color-red)] text-[color:var(--color-paper)] font-display text-3xl px-3 py-0 border-[3px] border-[color:var(--color-ink)] uppercase leading-tight" style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}>
              {n}
            </div>
            <div className="font-display text-xl uppercase tracking-tight mt-4">{t}</div>
            <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/80 mt-1">{b}</p>
            {i < d.process.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-ink)] z-10">
                <span className="font-display text-3xl">→</span>
              </div>
            )}
          </MangaPanel>
        ))}
      </div>

      <MangaPanel className="p-6 mb-12 relative" bg="ink">
        <Tone pattern="lines" className="absolute inset-0 opacity-15" />
        <div className="relative flex items-start gap-4 flex-wrap">
          <Capybara variant="sleeping" size={100} />
          <div className="flex-1 min-w-[260px]">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-red)] mb-2">línea roja</div>
            <p className="font-serif text-[18px] leading-relaxed text-[color:var(--color-paper)]">{d.redBox}</p>
          </div>
        </div>
      </MangaPanel>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 grid gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">preguntas que me hacéis</div>
          {FAQ.map(([q, a]) => (
            <details key={q} className="bg-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] p-4" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
              <summary className="cursor-pointer flex items-baseline justify-between gap-3 list-none">
                <span className="font-display text-xl uppercase tracking-tight">{q}</span>
                <span className="font-display text-2xl text-[color:var(--color-red)]">+</span>
              </summary>
              <p className="font-serif text-[15px] leading-snug text-[color:var(--color-ink)]/85 mt-2">{a}</p>
            </details>
          ))}
        </div>
        <MangaPanel className="lg:col-span-4 p-6 flex flex-col gap-3" bg="ink">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">listo · siguiente paso</div>
          <div className="font-display text-3xl uppercase tracking-tight text-[color:var(--color-paper)] leading-[0.95]">
            Si crees que cuadra, escríbeme.
          </div>
          <p className="font-serif text-[14px] text-[color:var(--color-paper)]/80">
            Formulario único. Cinco campos. Sin newsletter, sin embudo, sin nada que no necesite.
          </p>
          <Link href={`/contacto?asunto=${d.slug}`} className="mt-2 inline-block font-display text-xl uppercase tracking-wide bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-5 py-3 border-[3px] border-[color:var(--color-paper)]" style={{ boxShadow: "5px 5px 0 var(--color-paper)" }}>
            → Ir a contacto
          </Link>
          <div className="mt-3 font-mono text-[11px] tracking-widest text-[color:var(--color-paper)]/50 uppercase">
            asunto auto-rellenado: <b className="text-[color:var(--color-paper)]">{d.title}</b>
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
