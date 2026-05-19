# Prompt para Claude Design — rediseño anime de nixerino.hefaia.com

Copia este documento entero y pégalo en Claude (claude.ai o Claude Code en otro proyecto), adjuntando además las 6 imágenes de `public/img/` como contexto visual.

---

## 1 · Contexto del proyecto

Estamos rediseñando la web personal de **Nixerino** (Nicolás Canellas Colocho, 27 años, español).

- **Quién es**: ex-jugador profesional de League of Legends (2015–2022, era G2 Vodafone donde le llamaban "el samurái") y Valorant (2022–2024, Movistar Riders). Twitch Partner activo. +10 años compitiendo. Hoy: streamer Twitch, capibara lover, vida fuera del circuito pro.
- **Qué es esta web**: tarjeta profesional para que marcas, organizaciones y privados puedan contratarle en 4 verticales — coaching, eventos/cameos, colabs de marca, contenido patrocinado. Tarifas siempre "consultar".
- **Tono**: cercano, anti-postureo, autoirónico. Capibara es la energía actual.

## 2 · Reglas duras (no negociables)

1. **Mascota: el capibara.** Es la mascota principal y debe aparecer como personaje recurrente — un capibara estilo anime/manga con personalidad propia (relajado, ojos amables, postura tranquila). Lo ideal: un capibara que actúe como guía/avatar de la web, presente en hero, separadores, secciones vacías, errores 404, footer.
2. **Estética: anime/manga**. Tinta, líneas limpias, sombreado por bloques, posibles cell-shading. El banner de Twitch del propio Nixerino (archivo `banner-twitch.jpg`) es **el norte estético** — esa línea es la que él mismo ha elegido.
3. **NUNCA reclamar a Mixwell.** Mixwell (su hermano, leyenda CS:GO/Valorant) se menciona UNA vez en `/sobre-mi` solo como hermano. Nunca en hero, nunca como gancho, nunca asociado a sponsorships.
4. **Tarifas = "Consultar"** en TODAS las verticales. Cero precios concretos, cero "desde X€".
5. **NO publicar** cifras de ganancias en torneos ni resultados específicos bajos (7º, 13–16º). Hablar de participación en circuitos, no de posiciones malas.
6. **NO publicar** razones personales del retiro (salud mental — es info pública pero respetuosa, no va en una web de venta).
7. **Stack obligatorio**: Next.js 15 App Router + Tailwind 4 + TypeScript + static export (`output: 'export'`, `basePath: '/nixerino'`, `trailingSlash: true`). Deploy: Cloudflare Pages como subpath de `hefaia.com/nixerino/`. **NUNCA Vercel.**
8. **Sin cookies, sin localStorage, sin tracking** (RGPD-friendly). Embeds de YouTube vía `youtube-nocookie.com`.

## 3 · Estructura del sitio (existente)

Las 7 rutas ya están creadas. El rediseño anime debe respetar el árbol:

| Ruta | Función | Hooks de diseño anime |
|---|---|---|
| `/` | Hero + 4 cards verticales + bio teaser + redes | Capibara mascota dominante, retrato manga grande, tipo display impacto |
| `/sobre-mi` | Bio narrativa con línea de tiempo 2015→2024+ | Panel manga tipo cómic; las 3 etapas (LoL → Valorant → Twitch streamer) como viñetas |
| `/coaching` | Vertical 1 — 1v1, equipos, scrim review | Capibara en pose "sensei". Tarifa "Consultar". |
| `/eventos` | Vertical 2 — cameos, watch parties, charlas | Capibara con micrófono. Tarifa "Consultar". |
| `/colabs` | Vertical 3 — sponsorships, embajadas | Capibara con merch/cap. Tarifa "Consultar". |
| `/contenido` | Vertical 4 + escaparate Twitch+YouTube | Embed Twitch live + grid 6 vídeos YouTube |
| `/contacto` | Formulario único con dropdown de tipo | Capibara recepcionista. POST a `nixerino-contact.muletia.workers.dev` |

## 4 · Assets disponibles (`public/img/`)

Las 6 imágenes están descargadas y verificadas:

| Archivo | Descripción |
|---|---|
| `avatar-twitch.png` | Retrato editorial 600×600, pelo platino, fondo magenta+azul. **Avatar moderno actual.** |
| `banner-twitch.jpg` | **Banner manga oficial** de Twitch. Primer plano blanco y negro de su cara con bocadillo "…". **Norte estético del rediseño.** |
| `movistar-riders-era.png` | Poster oficial Movistar Riders Valorant 2023. Plano frontal, peace sign. **Era Valorant.** |
| `nixerino-jersey-back.jpg` | Espaldas con jersey "NIXERINO" en azul cinemático. **Era competición.** |
| `nixerino-radiant-celebra.jpg` | Pequeña foto celebrando Radiante (Valorant). |
| `nixerino-streaming-reaction.jpg` | En stream con gafas y headset rojo. **Era streamer actual.** |

Si necesitas más assets (capibaras, viñetas, separadores, screen tones manga), genera SVG vectoriales o pide a un servicio de ilustración. **No uses stock genérico de esports** (cliché).

## 5 · Paleta y tipografía sugeridas (negociables)

Punto de partida del diseño actual:

- **Base**: `#0F0E0C` (negro cálido), elev `#1A1814`, texto `#F2EDE3`
- **Accent capibara**: `#B0734A` tostado, `#D69972` soft
- **Acento G2 / urgencia**: `#D33A2C` (rojo, solo guiños)
- **Display**: Archivo Black (impacto, mayúsculas)
- **Body**: Source Serif Pro (sobrio, editorial)
- **Mono UI**: JetBrains Mono (labels, mono accent)

Si vas a virar a estética manga, considera:
- Añadir un beige/papel manga (`#F0E8D5` aprox.) como capa contraste
- Texturas tipo screentone CSS (dots, lines) para sombreados de viñeta
- Borders gruesos negros para enmarcar paneles tipo cómic
- Tipografía display alternativa: probar "Bangers", "Komika Display" o algo japonés cyber

## 6 · Componentes existentes a respetar/rediseñar

Ya hay implementados (en `src/components/`):

- `Header.tsx` — sticky con logo capibara SVG mini + nav
- `Footer.tsx` — capibara + nav + redes + email + © (sin firma de hefaia, intencional)
- `Hero.tsx` — actualmente con placeholder tipográfico, **rediseñar entero**
- `VerticalCard.tsx` — card de las 4 verticales, **rediseñar como panel manga**
- `SocialLinks.tsx` — lista Twitch/YouTube/X/Instagram/TikTok
- `CapybaraIcon.tsx` — SVG capibara mini (silueta), **expandir a personaje completo con expresiones**
- `YouTubeEmbed.tsx` — iframe nocookie
- `TwitchEmbed.tsx` — client component con `parent` dinámico
- `ContactForm.tsx` — form con honeypot + prefill `?asunto=X`

## 7 · Output esperado

Devuélvelo como código TypeScript/TSX directamente aplicable al repo. No hace falta reinventar arquitectura — solo:

1. Reescribir `src/app/globals.css` con la nueva paleta + textura manga (screentone CSS) + tipografías
2. Expandir `src/components/CapybaraIcon.tsx` a un set de poses (idle, sensei, mic, merch, recepcionista, sleeping — al menos 6 variantes SVG inline o como `<Capybara variant="X" />`)
3. Rediseñar `Hero.tsx` con `avatar-twitch.png` y/o `banner-twitch.jpg` integrados estilo viñeta manga
4. Rediseñar `VerticalCard.tsx` como panel cómic (border grueso, screentone fondo, capibara en esquina)
5. Añadir separadores tipo manga page-break entre secciones (línea de tinta, screentone gradient)
6. Mantener accesibilidad: contraste WCAG AA, focus visible, navegación teclado.

## 8 · Redes verificadas (para footer/contenido — NO inventar)

- Twitch: https://www.twitch.tv/n1xerino (Partner)
- X: https://x.com/n1xerino
- Instagram: https://www.instagram.com/nixerino
- YouTube: https://www.youtube.com/channel/UCST4RuLhR-DfA7fUG170j8A
- TikTok: https://www.tiktok.com/@n1xerino
- Email business: nixerino@gmail.com

## 9 · YouTube destacados (para `/contenido` — IDs ya hard-coded, no cambiar)

`1v2vj3DVJB8`, `lBkA5o1paA0`, `NDJkmzol7NU`, `pF-4WUV3uyQ`, `98CP6mb4ncs`, `ET5l2_7vp6M` (este último, "no puedo más con la toxicidad", marca el tono autoirónico — encaja con el espíritu manga melancólico-cool).

---

**Comienza por el `CapybaraIcon` expandido y el `Hero`** — son las dos piezas que más cambian la percepción del sitio. Luego propaga la línea al resto.
