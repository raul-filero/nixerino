import Hero from "@/components/Hero";
import VerticalCard from "@/components/VerticalCard";
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";

const VERTICALS = [
  {
    index: "01",
    label: "Coaching",
    title: "COACHING & ANÁLISIS",
    description:
      "Sesiones 1v1, análisis de equipos y scrims. Bot lane en LoL, duelista/iniciador en Valorant. La carrera detrás del coach: +10 años de competición real.",
    href: "/coaching",
  },
  {
    index: "02",
    label: "Eventos",
    title: "EVENTOS & CAMEOS",
    description:
      "Presentaciones, watch parties, charlas, podcasts y apariciones físicas. Cara conocida del ecosistema español, Twitch Partner activo.",
    href: "/eventos",
  },
  {
    index: "03",
    label: "Colabs",
    title: "COLABS DE MARCA",
    description:
      "Sponsorships, integraciones nativas y embajada de marca. Audiencia gaming-esports española real, sin postureo, con tono cercano.",
    href: "/colabs",
  },
  {
    index: "04",
    label: "Contenido",
    title: "CONTENIDO PATROCINADO",
    description:
      "Clips, vídeos colaborativos, torneos de creadores, formatos a medida. Twitch · YouTube · TikTok · X · Instagram bajo un mismo nick.",
    href: "/contenido",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display text-[32px] md:text-[44px] tracking-[-0.02em]">
            ¿En qué te puedo echar una mano?
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)]">
            4 vías · tarifa a consultar
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {VERTICALS.map((v) => (
            <VerticalCard key={v.index} {...v} />
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-line)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)]">
              Quién soy / muy en corto
            </span>
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.05] mt-3 mb-6">
              Una década compitiendo. Dos juegos. Una misma cara.
            </h2>
            <p className="font-body text-[16px] leading-[1.7] max-w-[60ch] text-[color:var(--color-text)]/90 mb-4">
              Pasé de la <strong>SuperLiga de LoL</strong> a las ligas profesionales de <strong>Valorant</strong> con
              Movistar Riders. Era ADC bot lane —los compañeros me llamaban{" "}
              <span className="text-[color:var(--color-g2)] font-medium">«el samurái»</span>— y luego duelista. Diez
              años de directos, equipos, vestuarios, hoteles y cabinas.
            </p>
            <p className="font-body text-[15px] leading-[1.7] max-w-[60ch] text-[color:var(--color-text-muted)] mb-8">
              Hoy sigo en Twitch como Partner, fuera del circuito pro. Si quieres coaching real,
              alguien que ya se ha quemado las pestañas en LAN, o un creador estable que no vive de los focos —
              probablemente nos vamos a entender.
            </p>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] hover:text-[color:var(--color-accent-soft)]"
            >
              Historia completa →
            </Link>
          </div>

          <aside className="border-l border-[var(--color-line)] md:pl-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)]">
              Encuéntrame
            </span>
            <div className="mt-4">
              <SocialLinks size="md" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-mono-dim)] mt-8">
              Business
            </p>
            <a
              href="mailto:nixerino@gmail.com"
              className="font-body text-[14px] hover:text-[color:var(--color-accent-soft)]"
            >
              nixerino@gmail.com
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
