# /public/img — fotos del sitio

Mientras no haya fotos cedidas por el propio Nixerino, la web usa **placeholders editoriales** (tipografía sobre textura tostada). El diseño está pensado para que se vea digno sin necesidad de fotos.

## Cuando llegue material

Recomendado (en orden de prioridad):

1. **avatar.jpg** — retrato moderno actual (cuadrado, ≥800×800) → reemplaza el bloque tipográfico del Hero en `src/components/Hero.tsx`.
2. **lol-era.jpg** — foto era LoL (G2 Vodafone / SuperLiga, formato 3:4 vertical) → bloque "ERA LOL" en `src/app/sobre-mi/page.tsx`.
3. **valorant-era.jpg** — foto era Valorant (Movistar Riders, formato 3:4) → bloque "ERA VALO" en `src/app/sobre-mi/page.tsx`.

## Para reintroducir `<Image>`

En el componente correspondiente:

```tsx
import Image from "next/image";

<Image
  src="/img/avatar.jpg"
  alt="Nixerino"
  fill
  sizes="(max-width: 768px) 80vw, 420px"
  priority
  className="object-cover relative z-10"
/>
```

(Estaba así antes; se quitó porque no había archivo y rompía el static export.)

## Optimización

JPG progresivo, calidad 80–85, ancho máximo 1000px. `next.config.js` ya tiene `images.unoptimized: true` (obligatorio para `output: 'export'`), así que el optimizador no procesará nada — comprime tú antes de subir.
