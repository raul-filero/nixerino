import Link from "next/link";
import Capybara from "@/components/Capybara";
import { MangaPanel, PhotoSlot, SpeechBubble, Sfx, PageBreak } from "@/components/Manga";

export const metadata = { title: "Era Valorant — CV competitivo" };

type Stint = {
  period: string;
  team: string;
  role: string;
  detail: string;
  highlight?: string;
};

const STINTS: Stint[] = [
  {
    period: "15 dic 2022 — feb 2024",
    team: "Movistar Riders",
    role: "Duelista / Iniciador",
    detail:
      "Fichado para liderar el nuevo proyecto VCT EMEA Challengers España. Roster inicial: Navarrete, vinice, Nixerino, dimaxx, saiko. Coach principal: Yugami (Daniel Cama Hidalgo) · staff Toruu / eKs / Starky en distintos momentos.",
    highlight: "salto desde LoL",
  },
  {
    period: "oct 2023",
    team: "Team Spain",
    role: "Representando a 🇪🇸",
    detail:
      "Convocado por la selección española para Spike Nations #4 International Stage. Equipo nacional cara a 🇫🇷, 🇹🇷, 🇬🇧, 🇩🇪, 🇮🇹.",
    highlight: "selección nacional",
  },
];

const TOURNAMENTS: { season: string; competition: string; tag?: string }[] = [
  { season: "2023 · S1", competition: "VCT 2023 ES — Challengers Rising Split 1", tag: "Movistar Riders" },
  { season: "2023 · S2", competition: "VCL Spain Rising Split 2", tag: "Movistar Riders" },
  { season: "2023", competition: "LVP Crossfire Cup — Contenders #1 y #2", tag: "Movistar Riders" },
  { season: "oct 2023", competition: "Spike Nations #4 International Stage", tag: "Team Spain 🇪🇸" },
  { season: "2024", competition: "VCL EMEA Challengers — última temporada pro", tag: "Movistar Riders" },
];

const HIGHLIGHTS: { label: string; value: string; meta?: string }[] = [
  { label: "Pico audiencia VCL", value: "19.891", meta: "VCT 2023 ES Challengers Rising Split 1 · más visto · fuente Esports Charts" },
  { label: "Carrera total competitiva", value: "10+ años", meta: "uno de los pocos esp. con doble carrera pro LoL + Valorant" },
  { label: "Roster lead", value: "Movistar Riders", meta: "fichado el 15-dic-2022 junto a dimaxx y saiko para encabezar el nuevo proyecto" },
  { label: "Selección", value: "Team Spain", meta: "convocatoria Spike Nations #4 · oct 2023" },
];

export default function CVValorantPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-6">
      <Link
        href="/sobre-mi"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60 hover:text-[color:var(--color-red)] mb-6"
      >
        ← volver a /sobre-mi
      </Link>

      <div className="relative mb-10 grid lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/sobre-mi/valorant · cv era 02</div>
          <h1 className="font-display text-[clamp(56px,10vw,128px)] leading-[0.85] uppercase tracking-tight mt-2">
            ERA <span className="text-[color:var(--color-red)]">VALORANT</span>.
            <br /> 2022 → 2024.
          </h1>
          <p className="font-serif text-[19px] leading-snug mt-3 max-w-[640px] text-[color:var(--color-ink)]/85">
            Doble carrera. Misma cabeza, otro shooter. Fichado por <b>Movistar Riders</b>
            para liderar su nuevo proyecto en VCT EMEA Challengers España.
          </p>
        </div>
        <div className="lg:col-span-4 relative">
          <MangaPanel label="pose · peace" className="p-6 flex items-center justify-center aspect-[4/3] overflow-hidden">
            <Capybara variant="peace" size={220} />
          </MangaPanel>
          <Sfx className="absolute -top-4 -right-2 z-10" rotate={-8} color="var(--color-red)" size={56}>
            FLASH!
          </Sfx>
        </div>
      </div>

      <PageBreak label="trayectoria · equipos" sfx="·" />

      <div className="grid lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-7 flex flex-col gap-3">
          {STINTS.map((s, i) => (
            <MangaPanel key={s.team + i} className="p-5">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">{s.period}</div>
                  <div className="font-display text-2xl uppercase tracking-tight mt-0.5">{s.team}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--color-ink)]/70 mt-0.5">{s.role}</div>
                </div>
                {s.highlight && (
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-2 py-1">
                    {s.highlight}
                  </span>
                )}
              </div>
              <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/85 mt-2">{s.detail}</p>
            </MangaPanel>
          ))}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <MangaPanel className="p-3" label="poster Movistar Riders">
            <PhotoSlot
              src="/img/movistar-riders-era.png"
              alt="Poster oficial Movistar Riders era Valorant, peace sign"
              aspect="3/4"
              tone="dots-lg"
            />
          </MangaPanel>
          <MangaPanel className="p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">cita · prensa</div>
            <p className="font-serif italic text-[15px] leading-relaxed text-[color:var(--color-ink)]/90 mt-2">
              &quot;Nixerino y Pando lideran el nuevo Movistar Riders.&quot;
            </p>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">
              TheRadiant · diciembre 2022
            </div>
          </MangaPanel>
          <MangaPanel className="p-5">
            <div className="flex items-center gap-3">
              <Capybara variant="streamer" size={56} />
              <SpeechBubble small tail="l">
                <div className="font-serif text-[13px] italic">&quot;Misma cabeza, otro shooter.&quot;</div>
              </SpeechBubble>
            </div>
          </MangaPanel>
        </div>
      </div>

      <PageBreak label="competiciones" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {TOURNAMENTS.map((t) => (
          <MangaPanel key={t.season + t.competition} className="p-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">{t.season}</div>
            <div className="font-display text-lg leading-tight mt-1 uppercase tracking-tight">{t.competition}</div>
            {t.tag && (
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-red)]">
                {t.tag}
              </div>
            )}
          </MangaPanel>
        ))}
      </div>

      <PageBreak label="hitos · highlights" sfx="GG!" />

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {HIGHLIGHTS.map((h, i) => (
          <MangaPanel key={h.label} className="p-5" bg={i === 0 ? "ink" : "paper"}>
            <div className={`font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-[color:var(--color-paper)]/60" : "text-[color:var(--color-ink)]/60"}`}>
              {h.label}
            </div>
            <div className="font-display text-[clamp(28px,5vw,52px)] leading-[0.95] tracking-tight uppercase mt-1">
              {h.value}
            </div>
            {h.meta && (
              <p className={`font-serif text-[13px] leading-snug mt-2 ${i === 0 ? "text-[color:var(--color-paper)]/80" : "text-[color:var(--color-ink)]/80"}`}>
                {h.meta}
              </p>
            )}
          </MangaPanel>
        ))}
      </div>

      <PageBreak label="siguiente capítulo" />

      <div className="grid md:grid-cols-2 gap-6">
        <MangaPanel className="p-6 flex items-center gap-4" bg="paper">
          <Capybara variant="sensei" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">cv era 01</div>
            <div className="font-display text-3xl uppercase tracking-tight">→ Era LoL</div>
            <Link href="/sobre-mi/lol" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-ink)]" style={{ boxShadow: "4px 4px 0 var(--color-red)" }}>
              Ver CV LoL
            </Link>
          </div>
        </MangaPanel>
        <MangaPanel className="p-6 flex items-center gap-4" bg="ink">
          <Capybara variant="merch" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">¿marca interesada?</div>
            <div className="font-display text-3xl uppercase tracking-tight text-[color:var(--color-paper)]">→ Colabs</div>
            <Link href="/colabs" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-paper)]" style={{ boxShadow: "4px 4px 0 var(--color-paper)" }}>
              Ver propuesta
            </Link>
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
