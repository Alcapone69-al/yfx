import { createFileRoute } from "@tanstack/react-router";
import { ProjectRows } from "@/components/ProjectRows";
import { ClosingCta } from "@/components/ClosingCta";
import { MaskLines, Reveal } from "@/components/motion";

const TITLE = "Trabalho — YFX";
const DESC =
  "Projetos reais da YFX para empresas em Moçambique: DA-KA Consultoria, Giquira Group, Mentor de Milhões e o Armazém ERP.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <main id="conteudo">
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-[calc(var(--header-h)+5rem)] sm:px-8 sm:pb-28 lg:px-12 lg:pt-[calc(var(--header-h)+8rem)]">
        <MaskLines
          as="h1"
          lines={["Trabalho real,", "online e a funcionar."]}
          className="type-wide text-[clamp(1.9rem,9.6vw,8rem)] leading-[0.9]"
        />
        <Reveal delay={200} className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-12">
          <p className="max-w-xl text-lg leading-8 text-fog md:col-span-6">
            Cada projeto foi desenhado para a empresa que o usa. Abra um estudo de caso para ver o
            contexto, o desafio, a solução e o que foi entregue.
          </p>
          <p className="text-fog md:col-span-4 md:col-start-9">
            Mostramos apenas factos verificados. Quando ainda não há resultados medidos, dizemo-lo.
          </p>
        </Reveal>
      </section>

      <section
        aria-label="Projetos"
        className="mx-auto max-w-[1440px] px-5 pb-32 sm:px-8 sm:pb-44 lg:px-12"
      >
        <ProjectRows headingLevel="h2" />
      </section>

      <ClosingCta title={["Tem um projeto", "em mente?"]} />
    </main>
  );
}
