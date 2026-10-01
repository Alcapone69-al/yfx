import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { YLogo } from "@/components/YMark";
import {
  NAV,
  WHATSAPP_PROJECT_URL,
  WHATSAPP_LABEL,
  INSTAGRAM_URL,
  INSTAGRAM_LABEL,
} from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // fecha o menu ao mudar de página
  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menu móvel: bloqueia o scroll, Esc fecha, foco fica dentro do painel
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
      if (e.key === "Tab" && panel.current) {
        const f = [
          ...(menuBtn.current ? [menuBtn.current] : []),
          ...panel.current.querySelectorAll<HTMLElement>("a,button"),
        ];
        const a = f[0],
          b = f[f.length - 1];
        if (!a || !b) return;
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only bg-brand px-4 py-2 text-sm font-semibold text-brand-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[80]"
      >
        Saltar para o conteúdo
      </a>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link to="/" aria-label="YFX, página inicial" className="relative z-[70] shrink-0">
            <YLogo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="link-underline py-1 text-[0.95rem] text-fog transition-colors hover:text-bone"
                activeProps={{ className: "!text-bone" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="facet-sm hidden bg-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Começar um projeto
          </a>

          <button
            ref={menuBtn}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            className="relative z-[70] -mr-2 flex h-11 items-center gap-3 px-2 text-sm font-medium md:hidden"
          >
            <span>{open ? "Fechar" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-bone transition-transform duration-500 ${open ? "top-1.5 rotate-[30deg]" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px bg-bone transition-all duration-500 ${open ? "top-1.5 w-6 -rotate-[30deg]" : "top-3 w-4"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Menu móvel em ecrã inteiro */}
      <div
        id="menu-movel"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        style={{
          clipPath: open
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-8 pt-[calc(var(--header-h)+2rem)] transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] md:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        <nav aria-label="Menu móvel" className="flex flex-col">
          <Link
            to="/"
            className="type-mid border-b border-line py-4 text-[2.4rem] leading-none"
            activeOptions={{ exact: true }}
            activeProps={{ className: "!text-brand" }}
          >
            Início
          </Link>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="type-mid border-b border-line py-4 text-[2.4rem] leading-none"
              activeProps={{ className: "!text-brand" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-5">
          <a
            href={WHATSAPP_PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="facet-sm flex min-h-12 items-center justify-center bg-brand px-5 font-semibold text-brand-ink"
          >
            Começar um projeto no WhatsApp
          </a>
          <p className="flex justify-between text-sm text-fog">
            <span>{WHATSAPP_LABEL}</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {INSTAGRAM_LABEL}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
