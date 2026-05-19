type Props = {
  id: string;
  title: string;
};

export default function YouTubeEmbed({ id, title }: Props) {
  return (
    <div className="border border-[var(--color-line)] bg-[color:var(--color-elev)] card-lift overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="px-4 py-3 border-t border-[var(--color-line)] flex items-baseline justify-between gap-3">
        <span className="font-body text-[13px] leading-[1.4] line-clamp-2">{title}</span>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] hover:text-[color:var(--color-accent-soft)] whitespace-nowrap"
        >
          YT →
        </a>
      </div>
    </div>
  );
}
