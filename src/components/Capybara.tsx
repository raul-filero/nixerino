/* Capybara mascot set — anime/manga line art. 9 variants. */

type Props = { size?: number; className?: string };

const inkStroke = {
  stroke: "#0F0E0C",
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  fill: "none",
};

function CapyDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={`${id}-tone-light`} width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.9" fill="#0F0E0C" opacity="0.35" />
      </pattern>
      <pattern id={`${id}-tone-diag`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="1.5" height="6" fill="#0F0E0C" opacity="0.4" />
      </pattern>
    </defs>
  );
}

function CapybaraIdle({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-idle" />
      <path d="M30 130 C30 95, 55 75, 100 75 C145 75, 170 95, 170 130 L170 155 C170 168, 160 175, 145 175 L55 175 C40 175, 30 168, 30 155 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <path d="M60 155 C60 140, 75 130, 100 130 C125 130, 140 140, 140 155 L140 168 L60 168 Z" fill="#D69972" stroke="#0F0E0C" strokeWidth="3" strokeLinejoin="round" />
      <rect x="48" y="167" width="22" height="14" fill="#0F0E0C" />
      <rect x="130" y="167" width="22" height="14" fill="#0F0E0C" />
      <path d="M50 95 C50 65, 75 50, 100 50 C125 50, 150 65, 150 95 C150 115, 130 125, 100 125 C70 125, 50 115, 50 95 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <ellipse cx="62" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M55 110 C70 122, 130 122, 145 110 L150 95 C140 105, 60 105, 50 95 Z" fill="url(#cy-idle-tone-light)" />
      <ellipse cx="78" cy="92" rx="6" ry="7" fill="#0F0E0C" />
      <ellipse cx="122" cy="92" rx="6" ry="7" fill="#0F0E0C" />
      <circle cx="80" cy="89" r="1.8" fill="#F2EDE3" />
      <circle cx="124" cy="89" r="1.8" fill="#F2EDE3" />
      <ellipse cx="70" cy="105" rx="6" ry="3" fill="#E08B6E" opacity="0.7" />
      <ellipse cx="130" cy="105" rx="6" ry="3" fill="#E08B6E" opacity="0.7" />
      <ellipse cx="100" cy="108" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M93 114 Q100 119 107 114" {...inkStroke} strokeWidth="2.5" />
      <path d="M92 52 Q100 44 108 52" {...inkStroke} strokeWidth="3" />
    </svg>
  );
}

function CapybaraSensei({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-sensei" />
      <path d="M28 135 C28 100, 55 80, 100 80 C145 80, 172 100, 172 135 L172 158 C172 170, 162 178, 148 178 L52 178 C38 178, 28 170, 28 158 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M42 130 L158 130 L150 155 L50 155 Z" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <path d="M42 130 L158 130 L150 155 L50 155 Z" fill="url(#cy-sensei-tone-light)" />
      <ellipse cx="55" cy="142" rx="9" ry="7" fill="#B0734A" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="145" cy="142" rx="9" ry="7" fill="#B0734A" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="50" y="170" width="22" height="12" fill="#0F0E0C" />
      <rect x="128" y="170" width="22" height="12" fill="#0F0E0C" />
      <path d="M50 95 C50 65, 75 50, 100 50 C125 50, 150 65, 150 95 C150 115, 130 125, 100 125 C70 125, 50 115, 50 95 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="46" y="70" width="108" height="11" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="3" />
      <circle cx="100" cy="75.5" r="5" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="2" />
      <path d="M150 81 L168 95 L162 100 L150 90" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="3" strokeLinejoin="round" />
      <path d="M155 95 L170 105" {...inkStroke} strokeWidth="2" />
      <path d="M70 96 L88 92" {...inkStroke} strokeWidth="4" />
      <path d="M112 92 L130 96" {...inkStroke} strokeWidth="4" />
      <ellipse cx="100" cy="108" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M92 116 L108 116" {...inkStroke} strokeWidth="2.5" />
      <path d="M155 55 Q160 48 165 55 C165 61, 160 62, 160 62 C160 62, 155 61, 155 55 Z" fill="#7BB7E8" stroke="#0F0E0C" strokeWidth="2" />
    </svg>
  );
}

function CapybaraMic({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-mic" />
      <path d="M30 135 C30 100, 55 80, 100 80 C145 80, 170 100, 170 135 L170 158 C170 170, 160 178, 145 178 L55 178 C40 178, 30 170, 30 158 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M60 155 C60 140, 75 132, 100 132 C125 132, 140 140, 140 155 L140 168 L60 168 Z" fill="#D69972" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="48" y="170" width="22" height="12" fill="#0F0E0C" />
      <rect x="130" y="170" width="22" height="12" fill="#0F0E0C" />
      <path d="M50 92 C50 62, 75 47, 100 47 C125 47, 150 62, 150 92 C150 112, 130 122, 100 122 C70 122, 50 112, 50 92 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="57" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="57" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M150 130 Q175 110 165 80" fill="none" stroke="#0F0E0C" strokeWidth="4" strokeLinecap="round" />
      <path d="M148 130 Q172 112 162 84" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <rect x="155" y="60" width="14" height="6" fill="#0F0E0C" />
      <ellipse cx="162" cy="55" rx="13" ry="14" fill="#1A1814" stroke="#0F0E0C" strokeWidth="4" />
      <rect x="153" y="46" width="18" height="3" fill="#0F0E0C" />
      <rect x="153" y="52" width="18" height="3" fill="#0F0E0C" />
      <rect x="153" y="58" width="18" height="3" fill="#0F0E0C" />
      <ellipse cx="78" cy="90" rx="6" ry="7" fill="#0F0E0C" />
      <ellipse cx="122" cy="90" rx="6" ry="7" fill="#0F0E0C" />
      <circle cx="80" cy="87" r="2" fill="#F2EDE3" />
      <circle cx="124" cy="87" r="2" fill="#F2EDE3" />
      <ellipse cx="100" cy="106" rx="4" ry="3" fill="#0F0E0C" />
      <ellipse cx="100" cy="115" rx="7" ry="5" fill="#0F0E0C" />
      <ellipse cx="100" cy="116" rx="4" ry="2.5" fill="#D33A2C" />
      <path d="M180 35 L195 28" {...inkStroke} strokeWidth="2" />
      <path d="M180 50 L198 50" {...inkStroke} strokeWidth="2" />
      <path d="M180 65 L195 72" {...inkStroke} strokeWidth="2" />
    </svg>
  );
}

function CapybaraMerch({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-merch" />
      <path d="M30 135 C30 100, 55 80, 100 80 C145 80, 170 100, 170 135 L170 158 C170 170, 160 178, 145 178 L55 178 C40 178, 30 170, 30 158 Z" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="4" />
      <rect x="70" y="115" width="60" height="36" fill="none" stroke="#0F0E0C" strokeWidth="3" strokeDasharray="4 3" />
      <text x="100" y="138" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="14" fill="#0F0E0C">CAPY</text>
      <text x="100" y="150" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6" fill="#0F0E0C">EST · 27</text>
      <path d="M75 80 L100 95 L125 80" fill="none" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="48" y="170" width="22" height="12" fill="#0F0E0C" />
      <rect x="130" y="170" width="22" height="12" fill="#0F0E0C" />
      <path d="M50 95 C50 65, 75 50, 100 50 C125 50, 150 65, 150 95 C150 115, 130 125, 100 125 C70 125, 50 115, 50 95 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M45 65 C45 48, 70 38, 100 38 C130 38, 155 48, 155 65 L155 72 L45 72 Z" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <path d="M155 65 L185 72 L185 78 L155 75 Z" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="100" cy="55" r="7" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="3" />
      <text x="100" y="59" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="9" fill="#0F0E0C">N</text>
      <path d="M70 92 Q78 86 86 92" {...inkStroke} strokeWidth="3.5" />
      <ellipse cx="122" cy="92" rx="6" ry="7" fill="#0F0E0C" />
      <circle cx="124" cy="89" r="2" fill="#F2EDE3" />
      <ellipse cx="100" cy="108" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M92 114 Q100 121 108 114" {...inkStroke} strokeWidth="2.5" />
    </svg>
  );
}

function CapybaraReception({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-rec" />
      <rect x="10" y="140" width="180" height="40" fill="#1A1814" stroke="#0F0E0C" strokeWidth="4" />
      <rect x="10" y="140" width="180" height="8" fill="#0F0E0C" />
      <rect x="10" y="140" width="180" height="40" fill="url(#cy-rec-tone-diag)" />
      <text x="20" y="170" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#F2EDE3">RECEPCIÓN</text>
      <path d="M50 125 C50 100, 70 88, 100 88 C130 88, 150 100, 150 125 L150 145 L50 145 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M140 130 L185 125" stroke="#0F0E0C" strokeWidth="6" strokeLinecap="round" />
      <path d="M138 132 L182 128" stroke="#B0734A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="187" cy="125" r="6" fill="#B0734A" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M50 75 C50 50, 73 38, 100 38 C127 38, 150 50, 150 75 C150 95, 130 105, 100 105 C70 105, 50 95, 50 75 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="45" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="45" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M55 60 C60 35, 140 35, 145 60" fill="none" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="55" cy="65" rx="7" ry="9" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="145" cy="65" rx="7" ry="9" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M55 70 Q40 75 35 88" fill="none" stroke="#0F0E0C" strokeWidth="3" />
      <circle cx="33" cy="90" r="3" fill="#0F0E0C" />
      <path d="M70 78 Q78 72 86 78" {...inkStroke} strokeWidth="3.5" />
      <path d="M114 78 Q122 72 130 78" {...inkStroke} strokeWidth="3.5" />
      <ellipse cx="100" cy="92" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M92 98 Q100 104 108 98" {...inkStroke} strokeWidth="2.5" />
      <ellipse cx="72" cy="92" rx="5" ry="3" fill="#E08B6E" opacity="0.7" />
      <ellipse cx="128" cy="92" rx="5" ry="3" fill="#E08B6E" opacity="0.7" />
    </svg>
  );
}

function CapybaraSleeping({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-sleep" />
      <path d="M10 160 L190 160" {...inkStroke} strokeWidth="3" strokeDasharray="2 4" />
      <path d="M25 155 C25 130, 50 120, 100 120 C150 120, 175 130, 175 155 C175 162, 165 165, 150 165 L50 165 C35 165, 25 162, 25 155 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M50 158 C60 150, 140 150, 150 158 L150 164 L50 164 Z" fill="#D69972" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M30 150 C50 158, 150 158, 170 150" stroke="url(#cy-sleep-tone-light)" strokeWidth="20" fill="none" />
      <path d="M120 130 C120 115, 135 105, 155 105 C175 105, 188 115, 188 130 C188 145, 175 152, 155 152 C135 152, 120 145, 120 130 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="135" cy="112" rx="6" ry="5" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M138 128 Q145 124 152 128" {...inkStroke} strokeWidth="3" />
      <path d="M162 128 Q170 124 178 128" {...inkStroke} strokeWidth="3" />
      <ellipse cx="160" cy="138" rx="3.5" ry="2.5" fill="#0F0E0C" />
      <path d="M154 142 Q160 145 166 142" {...inkStroke} strokeWidth="2" />
      <text x="100" y="80" fontFamily="Bangers, sans-serif" fontSize="38" fill="#0F0E0C" transform="rotate(-12 100 80)">Z</text>
      <text x="70" y="55" fontFamily="Bangers, sans-serif" fontSize="26" fill="#0F0E0C" transform="rotate(-12 70 55)">z</text>
      <text x="50" y="35" fontFamily="Bangers, sans-serif" fontSize="18" fill="#0F0E0C" transform="rotate(-12 50 35)">z</text>
    </svg>
  );
}

function CapybaraStreamer({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-str" />
      <path d="M30 135 C30 100, 55 80, 100 80 C145 80, 170 100, 170 135 L170 158 C170 170, 160 178, 145 178 L55 178 C40 178, 30 170, 30 158 Z" fill="#1A1814" stroke="#0F0E0C" strokeWidth="4" />
      <rect x="40" y="138" width="120" height="3" fill="#F2EDE3" />
      <text x="50" y="158" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F2EDE3">·LIVE</text>
      <circle cx="42" cy="155" r="3" fill="#D33A2C" />
      <rect x="48" y="170" width="22" height="12" fill="#0F0E0C" />
      <rect x="130" y="170" width="22" height="12" fill="#0F0E0C" />
      <path d="M50 95 C50 65, 75 50, 100 50 C125 50, 150 65, 150 95 C150 115, 130 125, 100 125 C70 125, 50 115, 50 95 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <path d="M52 75 C58 50, 142 50, 148 75" fill="none" stroke="#0F0E0C" strokeWidth="5" />
      <ellipse cx="52" cy="85" rx="9" ry="12" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="148" cy="85" rx="9" ry="12" fill="#D33A2C" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M148 92 Q165 95 168 110" fill="none" stroke="#0F0E0C" strokeWidth="3" />
      <circle cx="170" cy="112" r="4" fill="#0F0E0C" />
      <rect x="65" y="86" width="22" height="14" rx="2" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="3" opacity="0.95" />
      <rect x="113" y="86" width="22" height="14" rx="2" fill="#F2EDE3" stroke="#0F0E0C" strokeWidth="3" opacity="0.95" />
      <line x1="87" y1="93" x2="113" y2="93" stroke="#0F0E0C" strokeWidth="3" />
      <line x1="68" y1="88" x2="82" y2="98" stroke="#7BB7E8" strokeWidth="2" />
      <line x1="116" y1="88" x2="130" y2="98" stroke="#7BB7E8" strokeWidth="2" />
      <ellipse cx="100" cy="110" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M93 116 Q100 119 107 116" {...inkStroke} strokeWidth="2.5" />
    </svg>
  );
}

function CapybaraPeace({ size = 200, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <CapyDefs id="cy-peace" />
      <path d="M30 135 C30 100, 55 80, 100 80 C145 80, 170 100, 170 135 L170 158 C170 170, 160 178, 145 178 L55 178 C40 178, 30 170, 30 158 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <path d="M60 155 C60 140, 75 132, 100 132 C125 132, 140 140, 140 155 L140 168 L60 168 Z" fill="#D69972" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="48" y="170" width="22" height="12" fill="#0F0E0C" />
      <rect x="130" y="170" width="22" height="12" fill="#0F0E0C" />
      <path d="M150 120 L160 75" stroke="#0F0E0C" strokeWidth="7" strokeLinecap="round" />
      <path d="M148 120 L158 78" stroke="#B0734A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="160" cy="75" r="10" fill="#B0734A" stroke="#0F0E0C" strokeWidth="3" />
      <rect x="153" y="50" width="5" height="22" fill="#B0734A" stroke="#0F0E0C" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="162" y="50" width="5" height="22" fill="#B0734A" stroke="#0F0E0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M50 95 C50 65, 75 50, 100 50 C125 50, 150 65, 150 95 C150 115, 130 125, 100 125 C70 125, 50 115, 50 95 Z" fill="#B0734A" stroke="#0F0E0C" strokeWidth="4" />
      <ellipse cx="62" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="138" cy="60" rx="9" ry="7" fill="#8B5A39" stroke="#0F0E0C" strokeWidth="3" />
      <ellipse cx="78" cy="93" rx="8" ry="9" fill="#0F0E0C" />
      <ellipse cx="122" cy="93" rx="8" ry="9" fill="#0F0E0C" />
      <circle cx="81" cy="89" r="2.6" fill="#F2EDE3" />
      <circle cx="125" cy="89" r="2.6" fill="#F2EDE3" />
      <circle cx="75" cy="96" r="1.4" fill="#F2EDE3" />
      <circle cx="119" cy="96" r="1.4" fill="#F2EDE3" />
      <ellipse cx="100" cy="108" rx="4" ry="3" fill="#0F0E0C" />
      <path d="M88 114 Q100 124 112 114" {...inkStroke} strokeWidth="3" />
      <path d="M93 117 Q100 122 107 117" fill="#D33A2C" />
      <text x="32" y="40" fontFamily="Bangers, sans-serif" fontSize="22" fill="#D33A2C">✦</text>
      <text x="175" y="155" fontFamily="Bangers, sans-serif" fontSize="14" fill="#D33A2C">✦</text>
    </svg>
  );
}

function CapybaraMini({ size = 36, className = "" }: Props) {
  return (
    <svg viewBox="0 0 60 50" width={size} height={size} className={className} aria-hidden="true">
      <path d="M5 35 C5 22, 18 14, 30 14 C42 14, 55 22, 55 35 L55 42 C55 45, 52 47, 48 47 L12 47 C8 47, 5 45, 5 42 Z" fill="currentColor" />
      <path d="M10 25 C10 14, 18 8, 30 8 C42 8, 50 14, 50 25 C50 32, 42 36, 30 36 C18 36, 10 32, 10 25 Z" fill="currentColor" />
      <ellipse cx="15" cy="13" rx="3" ry="2.5" fill="currentColor" />
      <ellipse cx="45" cy="13" rx="3" ry="2.5" fill="currentColor" />
      <circle cx="22" cy="24" r="2" fill="#F0E8D5" />
      <circle cx="38" cy="24" r="2" fill="#F0E8D5" />
      <ellipse cx="30" cy="30" rx="2" ry="1.5" fill="#F0E8D5" />
    </svg>
  );
}

export type CapyVariant =
  | "idle" | "sensei" | "mic" | "merch" | "reception"
  | "sleeping" | "streamer" | "peace" | "mini";

const VARIANTS: Record<CapyVariant, React.FC<Props>> = {
  idle: CapybaraIdle,
  sensei: CapybaraSensei,
  mic: CapybaraMic,
  merch: CapybaraMerch,
  reception: CapybaraReception,
  sleeping: CapybaraSleeping,
  streamer: CapybaraStreamer,
  peace: CapybaraPeace,
  mini: CapybaraMini,
};

export default function Capybara({
  variant = "idle",
  size = 200,
  className = "",
}: { variant?: CapyVariant } & Props) {
  const C = VARIANTS[variant] || CapybaraIdle;
  return <C size={size} className={className} />;
}

export { CapybaraMini };
