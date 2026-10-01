import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Site estático (pré-renderizado) para GitHub Pages — sem dependência do Lovable.
// SITE_BASE: "/yfx/" no GitHub Pages sem domínio; "/" quando houver domínio próprio.
const base = process.env.SITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: false, autoSubfolderIndex: true },
      pages: [{ path: "/" }, { path: "/servicos" }, { path: "/sobre" }, { path: "/portfolio" }, { path: "/contacto" }],
    }),
    viteReact(),
  ],
});
