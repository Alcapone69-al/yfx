import { useEffect, useRef } from "react";
import { Y_PARTS } from "@/components/YMark";

/**
 * Peça central do herói: o "Y" da YFX construído em facetas low-poly.
 * - As três partes do Y entram e encaixam (como no logótipo).
 * - O ponteiro é uma luz: ilumina as facetas do Y e revela a malha à volta, em ciano.
 * - Sem ponteiro (telemóvel), a luz orbita devagar.
 * Canvas 2D: leve, sem dependências. Pausa fora do ecrã e com o separador escondido.
 * Movimento reduzido: um único desenho estático.
 */

type Pt = [number, number];
type Tri = { a: Pt; b: Pt; c: Pt; cx: number; cy: number; nx: number; ny: number; nz: number };

const PART_STYLE = {
  left: { dark: [10, 20, 58], light: [56, 104, 232], from: [-0.9, -0.7] },
  right: { dark: [4, 52, 72], light: [80, 226, 246], from: [0.9, -0.7] },
  stem: { dark: [8, 30, 86], light: [40, 170, 230], from: [0, 0.9] },
} as const;
type PartKey = keyof typeof PART_STYLE;

// cor da malha e das arestas: o ciano do logótipo
const LINE = "34,211,238";

function rand(seed: number) {
  // gerador determinístico — a malha é sempre igual entre visitas
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export function HeroFacets({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let W = 0,
      H = 0,
      dpr = 1;
    let tris: Tri[] = [];
    // triângulos que cobrem cada parte do Y (calculado uma vez por tamanho)
    let partTris: Record<PartKey, Tri[]> = { left: [], right: [], stem: [] };
    const LEVELS = 16;
    // rampas de cor pré-calculadas: evita criar strings por triângulo
    const RAMP = Object.fromEntries(
      (Object.keys(PART_STYLE) as PartKey[]).map((k) => {
        const st = PART_STYLE[k];
        return [
          k,
          Array.from({ length: LEVELS }, (_, i) => {
            const t = i / (LEVELS - 1);
            const c = st.dark.map((d, j) => Math.round(d + (st.light[j]! - d) * t));
            return `rgb(${c[0]},${c[1]},${c[2]})`;
          }),
        ];
      }),
    ) as Record<PartKey, string[]>;
    let yBox = { x: 0, y: 0, s: 1 }; // posição e escala do Y (unidades do viewBox 64)
    const light = { x: 0, y: 0, tx: 0, ty: 0, on: 0, ton: 0 };
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
    let start = performance.now();
    let raf = 0;
    let visible = true;
    let lastPointer = 0;
    let lastDraw = 0;

    const build = () => {
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      // aparelhos modestos: menos píxeis para rasterizar
      const nav = navigator as Navigator & { deviceMemory?: number };
      const lowEnd = (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4;
      dpr = Math.min(window.devicePixelRatio || 1, lowEnd ? 1 : 1.5);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // o Y fica centrado no painel onde o canvas vive
      const wide = W >= 640;
      const size = Math.min(W, H) * 0.7;
      const s = size / 64;
      const cx = W * 0.5;
      const cy = H * 0.52;
      yBox = { x: cx - 32 * s, y: cy - 32 * s, s };

      // malha triangular com jitter determinístico
      const cell = wide ? 54 : 44;
      const cols = Math.ceil(W / cell) + 2;
      const rows = Math.ceil(H / cell) + 2;
      const rnd = rand(69);
      const grid: Pt[][] = [];
      for (let j = 0; j < rows; j++) {
        const row: Pt[] = [];
        for (let i = 0; i < cols; i++) {
          const jx = (rnd() - 0.5) * cell * 0.62;
          const jy = (rnd() - 0.5) * cell * 0.62;
          row.push([(i - 1) * cell + jx, (j - 1) * cell + jy]);
        }
        grid.push(row);
      }
      tris = [];
      const add = (a: Pt, b: Pt, c: Pt) => {
        const nx = (rnd() - 0.5) * 1.3;
        const ny = (rnd() - 0.5) * 1.3;
        const l = Math.hypot(nx, ny, 1);
        tris.push({
          a,
          b,
          c,
          cx: (a[0] + b[0] + c[0]) / 3,
          cy: (a[1] + b[1] + c[1]) / 3,
          nx: nx / l,
          ny: ny / l,
          nz: 1 / l,
        });
      };
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const r0 = grid[j]!,
            r1 = grid[j + 1]!;
          const p00 = r0[i]!,
            p10 = r0[i + 1]!,
            p01 = r1[i]!,
            p11 = r1[i + 1]!;
          if ((i + j) % 2) {
            add(p00, p10, p11);
            add(p00, p11, p01);
          } else {
            add(p00, p10, p01);
            add(p10, p11, p01);
          }
        }
      }
      const margin = cell * 1.2;
      partTris = { left: [], right: [], stem: [] };
      (Object.keys(PART_STYLE) as PartKey[]).forEach((k) => {
        const pts = Y_PARTS[k];
        const xs = pts.map(([x]) => yBox.x + x * yBox.s);
        const ys = pts.map(([, y]) => yBox.y + y * yBox.s);
        const x0 = Math.min(...xs) - margin,
          x1 = Math.max(...xs) + margin;
        const y0 = Math.min(...ys) - margin,
          y1 = Math.max(...ys) + margin;
        partTris[k] = tris.filter((t) => t.cx > x0 && t.cx < x1 && t.cy > y0 && t.cy < y1);
      });
      if (!light.tx) {
        light.tx = light.x = cx - size * 0.25;
        light.ty = light.y = cy - size * 0.3;
      }
    };

    const partPath = (key: PartKey, ox: number, oy: number) => {
      const pts = Y_PARTS[key];
      ctx.beginPath();
      pts.forEach(([x, y], i) => {
        const px = yBox.x + x * yBox.s + ox;
        const py = yBox.y + y * yBox.s + oy;
        if (i) ctx.lineTo(px, py);
        else ctx.moveTo(px, py);
      });
      ctx.closePath();
    };

    const shade = (t: Tri, ox: number, oy: number) => {
      const lx = light.x - (t.cx + ox),
        ly = light.y - (t.cy + oy),
        lz = 340;
      const l = Math.hypot(lx, ly, lz);
      const d = (t.nx * lx + t.ny * ly + t.nz * lz) / l;
      return clamp((d - 0.55) / 0.45);
    };

    const draw = (now: number) => {
      // em órbita (sem ponteiro), 30 fps chegam e poupam bateria
      const idleOrbit =
        !reduced && (!finePointer || now - lastPointer > 4000) && now - start > 1700;
      if (idleOrbit && now - lastDraw < 32) {
        raf = visible ? requestAnimationFrame(draw) : 0;
        return;
      }
      lastDraw = now;
      const t = reduced ? 1 : clamp((now - start) / 1600);
      ctx.clearRect(0, 0, W, H);

      // luz e inclinação suavizadas
      const k = reduced ? 1 : 0.08;
      if (!finePointer || now - lastPointer > 4000) {
        // órbita lenta quando não há ponteiro
        const a = now / 5200;
        const cx = yBox.x + 32 * yBox.s,
          cy = yBox.y + 30 * yBox.s;
        light.tx = cx + Math.cos(a) * yBox.s * 26;
        light.ty = cy + Math.sin(a * 1.3) * yBox.s * 22;
        light.ton = 0.55;
      }
      light.x += (light.tx - light.x) * k;
      light.y += (light.ty - light.y) * k;
      light.on += (light.ton - light.on) * k;
      tilt.x += (tilt.tx - tilt.x) * k;
      tilt.y += (tilt.ty - tilt.y) * k;

      // 1) malha de fundo: aparece perto da luz
      const R = Math.max(W, H) * 0.34;
      const buckets: Tri[][] = [[], [], [], [], []];
      const mx = tilt.x * 6,
        my = tilt.y * 6;
      const R2 = R * R;
      for (const tr of tris) {
        const dx = tr.cx + mx - light.x,
          dy = tr.cy + my - light.y;
        const d2 = dx * dx + dy * dy;
        if (d2 >= R2) continue;
        const v = (1 - Math.sqrt(d2) / R) * light.on;
        if (v > 0.02) buckets[Math.min(4, Math.floor(v * 5))]!.push(tr);
      }
      ctx.lineWidth = 1;
      buckets.forEach((list, i) => {
        if (!list.length) return;
        ctx.strokeStyle = `rgba(${LINE},${0.05 + i * 0.07})`;
        ctx.beginPath();
        for (const tr of list) {
          ctx.moveTo(tr.a[0] + mx, tr.a[1] + my);
          ctx.lineTo(tr.b[0] + mx, tr.b[1] + my);
          ctx.lineTo(tr.c[0] + mx, tr.c[1] + my);
          ctx.closePath();
        }
        ctx.stroke();
      });

      // 2) as três partes do Y, cada uma com as suas facetas
      (Object.keys(PART_STYLE) as PartKey[]).forEach((key, idx) => {
        const st = PART_STYLE[key];
        const p = easeOut(clamp((t - idx * 0.12) / 0.76));
        const off = (1 - p) * yBox.s * 30;
        const ox = st.from[0] * off + tilt.x * 18;
        const oy = st.from[1] * off + tilt.y * 18;
        ctx.save();
        ctx.globalAlpha = p;
        partPath(key, ox, oy);
        ctx.clip();
        const levels: Tri[][] = Array.from({ length: LEVELS }, () => []);
        const gain = 0.35 + 0.65 * light.on;
        for (const tr of partTris[key]) {
          const b = clamp(shade(tr, ox, oy) * gain + 0.12);
          levels[Math.round(b * (LEVELS - 1))]!.push(tr);
        }
        const ramp = RAMP[key];
        levels.forEach((list, li) => {
          if (!list.length) return;
          ctx.fillStyle = ctx.strokeStyle = ramp[li]!;
          ctx.beginPath();
          for (const tr of list) {
            ctx.moveTo(tr.a[0] + ox, tr.a[1] + oy);
            ctx.lineTo(tr.b[0] + ox, tr.b[1] + oy);
            ctx.lineTo(tr.c[0] + ox, tr.c[1] + oy);
            ctx.closePath();
          }
          ctx.fill();
          ctx.stroke(); // fecha as frestas entre triângulos
        });
        ctx.restore();
        // aresta de luz
        ctx.save();
        ctx.globalAlpha = p * 0.5;
        partPath(key, ox, oy);
        ctx.strokeStyle = `rgba(${LINE},0.55)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      const settling =
        Math.abs(light.tx - light.x) +
          Math.abs(light.ty - light.y) +
          Math.abs(tilt.tx - tilt.x) * 40 >
        0.4;
      const orbiting = !reduced && (!finePointer || now - lastPointer > 4000);
      if (!reduced && visible && (t < 1 || settling || orbiting)) raf = requestAnimationFrame(draw);
      else raf = 0;
    };

    const kick = () => {
      if (!raf && visible) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = canvas.getBoundingClientRect();
      light.tx = e.clientX - r.left;
      light.ty = e.clientY - r.top;
      light.ton = 1;
      tilt.tx = clamp((e.clientX - r.left) / W, 0, 1) - 0.5;
      tilt.ty = clamp((e.clientY - r.top) / H, 0, 1) - 0.5;
      lastPointer = performance.now();
      kick();
    };
    const onLeave = () => {
      light.ton = 0.55;
      tilt.tx = tilt.ty = 0;
      kick();
    };

    build();
    light.on = reduced ? 0.6 : 0;
    light.ton = 0.6;
    if (reduced) draw(performance.now());
    else {
      start = performance.now();
      kick();
    }

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) draw(performance.now());
      else kick();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver((entries) => {
      visible = !!entries[0]?.isIntersecting && !document.hidden;
      if (visible) kick();
    });
    io.observe(canvas);
    const onVis = () => {
      visible = !document.hidden;
      if (visible) kick();
    };
    document.addEventListener("visibilitychange", onVis);
    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }
    canvas.dataset["ready"] = "true";

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
