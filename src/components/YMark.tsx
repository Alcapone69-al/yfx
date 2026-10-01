type Props = { className?: string };

/** Placeholder gráfico: "Y" facetado low-poly com gradiente azul -> ciano. */
export function YMark({ className = "h-9 w-9" }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Símbolo YFX">
      <defs>
        <linearGradient id="yfx-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="yfx-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="yfx-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <polygon points="4,6 30,6 32,30 20,34" fill="url(#yfx-a)" />
      <polygon points="34,6 60,6 44,34 32,30" fill="url(#yfx-b)" />
      <polygon points="20,34 32,30 44,34 38,58 26,58" fill="url(#yfx-c)" />
      <polygon points="30,6 34,6 32,30" fill="#0B1F5B" opacity="0.55" />
    </svg>
  );
}

export function YLogo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <YMark className="h-8 w-8 shrink-0" />
      <span className="font-display text-2xl font-extrabold tracking-tight">YFX</span>
    </span>
  );
}