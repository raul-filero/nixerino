# /public/img — assets visuales verificados

Fotos reales de Nixerino descargadas de fuentes públicas (mayo 2026). Listas para usar en la web o pasar a Claude Design para el rediseño anime.

## Inventario

| Archivo | Descripción | Fuente | Resolución / peso | Mejor uso |
|---|---|---|---|---|
| `avatar-twitch.png` | Retrato editorial. Pelo platino corto, fondo magenta con luz azul, camiseta blanca, mirada al frente. Es el avatar oficial de su Twitch. | `static-cdn.jtvnw.net` (CDN público Twitch) | 600×600 PNG, 500KB | **Hero principal** + favicon alta res |
| `banner-twitch.jpg` | **MANGA del propio Nixerino**. Primer plano blanco y negro de su cara estilo shounen, con bocadillo "…". Es su banner oficial de Twitch — confirma que la estética anime ya es SU línea, no algo inventado. | `static-cdn.jtvnw.net` | 480×195 JPG, 117KB | **Banner ancho** del Hero / decorativo en /sobre-mi |
| `movistar-riders-era.png` | Poster oficial Movistar Riders era Valorant 2023. Plano frontal con camiseta del equipo, hace peace sign con la mano en la sien. Tipografía "VICTORIA" detrás. | `images.theradiant.gg` | ~1920×1080 PNG, 3.5MB | `/sobre-mi` — era Valorant |
| `nixerino-jersey-back.jpg` | Espaldas con jersey negro que lleva "NIXERINO" en letras grandes blancas, escenario azul. Plano cinemático del thumbnail "COMPETIRÉ 2023". | YouTube thumbnail | 1280×720 JPG, 113KB | `/sobre-mi` — bloque competición |
| `nixerino-radiant-celebra.jpg` | Foto pequeña de él celebrando ascenso a Radiante. Camiseta negra con marca verde, brazo arriba, dormitorio. | YouTube thumbnail | 1280×720 JPG, 134KB | Recortar el cuadrante superior izquierdo para `/contenido` |
| `nixerino-streaming-reaction.jpg` | Plano de él en stream — pelo oscuro media melena, gafas, headset rojo, en plena reacción. Esquina derecha del thumbnail "FLICK más rápido". | YouTube thumbnail | 1280×720 JPG, 102KB | Recortar el cuadrante derecho para `/contenido` o avatar secundario |

## Notas

- **Coherencia estética**: tres etapas visuales de él — adolescente competitivo (Movistar Riders), streamer casual (radiant/streaming), retrato moderno editorial (avatar Twitch actual). Pelo cambia: castaño media melena → platino corto. **Para el rediseño anime, el norte es el banner Twitch — ese estilo es el que él mismo ha elegido**.
- **Sobre Mixwell**: NO hay foto suya en esta carpeta. Regla dura del proyecto — Mixwell se menciona UNA sola vez en `/sobre-mi`, solo como hermano, sin reclamo.
- **Origen de las fotos**: avatar y banner son CDN público de Twitch (cualquiera con la URL los puede descargar). Movistar Riders viene de TheRadiant (prensa esports). YouTube thumbs son de su propio canal — copyright suyo.
- **Para reactivar `<Image>` en la web actual**: las refs en código fueron quitadas porque no había fotos. Para reactivar, usa el patrón de `src/components/Hero.tsx` (block comentado) cambiando el `src` a `/img/avatar-twitch.png`.
