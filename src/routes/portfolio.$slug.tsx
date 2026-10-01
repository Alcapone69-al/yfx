import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  asset,
  getProject,
  nextProject,
  projectHref,
  type Project,
  type Shot,
} from "@/lib/projects";
import { ShotImg, PhoneFrame } from "@/components/Media";
import { SITE_ORIGIN } from "@/lib/site";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Projeto não encontrado — YFX" }] };
    const title = `${loaderData.name} — ${loaderData.category} — YFX`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.lede },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.lede },
        { property: "og:type", content: "article" },
        { property: "og:image", content: SITE_ORIGIN + asset(loaderData.cover.src) },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const p = Route.useLoaderData();
  const next = nextProject(p.slug);
  const desktop = p.gallery.filter((g) => g.kind !== "mobile");
  const mobile = p.gallery.filter((g) => g.kind === "mobile");

  return (
    <main id="conteudo">
      {/* Abertura */}
      <section className="mx-auto max-w-[1440px] px-5 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:px-12 lg:pt-[calc(var(--header-h)+5rem)]">
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-bone"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1"
          >
            <path d="M20 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          Todo o trabalho
        </Link>

        <h1
          className="type-wide mt-8 text-[clamp(1.9rem,9.6vw,10rem)] leading-[0.86]"
          style={{ viewTransitionName: `title-${p.slug}` }}
        >
          {p.name}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12">
          <p className="text-xl leading-9 text-bone/90 lg:col-span-7">{p.lede}</p>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm lg:col-span-4 lg:col-start-9">
            <Meta label="Tipo" value={p.category} />
            <Meta label="Ano" value={p.year} />
            <Meta label="Setor" value={p.sector} wide />
            <Meta label="Estado" value={p.status} wide />
          </dl>
        </div>
      </section>

      {/* Capa: morfa a partir da lista de projetos */}
      <div className="mx-auto mt-14 max-w-[1440px] px-5 sm:mt-20 sm:px-8 lg:px-12">
        <div
          className="facet relative aspect-[16/10] overflow-hidden bg-graphite"
          style={{ viewTransitionName: `cover-${p.slug}` }}
        >
          <ShotImg
            shot={p.cover}
            eager
            sizes="(min-width: 1440px) 1340px, 100vw"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <VisitLink p={p} />
          {p.note && <p className="max-w-xl text-sm leading-6 text-fog">{p.note}</p>}
        </div>
      </div>

      {/* Narrativa */}
      <article className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Chapter title="Contexto" items={p.context} />
        <Chapter title="O desafio" items={p.challenge} />
        {desktop[0] && <Figure shot={desktop[0]} />}
        <Chapter title="A solução" items={p.solution} />
        {(mobile[0] || desktop[1]) && <Pair a={desktop[1]} b={mobile[0]} />}
        <Chapter title="Design e desenvolvimento" items={p.approach} />
        {desktop.slice(2).map((s) => (
          <Figure key={s.src} shot={s} />
        ))}
        {mobile.slice(1).map((s) => (
          <Pair key={s.src} b={s} />
        ))}

        {/* Entregue vs. medido: separados de propósito */}
        <section
          aria-labelledby="entregue"
          className="mt-24 grid gap-px bg-line sm:mt-32 md:grid-cols-2"
        >
          <div className="bg-ink p-8 sm:p-10">
            <h2 id="entregue" className="type-mid text-3xl">
              O que foi entregue
            </h2>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 leading-7">
                  <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink p-8 sm:p-10">
            <h2 className="type-mid text-3xl">Resultados medidos</h2>
            {p.outcomes.map((o) => (
              <p key={o} className="mt-8 leading-7 text-fog">
                {o}
              </p>
            ))}
          </div>
        </section>
      </article>

      {/* Próximo projeto */}
      <section aria-label="Próximo projeto" className="border-t border-line">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="project-row group mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-12 lg:px-12 lg:py-28"
        >
          <div className="md:col-span-6">
            <p className="text-sm text-fog">Próximo projeto</p>
            <p className="project-title mt-3 text-[clamp(2.6rem,6vw,6rem)] leading-[0.9]">
              {next.name}
            </p>
            <p className="mt-4 text-fog">{next.category}</p>
          </div>
          <div className="facet relative aspect-[16/10] overflow-hidden bg-graphite md:col-span-6">
            <ShotImg
              shot={next.cover}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
          </div>
        </Link>
      </section>

      <ClosingCta title={["Quer um projeto", "como este?"]} />
    </main>
  );
}

function Meta({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <dt className="text-fog">{label}</dt>
      <dd className="mt-1 text-bone">{value}</dd>
    </div>
  );
}

function VisitLink({ p }: { p: Project }) {
  return (
    <a
      href={projectHref(p)}
      target="_blank"
      rel="noopener noreferrer"
      className="facet-sm inline-flex min-h-12 items-center gap-3 bg-brand px-6 font-semibold text-brand-ink transition-transform duration-300 hover:-translate-y-0.5"
    >
      {p.urlLabel}
      <span className="sr-only">(abre num novo separador)</span>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </a>
  );
}

function Chapter({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="grid gap-6 border-t border-line py-14 lg:grid-cols-12 lg:py-20">
      <h2 className="type-mid text-[clamp(1.8rem,3vw,2.75rem)] leading-none lg:col-span-4">
        {title}
      </h2>
      <div className="space-y-5 lg:col-span-7 lg:col-start-6">
        {items.map((t, i) => (
          <Reveal
            as="p"
            key={i}
            delay={i * 70}
            className="max-w-[62ch] text-lg leading-8 text-fog first:text-bone/90"
          >
            {t}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Figure({ shot }: { shot: Shot }) {
  return (
    <figure className="my-10 lg:my-16">
      <Reveal kind="facet" className="facet aspect-[16/10] overflow-hidden bg-graphite">
        <ShotImg
          shot={shot}
          sizes="(min-width: 1440px) 1340px, 100vw"
          className="h-full w-full object-cover object-top"
        />
      </Reveal>
      {shot.caption && <figcaption className="mt-4 text-sm text-fog">{shot.caption}</figcaption>}
    </figure>
  );
}

function Pair({ a, b }: { a?: Shot | undefined; b?: Shot | undefined }) {
  if (!a && b) {
    return (
      <figure className="my-10 flex flex-col items-center lg:my-16">
        <Reveal className="w-[62%] max-w-[22rem]">
          <PhoneFrame shot={b} />
        </Reveal>
        {b.caption && (
          <figcaption className="mt-5 text-center text-sm text-fog">{b.caption}</figcaption>
        )}
      </figure>
    );
  }
  return (
    <div className="my-10 grid items-end gap-8 lg:my-16 lg:grid-cols-12">
      {a && (
        <figure className={b ? "lg:col-span-8" : "lg:col-span-12"}>
          <Reveal kind="facet" className="facet aspect-[16/10] overflow-hidden bg-graphite">
            <ShotImg
              shot={a}
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="h-full w-full object-cover object-top"
            />
          </Reveal>
          {a.caption && <figcaption className="mt-4 text-sm text-fog">{a.caption}</figcaption>}
        </figure>
      )}
      {b && (
        <figure className="mx-auto w-[62%] max-w-[20rem] lg:col-span-4 lg:w-full">
          <Reveal delay={120}>
            <PhoneFrame shot={b} />
          </Reveal>
          {b.caption && <figcaption className="mt-4 text-sm text-fog">{b.caption}</figcaption>}
        </figure>
      )}
    </div>
  );
}
