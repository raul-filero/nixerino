import Capybara from "@/components/Capybara";
import { MangaPanel, Tone, SpeechBubble, PageBreak } from "@/components/Manga";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-6">
      <div className="relative mb-10 grid lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/60">/contacto · cap. 07</div>
          <h1 className="font-display text-[clamp(48px,8vw,112px)] leading-[0.85] uppercase tracking-tight mt-2">
            Escríbeme<span className="text-[color:var(--color-red)]">.</span>
          </h1>
          <p className="font-serif text-[19px] leading-snug mt-3 max-w-[560px] text-[color:var(--color-ink)]/85">
            Un formulario. Cinco campos. Respondo en 48–72h en días laborables.
            Si la propuesta no encaja, te lo digo en una línea. Si encaja, hablamos.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <MangaPanel label="recepción · pág. 07" className="p-6 flex items-center justify-center bg-[color:var(--color-paper-2)] aspect-[4/3] overflow-hidden">
            <Tone pattern="dots-lg" className="absolute inset-0 opacity-40" />
            <Capybara variant="reception" size={260} />
          </MangaPanel>
          <SpeechBubble tail="bl" className="absolute -bottom-6 right-6 z-10 max-w-[240px]">
            <div className="font-serif text-[14px]">&quot;Dime para qué me quieres y dime cuándo. Lo demás lo arreglamos.&quot;</div>
          </SpeechBubble>
        </div>
      </div>

      <PageBreak label="formulario · POST → nixerino-contact.muletia.workers.dev" />

      <div className="grid lg:grid-cols-12 gap-6">
        <MangaPanel className="lg:col-span-8 p-6 sm:p-8">
          <ContactForm />
        </MangaPanel>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <MangaPanel className="p-5" bg="ink">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-paper)]/60">o si lo prefieres</div>
            <div className="font-display text-3xl text-[color:var(--color-paper)] uppercase tracking-tight leading-[0.95] mt-1">Email directo</div>
            <a href="mailto:nixerino@gmail.com" className="font-mono text-[13px] text-[color:var(--color-red)] mt-2 break-all block hover:underline">
              nixerino@gmail.com
            </a>
            <p className="font-serif text-[13px] text-[color:var(--color-paper)]/75 mt-2">
              También funciona. Asunto claro y no me cuentes la vida en línea uno.
            </p>
          </MangaPanel>

          <MangaPanel className="p-5">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">tiempo medio respuesta</div>
            <div className="font-display text-4xl uppercase tracking-tight mt-1">48–72h</div>
            <p className="font-serif text-[13px] text-[color:var(--color-ink)]/80 mt-2">
              Lunes–viernes. Fines de semana puedo tardar más. No es mala educación, es vida.
            </p>
          </MangaPanel>

          <MangaPanel className="p-5">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-ink)]/60">lo que ayuda mucho</div>
            <ul className="font-serif text-[14px] mt-2 space-y-1.5 text-[color:var(--color-ink)]/85">
              <li>· decir <b>cuándo</b> lo necesitas</li>
              <li>· decir <b>presupuesto</b> aunque sea rango</li>
              <li>· un <b>ejemplo</b> de algo parecido</li>
              <li>· nombre del que <b>decide</b> al final</li>
            </ul>
          </MangaPanel>
        </div>
      </div>
    </div>
  );
}
