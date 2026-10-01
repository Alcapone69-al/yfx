import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
    context: { queryClient },
    scrollRestoration: true,
    // transições nativas entre páginas (View Transitions API), com recurso automático
    defaultViewTransition: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
