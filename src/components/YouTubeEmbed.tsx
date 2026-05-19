type Props = { id: string; title: string };

export default function YouTubeEmbed({ id, title }: Props) {
  return (
    <div className="border-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-ink)] overflow-hidden" style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}>
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
    </div>
  );
}
