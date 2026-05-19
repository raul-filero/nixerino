# Nixerino — tarjeta profesional

Web personal de Nixerino (ex-pro LoL & Valorant, Twitch Partner) hospedada como subpath de `hefaia.com/nixerino/`.

Stack: Next.js 15 App Router + Tailwind 4 + static export. Deploy: Cloudflare Pages (a través del repo Hefaia mediante GitHub Action de sync).

## Desarrollo

```bash
npm install
npm run dev   # localhost:3030
```

## Build

```bash
npm run build   # genera ./out/
```

El contenido de `out/` se copia automáticamente a `public/nixerino/` del repo Hefaia mediante el workflow `.github/workflows/sync-to-hefaia.yml`.
