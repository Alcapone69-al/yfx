import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/motion";
import { WHATSAPP_URL } from "@/lib/site";

const TITLE = "YFX — Estúdio digital em Maputo";
const DESC =
  "Websites, sistemas de gestão, automação e agentes de IA no WhatsApp para empresas moçambicanas. Diagnóstico gratuito. Maputo, Moçambique.";

/*
 * Antes de pintar: marca <html> com .js para ativar as animações de entrada.
 * Se a aplicação não arrancar em 4 s, retira a marca para que nada fique escondido.
 */
const BOOT = `(function(d){var e=d.documentElement;e.classList.add('js');setTimeout(function(){if(!e.dataset.hydrated){e.classList.remove('js');}},4000);})(document);`;

function NotFoundComponent() {
  return (
    <main
      id="conteudo"
      className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-40 sm:px-8 lg:px-12"
    >
      <p className="text-fog">Erro 404</p>
      <h1 className="type-wide mt-4 max-w-4xl text-[clamp(1.9rem,9.6vw,7rem)]">
        Esta página não existe.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fog">
        O endereço pode ter mudado. Volte ao início ou veja o nosso trabalho.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/" className="facet-sm bg-volt px-6 py-3.5 font-semibold text-volt-ink">
          Ir para o início
        </Link>
        <Link
          to="/portfolio"
          className="border border-line px-6 py-3.5 font-semibold transition-colors hover:border-bone"
        >
          Ver o trabalho
        </Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main
      id="conteudo"
      className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-40 sm:px-8 lg:px-12"
    >
      <h1 className="type-wide max-w-4xl text-[clamp(2.2rem,6vw,5rem)]">
        Esta página não carregou.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fog">
        Tente novamente. Se o problema continuar, fale connosco no WhatsApp.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="facet-sm bg-volt px-6 py-3.5 font-semibold text-volt-ink"
        >
          Tentar novamente
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line px-6 py-3.5 font-semibold"
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#05070a" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "YFX" },
      { property: "og:site_name", content: "YFX" },
      { property: "og:locale", content: "pt_MZ" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
    ],
    scripts: [{ children: BOOT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RevealObserver />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
