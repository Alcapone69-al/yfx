import { Compass, Layers, Zap, MapPin, Clock, CheckCircle2, LayoutDashboard, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FacetIcon } from "@/components/FacetIcon";

const DIFERENCIAIS = [
  {
    icon: Compass,
    title: "Abordagem consultiva",
    text: "Primeiro percebemos o negócio, depois propomos. Se não precisa de um sistema caro, dizemos-lhe.",
  },
  {
    icon: Layers,
    title: "Portefólio integrado",
    text: "Website, sistema, design e automação com o mesmo parceiro — tudo comunica entre si.",
  },
  {
    icon: Zap,
    title: "Foco em automação e IA",
    text: "Tiramos o trabalho repetitivo das mãos da sua equipa para libertar tempo para vender.",
  },
  {
    icon: MapPin,
    title: "Proximidade local",
    text: "Estamos em Maputo. Falamos a sua língua, conhecemos o mercado e respondemos rápido.",
  },
];

export function Approach() {
  return (
    <section id="como-trabalhamos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
            Não vendemos apenas um website. Analisamos o seu negócio e propomos a{" "}
            <span className="text-gradient-brand">solução certa.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-8">
                <FacetIcon icon={Icon} variant={(i % 4) as 0 | 1 | 2 | 3} className="-ml-2" />
                <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bubble({ from, children }: { from: "cliente" | "yfx"; children: React.ReactNode }) {
  const mine = from === "yfx";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          mine
            ? "rounded-br-sm bg-gradient-brand text-primary-foreground"
            : "rounded-bl-sm bg-secondary text-secondary-foreground"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export function UseCase() {
  return (
    <section id="exemplo" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Portfólio de conceito
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
            Agente de cotações no WhatsApp
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Exemplos construídos por nós — não são projetos de clientes reais. Servem para mostrar,
            na prática, o tipo de solução que construímos e o que muda no dia a dia de uma empresa.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Reveal as="article" className="rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
              Antes
            </span>
            <p className="mt-5 flex items-center gap-2 font-display text-3xl font-extrabold">
              <Clock className="h-6 w-6 text-muted-foreground" /> 20–30 min
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>O cliente liga ou escreve a pedir preços.</li>
              <li>Alguém procura a tabela de preços e confirma stock.</li>
              <li>Escreve a cotação à mão no Word e converte em PDF.</li>
              <li>Se for fora de horas, o cliente espera até amanhã.</li>
            </ul>
          </Reveal>

          <Reveal as="article" delay={90} className="rounded-2xl border border-transparent bg-gradient-deep p-8 shadow-glow">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              Depois com a YFX
            </span>
            <p className="mt-5 flex items-center gap-2 font-display text-3xl font-extrabold text-primary-foreground">
              <Zap className="h-6 w-6 text-cyan" /> Segundos
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-primary-foreground/80">
              {[
                "O agente responde no WhatsApp a qualquer hora.",
                "Faz as perguntas certas e calcula o valor.",
                "Envia a cotação em PDF automaticamente.",
                "A sua equipa só entra para fechar o negócio.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-1.5 h-4 w-4 shrink-0 text-cyan" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground">
                Y
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">Assistente YFX</span>
                <span className="block text-xs text-muted-foreground">online</span>
              </span>
            </div>
            <div className="space-y-2.5 pt-4">
              <Bubble from="cliente">Bom dia, quanto custa 50 cadeiras para um evento?</Bubble>
              <Bubble from="yfx">Bom dia! É para levantamento ou entrega em Maputo?</Bubble>
              <Bubble from="cliente">Entrega, na Sommerschield.</Bubble>
              <Bubble from="yfx">
                Perfeito. Preparei a sua cotação: 50 cadeiras + entrega. Envio agora o PDF ✅
              </Bubble>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <DashboardMockup />
          </Reveal>
          <Reveal delay={110} className="h-full">
            <RestaurantMockup />
          </Reveal>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Todos os mockups desta secção são demonstrações internas da YFX, criadas para ilustrar o
          tipo de solução que construímos. Não representam clientes reais.
        </p>
      </div>
    </section>
  );
}

function MockupFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        <span className="truncate text-xs font-semibold text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function DashboardMockup() {
  const bars = [42, 68, 55, 84, 61, 92, 74];
  return (
    <MockupFrame title="Mockup — sistema de gestão">
      <div className="pt-5">
        <p className="inline-flex items-center gap-2 text-sm font-bold">
          <LayoutDashboard className="h-4 w-4 text-primary" /> Painel de gestão
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Encomendas", v: "128" },
            { k: "Em atraso", v: "4" },
            { k: "Faturado", v: "1,2M MT" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">{s.k}</p>
              <p className="mt-1 font-display text-lg font-extrabold">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex h-28 items-end gap-2 rounded-xl border border-border bg-surface p-3">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t-md bg-gradient-brand opacity-80"
            />
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Stock, clientes e faturação num só painel — sem folhas de Excel dispersas.
        </p>
      </div>
    </MockupFrame>
  );
}

function RestaurantMockup() {
  return (
    <MockupFrame title="Mockup — website de restaurante com reservas">
      <div className="pt-5">
        <div className="rounded-xl bg-gradient-deep p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70">Maputo</p>
          <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-primary-foreground">
            Reserve a sua mesa em 30 segundos
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-bold text-foreground">
            <CalendarCheck className="h-4 w-4 text-primary" /> Reservar agora
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["19:00", "19:30", "20:00"].map((t, i) => (
            <span
              key={t}
              className={`rounded-lg border px-2 py-2 text-center text-xs font-semibold ${
                i === 1
                  ? "border-transparent bg-gradient-brand text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Menu, galeria e reservas confirmadas automaticamente por WhatsApp.
        </p>
      </div>
    </MockupFrame>
  );
}