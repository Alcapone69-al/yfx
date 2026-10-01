import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/sections/Hero";
import { Facim, SiteFooter } from "@/components/sections/Process";
import { TrustBadges } from "@/components/sections/Trust";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL, WHATSAPP_LABEL, INSTAGRAM_LABEL } from "@/lib/site";

const DESC =
  "Fale com a YFX em Maputo pelo WhatsApp. Diagnóstico gratuito e sem compromisso para o seu negócio.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — YFX Maputo" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contacto — YFX Maputo" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

const INFO = [
  { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_LABEL },
  { icon: Instagram, label: "Instagram", value: INSTAGRAM_LABEL },
  { icon: MapPin, label: "Localização", value: "Maputo, Moçambique" },
  { icon: Clock, label: "Resposta", value: "Dias úteis, normalmente no mesmo dia" },
];

function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
            <div className="min-w-0">
              <h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl">
                Vamos <span className="text-gradient-brand">conversar</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Conte-nos o que o está a atrasar no dia a dia. O diagnóstico é gratuito e sem
                compromisso — e se não precisar de nós, dizemos-lhe.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir diagnóstico gratuito
              </a>
            </div>
            <ul className="grid gap-4">
              {INFO.map(({ icon: Icon, label, value }, i) => (
                <Reveal as="li" key={label} delay={i * 80}>
                  <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{label}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{value}</span>
                  </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <TrustBadges />
        <Facim />
      </main>
      <SiteFooter />
    </div>
  );
}