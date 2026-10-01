import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { getProject } from "@/lib/projects";

/**
 * Serviços como índice tipográfico. Cada linha abre o detalhe (acordeão acessível).
 * A largura do título cresce quando a linha está aberta — a mesma linguagem do herói.
 */
export function ServicesList({ initial = 0 }: { initial?: number }) {
  const [open, setOpen] = useState<number>(initial);
  const base = useId();

  return (
    <div className="border-t border-line">
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        const ex = s.example ? getProject(s.example) : undefined;
        const btn = `${base}-b-${i}`;
        const panel = `${base}-p-${i}`;
        return (
          <div key={s.id} id={s.id} className="border-b border-line">
            <h3>
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="service-row group flex w-full items-baseline justify-between gap-6 py-7 text-left sm:py-9"
                data-open={isOpen}
              >
                <span className="service-title text-[clamp(2rem,5.4vw,5rem)] leading-[0.95]">
                  {s.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-2 h-5 w-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45 text-volt" : "text-fog group-hover:text-bone"}`}
                >
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={panel}
              role="region"
              aria-labelledby={btn}
              className="grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-10 md:grid-cols-12">
                  <p className="text-lg leading-8 text-fog md:col-span-5">{s.text}</p>
                  <ul className="space-y-2 md:col-span-4 md:col-start-7">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-volt [clip-path:polygon(0_0,100%_0,100%_60%,60%_100%,0_100%)]"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {ex && (
                    <p className="text-sm text-fog md:col-span-3">
                      Exemplo real:{" "}
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: ex.slug }}
                        className="text-bone underline decoration-volt underline-offset-4"
                      >
                        {ex.name}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
