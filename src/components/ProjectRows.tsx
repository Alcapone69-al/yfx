import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, type Project } from "@/lib/projects";
import { ShotImg, PhoneFrame } from "@/components/Media";
import { Reveal } from "@/components/motion";

/**
 * Apresentação de projetos: linhas editoriais grandes, alternadas.
 * A imagem principal "morfa" para o topo do estudo de caso (view-transition-name).
 * Paralaxe contida dentro da moldura, só com movimento permitido.
 */
export function ProjectRows({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let revert: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        el.querySelectorAll<HTMLElement>("[data-parallax]").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
        el.querySelectorAll<HTMLElement>("[data-phone]").forEach((ph) => {
          gsap.fromTo(
            ph,
            { yPercent: 12 },
            {
              yPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: ph.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      }, el);
      revert = () => ctx.revert();
    })();
    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <ol ref={list} className="space-y-28 sm:space-y-40">
      {PROJECTS.map((p, i) => (
        <li key={p.slug}>
          <ProjectRow p={p} flip={i % 2 === 1} H={headingLevel} />
        </li>
      ))}
    </ol>
  );
}

function ProjectRow({ p, flip, H }: { p: Project; flip: boolean; H: "h2" | "h3" }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: p.slug }}
      className="project-row group block outline-offset-8"
    >
      {/* título em toda a largura, alinhado alternadamente */}
      <H
        className={`project-title text-[clamp(2.6rem,6.4vw,7rem)] leading-[0.9] ${flip ? "lg:text-right" : ""}`}
        style={{ viewTransitionName: `title-${p.slug}` }}
      >
        {p.name}
      </H>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
        {/* composição de imagem */}
        <div className={`relative lg:col-span-8 ${flip ? "lg:order-2 lg:col-start-5" : ""}`}>
          <Reveal kind="facet" className="facet relative">
            <div
              className="relative aspect-[16/10] overflow-hidden bg-graphite"
              style={{ viewTransitionName: `cover-${p.slug}` }}
            >
              <ShotImg
                shot={p.cover}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                data-parallax
              />
            </div>
          </Reveal>
          {p.coverMobile && (
            <div
              data-phone
              className={`absolute -bottom-10 w-[24%] max-w-[11rem] sm:-bottom-14 ${flip ? "-left-2 sm:-left-6" : "-right-2 sm:-right-6"}`}
            >
              <PhoneFrame shot={p.coverMobile} />
            </div>
          )}
        </div>

        {/* texto */}
        <div className={`pt-6 lg:col-span-4 lg:pt-0 ${flip ? "lg:order-1" : ""}`}>
          <p className="text-sm text-fog">
            <span className="text-bone">{p.category}</span>
            <span className="mx-2 text-line">/</span>
            {p.year}
            <span className="mx-2 text-line">/</span>
            {p.status}
          </p>
          <p className="mt-4 max-w-sm text-lg leading-8 text-fog">{p.sector}</p>
          <span className="mt-7 inline-flex items-center gap-3 font-semibold">
            <span className="relative">
              Ver o estudo de caso
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-brand transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
