import { useLayoutEffect, useEffect, useRef } from "react";
import { HeroFacets } from "@/components/HeroFacets";
import { WHATSAPP_PROJECT_URL } from "@/lib/site";

// useLayoutEffect só no browser (evita aviso no pré-render)
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Herói. O slogan real da YFX, "Menos trabalho manual. Mais crescimento.",
 * é dito pela própria tipografia: a primeira frase estreita e fina,
 * a segunda larga e pesada. Na entrada, uma encolhe e a outra cresce.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const l1 = useRef<HTMLSpanElement>(null);
  const l2 = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const a = l1.current,
      b = l2.current,
      el = root.current;
    if (!a || !b || !el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // largura final da 2.ª linha: a maior que cabe no contentor
    const fit = () => {
      const wide = window.innerWidth >= 640;
      b.style.whiteSpace = wide ? "nowrap" : "normal";
      let w = wide ? 138 : 112;
      b.style.setProperty("--w", String(w));
      b.style.setProperty("--g", "860");
      const parent = b.parentElement!;
      const over = () =>
        wide ? b.scrollWidth > parent.clientWidth + 1 : b.scrollWidth > b.clientWidth + 1;
      while (over() && w > 70) {
        w -= 4;
        b.style.setProperty("--w", String(w));
      }
      return w;
    };

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    const run = async () => {
      const [{ gsap }] = await Promise.all([
        reduced ? Promise.resolve({ gsap: null as never }) : import("gsap"),
        document.fonts?.ready,
      ]);
      if (cancelled) return;
      const w2 = fit();
      if (reduced || !gsap) {
        a.style.setProperty("--w", "62");
        a.style.setProperty("--g", "280");
        el.classList.add("hero-ready");
        return;
      }
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.fromTo(
          a,
          { "--w": 100, "--g": 560, yPercent: 40, opacity: 0 },
          { "--w": 62, "--g": 280, yPercent: 0, opacity: 1, duration: 1.6 },
          0.1,
        )
          .fromTo(
            b,
            { "--w": 62, "--g": 300, yPercent: 40, opacity: 0 },
            { "--w": w2, "--g": 860, yPercent: 0, opacity: 1, duration: 1.8 },
            0.32,
          )
          .fromTo(
            "[data-hero-fade]",
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.1, stagger: 0.08 },
            0.7,
          );
      }, el);
      // só agora mostramos: o GSAP já fixou o estado inicial
      el.classList.add("hero-ready");
    };
    run();

    const onResize = () => {
      if (!el.classList.contains("hero-ready")) return;
      fit();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      ctx?.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="hero-title"
      className="hero relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroFacets className="absolute inset-0 -z-10 h-full w-full" />
      {/* vinheta para leitura do texto sobre a malha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--ink)_8%,transparent_55%)]"
      />

      <div className="mx-auto mt-auto w-full max-w-[1440px] px-5 pb-10 pt-[calc(var(--header-h)+2rem)] sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <p data-hero-fade className="mb-6 max-w-sm text-[0.95rem] text-fog">
          Estúdio digital em Maputo, para empresas moçambicanas.
        </p>

        <h1
          id="hero-title"
          className="hero-title text-[clamp(2.6rem,7.6vw,8.75rem)] leading-[0.92] tracking-[-0.015em]"
        >
          <span ref={l1} className="hero-l1 block text-bone/90">
            Menos trabalho manual.
          </span>
          <span ref={l2} className="hero-l2 block text-bone">
            Mais crescimento.
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end">
          <p data-hero-fade className="max-w-[34rem] text-lg leading-8 text-fog">
            Websites, sistemas de gestão, automação e agentes de IA no WhatsApp, desenhados à medida
            de cada negócio.
          </p>
          <div data-hero-fade className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={WHATSAPP_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="facet-sm inline-flex min-h-12 items-center bg-volt px-6 font-semibold text-volt-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Começar um projeto
            </a>
            <a
              href="#trabalho"
              className="inline-flex min-h-12 items-center border border-line px-6 font-semibold transition-colors duration-300 hover:border-bone"
            >
              Ver o trabalho
            </a>
          </div>
        </div>
      </div>

      <a
        href="#estudio"
        data-hero-fade
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 text-sm text-fog transition-colors [writing-mode:vertical-rl] hover:text-bone xl:flex"
      >
        <span>Continuar</span>
        <span
          aria-hidden="true"
          className="scroll-cue relative block h-10 w-px overflow-hidden bg-line"
        />
      </a>
    </section>
  );
}
