import Link from "next/link";
import Capybara, { type CapyVariant } from "@/components/Capybara";
import { MangaPanel, PhotoSlot, Sfx, PageBreak } from "@/components/Manga";

export const metadata = { title: "Sobre mí" };

type Chapter = {
  year: string;
  title: string;
  sub: string;
  body: string;
  photo: { src: string; alt: string; aspect: string };
  capy: CapyVariant;
  tone: "lines" | "dots-lg" | "dots-sparse";
  sfx: string;
  accent?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    year: "2015",
    title: "El bebé del scrim",
    sub: "15 años, primer scrim oficial",
    body: "Empezar en LoL semi-pro con quince. Más nervios que ratón. La primera vez que alguien te pone NIXERINO en la espalda de un jersey y la cosa empieza a ir en serio.",
    photo: { src: "/img/nixerino-jersey-back.jpg", alt: "Jersey NIXERINO, vista de espaldas", aspect: "3/4" },
    capy: "idle",
    tone: "lines",
    sfx: "BUMP!",
  },
  {
    year: "2018",
    title: "Era G2 · el samurái",
    sub: "G2 Vodafone · LoL competitivo",
    body: "Me empezaron a llamar 'el samurái' en cast. No por ser místico — por jugar sin pestañear y porque el corte de pelo ayudaba. Aprendí a ganar, a perder, a callarme cuando tocaba.",
    photo: { src: "/img/nixerino-jersey-back.jpg", alt: "Era G2, branding competición", aspect: "3/4" },
    capy: "sensei",
    tone: "dots-lg",
    sfx: "斬!",
    accent: true,
  },
  {
    year: "2022",
    title: "Cambio de juego",
    sub: "Movistar Riders · Valorant",
    body: "League cerraba un ciclo. Valorant abría otro. Misma cabeza, otro shooter. Dos años en Riders, circuito VCT EMEA Challengers, mucha avioneta y mucho hotel.",
    photo: { src: "/img/movistar-riders-era.png", alt: "Poster Movistar Riders, peace sign", aspect: "3/4" },
    capy: "peace",
    tone: "dots-lg",
    sfx: "FLASH!",
  },
  {
    year: "2024",
    title: "Apagar el ratón",
    sub: "Última temporada pro",
    body: "Después de diez años decides cuándo bajarte. Sin drama. Hay vida fuera del circuito y resulta que me apetece contarla yo, con cámara propia y sin coach gritándome.",
    photo: { src: "/img/nixerino-radiant-celebra.jpg", alt: "Celebrando Radiante en Valorant", aspect: "3/4" },
    capy: "sleeping",
    tone: "dots-sparse",
    sfx: "Ω",
  },
  {
    year: "Hoy",
    title: "Twitch Partner",
    sub: "Streams casi diarios · capibara enjoyer",
    body: "Directos, vídeos, colabs cuando me apetece. Sin retirada épica ni regreso forzado. Solo un tío con headset rojo que llevaba diez años aquí y ahora lo cuenta desde el otro lado.",
    photo: { src: "/img/nixerino-streaming-reaction.jpg", alt: "En stream, gafas y headset rojo", aspect: "3/4" },
    capy: "streamer",
    tone: "dots-lg",
    sfx: "LIVE!",
    accent: true,
  },
];

export default function SobreMiPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-6">
      <div className="relative mb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/sobre-mi · cap. 02</div>
        <h1 className="font-display text-[clamp(56px,10vw,140px)] leading-[0.85] uppercase tracking-tight mt-2">
          <span className="block">Diez años</span>
          <span className="block">en <span className="text-[color:var(--color-red)]">tres viñetas</span>.</span>
        </h1>
        <Sfx className="absolute top-0 right-0" rotate={-8} color="var(--color-red)" size={80}>BANG!</Sfx>
      </div>

      <MangaPanel className="p-5 mb-12 flex items-start gap-4" label="nota al margen">
        <Capybara variant="idle" size={64} />
        <div className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/85 max-w-[700px]">
          <b>Sobre lo de mi hermano.</b> Mixwell es leyenda CS:GO/Valorant y es mi hermano mayor.
          Lo digo aquí una vez porque viene en mi biografía y porque me preguntan.
          No estoy aquí para reclamar nada por su carrera — la mía la firmé yo. Gracias.
        </div>
      </MangaPanel>

      <div className="flex flex-col gap-12">
        {CHAPTERS.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={c.year} className="grid lg:grid-cols-12 gap-6 items-start">
              <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                <MangaPanel className="p-3" label={`escena · ${i + 1}/5`}>
                  <PhotoSlot src={c.photo.src} alt={c.photo.alt} aspect={c.photo.aspect} tone={c.tone} />
                </MangaPanel>
              </div>
              <div className={`lg:col-span-7 relative ${reverse ? "lg:order-1" : ""}`}>
                <MangaPanel className={`p-6 ${c.accent ? "" : ""}`} bg={c.accent ? "ink" : "paper"}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className={`font-mono text-[11px] uppercase tracking-widest ${c.accent ? "text-[color:var(--color-paper)]/60" : "text-[color:var(--color-ink)]/60"}`}>
                        capítulo {String(i + 1).padStart(2, "0")} · {c.sub}
                      </div>
                      <h2 className="font-display text-[clamp(40px,6vw,72px)] leading-[0.9] tracking-tight uppercase mt-1">
                        <span className="text-[color:var(--color-red)]">{c.year}</span> · {c.title}
                      </h2>
                    </div>
                    <div className="shrink-0">
                      <Capybara variant={c.capy} size={120} />
                    </div>
                  </div>
                  <p className={`font-serif text-[17px] leading-relaxed ${c.accent ? "text-[color:var(--color-paper)]/90" : "text-[color:var(--color-ink)]/90"} max-w-[640px]`}>
                    {c.body}
                  </p>
                  <Sfx className={`absolute ${reverse ? "-left-4" : "-right-4"} -bottom-6 z-10`} rotate={reverse ? 10 : -10} color="var(--color-red)" size={48}>
                    {c.sfx}
                  </Sfx>
                </MangaPanel>
              </div>
            </div>
          );
        })}
      </div>

      <PageBreak label="lo que no me vas a sacar" sfx="…" />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { t: "Cifras de premios", d: "No vas a encontrar cuánto se cobró en X torneo. Era trabajo, no anécdota viral." },
          { t: "Posiciones específicas", d: "Hablo de circuitos en los que participé. Resultados concretos no son la historia." },
          { t: "Lo personal", d: "Las razones por las que decidí cuándo retirarme son mías. Si te interesa, lee otra cosa." },
        ].map((it) => (
          <MangaPanel key={it.t} className="p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60 mb-2">nope</div>
            <div className="font-display text-2xl uppercase tracking-tight mb-2">{it.t}</div>
            <p className="font-serif text-[14px] leading-snug text-[color:var(--color-ink)]/80">{it.d}</p>
          </MangaPanel>
        ))}
      </div>

      <PageBreak label="próximo capítulo" />

      <div className="grid md:grid-cols-2 gap-6">
        <MangaPanel className="p-6 flex items-center gap-4">
          <Capybara variant="reception" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">si quieres trabajar conmigo</div>
            <div className="font-display text-3xl uppercase tracking-tight">→ Contacto</div>
            <Link href="/contacto" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-ink)]" style={{ boxShadow: "4px 4px 0 var(--color-red)" }}>
              Abrir formulario
            </Link>
          </div>
        </MangaPanel>
        <MangaPanel className="p-6 flex items-center gap-4" bg="ink">
          <Capybara variant="streamer" size={120} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">si solo quieres ver streams</div>
            <div className="font-display text-3xl uppercase tracking-tight text-[color:var(--color-paper)]">→ Contenido</div>
            <Link href="/contenido" className="mt-2 inline-block font-display text-base uppercase bg-[color:var(--color-red)] text-[color:var(--color-paper)] px-4 py-2 border-[2px] border-[color:var(--color-paper)]" style={{ boxShadow: "4px 4px 0 var(--color-paper)" }}>
              Ver directo
            </Link>
          </div>
        </MangaPanel>
      </div>
    </div>
  );
}
