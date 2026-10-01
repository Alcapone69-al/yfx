# YFX — website

Código-fonte do website da YFX (React + TanStack Start, pré-renderizado como site estático).

- Ramo `codigo`: código-fonte (este ramo).
- Ramo `main`: site já construído, publicado no GitHub Pages.

## Publicar
```bash
npm install
SITE_BASE=/yfx/ npx vite build   # use SITE_BASE=/ quando houver domínio próprio
```
O conteúdo de `dist/client` vai para o ramo `main` (com `.nojekyll` e `404.html`).
