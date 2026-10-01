import { MessageCircle, CalendarDays, MapPin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { YLogo } from "@/components/YMark";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL, WHATSAPP_LABEL, INSTAGRAM_URL, INSTAGRAM_LABEL } from "@/lib/site";

const STEPS = [
  { n: "01", title: "Diagnóstico gratuito", text: "Conversamos sobre o seu negócio e identificamos onde se perde tempo e dinheiro." },
  { n: "02", title: "Proposta clara", text: "Apresentamos a solução recomendada, prazos e valores — sem jargão técnico." },
  { n: "03", title: "Implementação", text: "Construímos, testamos consigo e formamos a sua equipa para usar tudo com confiança." },
  { n: "04", title: "Suporte contínuo", text: "Plano de manutenção mensal: atualizações, melhorias e apoio sempre que precisar." },
];

export function Process() {
  return (
    <section id="processo" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
            O nosso <span className="text-gradient-brand">processo</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ n, title, text }, i) => (
            <Reveal as="article" key={n} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-8">
                <span className="font-display text-4xl font-extrabold text-gradient-brand">{n}</span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facim() {
  return (
    <section className="bg-surface pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-card p-9 shadow-card sm:grid-cols-[minmax(0,1fr)_auto] sm:p-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              Evento
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-3xl">
              Vamos à FACIM! Venha conhecer as nossas soluções ao vivo
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" /> Data a definir
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Recinto a definir, Maputo
              </span>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            Quero saber mais
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-deep py-28 sm:py-32">
      <div
        aria-hidden
        className="blob-drift pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-cyan opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="blob-drift-slow pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-primary opacity-30 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.035em] text-primary-foreground sm:text-5xl">
          Pronto para digitalizar o seu negócio?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-8 text-primary-foreground/75">
          O diagnóstico é gratuito e sem compromisso. Fale connosco e descubra por onde começar.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-9 py-5 text-base font-bold text-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-lg"
        >
          <MessageCircle className="h-6 w-6 text-primary" />
          Marcar conversa no WhatsApp
        </a>
        <p className="mt-5 text-sm text-primary-foreground/60">{WHATSAPP_LABEL}</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0 lg:col-span-1">
          <YLogo />
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            Soluções digitais inteligentes para PMEs moçambicanas.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Maputo, Moçambique
          </p>
        </div>
        <nav className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Navegação</h3>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/">Início</Link></li>
            <li><Link className="hover:text-foreground" to="/servicos">Serviços</Link></li>
            <li><Link className="hover:text-foreground" to="/portfolio">Portfólio</Link></li>
            <li><Link className="hover:text-foreground" to="/sobre">Sobre</Link></li>
            <li><Link className="hover:text-foreground" to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Contactos</h3>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> {WHATSAPP_LABEL}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 text-primary" /> {INSTAGRAM_LABEL}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Ainda com dúvidas?</h3>
          <p className="mt-5 leading-7 text-muted-foreground">
            Fale connosco no WhatsApp — respondemos normalmente em 24 horas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar connosco
          </a>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-border px-5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} YFX. Todos os direitos reservados.
      </div>
    </footer>
  );
}