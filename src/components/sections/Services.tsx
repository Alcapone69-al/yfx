import {
  Stethoscope, UtensilsCrossed, Building2, HardHat, Store, GraduationCap, Hotel, Briefcase,
  Globe, LayoutGrid, Bot, Palette,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FacetIcon } from "@/components/FacetIcon";

const SECTORS = [
  { icon: Stethoscope, label: "Clínicas" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Building2, label: "Imobiliárias" },
  { icon: HardHat, label: "Construção" },
  { icon: Store, label: "Comércio" },
  { icon: GraduationCap, label: "Escolas" },
  { icon: Hotel, label: "Hotéis" },
  { icon: Briefcase, label: "Escritórios" },
];

export function Sectors() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Setores que atendemos
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SECTORS.map(({ icon: Icon, label }, i) => (
            <Reveal as="li" key={label} delay={i * 60}>
              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="truncate text-sm font-semibold">{label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Globe,
    title: "Websites e lojas online",
    text: "Sites institucionais rápidos e lojas online prontas a vender, pensados para quem visita pelo telemóvel.",
  },
  {
    icon: LayoutGrid,
    title: "Sistemas de gestão e reservas",
    text: "Plataformas à medida para gerir clientes, marcações, stock e reservas — tudo num só lugar, sem folhas de Excel dispersas.",
  },
  {
    icon: Bot,
    title: "Agentes de IA e automação",
    text: "Assistentes no WhatsApp que respondem, qualificam e enviam cotações automaticamente, 24 horas por dia.",
  },
  {
    icon: Palette,
    title: "Design e identidade visual",
    text: "Logótipo, cores e materiais que dão à sua empresa uma imagem profissional e consistente.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
            Serviços em <span className="text-gradient-brand">destaque</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Escolhemos consigo o que faz sentido hoje — e construímos passo a passo.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1 sm:p-10">
                <FacetIcon icon={Icon} variant={(i % 4) as 0 | 1 | 2 | 3} className="-ml-2" />
                <h3 className="mt-6 text-xl font-bold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}