import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/Hero";
import { Services, Sectors } from "@/components/sections/Services";
import { UseCase } from "@/components/sections/Approach";
import { FinalCta, SiteFooter } from "@/components/sections/Process";
import { TrustBadges, FoundingClients } from "@/components/sections/Trust";

const DESC =
  "Websites e lojas online, sistemas de gestão e reservas, agentes de IA no WhatsApp e design de marca para empresas em Maputo.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — YFX Maputo" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Serviços — YFX Maputo" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl">
              Soluções que tiram o <span className="text-gradient-brand">trabalho manual</span> do
              seu dia a dia
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Escolhemos consigo o que faz sentido hoje e construímos passo a passo — sem jargão
              técnico e sem soluções maiores do que o seu negócio precisa.
            </p>
          </div>
        </section>
        <Services />
        <TrustBadges />
        <Sectors />
        <UseCase />
        <FoundingClients />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}