import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProjectRows } from "@/components/ProjectRows";
import { ServicesList } from "@/components/ServicesList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ClosingCta } from "@/components/ClosingCta";
import { MaskLines, Reveal } from "@/components/motion";
import { COMMITMENTS, SECTORS } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";

const TITLE = "YFX — Estúdio digital em Maputo";
const DESC =
  "Websites, sistemas de gestão, automação e agentes de IA no WhatsApp para empresas moçambicanas. Veja o trabalho real e marque um diagnóstico gratuito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

function Home() {
  const online = PROJECTS.filter((p) => p.status.startsWith("Online")).length;
  return (
    <main id="conteudo">
      <Hero />

      {/* B. Introdução */}
      <section
        id="estudio"
        aria-labelledby="intro-title"
        className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-40 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <MaskLines
            as="h2"
            id="intro-title"
            lines={["Desenhamos cada solução", "para a empresa que", "a vai usar."]}
            className="type-mid text-[clamp(2.2rem,4.8vw,4.75rem)] leading-[0.98] lg:col-span-8"
          />
          <Reveal delay={150} className="self-end lg:col-span-4">
            <p className="text-lg leading-8 text-fog">
              A YFX é um estúdio de tecnologia em Maputo. Juntamos website, sistema, automação e
              design no mesmo parceiro, e nunca reutilizamos o mesmo modelo de um cliente para o
              outro.
            </p>
            <p className="mt-6 text-[0.95rem] leading-7 text-fog">
              Trabalhamos para {SECTORS.slice(0, -1).join(", ").toLowerCase()} e{" "}
              {SECTORS.at(-1)!.toLowerCase()}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* C. Projetos selecionados */}
      <section
        id="trabalho"
        aria-labelledby="work-title"
        className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-8 sm:pb-40 lg:px-12"
      >
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8 sm:mb-24">
          <h2 id="work-title" className="type-wide text-[clamp(2.4rem,6vw,6rem)] leading-[0.9]">
            Trabalho
          </h2>
          <p className="max-w-sm text-fog">
            Projetos reais para empresas em Moçambique, de websites a sistemas de gestão.
          </p>
        </div>
        <ProjectRows />
      </section>

      {/* D. Serviços */}
      <section aria-labelledby="services-title" className="border-t border-line bg-graphite/60">
        <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-12">
            <h2
              id="services-title"
              className="type-mid text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.95] lg:col-span-6"
            >
              O que fazemos
            </h2>
            <p className="max-w-md text-lg leading-8 text-fog lg:col-span-5 lg:col-start-8 lg:self-end">
              Escolhemos consigo o que faz sentido hoje e construímos passo a passo.
            </p>
          </div>
          <ServicesList />
          <p className="mt-10">
            <Link to="/servicos" className="link-underline font-semibold">
              Ver todos os serviços e setores
            </Link>
          </p>
        </div>
      </section>

      {/* E. Método */}
      <section aria-label="Como trabalhamos" className="border-t border-line">
        <ProcessSteps />
      </section>

      {/* F. Credibilidade através de trabalho real */}
      <section aria-labelledby="proof-title" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <h2
              id="proof-title"
              className="type-mid text-[clamp(2.2rem,4vw,3.75rem)] leading-[0.98]"
            >
              Provas, não promessas
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-fog">
              A YFX é uma empresa nova. Preferimos mostrar trabalho real a inventar testemunhos ou
              números que não temos.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8">
              <div>
                <dt className="text-sm text-fog">Projetos para clientes em 2026</dt>
                <dd className="type-wide mt-2 text-6xl text-brand tabular-nums">
                  {PROJECTS.length}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-fog">Já online</dt>
                <dd className="type-wide mt-2 text-6xl tabular-nums">{online}</dd>
              </div>
            </dl>
          </div>
          <ul className="grid gap-px self-start bg-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {COMMITMENTS.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 80} className="bg-ink p-7 sm:p-8">
                <h3 className="text-lg font-semibold [font-family:var(--font-sans)]">{c.title}</h3>
                <p className="mt-3 leading-7 text-fog">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
