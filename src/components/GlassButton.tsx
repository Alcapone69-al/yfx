import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { cn } from "@/lib/utils";

/**
 * Botões da YFX com o efeito "liquid glass".
 * - primary: vidro com um leve tom ciano e brilho (ação principal)
 * - secondary: vidro transparente
 * Funciona como <a> (externo ou âncora), <Link> interno ou <button>.
 */

type Tone = "primary" | "secondary";
type Size = "md" | "lg";

const TONES: Record<Tone, string> = {
  primary:
    "bg-[linear-gradient(135deg,rgba(59,130,246,0.32),rgba(34,211,238,0.22))] text-bone shadow-[0_8px_32px_-8px_rgba(34,211,238,0.45)] hover:shadow-[0_10px_40px_-6px_rgba(34,211,238,0.6)]",
  secondary: "bg-white/[0.03] text-bone",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type Common = { tone?: Tone; size?: Size; className?: string; children: ReactNode };

function classes(tone: Tone, size: Size, className?: string) {
  return cn("rounded-full font-bold tracking-[-0.01em]", TONES[tone], SIZES[size], className);
}

/** Texto por cima das camadas de vidro. */
const Label = ({ children }: { children: ReactNode }) => (
  <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
);

export function GlassAnchor({
  href,
  external,
  tone = "primary",
  size = "lg",
  className,
  children,
}: Common & { href: string; external?: boolean }) {
  return (
    <LiquidButton asChild className={classes(tone, size, className)}>
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <Label>{children}</Label>
      </a>
    </LiquidButton>
  );
}

export function GlassLink({
  to,
  tone = "primary",
  size = "lg",
  className,
  children,
}: Common & { to: "/" | "/portfolio" | "/servicos" | "/sobre" | "/contacto" }) {
  return (
    <LiquidButton asChild className={classes(tone, size, className)}>
      <Link to={to}>
        <Label>{children}</Label>
      </Link>
    </LiquidButton>
  );
}

export function GlassButton({
  onClick,
  tone = "primary",
  size = "lg",
  className,
  children,
}: Common & { onClick: () => void }) {
  return (
    <LiquidButton type="button" onClick={onClick} className={classes(tone, size, className)}>
      <Label>{children}</Label>
    </LiquidButton>
  );
}
