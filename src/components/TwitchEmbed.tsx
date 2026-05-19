"use client";

import { useEffect, useState } from "react";

export default function TwitchEmbed({ channel = "n1xerino" }: { channel?: string }) {
  const [parent, setParent] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") setParent(window.location.hostname);
  }, []);

  if (!parent) {
    return (
      <div
        className="border border-[var(--color-line)] bg-[color:var(--color-elev)] grid place-items-center text-[color:var(--color-mono-dim)] font-mono text-[11px] uppercase tracking-[0.22em]"
        style={{ aspectRatio: "16 / 9" }}
      >
        Cargando reproductor de Twitch…
      </div>
    );
  }

  return (
    <div className="border border-[var(--color-line)] bg-[color:var(--color-elev)] overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`}
          title={`Twitch · ${channel}`}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="px-4 py-3 border-t border-[var(--color-line)] flex items-baseline justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
          twitch.tv/{channel}
        </span>
        <a
          href={`https://www.twitch.tv/${channel}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent-soft)]"
        >
          Ver en Twitch →
        </a>
      </div>
    </div>
  );
}
