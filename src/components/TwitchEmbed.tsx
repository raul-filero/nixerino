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
        className="bg-[color:var(--color-ink)] grid place-items-center text-[color:var(--color-paper)]/70 font-mono text-[11px] uppercase tracking-[0.22em]"
        style={{ aspectRatio: "16 / 9" }}
      >
        Cargando reproductor de Twitch…
      </div>
    );
  }

  return (
    <div className="bg-[color:var(--color-ink)] overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`}
          title={`Twitch · ${channel}`}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
