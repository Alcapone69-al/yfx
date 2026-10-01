import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, Hero } from "@/components/sections/Hero";
import { Sectors, Services } from "@/components/sections/Services";
import { FinalCta, SiteFooter } from "@/components/sections/Process";
import { TrustBadges, FoundingClients } from "@/components/sections/Trust";
import { Reveal } from "@/components/Reveal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "@/components/sections/Approach";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YFX — Soluções digitais inteligentes em Maputo" },
      {
        name: "description",
        content:
          "Websites, sistemas de gestão, automação e agentes de IA no WhatsApp para PMEs moçambicanas. Diagnóstico gratuito. Maputo, Moçambique.",
      },
      { property: "og:title", content: "YFX — Soluções digitais inteligentes em Maputo" },
      {
        property: "og:description",
        content:
          "Websites, sistemas de gestão, automação e agentes de IA no WhatsApp para PMEs moçambicanas. Diagnóstico gratuito. Maputo, Moçambique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ContainerScroll
          titleComponent={
            <>
              Veja o seu negócio,{" "}
              <span className="text-gradient-brand">organizado num só painel.</span>
            </>
          }
        >
          <DashboardMockup />
        </ContainerScroll>
        <TrustBadges />
        <Sectors />
        <Services />
        <FoundingClients />
        <section className="bg-background py-20 text-center sm:py-24">
          <Reveal className="mx-auto max-w-2xl px-5">
            <p className="leading-8 text-muted-foreground">
              Quer perceber como cada solução funciona no seu dia a dia?
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                Ver exemplos e serviços
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Conhecer o nosso método
              </Link>
            </div>
          </Reveal>
        </section>
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
