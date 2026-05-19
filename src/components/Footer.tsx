import Link from "next/link";
import CapybaraIcon from "./CapybaraIcon";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] mt-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3 text-[color:var(--color-accent)]">
            <CapybaraIcon size={20} />
            <span className="font-display text-[15px] tracking-tight">NIXERINO</span>
          </div>
          <p className="font-body text-[13px] leading-[1.7] text-[color:var(--color-text-muted)] max-w-[260px]">
            Tarjeta profesional de Nicolás Canellas. Ex-pro LoL & Valorant. Twitch Partner. Capibara lover.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)] mb-3">Navegación</h4>
          <ul className="space-y-1.5">
            {[
              ["Sobre mí", "/sobre-mi"],
              ["Coaching", "/coaching"],
              ["Eventos", "/eventos"],
              ["Colabs", "/colabs"],
              ["Contenido", "/contenido"],
              ["Contacto", "/contacto"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-[13px] hover:text-[color:var(--color-accent-soft)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)] mb-3">Redes</h4>
          <SocialLinks size="md" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-mono-dim)] mt-6">
            nixerino@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-mono-dim)]">
          <span>© {new Date().getFullYear()} Nicolás Canellas</span>
          <span>Capibara lover · Costa Brava</span>
        </div>
      </div>
    </footer>
  );
}
