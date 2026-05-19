import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <article className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mono-dim)]">
        Contacto
      </span>
      <h1 className="font-display text-[42px] md:text-[64px] leading-[1] tracking-[-0.03em] mt-3 mb-6">
        Hablemos.
      </h1>
      <p className="font-body text-[17px] leading-[1.75] max-w-[60ch] mb-12">
        Coaching, evento, colab o contenido patrocinado: rellena el formulario y te respondo personalmente. Si ya
        tienes brief o presupuesto, pégalo en el mensaje, no hace falta floritura.
      </p>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <aside className="space-y-8 md:border-l md:border-[var(--color-line)] md:pl-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)] mb-3">
              Email directo
            </h3>
            <a
              href="mailto:nixerino@gmail.com"
              className="font-body text-[16px] hover:text-[color:var(--color-accent-soft)]"
            >
              nixerino@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mono-dim)] mb-3">
              Redes
            </h3>
            <SocialLinks size="md" />
          </div>
          <div className="border border-[var(--color-line)] bg-[color:var(--color-elev)] p-5">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-accent)] mb-2">
              Tiempo de respuesta
            </h4>
            <p className="font-body text-[14px] leading-[1.6] text-[color:var(--color-text-muted)]">
              24–72h en días laborables. Si el evento o la campaña es urgente, dilo en el mensaje y te respondo el
              mismo día.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
