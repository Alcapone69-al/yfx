type Props = { className?: string; title?: string };

/** Pontos do "Y" facetado (viewBox 64×64) — partilhados com o herói. */
export const Y_PARTS = {
  left: [
    [4, 6],
    [30, 6],
    [32, 30],
    [20, 34],
  ],
  right: [
    [34, 6],
    [60, 6],
    [44, 34],
    [32, 30],
  ],
  stem: [
    [20, 34],
    [32, 30],
    [44, 34],
    [38, 58],
    [26, 58],
  ],
} as const;

const pts = (p: readonly (readonly [number, number])[]) => p.map(([x, y]) => `${x},${y}`).join(" ");

/** Símbolo YFX: "Y" facetado com o gradiente azul → ciano da marca. */
export function YMark({ className = "h-8 w-8", title = "YFX" }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      {...(title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true, focusable: false })}
    >
      <defs>
        <linearGradient id="ym-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="ym-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ym-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <polygon points={pts(Y_PARTS.left)} fill="url(#ym-a)" />
      <polygon points={pts(Y_PARTS.right)} fill="url(#ym-b)" />
      <polygon points={pts(Y_PARTS.stem)} fill="url(#ym-c)" />
      <polygon points="30,6 34,6 32,30" fill="#0B1F5B" opacity="0.55" />
    </svg>
  );
}

export function YLogo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <YMark className="h-7 w-7 shrink-0" title="" />
      <span className="type-wide text-[1.35rem] leading-none tracking-tight">YFX</span>
    </span>
  );
}
