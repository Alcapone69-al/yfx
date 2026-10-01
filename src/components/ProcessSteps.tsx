import { useEffect, useRef, useState } from "react";
import { PROCESS } from "@/lib/site";

/**
 * O método em quatro passos (uma sequência real, por isso numerada).
 * Em ecrãs grandes, a secção fixa-se enquanto se percorre os passos,
 * com um indicador de progresso. Em telemóvel ou com movimento reduzido: lista simples.
 */
export function ProcessSteps() {
  const section = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = section.current;
    if (!el) return;
    let revert: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)",
        () => {
          setPinned(true);
          let last = -1;
          let st: ReturnType<typeof ScrollTrigger.create> | undefined;
          // espera o React aplicar o layout fixo antes de medir
          const raf = requestAnimationFrame(() => {
            st = ScrollTrigger.create({
              trigger: el,
              start: "top top",
              end: () => `+=${window.innerHeight * 2}`,
              pin: true,
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const i = Math.min(
                  PROCESS.length - 1,
                  Math.floor(self.progress * PROCESS.length * 0.999),
                );
                if (i !== last) {
                  last = i;
                  setActive(i);
                }
                if (bar.current) bar.current.style.transform = `scaleY(${self.progress})`;
              },
            });
            ScrollTrigger.refresh();
          });
          return () => {
            cancelAnimationFrame(raf);
            st?.kill();
            setPinned(false);
            setActive(0);
          };
        },
      );
      revert = () => mm.revert();
    })();
    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={section}
        className={`mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12 ${pinned ? "min-h-[100svh] content-center py-24" : "py-28 sm:py-36"}`}
      >
        <div className="lg:col-span-5">
          <h2 className="type-mid text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.95]">
            Como trabalhamos
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-fog">
            Primeiro percebemos o negócio, depois propomos. Se não precisa de um sistema caro,
            dizemos-lhe.
          </p>
          {pinned && (
            <div aria-hidden="true" className="mt-14 flex items-end gap-8">
              <span className="type-wide text-[9rem] leading-[0.8] text-volt tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="relative mb-3 block h-28 w-px bg-line">
                <span
                  ref={bar}
                  className="absolute inset-0 origin-top bg-volt"
                  style={{ transform: "scaleY(0)" }}
                />
              </span>
            </div>
          )}
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {PROCESS.map((s, i) => {
            const on = !pinned || i === active;
            return (
              <li
                key={s.title}
                aria-current={pinned && i === active ? "step" : undefined}
                className={`border-t border-line py-8 transition-opacity duration-500 last:border-b ${on ? "opacity-100" : "opacity-35"}`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="w-8 shrink-0 text-sm tabular-nums text-fog">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="type-mid text-[clamp(1.6rem,2.6vw,2.4rem)]">{s.title}</h3>
                    <p className="mt-3 max-w-md leading-7 text-fog">{s.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
