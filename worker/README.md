# nixerino-contact (Cloudflare Worker)

Recibe el formulario de `hefaia.com/nixerino/contacto/` y reenvía el mensaje a `nixerino@gmail.com` vía MailChannels.

## Deploy

```bash
cd worker
npx wrangler deploy
```

URL pública resultante: `https://nixerino-contact.muletia.workers.dev/api/contact`

## CORS

Allowlist hardcoded en `src/worker.js`:
- `https://hefaia.com` / `https://www.hefaia.com`
- `http://localhost:3000` / `http://localhost:3030` (dev)
- Cualquier `*.pages.dev` (previews CF)

## Test rápido

```bash
curl -X POST https://nixerino-contact.muletia.workers.dev/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://hefaia.com" \
  -d '{"tipo":"coaching","nombre":"Test","email":"a@b.com","mensaje":"Hola mundo test del worker"}'
```
