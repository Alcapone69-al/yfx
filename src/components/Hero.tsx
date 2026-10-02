import { useLayoutEffect, useEffect, useRef } from "react";
import { HeroFacets } from "@/components/HeroFacets";
import { INTRO_DONE_EVENT } from "@/components/SitePreloader";
import { WHATSAPP_PROJECT_URL } from "@/lib/site";
import { GlassAnchor } from "@/components/GlassButton";

// useLayoutEffect só no browser (evita aviso no pré-render)
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Herói (direção B): texto à esquerda, o Y facetado e interativo num painel à direita.
 * No telemóvel, o painel vai para cima. Entrada: linhas do título sobem de uma máscara.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      if (reduced) {
        el.classList.add("hero-ready");
        return;
      }
      const gsapReady = import("gsap");
      // com ecrã de entrada ativo, a entrada do herói começa quando ele se levanta
      if (document.documentElement.classList.contains("pl")) {
        await new Promise<void>((resolve) =>
          window.addEventListener(INTRO_DONE_EVENT, () => resolve(), { once: true }),
        );
      }
      const { gsap } = await gsapReady;
      if (cancelled) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.fromTo(
          ".hero-line > span",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.3, stagger: 0.1 },
          0.1,
        )
          .fromTo(".hero-line", { opacity: 0 }, { opacity: 1, duration: 0.01 }, 0.1)
          .fromTo(
            "[data-hero-fade]",
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.08 },
            0.45,
          )
          .fromTo(
            "[data-hero-panel]",
            { opacity: 0, scale: 0.97 },
            { opacity: 1, scale: 1, duration: 1.4 },
            0.2,
          );
      }, el);
      // só agora mostramos: o GSAP já fixou o estado inicial
      el.classList.add("hero-ready");
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="hero-title"
      className="hero relative isolate overflow-hidden pt-[calc(var(--header-h)+1rem)] lg:min-h-[100svh] lg:pt-[var(--header-h)]"
    >
      {/* brilho azul de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[20%] -z-10 h-[80%] w-[70%] bg-[radial-gradient(closest-side,rgba(29,78,216,0.35),transparent_65%)]"
      />

      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 pb-16 sm:px-8 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14 lg:px-12 lg:pb-12">
        {/* painel com o Y interativo */}
        <div
          data-hero-panel
          className="relative order-first h-[240px] overflow-hidden rounded-[28px] border border-line bg-[radial-gradient(circle_at_50%_45%,#10244d_0%,#060d1f_72%)] sm:h-[320px] lg:order-last lg:h-[min(620px,calc(100svh-var(--header-h)-6rem))]"
        >
          <HeroFacets className="absolute inset-0 h-full w-full" />
        </div>

        <div>
          <p data-hero-fade className="chip px-4 py-2 text-[0.8rem] font-semibold sm:text-[0.9rem]">
            Estúdio digital em Maputo, para empresas moçambicanas
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.5rem,5.1vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
          >
            <span className="hero-line line-mask">
              <span className="inline-block">Menos trabalho manual.</span>
            </span>
            <span className="hero-line line-mask">
              <span className="text-brand-gradient inline-block">Mais crescimento.</span>
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-6 max-w-[34rem] text-lg leading-8 text-fog sm:text-xl sm:leading-9"
          >
            Websites, sistemas de gestão, automação e agentes de IA no WhatsApp, desenhados à medida
            de cada negócio.
          </p>

          <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlassAnchor href={WHATSAPP_PROJECT_URL} external>
              Começar um projeto
            </GlassAnchor>
            <GlassAnchor href="#trabalho" tone="secondary">
              Ver o trabalho
            </GlassAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
