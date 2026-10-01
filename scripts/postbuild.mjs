// Depois do build: 404.html estático (GitHub Pages) e .nojekyll.
import { writeFileSync } from "node:fs";

const base = process.env.SITE_BASE ?? "/";
const out = "dist/client";

const html = `<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#05070a">
<title>Página não encontrada — YFX</title>
<link rel="icon" href="${base}favicon.ico">
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100svh; display: flex; flex-direction: column; justify-content: flex-end;
    background: #05070a; color: #eceee6; font: 17px/1.65 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    padding: 2rem clamp(1.25rem, 4vw, 3rem) 5rem; }
  .logo { position: absolute; top: 1.5rem; left: clamp(1.25rem, 4vw, 3rem); color: inherit; text-decoration: none;
    font-weight: 800; letter-spacing: .02em; font-size: 1.3rem; display: flex; gap: .6rem; align-items: center; }
  p.k { color: #9aa2ab; margin: 0; }
  h1 { font-size: clamp(2.6rem, 8vw, 7rem); line-height: .95; margin: 1rem 0 0; font-weight: 800; letter-spacing: -.01em; max-width: 14ch; }
  .lede { color: #9aa2ab; max-width: 34rem; margin: 1.5rem 0 0; font-size: 1.1rem; }
  .row { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.5rem; }
  a.b { display: inline-flex; align-items: center; min-height: 3rem; padding: 0 1.5rem; font-weight: 600; text-decoration: none; }
  a.p { background: #a3ff3c; color: #0a1400; clip-path: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%); }
  a.s { border: 1px solid #242b34; color: #eceee6; }
  a.s:hover { border-color: #eceee6; }
  a:focus-visible { outline: 2px solid #a3ff3c; outline-offset: 3px; }
</style>
</head>
<body>
  <a class="logo" href="${base}">
    <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><polygon points="4,6 30,6 32,30 20,34" fill="#1D4ED8"/><polygon points="34,6 60,6 44,34 32,30" fill="#22D3EE"/><polygon points="20,34 32,30 44,34 38,58 26,58" fill="#0891B2"/></svg>
    YFX
  </a>
  <main>
    <p class="k">Erro 404</p>
    <h1>Esta página não existe.</h1>
    <p class="lede">O endereço pode ter mudado. Volte ao início ou veja o nosso trabalho.</p>
    <div class="row">
      <a class="b p" href="${base}">Ir para o início</a>
      <a class="b s" href="${base}portfolio/">Ver o trabalho</a>
    </div>
  </main>
</body>
</html>
`;

writeFileSync(`${out}/404.html`, html);
writeFileSync(`${out}/.nojekyll`, "");
console.log(`postbuild: 404.html e .nojekyll (base ${base})`);
