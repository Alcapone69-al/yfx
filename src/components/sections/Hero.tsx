import { MessageCircle, ArrowRight, Menu, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { YLogo, YMark } from "@/components/YMark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <Link to="/" className="min-w-0">
          <YLogo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Início</Link>
          <Link to="/servicos" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Serviços</Link>
          <Link to="/sobre" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Sobre</Link>
          <Link to="/contacto" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Contacto</Link>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Pedir diagnóstico gratuito
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="min-h-11 min-w-11 md:hidden"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[min(88vw,22rem)] flex-col p-6 pt-16">
            <SheetHeader className="text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Navegação móvel" className="mt-6 flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "bg-secondary text-foreground" }} className="rounded-md px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Início</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/servicos" activeProps={{ className: "bg-secondary text-foreground" }} className="rounded-md px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Serviços</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/sobre" activeProps={{ className: "bg-secondary text-foreground" }} className="rounded-md px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Sobre</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/contacto" activeProps={{ className: "bg-secondary text-foreground" }} className="rounded-md px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Contacto</Link>
              </SheetClose>
            </nav>
            <SheetClose asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-card"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir diagnóstico gratuito
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="blob-drift pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-gradient-brand opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="blob-drift-slow pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-gradient-deep opacity-[0.14] blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-2">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Tecnologia feita em Maputo, para empresas moçambicanas
          </span>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Menos trabalho manual.{" "}
            <span className="text-gradient-brand">Mais crescimento.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Soluções digitais inteligentes para empresas moçambicanas — websites, sistemas de
            gestão, automação e inteligência artificial.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir diagnóstico gratuito
            </a>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Ver o que podemos construir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Sem compromisso. Resposta normalmente em 24 horas.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-gradient-deep p-9 shadow-glow sm:p-12">
            <YMark className="h-24 w-24 sm:h-32 sm:w-32" />
            <p className="mt-9 font-display text-xl font-bold leading-snug tracking-[-0.02em] text-primary-foreground sm:text-2xl">
              Um parceiro digital, não apenas um fornecedor.
            </p>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
              Analisamos o seu negócio, percebemos onde se perde tempo e propomos a solução certa —
              do website ao agente de IA no WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}