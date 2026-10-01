import { MaskLines, Reveal } from "@/components/motion";
import { WHATSAPP_PROJECT_URL, WHATSAPP_LABEL, INSTAGRAM_URL, INSTAGRAM_LABEL } from "@/lib/site";

export function ClosingCta({
  title = ["Vamos pôr o seu", "negócio a trabalhar."],
}: {
  title?: string[];
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line">
      {/* faceta gigante em fundo: o canto cortado do Y */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[55vw] bg-brand-gradient opacity-[0.09] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
        <MaskLines
          as="h2"
          id="cta-title"
          lines={title}
          className="type-wide text-[clamp(1.9rem,9.6vw,7.5rem)] leading-[0.92]"
        />
        <Reveal
          delay={200}
          className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-lg leading-8 text-fog">
            O diagnóstico é gratuito e sem compromisso. Conte-nos o que o atrasa no dia a dia e
            dizemos-lhe por onde começar.
          </p>
          <div className="flex flex-col gap-4 sm:items-end">
            <a
              href={WHATSAPP_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="facet-sm inline-flex min-h-14 items-center justify-center bg-brand px-8 text-lg font-semibold text-brand-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Marcar o diagnóstico no WhatsApp
            </a>
            <p className="text-sm text-fog">
              {WHATSAPP_LABEL}
              <span className="mx-2 text-line">/</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-bone"
              >
                Instagram {INSTAGRAM_LABEL}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
