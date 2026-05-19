import Link from "next/link";

type Props = {
  label: string;
  title: string;
  description: string;
  href: string;
  index: string; // "01"…"04"
};

export default function VerticalCard({ label, title, description, href, index }: Props) {
  return (
    <Link
      href={href}
      className="card-lift block bg-[color:var(--color-elev)] border border-[var(--color-line)] p-7 md:p-9 relative group"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)]">
          {label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
          {index}
        </span>
      </div>
      <h3 className="font-display text-[28px] md:text-[34px] leading-[1.05] mb-3">
        {title}
      </h3>
      <p className="font-body text-[14px] leading-[1.65] text-[color:var(--color-text-muted)] max-w-[36ch]">
        {description}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent-soft)]">
        Detalles →
      </div>
    </Link>
  );
}
