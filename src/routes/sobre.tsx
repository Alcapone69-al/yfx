import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/Hero";
import { Approach } from "@/components/sections/Approach";
import { Process, FinalCta, SiteFooter } from "@/components/sections/Process";
import { TrustBadges, FoundingClients } from "@/components/sections/Trust";

const DESC =
  "A YFX é uma empresa de tecnologia sediada em Maputo que ajuda PMEs moçambicanas a digitalizar processos com abordagem consultiva e suporte contínuo.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a YFX — parceiro digital em Maputo" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Sobre a YFX — parceiro digital em Maputo" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl">
              Um parceiro digital, <span className="text-gradient-brand">não apenas um fornecedor</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Somos uma equipa de tecnologia sediada em Maputo. Trabalhamos com empresas
              moçambicanas que querem crescer sem depender de processos manuais — do primeiro
              website ao agente de IA que responde aos clientes no WhatsApp.
            </p>
          </div>
        </section>
        <Approach />
        <TrustBadges />
        <Process />
        <FoundingClients />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}