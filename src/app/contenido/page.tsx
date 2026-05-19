import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import TwitchEmbed from "@/components/TwitchEmbed";
import SocialLinks from "@/components/SocialLinks";

export const metadata = { title: "Contenido" };

const VIDEOS = [
  { id: "1v2vj3DVJB8", title: "Así juega Nixerino — el pro de LoL que se pasó a Valorant" },
  { id: "lBkA5o1paA0", title: "¡El flick más rápido que he hecho en Valorant!" },
  { id: "NDJkmzol7NU", title: "¡Consigue Radiante en su primer acto!" },
  { id: "pF-4WUV3uyQ", title: "Anuncio: competiré en Valorant este año" },
  { id: "98CP6mb4ncs", title: "Mi mayor tilteo en Valorant" },
  { id: "ET5l2_7vp6M", title: "No puedo más con la toxicidad de Valorant" },
];

export default function ContenidoPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Vertical · 04
      </span>
      <h1 className="font-display text-[42px] md:text-[68px] leading-[1] tracking-[-0.03em] mt-3 mb-6">
        Contenido
      </h1>
      <p className="font-body text-[17px] leading-[1.75] max-w-[60ch] mb-12">
        Twitch · YouTube · TikTok · X · Instagram, todo bajo el mismo nick. Esto es lo que se cuece ahora mismo y lo
        que más ha viajado del archivo.
      </p>

      <section className="mb-16">
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
          <h2 className="font-display text-[22px] md:text-[28px] tracking-[-0.02em]">En directo · Twitch</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)]">
            partner desde hace años
          </span>
        </div>
        <TwitchEmbed channel="n1xerino" />
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
          <h2 className="font-display text-[22px] md:text-[28px] tracking-[-0.02em]">Selección · YouTube</h2>
          <a
            href="https://www.youtube.com/channel/UCST4RuLhR-DfA7fUG170j8A/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] hover:text-[color:var(--color-accent-soft)]"
          >
            Canal completo →
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <YouTubeEmbed key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1fr_1fr] border-t border-[var(--color-line)] pt-12">
        <div>
          <h2 className="font-display text-[22px] md:text-[28px] tracking-[-0.02em] mb-6">Resto de redes</h2>
          <SocialLinks size="lg" />
        </div>
        <div className="border border-[var(--color-accent)]/40 p-7 md:p-9 bg-[color:var(--color-elev)] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Contenido patrocinado
            </span>
            <h3 className="font-display text-[22px] md:text-[28px] tracking-[-0.02em] mt-2 mb-3">
              ¿Vídeo a medida, clip o serie?
            </h3>
            <p className="font-body text-[14px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[44ch]">
              Para formatos cerrados con marca o producto — vídeo dedicado, integraciones nativas, series cortas — la
              tarifa va a consultar.
            </p>
          </div>
          <Link
            href="/contacto?asunto=contenido"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors w-fit"
          >
            Proponer formato →
          </Link>
        </div>
      </section>
    </article>
  );
}
