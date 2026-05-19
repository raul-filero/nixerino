"use client";

import { useEffect, useState } from "react";

const ENDPOINT = "https://nixerino-contact.muletia.workers.dev/api/contact";

const TIPOS = [
  { value: "coaching", label: "Coaching / análisis" },
  { value: "eventos", label: "Eventos / cameos" },
  { value: "colabs", label: "Colabs de marca" },
  { value: "contenido", label: "Contenido patrocinado" },
  { value: "otro", label: "Otro" },
];

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [tipo, setTipo] = useState("coaching");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const a = params.get("asunto");
    if (a && TIPOS.some((t) => t.value === a)) setTipo(a);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hp) return; // bot
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setStatus("error");
      setErrorMsg("Faltan nombre, email o mensaje.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, nombre, email, empresa, mensaje }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
      setNombre("");
      setEmail("");
      setEmpresa("");
      setMensaje("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  const ok = status === "ok";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* honeypot anti-bot, no se ve */}
      <input
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <Field label="Tipo de colaboración">
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full bg-[color:var(--color-base)] border border-[var(--color-line)] px-3 py-3 font-body text-[15px] focus:outline-none focus:border-[color:var(--color-accent)]"
        >
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Tu nombre">
          <Input value={nombre} onChange={setNombre} placeholder="Pepa Pérez" autoComplete="name" />
        </Field>
        <Field label="Email">
          <Input value={email} onChange={setEmail} placeholder="hola@marca.com" type="email" autoComplete="email" />
        </Field>
      </div>

      <Field label="Empresa o marca (opcional)">
        <Input value={empresa} onChange={setEmpresa} placeholder="MarcaCo" autoComplete="organization" />
      </Field>

      <Field label="Cuéntame">
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={6}
          placeholder="Qué tienes en mente, plazos, número aproximado si lo tienes, lo que sea."
          className="w-full bg-[color:var(--color-base)] border border-[var(--color-line)] px-3 py-3 font-body text-[15px] leading-[1.55] focus:outline-none focus:border-[color:var(--color-accent)]"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending" || ok}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-base)] font-mono uppercase tracking-[0.22em] text-[11px] hover:bg-[color:var(--color-accent-soft)] transition-colors disabled:opacity-40"
        >
          {status === "sending" ? "Enviando…" : ok ? "Enviado ✓" : "Enviar mensaje →"}
        </button>
        {status === "error" && (
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-g2)]">
            {errorMsg || "Algo ha fallado, prueba otra vez."}
          </span>
        )}
        {ok && (
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent-soft)]">
            Gracias — te respondo personalmente.
          </span>
        )}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)] block mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full bg-[color:var(--color-base)] border border-[var(--color-line)] px-3 py-3 font-body text-[15px] focus:outline-none focus:border-[color:var(--color-accent)]"
    />
  );
}
