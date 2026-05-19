import Link from "next/link";
import Capybara from "@/components/Capybara";
import { MangaPanel, PhotoSlot, SpeechBubble, Sfx, PageBreak } from "@/components/Manga";

export const metadata = { title: "Era LoL — CV competitivo" };

type Team = {
  period: string;
  name: string;
  role: string;
  detail: string;
  highlight?: string;
};

const TEAMS: Team[] = [
  {
    period: "2015",
    name: "Overgaming / Team SalsaLoL",
    role: "AD Carry",
    detail: "Primer roster pro verificable. ESL MWC Challenge marzo 2015.",
    highlight: "debut",
  },
  {
    period: "2015–2016",
    name: "DdH (Don de Habla)",
    role: "AD Carry",
    detail: "Continuación en la escena amateur-pro española.",
  },
  {
    period: "2016",
    name: "ThunderX3 Baskonia",
    role: "AD Carry",
    detail: "Primer club deportivo tradicional español que apuesta por esports — Saski Baskonia entra en LoL.",
    highlight: "club deportivo",
  },
  {
    period: "2016",
    name: "Giants Only The Brave",
    role: "AD Carry",
    detail: "Equipo academy de Giants Gaming, una de las orgs históricas del esports español.",
  },
  {
    period: "2017 — abr 2018",
    name: "G2 Vodafone",
    role: "AD Carry — bot lane con Homi",
    detail: 'Era "el samurái". Bot lane referente del talento español. SuperLiga, prensa cubriendo cada movimiento.',
    highlight: "samurái",
  },
  {
    period: "2018",
    name: "X6tence",
    role: "AD Carry",
    detail: "Una de las orgs más veteranas del esport español.",
  },
  {
    period: "2018",
    name: "Dragons E.C.",
    role: "AD Carry",
    detail: "SuperLiga.",
  },
  {
    period: "2018–2019",
    name: "S2V Esports",
    role: "AD Carry — 63 partidos",
    detail: "Período largo de regularidad en SuperLiga.",
  },
  {
    period: "jun 2019",
    name: "G2 Heretics",
    role: "AD Carry — 24 partidos",
    detail: "Spin-off SuperLiga de G2 + Heretics.",
  },
  {
    period: "2019–2020",
    name: "BCN Squad",
    role: "AD Carry — 18 partidos",
    detail: "Roster catalán en SuperLiga.",
  },
  {
    period: "2021 — may 2022",
    name: "Rebels Gaming",
    role: "AD Carry",
    detail: "Último equipo antes del salto a Valorant.",
    highlight: "cierre LoL",
  },
];

const TOURNAMENTS: { season: string; competition: string }[] = [
  { season: "2017", competition: "LVP SuperLiga Orange — Spring & Summer" },
  { season: "2018", competition: "LVP SLO Spring + Playoffs" },
  { season: "2019", competition: "LVP SLO Spring / Summer + Iberian Cup" },
  { season: "2020", competition: "LVP SLO Spring / Summer" },
  { season: "2021", competition: "LVP Superliga Summer + Iberian Cup" },
  { season: "2022", competition: "LVP SuperLiga 2nd Division Spring (último torneo)" },
];

const HIGHLIGHTS: { label: string; value: string; meta?: string }[] = [
  { label: "Pico de audiencia", value: "73.006", meta: "espectadores simultáneos · LVP Superliga Summer 2021 · fuente Esports Charts" },
  { label: "Be a Pro", value: "Movistar Esports #03", meta: "serie dedicada · mayo 2018 · técnica de farmeo ADC" },
  { label: "Apodo en cast", value: "El samurái", meta: "era G2 Vodafone · referente del talento español (prensa esports 2018)" },
  { label: "Bot lane histórico", value: "Nixerino + Homi", meta: "duo bot G2 Vodafone 2017–2018" },
];

export default function CVLolPage() {
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
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/sobre-mi/lol · cv era 01</div>
          <h1 className="font-display text-[clamp(56px,10vw,128px)] leading-[0.85] uppercase tracking-tight mt-2">
            ERA <span className="text-[color:var(--color-red)]">LoL</span>.
            <br /> 2015 → 2022.
          </h1>
          <p className="font-serif text-[19px] leading-snug mt-3 max-w-[600px] text-[color:var(--color-ink)]/85">
            Siete años en SuperLiga. Once equipos. ADC pegado al bot lane.
            La etapa en la que la prensa esports le puso nombre: <b>el samurái</b>.
          </p>
        </div>
        <div className="lg:col-span-4 relative">
          <MangaPanel label="pose · sensei" className="p-6 flex items-center justify-center aspect-[4/3] overflow-hidden">
            <Capybara variant="sensei" size={220} />
          </MangaPanel>
          <Sfx className="absolute -top-4 -right-2 z-10" rotate={-8} color="var(--color-red)" size={56}>
            斬
          </Sfx>
        </div>
      </div>

      <PageBreak label="trayectoria · equipos" sfx="·" />

      <div className="grid lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-7 flex flex-col gap-3">
          {TEAMS.map((t, i) => (
            <MangaPanel key={t.name + i} className="p-5">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">{t.period}</div>
                  <div className="font-display text-2xl uppercase tracking-tight mt-0.5">{t.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--color-ink)]/70 mt-0.5">{t.role}</div>
                </div>
                {t.highlight && (
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-2 py-1">
                    {t.highlight}
                  </span>
                )}
              </div>
              <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/85 mt-2">{t.detail}</p>
            </MangaPanel>
          ))}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <MangaPanel className="p-3" label="2017–2018 · era G2">
            <PhotoSlot
              src="/img/nixerino-jersey-back.jpg"
              alt="Jersey NIXERINO, era competición"
              aspect="3/4"
              tone="lines"
            />
          </MangaPanel>
          <MangaPanel className="p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">cita · prensa esports</div>
            <p className="font-serif italic text-[15px] leading-relaxed text-[color:var(--color-ink)]/90 mt-2">
              &quot;Una realidad sobre la que fluye el futuro nacional de los eSports en España.&quot;
            </p>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">
              ElDesmarque · 2018 — sobre Nixerino
            </div>
          </MangaPanel>
          <MangaPanel className="p-5">
            <div className="flex items-center gap-3">
              <Capybara variant="idle" size={56} />
              <SpeechBubble small tail="l">
                <div className="font-serif text-[13px] italic">&quot;Si te tomas el juego en serio, esto va en serio.&quot;</div>
              </SpeechBubble>
            </div>
          </MangaPanel>
        </div>
      </div>

      <PageBreak label="ligas + competiciones" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {TOURNAMENTS.map((t) => (
          <MangaPanel key={t.season + t.competition} className="p-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">{t.season}</div>
            <div className="font-display text-lg leading-tight mt-1 uppercase tracking-tight">{t.competition}</div>
          </MangaPanel>
        ))}
      </div>

      <PageBreak label="hitos · highlights" sfx="POG!" />

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {HIGHLIGHTS.map((h) => (
          <MangaPanel key={h.label} className="p-5" bg={h.label === "Pico de audiencia" ? "ink" : "paper"}>
            <div className={`font-mono text-[10px] uppercase tracking-widest ${h.label === "Pico de audiencia" ? "text-[color:var(--color-paper)]/60" : "text-[color:var(--color-ink)]/60"}`}>
              {h.label}
            </div>
            <div className="font-display text-[clamp(28px,5vw,52px)] leading-[0.95] tracking-tight uppercase mt-1">
              {h.value}
            </div>
            {h.meta && (
              <p className={`font-serif text-[13px] leading-snug mt-2 ${h.label === "Pico de audiencia" ? "text-[color:var(--color-paper)]/80" : "text-[color:var(--color-ink)]/80"}`}>
                {h.meta}
              </p>
            )}
          </MangaPanel>
        ))}
      </div>

      <PageBreak label="siguiente capítulo" />

      <div className="grid md:grid-cols-2 gap-6">
        <MangaPanel className="p-6 flex items-center gap-4" bg="paper">
          <Capybara variant="peace" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">cv era 02</div>
            <div className="font-display text-3xl uppercase tracking-tight">→ Era Valorant</div>
            <Link href="/sobre-mi/valorant" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-ink)]" style={{ boxShadow: "4px 4px 0 var(--color-red)" }}>
              Ver CV Valorant
            </Link>
          </div>
        </MangaPanel>
        <MangaPanel className="p-6 flex items-center gap-4" bg="ink">
          <Capybara variant="sensei" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">¿proyecto LoL?</div>
            <div className="font-display text-3xl uppercase tracking-tight text-[color:var(--color-paper)]">→ Coaching</div>
            <Link href="/coaching" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-paper)]" style={{ boxShadow: "4px 4px 0 var(--color-paper)" }}>
              Pedir sesión
            </Link>
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
