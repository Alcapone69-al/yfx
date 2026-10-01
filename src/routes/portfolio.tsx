import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/Hero";
import { PortfolioList } from "@/components/sections/Portfolio";
import { FinalCta, SiteFooter } from "@/components/sections/Process";

const DESC =
  "Websites e landing pages que a YFX construiu para empresas em Moçambique: DA-KA Consultoria, Giquira Group e mais.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — YFX Maputo" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Portfólio — YFX Maputo" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Portfólio</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl">
              Projetos <span className="text-gradient-brand">online e a trabalhar</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Cada website é desenhado à medida do negócio, sem modelos repetidos. Abra qualquer um
              deles e veja como funciona no computador e no telemóvel.
            </p>
          </div>
        </section>
        <PortfolioList />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
