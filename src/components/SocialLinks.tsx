type Props = { size?: "sm" | "md" | "lg" };

const LINKS = [
  { label: "Twitch", href: "https://www.twitch.tv/n1xerino", short: "twitch.tv/n1xerino" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCST4RuLhR-DfA7fUG170j8A", short: "youtube.com/@nixerino" },
  { label: "X", href: "https://x.com/n1xerino", short: "x.com/n1xerino" },
  { label: "Instagram", href: "https://www.instagram.com/nixerino/", short: "instagram.com/nixerino" },
  { label: "TikTok", href: "https://www.tiktok.com/@n1xerino", short: "tiktok.com/@n1xerino" },
];

export default function SocialLinks({ size = "md" }: Props) {
  const fs = size === "lg" ? "text-[14px]" : size === "sm" ? "text-[11px]" : "text-[12px]";
  return (
    <ul className="space-y-1.5">
      {LINKS.map((l) => (
        <li key={l.label} className={fs}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer me"
            className="inline-flex items-baseline gap-2 hover:text-[color:var(--color-accent-soft)] transition-colors"
          >
            <span className="font-mono uppercase tracking-[0.18em] text-[color:var(--color-mono-dim)] w-[72px]">
              {l.label}
            </span>
            <span className="font-body">{l.short}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
