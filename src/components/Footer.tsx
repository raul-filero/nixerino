import Link from "next/link";
import Capybara from "./Capybara";
import { Tone } from "./Manga";

const SOCIAL: { p: string; h: string; url: string }[] = [
  { p: "Twitch", h: "twitch.tv/n1xerino", url: "https://www.twitch.tv/n1xerino" },
  { p: "YouTube", h: "youtube · n1xerino", url: "https://www.youtube.com/channel/UCST4RuLhR-DfA7fUG170j8A" },
  { p: "X", h: "@n1xerino", url: "https://x.com/n1xerino" },
  { p: "Instagram", h: "@nixerino", url: "https://www.instagram.com/nixerino/" },
  { p: "TikTok", h: "@n1xerino", url: "https://www.tiktok.com/@n1xerino" },
];

const PAGES: [string, string][] = [
  ["/sobre-mi", "Sobre mí"],
  ["/coaching", "Coaching"],
  ["/eventos", "Eventos"],
  ["/colabs", "Colabs"],
  ["/contenido", "Contenido"],
  ["/contacto", "Contacto"],
];

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)] mt-20 border-t-[6px] border-[color:var(--color-ink)]">
      <div className="absolute -top-1 left-0 right-0 h-[14px] overflow-hidden">
        <Tone pattern="dots-sparse" className="absolute inset-0 opacity-50" />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col gap-3">
          <Capybara variant="sleeping" size={140} />
          <div className="font-display text-4xl leading-none">FIN.</div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">
            capítulo en curso · {new Date().getFullYear()}
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">páginas</div>
          {PAGES.map(([href, label]) => (
            <Link key={href} href={href} className="text-left font-serif text-lg hover:text-[color:var(--color-red)] transition-colors w-fit">
              ↳ {label}
            </Link>
          ))}
        </div>
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">redes verificadas</div>
          <ul className="flex flex-col gap-2">
            {SOCIAL.map((s) => (
              <li key={s.p} className="flex items-baseline justify-between gap-3 border-b border-[color:var(--color-paper)]/15 pb-1">
                <a href={s.url} target="_blank" rel="noopener noreferrer me" className="font-display text-lg hover:text-[color:var(--color-red)] transition-colors">
                  {s.p}
                </a>
                <span className="font-mono text-[11px] text-[color:var(--color-paper)]/70">{s.h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-widest">
            <span className="text-[color:var(--color-paper)]/60">business</span>
            <br />
            <a href="mailto:nixerino@gmail.com" className="text-[color:var(--color-paper)] hover:text-[color:var(--color-red)]">
              nixerino@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-paper)]/15">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-paper)]/50">
          <span>© {new Date().getFullYear()} Nicolás Canellas Colocho · all rights reserved</span>
          <span>sin cookies · sin tracking · rgpd-ok</span>
        </div>
      </div>
    </footer>
  );
}
