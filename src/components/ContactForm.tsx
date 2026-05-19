"use client";

import { useEffect, useState } from "react";
import Capybara from "./Capybara";
import { Sfx } from "./Manga";

const ENDPOINT = "https://nixerino-contact.muletia.workers.dev/api/contact";

type AsuntoOpt = { v: string; l: string };
const ASUNTOS: AsuntoOpt[] = [
  { v: "coaching", l: "Coaching · 1v1 / equipos / VOD review" },
  { v: "eventos", l: "Eventos · cameos / watch parties / charlas" },
  { v: "colabs", l: "Colabs · sponsorships / embajadas / merch" },
  { v: "contenido", l: "Contenido · streams / vídeos / integraciones" },
  { v: "otro", l: "Otro · cuéntame qué tienes en mente" },
];
const ASUNTO_VALUES = new Set(ASUNTOS.map((a) => a.v));

const BUDGETS = ["< 500€", "500–2k€", "2–5k€", "5k+", "prefiero hablar"];

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [asunto, setAsunto] = useState("coaching");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [budget, setBudget] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const a = params.get("asunto");
    if (a && ASUNTO_VALUES.has(a)) setAsunto(a);
  }, []);

  const valid = nombre.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && mensaje.trim().length >= 10;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hp) return;
    if (!valid) {
      setStatus("error");
      setErrorMsg("Faltan nombre, email o mensaje (mín. 10 caracteres).");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    const fullMessage = budget ? `[Presupuesto: ${budget}]\n\n${mensaje}` : mensaje;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo: asunto, nombre, email, empresa, mensaje: fullMessage }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <Capybara variant="peace" size={180} />
        <Sfx rotate={-6} color="var(--color-red)" size={72}>GO!</Sfx>
        <div className="font-display text-4xl uppercase tracking-tight">Recibido.</div>
        <p className="font-serif text-[17px] max-w-[480px] text-[color:var(--color-ink)]/85">
          Te respondo en 48–72h en días laborables a <b>{email}</b>.
          Si en una semana no he aparecido, dame un toque por{" "}
          <a href="https://x.com/n1xerino" target="_blank" rel="noopener noreferrer" className="underline">
            X
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setNombre("");
            setEmail("");
            setEmpresa("");
            setBudget("");
            setMensaje("");
          }}
          className="font-mono text-[11px] uppercase tracking-widest border-[2px] border-[color:var(--color-ink)] px-3 py-1.5"
        >
          Enviar otro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      <Field label="01 · asunto" className="sm:col-span-2">
        <div className="grid sm:grid-cols-3 gap-2">
          {ASUNTOS.map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => setAsunto(o.v)}
              className={`text-left px-3 py-2 border-[2px] border-[color:var(--color-ink)] font-mono text-[11px] uppercase tracking-widest transition-colors ${
                asunto === o.v
                  ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                  : "bg-[color:var(--color-paper)] hover:bg-[color:var(--color-paper-2)]"
              }`}
            >
              {o.l.split(" · ")[0]}
            </button>
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60 mt-2">
          → {ASUNTOS.find((o) => o.v === asunto)?.l}
        </div>
      </Field>

      <Field label="02 · nombre o empresa">
        <Input value={nombre} onChange={setNombre} placeholder="ej. Marca X / Juan García" autoComplete="name" />
      </Field>
      <Field label="03 · email">
        <Input value={email} onChange={setEmail} placeholder="tu@email.com" type="email" autoComplete="email" />
      </Field>

      <Field label="04 · empresa o marca (opcional)" className="sm:col-span-2">
        <Input value={empresa} onChange={setEmpresa} placeholder="MarcaCo S.L." autoComplete="organization" />
      </Field>

      <Field label="05 · presupuesto orientativo (opcional)" className="sm:col-span-2">
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b === budget ? "" : b)}
              className={`px-3 py-2 border-[2px] border-[color:var(--color-ink)] font-mono text-[11px] uppercase tracking-widest transition-colors ${
                budget === b
                  ? "bg-[color:var(--color-red)] text-[color:var(--color-paper)]"
                  : "bg-[color:var(--color-paper)] hover:bg-[color:var(--color-paper-2)]"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="06 · mensaje" className="sm:col-span-2">
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={6}
          placeholder="qué, cuándo, formato, audiencia, lo que sea relevante. cinco líneas bastan."
          className="w-full bg-[color:var(--color-paper)] border-[2px] border-[color:var(--color-ink)] px-3 py-2.5 font-serif text-[16px] focus:outline-none focus:bg-[color:var(--color-paper-2)] resize-y"
        />
        <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/40 mt-1">
          {mensaje.length} caracteres · mínimo 10
        </div>
      </Field>

      <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2 border-t-[2px] border-dashed border-[color:var(--color-ink)]/40">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink)]/60 max-w-[400px]">
          Sin cookies · sin tracking · sin newsletter. RGPD-friendly por defecto.
        </div>
        <button
          type="submit"
          disabled={status === "sending" || !valid}
          className={`font-display text-xl uppercase tracking-wide px-6 py-3 border-[3px] border-[color:var(--color-ink)] transition-all ${
            valid && status !== "sending"
              ? "bg-[color:var(--color-red)] text-[color:var(--color-paper)] hover:translate-x-0.5 hover:-translate-y-0.5"
              : "bg-[color:var(--color-paper)] text-[color:var(--color-ink)]/30 cursor-not-allowed"
          }`}
          style={{ boxShadow: valid && status !== "sending" ? "5px 5px 0 var(--color-ink)" : "none" }}
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje →"}
        </button>
      </div>

      {status === "error" && (
        <div className="sm:col-span-2 font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-red)]">
          {errorMsg || "Algo ha fallado, prueba otra vez."}
        </div>
      )}
    </form>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink)]/60">{label}</span>
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
      className="w-full bg-[color:var(--color-paper)] border-[2px] border-[color:var(--color-ink)] px-3 py-2.5 font-serif text-[16px] focus:outline-none focus:bg-[color:var(--color-paper-2)]"
    />
  );
}
