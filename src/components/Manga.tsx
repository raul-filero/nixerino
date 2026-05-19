/* Manga atoms — Tone, MangaPanel, PhotoSlot, SpeechBubble, Sfx, PageBreak. */

import Image from "next/image";

type TonePattern = "dots" | "dots-lg" | "dots-sparse" | "lines" | "lines-h" | "cross" | "speed";

const TONE_PATTERNS: Record<TonePattern, string> = {
  "dots": "radial-gradient(circle at 1px 1px, #0F0E0C 1px, transparent 1px)",
  "dots-lg": "radial-gradient(circle at 1.5px 1.5px, #0F0E0C 1.5px, transparent 1.5px)",
  "dots-sparse": "radial-gradient(circle at 1px 1px, #0F0E0C 0.7px, transparent 0.7px)",
  "lines": "repeating-linear-gradient(45deg, #0F0E0C 0 1.5px, transparent 1.5px 7px)",
  "lines-h": "repeating-linear-gradient(0deg, #0F0E0C 0 1.5px, transparent 1.5px 8px)",
  "cross": "repeating-linear-gradient(45deg, #0F0E0C 0 1px, transparent 1px 6px), repeating-linear-gradient(-45deg, #0F0E0C 0 1px, transparent 1px 6px)",
  "speed": "repeating-linear-gradient(75deg, transparent 0 8px, #0F0E0C 8px 10px, transparent 10px 22px)",
};

const TONE_SIZES: Record<TonePattern, string> = {
  "dots": "5px 5px",
  "dots-lg": "8px 8px",
  "dots-sparse": "9px 9px",
  "lines": "auto",
  "lines-h": "auto",
  "cross": "auto",
  "speed": "auto",
};

export function Tone({
  pattern = "dots",
  className = "",
  style = {},
}: { pattern?: TonePattern; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        backgroundImage: TONE_PATTERNS[pattern],
        backgroundSize: TONE_SIZES[pattern],
        ...style,
      }}
    />
  );
}

type MangaPanelProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
  bg?: "paper" | "ink" | "fur";
  style?: React.CSSProperties;
};

export function MangaPanel({ children, className = "", label, bg = "paper", style = {} }: MangaPanelProps) {
  const bgClass =
    bg === "paper"
      ? "bg-[color:var(--color-paper)]"
      : bg === "ink"
      ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
      : "bg-[color:var(--color-capy-fur)] text-[color:var(--color-ink)]";
  return (
    <div className={`relative border-[3px] border-[color:var(--color-ink)] ${bgClass} ${className}`} style={{ boxShadow: "6px 6px 0 var(--color-ink)", ...style }}>
      {label && (
        <div className="absolute top-0 left-0 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] font-mono text-[10px] tracking-widest px-2 py-1 uppercase z-10">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

type PhotoSlotProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  tone?: TonePattern;
  priority?: boolean;
  sizes?: string;
};

export function PhotoSlot({ src, alt, aspect = "1/1", className = "", tone = "lines", priority, sizes }: PhotoSlotProps) {
  // next/image con output:'export' + basePath no prepende basePath al src.
  // Lo hacemos aquí a mano para que /img/X resuelva a /nixerino/img/X en producción.
  const resolvedSrc = src.startsWith("/") && !src.startsWith("/nixerino") ? `/nixerino${src}` : src;
  return (
    <div className={`relative overflow-hidden bg-[#1A1814] ${className}`} style={{ aspectRatio: aspect }}>
      <Tone pattern={tone} className="absolute inset-0 opacity-25 z-10" />
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        sizes={sizes || "(max-width: 768px) 80vw, 600px"}
        priority={priority}
        className="object-cover relative z-0"
      />
      <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[color:var(--color-paper)] z-20" />
      <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[color:var(--color-paper)] z-20" />
      <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[color:var(--color-paper)] z-20" />
      <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[color:var(--color-paper)] z-20" />
    </div>
  );
}

type SpeechBubbleProps = {
  children: React.ReactNode;
  tail?: "bl" | "br" | "tl" | "tr" | "l";
  className?: string;
  small?: boolean;
};

const TAIL_POS: Record<NonNullable<SpeechBubbleProps["tail"]>, React.CSSProperties> = {
  bl: { left: "20%", bottom: "-12px", transform: "rotate(20deg)" },
  br: { right: "20%", bottom: "-12px", transform: "rotate(-20deg)" },
  tl: { left: "20%", top: "-12px", transform: "rotate(200deg)" },
  tr: { right: "20%", top: "-12px", transform: "rotate(160deg)" },
  l: { left: "-12px", top: "40%", transform: "rotate(110deg)" },
};

export function SpeechBubble({ children, tail = "br", className = "", small = false }: SpeechBubbleProps) {
  return (
    <div
      className={`relative inline-block bg-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] ${small ? "px-3 py-1.5" : "px-5 py-3"} ${className}`}
      style={{ borderRadius: "20px / 16px" }}
    >
      {children}
      <span aria-hidden="true" className="absolute w-0 h-0" style={{
        ...TAIL_POS[tail],
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "16px solid var(--color-ink)",
      }} />
      <span aria-hidden="true" className="absolute w-0 h-0" style={{
        ...TAIL_POS[tail],
        marginLeft: "2px",
        marginTop: "-3px",
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
        borderTop: "12px solid var(--color-paper)",
      }} />
    </div>
  );
}

type SfxProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
  size?: number;
};

export function Sfx({ children, className = "", rotate = -8, color = "var(--color-ink)", size = 64 }: SfxProps) {
  return (
    <span
      className={`pointer-events-none select-none font-sfx ${className}`}
      style={{
        fontSize: size,
        color,
        transform: `rotate(${rotate}deg)`,
        WebkitTextStroke: color === "var(--color-ink)" ? "0" : "2px var(--color-ink)",
        letterSpacing: "0.05em",
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function PageBreak({ label, sfx, className = "" }: { label?: string; sfx?: string; className?: string }) {
  return (
    <div className={`relative w-full my-12 ${className}`}>
      <div className="h-[6px] bg-[color:var(--color-ink)]" />
      <div className="h-[14px] relative overflow-hidden">
        <Tone pattern="dots-sparse" className="absolute inset-0 opacity-60" />
      </div>
      <div className="h-[2px] bg-[color:var(--color-ink)]" />
      {label && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--color-paper)] border-[3px] border-[color:var(--color-ink)] px-4 py-1 font-mono text-[11px] uppercase tracking-[0.25em]">
          {label}
        </div>
      )}
      {sfx && (
        <div className="absolute -top-6 right-8">
          <Sfx size={42} rotate={-12} color="var(--color-red)">{sfx}</Sfx>
        </div>
      )}
    </div>
  );
}
