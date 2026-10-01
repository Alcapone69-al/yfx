import { createFileRoute } from "@tanstack/react-router";
import { MaskLines, Reveal } from "@/components/motion";
import {
  CONTACT_TOPICS,
  COMMITMENTS,
  INSTAGRAM_LABEL,
  INSTAGRAM_URL,
  LOCATION,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
  whatsapp,
} from "@/lib/site";

const TITLE = "Contacto — YFX";
const DESC =
  "Fale com a YFX no WhatsApp (+258 86 174 2006) ou no Instagram @yfx_258. Diagnóstico gratuito e sem compromisso.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main id="conteudo">
      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-[calc(var(--header-h)+5rem)] sm:px-8 lg:px-12 lg:pt-[calc(var(--header-h)+8rem)]">
        <MaskLines
          as="h1"
          lines={["Vamos conversar."]}
          className="type-wide text-[clamp(1.9rem,9.6vw,10rem)] leading-[0.88]"
        />
        <Reveal
          delay={150}
          className="mt-10 max-w-xl border-t border-line pt-8 text-lg leading-8 text-fog"
        >
          Conte-nos o que o está a atrasar no dia a dia. O diagnóstico é gratuito e sem compromisso,
          e se não precisar de nós, dizemos-lhe.
        </Reveal>
      </section>

      <section aria-labelledby="assunto" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <h2 id="assunto" className="type-mid text-[clamp(1.9rem,3vw,2.75rem)] leading-none">
              Do que precisa?
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-fog">
              Escolha um assunto. O WhatsApp abre com a mensagem já escrita, e só tem de a enviar.
            </p>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {CONTACT_TOPICS.map((t) => (
              <li key={t.label} className="border-t border-line last:border-b">
                <a
                  href={whatsapp(t.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-row group flex items-center justify-between gap-6 py-6"
                >
                  <span className="service-title text-[clamp(1.7rem,3.6vw,3rem)] leading-none">
                    {t.label}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-sm text-fog transition-colors group-hover:text-brand">
                    <span className="hidden sm:inline">Abrir WhatsApp</span>
                    <span className="sr-only sm:hidden">Abrir WhatsApp</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        d="M7 17 17 7M9 7h8v8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="canais" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-line md:grid-cols-3">
          <h2 id="canais" className="sr-only">
            Canais de contacto
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink p-8 transition-colors hover:bg-graphite sm:p-12"
          >
            <p className="text-sm text-fog">WhatsApp</p>
            <p className="type-mid mt-3 text-2xl group-hover:text-brand sm:text-3xl">
              {WHATSAPP_LABEL}
            </p>
            <p className="mt-3 text-sm text-fog">{COMMITMENTS[1]?.text}</p>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink p-8 transition-colors hover:bg-graphite sm:p-12"
          >
            <p className="text-sm text-fog">Instagram</p>
            <p className="type-mid mt-3 text-2xl group-hover:text-brand sm:text-3xl">
              {INSTAGRAM_LABEL}
            </p>
            <p className="mt-3 text-sm text-fog">Veja projetos e novidades.</p>
          </a>
          <div className="bg-ink p-8 sm:p-12">
            <p className="text-sm text-fog">Onde estamos</p>
            <p className="type-mid mt-3 text-2xl sm:text-3xl">{LOCATION}</p>
            <p className="mt-3 text-sm text-fog">Clientes em Maputo e em Nampula.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
