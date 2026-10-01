import type { CSSProperties } from "react";
import { asset, type Shot } from "@/lib/projects";

/** Imagem responsiva de um projeto, com dimensões fixas (sem saltos de layout). */
export function ShotImg({
  shot,
  sizes = "100vw",
  className = "",
  eager = false,
  style,
  ...rest
}: {
  shot: Shot;
  sizes?: string;
  className?: string;
  eager?: boolean;
  style?: CSSProperties;
  [data: `data-${string}`]: unknown;
}) {
  const mobile = shot.kind === "mobile";
  const src = asset(shot.src);
  const srcSet = mobile
    ? undefined
    : `${asset(shot.src.replace(/\.webp$/, "-800.webp"))} 800w, ${src} 1600w`;
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={mobile ? undefined : sizes}
      alt={shot.alt}
      width={mobile ? 780 : 1600}
      height={mobile ? 1688 : 1000}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className={className}
      style={style}
      {...rest}
    />
  );
}

/** Telemóvel: moldura simples, sem imitar marcas de aparelhos. */
export function PhoneFrame({ shot, className = "" }: { shot: Shot; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.4rem] border border-line bg-graphite p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <ShotImg
        shot={shot}
        className="block aspect-[390/780] w-full rounded-[1.05rem] object-cover object-top"
      />
    </div>
  );
}
