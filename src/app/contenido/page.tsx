import Link from "next/link";
import Capybara from "@/components/Capybara";
import { MangaPanel, Tone, Sfx, PageBreak } from "@/components/Manga";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import TwitchEmbed from "@/components/TwitchEmbed";

export const metadata = { title: "Contenido" };

const YT_VIDEOS: { id: string; title: string; note: string }[] = [
  { id: "1v2vj3DVJB8", title: "Así juega Nixerino — el pro de LoL que se pasó a Valorant", note: "highlight" },
  { id: "lBkA5o1paA0", title: "El flick más rápido que he hecho en Valorant", note: "highlight" },
  { id: "NDJkmzol7NU", title: "Radiante en el primer acto", note: "vlog" },
  { id: "pF-4WUV3uyQ", title: "Competiré en Valorant este año", note: "anuncio" },
  { id: "98CP6mb4ncs", title: "Mi mayor tilteo en Valorant", note: "autoirónico" },
  { id: "ET5l2_7vp6M", title: "No puedo más con la toxicidad", note: "tono de la casa · autoirónico" },
];

const FORMATS: [string, string][] = [
  ["Stream sponsored", "1–4h en directo, integración natural, sin segmentos publicitarios bloque."],
  ["Vídeo YouTube", "10–20min, formato narrativo, voice-over propio."],
  ["TikTok / Shorts", "Clips verticales, formato corto, producto integrado."],
  ["Day-one drop", "Cobertura primer día, gameplay, primer impacto, opinión sincera."],
];

export default function ContenidoPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-6">
      <div className="relative mb-10 flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/contenido · cap. 06</div>
          <h1 className="font-display text-[clamp(48px,8vw,112px)] leading-[0.85] uppercase tracking-tight mt-2">
            Contenido<span className="text-[color:var(--color-red)]">.</span>
          </h1>
          <p className="font-serif text-[19px] leading-snug mt-3 max-w-[640px] text-[color:var(--color-ink)]/85">
            Vertical · 04 + escaparate. Twitch en directo, vídeos destacados, integraciones de marca.
            Honesto, autoirónico, sin guion robot.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="font-mono text-[12px] uppercase tracking-widest bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-3 py-2">
            Tarifa · <b className="text-[color:var(--color-red)]">Consultar</b>
          </div>
          <Link
            href="/contacto?asunto=contenido"
            className="font-display text-lg uppercase tracking-wide bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-5 py-2.5 border-[3px] border-[color:var(--color-ink)]"
            style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
          >
            Pedir presupuesto
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-8 relative">
          <MangaPanel label="twitch · directo" className="p-3">
            <TwitchEmbed channel="n1xerino" />
          </MangaPanel>
          <Sfx className="absolute -top-6 right-4 z-10" rotate={-8} color="var(--color-red)" size={64}>LIVE!</Sfx>
        </div>
        <MangaPanel className="lg:col-span-4 p-6 flex flex-col gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">canal · twitch partner</div>
          <div className="font-display text-4xl uppercase tracking-tight leading-[0.95]">n1xerino</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border-[2px] border-[color:var(--color-ink)] p-2">
              <div className="font-mono text-[10px] uppercase text-[color:var(--color-ink)]/60">horario</div>
              <div className="font-display text-base">L–V · 18h</div>
            </div>
            <div className="border-[2px] border-[color:var(--color-ink)] p-2">
              <div className="font-mono text-[10px] uppercase text-[color:var(--color-ink)]/60">idioma</div>
              <div className="font-display text-base">Español</div>
            </div>
            <div className="border-[2px] border-[color:var(--color-ink)] p-2">
              <div className="font-mono text-[10px] uppercase text-[color:var(--color-ink)]/60">juegos</div>
              <div className="font-display text-base">VAL · variado</div>
            </div>
            <div className="border-[2px] border-[color:var(--color-ink)] p-2">
              <div className="font-mono text-[10px] uppercase text-[color:var(--color-ink)]/60">tono</div>
              <div className="font-display text-base">Sin filtro</div>
            </div>
          </div>
          <a
            href="https://www.twitch.tv/n1xerino"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex justify-center font-display text-lg uppercase tracking-wide bg-[#6441A5] text-[color:var(--color-paper)] px-4 py-2.5 border-[3px] border-[color:var(--color-ink)]"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            ▶ Abrir Twitch
          </a>
        </MangaPanel>
      </div>

      <PageBreak label="youtube · destacados" sfx="POG!" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {YT_VIDEOS.map((v, i) => (
          <div key={v.id} className="flex flex-col gap-3">
            <YouTubeEmbed id={v.id} title={v.title} />
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-display text-lg leading-tight">{v.title}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60 mt-1">{v.note}</div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/40">
                #{String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <PageBreak label="contenido patrocinado" />

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <MangaPanel className="p-6">
            <Capybara variant="merch" size={160} className="mb-3" />
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">vertical · 04 · contenido</div>
            <h3 className="font-display text-4xl uppercase tracking-tight mt-1">Integraciones que no apestan.</h3>
            <p className="font-serif text-[16px] leading-snug mt-3 text-[color:var(--color-ink)]/85">
              Streams patrocinados, vídeos con marca, integraciones nativas dentro de directos.
              Sin guion robot, sin mentirle a la cámara. Si me lo creo yo, te lo cuento a ti.
            </p>
            <Link
              href="/contacto?asunto=contenido"
              className="mt-5 inline-block font-display text-lg uppercase tracking-wide bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-5 py-2.5 border-[3px] border-[color:var(--color-ink)]"
              style={{ boxShadow: "4px 4px 0 var(--color-red)" }}
            >
              Brief de marca →
            </Link>
          </MangaPanel>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {FORMATS.map(([t, b], i) => (
            <MangaPanel key={t} className="p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60">formato 0{i + 1}</div>
              <div className="font-display text-2xl uppercase tracking-tight mt-1">{t}</div>
              <p className="font-serif text-[13px] leading-snug text-[color:var(--color-ink)]/80 mt-1">{b}</p>
            </MangaPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
