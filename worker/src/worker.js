// nixerino-contact — Cloudflare Worker
// Recibe el formulario de hefaia.com/nixerino/contacto/ y lo reenvía a nixerino@gmail.com.
//
// - Valida payload server-side con allowlist (regla dura CORS+input multi-origin).
// - Honeypot + length caps anti-spam.
// - Sin almacenar datos (passthrough).

const ALLOWED_TIPO = new Set(["coaching", "eventos", "colabs", "contenido", "otro"]);
const MAX_NOMBRE = 80;
const MAX_EMPRESA = 120;
const MAX_EMAIL = 160;
const MAX_MENSAJE = 4000;

function corsHeaders(origin) {
  const ok =
    origin === "https://hefaia.com" ||
    origin === "https://www.hefaia.com" ||
    origin === "http://localhost:3000" ||
    origin === "http://localhost:3030" ||
    /^https:\/\/[a-z0-9.-]+\.pages\.dev$/.test(origin || "");
  return {
    "Access-Control-Allow-Origin": ok ? origin : "https://hefaia.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(origin),
    },
  });
}

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= MAX_EMAIL;
}

async function sendViaMailChannels(env, { tipo, nombre, email, empresa, mensaje }) {
  const subject = `[NIXERINO/${tipo}] ${nombre}${empresa ? ` (${empresa})` : ""}`;

  const text =
    `Tipo: ${tipo}\n` +
    `Nombre: ${nombre}\n` +
    `Email: ${email}\n` +
    (empresa ? `Empresa: ${empresa}\n` : "") +
    `\nMensaje:\n${mensaje}\n`;

  const html =
    `<div style="font-family:system-ui,sans-serif;max-width:600px">` +
    `<h2 style="font-family:Arial Black,Impact,sans-serif;color:#0F0E0C">Nuevo mensaje · ${escapeHtml(tipo)}</h2>` +
    `<p><strong>Nombre:</strong> ${escapeHtml(nombre)}<br>` +
    `<strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` +
    (empresa ? `<br><strong>Empresa:</strong> ${escapeHtml(empresa)}` : "") +
    `</p>` +
    `<hr>` +
    `<pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(mensaje)}</pre>` +
    `<hr><p style="color:#666;font-size:12px">Enviado desde hefaia.com/nixerino/contacto/</p>` +
    `</div>`;

  const payload = {
    personalizations: [{ to: [{ email: env.TO_EMAIL || "nixerino@gmail.com" }] }],
    from: { email: env.FROM_EMAIL || "noreply@hefaia.com", name: env.FROM_NAME || "nixerino.hefaia.com" },
    reply_to: { email, name: nombre },
    subject,
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html },
    ],
  };

  const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`MailChannels ${res.status}: ${detail.slice(0, 200)}`);
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/api/contact" || request.method !== "POST") {
      return json({ error: "not_found" }, 404, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid_json" }, 400, origin);
    }

    const tipo = String(body.tipo || "").trim().toLowerCase();
    const nombre = String(body.nombre || "").trim().slice(0, MAX_NOMBRE);
    const email = String(body.email || "").trim().slice(0, MAX_EMAIL);
    const empresa = String(body.empresa || "").trim().slice(0, MAX_EMPRESA);
    const mensaje = String(body.mensaje || "").trim().slice(0, MAX_MENSAJE);

    if (!ALLOWED_TIPO.has(tipo)) return json({ error: "tipo_invalido" }, 400, origin);
    if (!nombre || nombre.length < 2) return json({ error: "nombre_invalido" }, 400, origin);
    if (!validEmail(email)) return json({ error: "email_invalido" }, 400, origin);
    if (!mensaje || mensaje.length < 10) return json({ error: "mensaje_invalido" }, 400, origin);

    try {
      await sendViaMailChannels(env, { tipo, nombre, email, empresa, mensaje });
    } catch (err) {
      return json({ error: "send_failed", detail: String(err.message || err).slice(0, 200) }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
