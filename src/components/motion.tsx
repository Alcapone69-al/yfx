import { useEffect, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Um único observador para toda a página: qualquer elemento com [data-reveal]
 * recebe .is-in quando entra no ecrã. Novos elementos (mudança de página) são
 * apanhados por um MutationObserver. Sem JS, nada fica escondido (ver styles.css).
 */
export function RevealObserver() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset["hydrated"] = "true";
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const scan = () =>
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [path]);

  return null;
}

type RevealProps = {
  as?: ElementType;
  kind?: "fade" | "facet" | "line";
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
};

export function Reveal({
  as: Tag = "div",
  kind = "fade",
  delay = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  return (
    <Tag
      data-reveal={kind === "fade" ? "" : kind}
      className={className}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Título com linhas que sobem de dentro de uma máscara. */
export function MaskLines({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  stagger = 90,
  delay = 0,
  id,
}: {
  id?: string;
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <Tag id={id} data-reveal="line" className={className}>
      {lines.map((l, i) => (
        <span
          key={i}
          className="line-mask"
          style={{ ["--d" as string]: `${delay + i * stagger}ms` }}
        >
          <span className={lineClassName} style={{ transitionDelay: `${delay + i * stagger}ms` }}>
            {l}
          </span>
        </span>
      ))}
    </Tag>
  );
}
