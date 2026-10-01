import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta } from "@/components/ClosingCta";
import { MaskLines, Reveal } from "@/components/motion";
import { SERVICES, SECTORS, AUTOMATION_EXAMPLE } from "@/lib/site";
import { getProject } from "@/lib/projects";

const TITLE = "Serviços — YFX";
const DESC =
  "Websites e lojas online, sistemas de gestão e reservas, agentes de IA no WhatsApp e design de identidade para empresas moçambicanas.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="conteudo">
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-[calc(var(--header-h)+5rem)] sm:px-8 lg:px-12 lg:pt-[calc(var(--header-h)+8rem)]">
        <MaskLines
          as="h1"
          lines={["Quatro formas de", "pôr o seu negócio", "a trabalhar melhor."]}
          className="type-mid text-[clamp(2.3rem,5.8vw,5.5rem)] leading-[0.92]"
        />
        <Reveal
          delay={200}
          className="mt-10 max-w-xl border-t border-line pt-8 text-lg leading-8 text-fog"
        >
          Escolhemos consigo o que faz sentido hoje e construímos passo a passo. Pode começar por um
          website e juntar um sistema ou automação mais tarde.
        </Reveal>
        <nav aria-label="Serviços nesta página" className="mt-10 flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="border border-line px-4 py-2 text-sm transition-colors hover:border-bone"
            >
              {s.short}
            </a>
          ))}
        </nav>
      </section>

      {SERVICES.map((s, i) => {
        const ex = s.example ? getProject(s.example) : undefined;
        return (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-t`}
            className="border-t border-line"
          >
            <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12">
              <div className="lg:col-span-6">
                <p className="text-sm tabular-nums text-fog">
                  {String(i + 1).padStart(2, "0")} de {String(SERVICES.length).padStart(2, "0")}
                </p>
                <h2
                  id={`${s.id}-t`}
                  className="type-wide mt-4 text-[clamp(2.2rem,4.6vw,4.75rem)] leading-[0.92]"
                >
                  {s.title}
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal as="p" className="text-lg leading-8 text-bone/90">
                  {s.text}
                </Reveal>
                <ul className="mt-8 border-t border-line">
                  {s.items.map((it, j) => (
                    <Reveal as="li" key={it} delay={j * 60} className="border-b border-line py-3.5">
                      {it}
                    </Reveal>
                  ))}
                </ul>
                {ex && (
                  <p className="mt-8 text-fog">
                    Exemplo real:{" "}
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: ex.slug }}
                      className="text-bone underline decoration-brand underline-offset-4"
                    >
                      {ex.name}
                    </Link>
                  </p>
                )}
              </div>
            </div>

            {s.id === "automacao" && (
              <div className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
                <h3 className="mb-6 text-lg font-semibold [font-family:var(--font-sans)]">
                  Exemplo: um pedido de cotação
                </h3>
                <div className="grid gap-px bg-line md:grid-cols-2">
                  <div className="bg-ink p-8 sm:p-10">
                    <p className="type-mid text-2xl text-fog">Hoje, à mão</p>
                    <ol className="mt-6 space-y-3">
                      {AUTOMATION_EXAMPLE.before.map((t) => (
                        <li key={t} className="flex gap-3 text-fog">
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-px w-4 shrink-0 bg-fog"
                          />
                          {t}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-slate p-8 sm:p-10">
                    <p className="type-mid text-2xl text-brand">Com um agente de IA</p>
                    <ol className="mt-6 space-y-3">
                      {AUTOMATION_EXAMPLE.after.map((t) => (
                        <li key={t} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-px w-4 shrink-0 bg-brand"
                          />
                          {t}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}

      <section aria-labelledby="setores" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12">
          <h2
            id="setores"
            className="type-mid text-[clamp(2rem,3.6vw,3.25rem)] leading-none lg:col-span-4"
          >
            Setores
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:col-span-8">
            {SECTORS.map((s) => (
              <li
                key={s}
                className="type-narrow text-[clamp(1.8rem,3.4vw,3rem)] leading-tight text-bone/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
