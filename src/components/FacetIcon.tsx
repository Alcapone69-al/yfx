import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; variant?: 0 | 1 | 2 | 3; className?: string };

const FACETS: string[][] = [
  ["2,20 30,2 40,26 12,44", "44,4 78,14 62,40 40,26", "18,52 46,44 70,56 44,78"],
  ["6,10 34,4 44,30 14,38", "48,8 76,26 58,46 44,30", "12,50 44,46 64,62 30,76"],
  ["4,26 26,6 46,22 20,46", "50,2 74,20 60,44 46,22", "22,54 52,48 72,66 40,78"],
  ["8,6 36,10 42,32 10,40", "46,6 78,18 64,42 42,32", "16,56 48,50 66,60 38,76"],
];

/** Composição gráfica low-poly (estilo do logótipo) por trás de um ícone. */
export function FacetIcon({ icon: Icon, variant = 0, className = "" }: Props) {
  const shapes = FACETS[variant % FACETS.length] ?? FACETS[0]!;
  return (
    <span className={`relative inline-flex h-20 w-20 items-center justify-center ${className}`}>
      <svg viewBox="0 0 80 80" aria-hidden className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`fi-a-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary-deep)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
          <linearGradient id={`fi-b-${variant}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        {shapes.map((p, i) => (
          <polygon
            key={p}
            points={p}
            fill={`url(#fi-${i % 2 === 0 ? "a" : "b"}-${variant})`}
            opacity={i === 0 ? 0.16 : i === 1 ? 0.28 : 0.45}
          />
        ))}
      </svg>
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-card">
        <Icon className="h-6 w-6" />
      </span>
    </span>
  );
}