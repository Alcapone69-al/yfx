import { useEffect, useState } from "react";
import OnyxGlyphPreloader, { type OnyxGlyph } from "@/components/ui/onyx-glyph-preloader";

/**
 * Ecrã de entrada da YFX.
 * - Aparece só na primeira visita de cada sessão (sessionStorage) e nunca com movimento reduzido.
 *   A decisão é tomada antes de pintar, no script de arranque (classe .pl em <html>).
 * - Quatro peças com os serviços da YFX orbitam; convergem no "Y" da marca, recortado no metal.
 * - Um toque, clique ou Enter acelera a entrada.
 * - Fica por cima do site (posição fixa) em vez de o envolver, para não mexer no scroll da página.
 */

const KEY = "yfx-intro";
export const INTRO_DONE_EVENT = "yfx:intro-done";

// Ícones originais (caixa 100×100): os quatro serviços da YFX.
const GLYPHS: OnyxGlyph[] = [
  {
    // janela de navegador
    d: "M20 22 H80 Q86 22 86 28 V72 Q86 78 80 78 H20 Q14 78 14 72 V28 Q14 22 20 22 Z M14 37 H86 M24 29.5 H25 M32 29.5 H33",
    stroke: 7,
    label: "Websites",
  },
  {
    // barras de um painel de gestão
    d: "M24 78 V54 M42 78 V30 M60 78 V44 M78 78 V22",
    stroke: 11,
    label: "Sistemas de gestão",
  },
  {
    // balão de conversa com faísca (agente de IA no WhatsApp)
    d: "M20 20 H80 Q86 20 86 26 V62 Q86 68 80 68 H45 L28 82 V68 H20 Q14 68 14 62 V26 Q14 20 20 20 Z M50 30 C51.6 39.5 54 42 63.5 44 C54 46 51.6 48.5 50 58 C48.4 48.5 46 46 36.5 44 C46 42 48.4 39.5 50 30 Z",
    label: "Automação e IA",
  },
  {
    // aparo de caneta (design)
    d: "M50 12 L75 46 L58 88 H42 L25 46 Z M43 50 A7 7 0 1 0 57 50 A7 7 0 1 0 43 50 Z",
    label: "Design",
  },
];

// O "Y" da YFX numa só silhueta (o logótipo 64×64 escalado para a caixa 100×100).
const Y_MARK: OnyxGlyph = {
  d: "M8 11 H47 L50 47 L53 11 H92 L68 53 L59 89 H41 L32 53 Z",
  label: "YFX",
};

const PALETTE = {
  stage: "#060d1f",
  metal: "#1b2f5e",
  shade: "#050b19",
  rim: "#3b82f6",
  glitter: "#a5f3fc",
  ink: "#f3f6fc",
};

function finish() {
  const root = document.documentElement;
  root.classList.remove("pl", "pl-mounted");
  root.style.overflow = "";
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* modo privado: sem problema, só volta a aparecer */
  }
}

export function SitePreloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // o script de arranque já decidiu: só mostra se <html> tiver .pl
    if (!document.documentElement.classList.contains("pl")) return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const root = document.documentElement;
    root.classList.add("pl-mounted"); // a capa estática dá lugar ao componente
    root.style.overflow = "hidden"; // sem scroll por baixo do ecrã de entrada
    return () => {
      root.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <OnyxGlyphPreloader
      className="yfx-preloader"
      glyphs={GLYPHS}
      mark={Y_MARK}
      markStyle="cut"
      word="YFX"
      caption="Menos trabalho manual. Mais crescimento."
      palette={PALETTE}
      glitter={0.9}
      depth={0.12}
      spin={36}
      durationMs={1800}
      forgeMs={1500}
      holdMs={1100}
      liftMs={1100}
      fontFamily='"Manrope Variable", ui-sans-serif, system-ui, sans-serif'
      height="100svh"
      onLift={() => {
        finish();
        window.dispatchEvent(new Event(INTRO_DONE_EVENT));
      }}
      onComplete={() => setShow(false)}
    />
  );
}
