import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PROJETOS, type Projeto } from "@/lib/portfolio";

/** Moldura de navegador com captura desktop e telemóvel sobreposto. */
function Mockup({ p, compact = false }: { p: Projeto; compact?: boolean }) {
  return (
    <div className="relative pb-6 pr-6 sm:pb-8 sm:pr-10">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="ml-3 truncate rounded-md bg-background px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            {p.url.startsWith("http") ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "demonstração · yfx"}
          </span>
        </div>
        <img
          src={p.desktop}
          alt={`Página inicial do website ${p.cliente}`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="block aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      {p.mobile && (<div
        className={`absolute bottom-0 right-0 overflow-hidden rounded-[1.1rem] border-[5px] border-foreground bg-foreground shadow-glow transition-transform duration-500 group-hover:-translate-y-2 ${
          compact ? "w-[22%]" : "w-[24%] sm:w-[20%]"
        }`}
      >
        <img
          src={p.mobile}
          alt={`Versão para telemóvel do website ${p.cliente}`}
          width={390}
          height={844}
          loading="lazy"
          decoding="async"
          className="block aspect-[390/700] w-full rounded-[0.7rem] object-cover object-top"
        />
      </div>)}
    </div>
  );
}

function Etiqueta({ p }: { p: Projeto }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ background: p.acento }} />
      {p.tipo}
    </span>
  );
}

/** Secção resumida para a página inicial. */
export function PortfolioPreview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Portfólio</p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                Trabalho real, <span className="text-gradient-brand">para clientes reais</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os projetos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
          {PROJETOS.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 90}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                <Mockup p={p} compact />
                <div className="mt-5">
                  <Etiqueta p={p} />
                  <h3 className="mt-2 flex items-center gap-1.5 text-lg font-bold">
                    {p.cliente}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.setor}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Lista completa para a página /portfolio. */
export function PortfolioList() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-24 px-5 sm:space-y-32">
        {PROJETOS.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="group grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${p.cliente}`}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <Mockup p={p} />
              </a>
              <div className="min-w-0">
                <Etiqueta p={p} />
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{p.cliente}</h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{p.setor}</p>
                <p className="mt-5 leading-8 text-muted-foreground">{p.resumo}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.entregas.map((e) => (
                    <li key={e} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold">
                      {e}
                    </li>
                  ))}
                </ul>
                {p.nota && (
                  <p className="mt-6 rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-6 text-muted-foreground">
                    {p.nota}
                  </p>
                )}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  {p.urlLabel} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
