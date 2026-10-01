import { createFileRoute } from "@tanstack/react-router";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ClosingCta } from "@/components/ClosingCta";
import { MaskLines, Reveal } from "@/components/motion";
import { YMark } from "@/components/YMark";
import { PRINCIPLES, COMMITMENTS } from "@/lib/site";

const TITLE = "Estúdio — YFX";
const DESC =
  "A YFX é um estúdio de tecnologia em Maputo que usa IA e ferramentas digitais para pôr empresas moçambicanas online, com soluções feitas à medida.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main id="conteudo">
      <section className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-20 pt-[calc(var(--header-h)+5rem)] sm:px-8 lg:px-12 lg:pt-[calc(var(--header-h)+8rem)]">
        <MaskLines
          as="h1"
          lines={["Um parceiro digital,", "não apenas", "um fornecedor."]}
          className="type-mid relative z-10 text-[clamp(2.3rem,5.8vw,5.5rem)] leading-[0.92]"
        />
        <YMark
          className="pointer-events-none absolute -right-10 top-24 hidden h-[34rem] w-[34rem] opacity-[0.12] lg:block"
          title=""
        />
      </section>

      <section aria-labelledby="visao" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-12">
          <h2
            id="visao"
            className="type-mid text-[clamp(2rem,3.6vw,3.25rem)] leading-none lg:col-span-4"
          >
            Porque existimos
          </h2>
          <div className="space-y-6 text-lg leading-8 lg:col-span-7 lg:col-start-6">
            <Reveal as="p" className="text-bone/90">
              Muitas empresas moçambicanas ainda vivem só no mundo físico. A YFX existe para as pôr
              online, com websites, sistemas e automação que resolvem problemas concretos do dia a
              dia.
            </Reveal>
            <Reveal as="p" delay={80} className="text-fog">
              Usamos a inteligência artificial e as ferramentas da internet como vantagem:
              entregamos mais depressa e com mais qualidade, sem cortar no cuidado.
            </Reveal>
            <Reveal as="p" delay={160} className="text-fog">
              Cada website e cada sistema é pensado para o negócio que o vai usar. Não reutilizamos
              o mesmo modelo de um cliente para o outro.
            </Reveal>
            <Reveal as="p" delay={240} className="text-fog">
              Somos uma empresa nova, sediada em Maputo. Por isso trabalhamos com poucos projetos de
              cada vez e com atenção total a cada um.
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="principios" className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <h2 id="principios" className="type-mid text-[clamp(2rem,3.6vw,3.25rem)] leading-none">
            Como pensamos
          </h2>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-ink p-8 sm:p-10">
                <h3 className="type-mid text-[1.75rem] leading-tight">{p.title}</h3>
                <p className="mt-4 max-w-md leading-7 text-fog">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Como trabalhamos" className="border-t border-line">
        <ProcessSteps />
      </section>

      <section aria-labelledby="compromissos" className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-12">
          <h2
            id="compromissos"
            className="type-mid text-[clamp(2rem,3.6vw,3.25rem)] leading-none lg:col-span-4"
          >
            O nosso compromisso
          </h2>
          <dl className="lg:col-span-7 lg:col-start-6">
            {COMMITMENTS.map((c) => (
              <div
                key={c.title}
                className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <dt className="font-semibold">{c.title}</dt>
                <dd className="leading-7 text-fog">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
