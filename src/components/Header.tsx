"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CapybaraMini } from "./Capybara";
import { Tone } from "./Manga";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/coaching", label: "Coaching" },
  { href: "/eventos", label: "Eventos" },
  { href: "/colabs", label: "Colabs" },
  { href: "/contenido", label: "Contenido" },
  { href: "/contacto", label: "Contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname() || "/";
  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-paper)] border-b-[3px] border-[color:var(--color-ink)]">
      <Tone pattern="dots-sparse" className="absolute inset-0 opacity-15" />
      <div className="relative max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Inicio">
          <span className="w-10 h-10 bg-[color:var(--color-ink)] flex items-center justify-center text-[color:var(--color-paper)] group-hover:bg-[color:var(--color-red)] transition-colors">
            <CapybaraMini size={28} />
          </span>
          <span className="font-display text-2xl tracking-tight leading-none">NIXERINO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`font-mono text-[11px] uppercase tracking-widest px-3 py-2 border-[2px] transition-all ${
                  active
                    ? "border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                    : "border-transparent hover:border-[color:var(--color-ink)] hover:bg-[color:var(--color-paper)]"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden ml-auto">
          <select
            value={NAV.find((n) => isActive(pathname, n.href))?.href ?? "/"}
            onChange={(e) => {
              window.location.href = e.target.value;
            }}
            className="font-mono text-xs uppercase bg-[color:var(--color-paper)] border-[2px] border-[color:var(--color-ink)] px-2 py-1"
          >
            {NAV.map((n) => (
              <option key={n.href} value={n.href}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
