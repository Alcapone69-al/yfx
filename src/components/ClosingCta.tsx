import { MaskLines, Reveal } from "@/components/motion";
import { WHATSAPP_PROJECT_URL, WHATSAPP_LABEL, INSTAGRAM_URL, INSTAGRAM_LABEL } from "@/lib/site";
import { GlassAnchor } from "@/components/GlassButton";

export function ClosingCta({
  title = ["Vamos pôr o seu", "negócio a trabalhar."],
}: {
  title?: string[];
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line">
      {/* brilho azul de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] -top-[30%] h-[140%] w-[70%] bg-[radial-gradient(closest-side,rgba(29,78,216,0.28),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
        <MaskLines
          as="h2"
          id="cta-title"
          lines={title}
          className="type-wide text-[clamp(2.3rem,6.4vw,5.5rem)] leading-[0.92]"
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
            <GlassAnchor href={WHATSAPP_PROJECT_URL} external className="px-6 sm:px-8">
              Marcar o diagnóstico no WhatsApp
            </GlassAnchor>
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
