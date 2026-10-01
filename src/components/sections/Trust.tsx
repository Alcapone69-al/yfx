import { Gift, Clock3, MapPin, Unlock, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

const SELOS = [
  { icon: Gift, title: "Diagnóstico inicial gratuito", text: "Analisamos o seu negócio antes de propor seja o que for." },
  { icon: Clock3, title: "Resposta em 24h", text: "Escreve no WhatsApp em dia útil, respondemos no mesmo dia ou no seguinte." },
  { icon: MapPin, title: "Feito em Maputo, em português", text: "Suporte na sua língua, no seu fuso horário, com quem conhece o mercado." },
  { icon: Unlock, title: "Sem fidelização", text: "O plano de manutenção mensal pode ser cancelado quando quiser." },
];

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          O nosso compromisso
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SELOS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const BENEFICIOS = [
  "Condições especiais de lançamento no primeiro projeto.",
  "Acompanhamento próximo — é um dos poucos projetos em curso.",
  "Prioridade no suporte e nas melhorias que pedir.",
];

export function FoundingClients() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-9 shadow-card sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Clientes fundadores
              </span>
              <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                Porque estamos a <span className="text-gradient-brand">começar agora</span>
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                A YFX é uma empresa nova. Preferimos dizê-lo com franqueza a inventar testemunhos ou
                números de clientes que não temos. O que oferecemos hoje é atenção total: um número
                reduzido de projetos, condições de lançamento e o compromisso de fazer bem feito
                desde o primeiro.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Quero ser cliente fundador
              </a>
            </div>
            <ul className="space-y-4 self-center">
              {BENEFICIOS.map((b) => (
                <li key={b} className="flex gap-3 rounded-2xl border border-border bg-surface p-5 text-sm leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}