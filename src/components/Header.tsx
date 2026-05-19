import Link from "next/link";
import CapybaraIcon from "./CapybaraIcon";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/coaching", label: "Coaching" },
  { href: "/eventos", label: "Eventos" },
  { href: "/colabs", label: "Colabs" },
  { href: "/contenido", label: "Contenido" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="border-b border-[var(--color-line)] sticky top-0 z-50 backdrop-blur bg-[color-mix(in_oklab,var(--color-base)_85%,transparent)]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent-soft)] transition-colors">
            <CapybaraIcon size={22} />
          </span>
          <span className="font-display text-[18px] tracking-tight">NIXERINO</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-mono-dim)] hidden sm:inline">
            tarjeta profesional
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent-soft)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="md:hidden font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-2 border border-[var(--color-accent)] text-[color:var(--color-accent)]"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
