import { Link } from "@tanstack/react-router";
import { YLogo } from "@/components/YMark";
import {
  NAV,
  WHATSAPP_URL,
  WHATSAPP_LABEL,
  INSTAGRAM_URL,
  INSTAGRAM_LABEL,
  LOCATION,
} from "@/lib/site";
import { PROJECTS } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-12 lg:py-20">
        <div className="max-w-xs">
          <Link to="/" aria-label="YFX, página inicial">
            <YLogo />
          </Link>
          <p className="mt-5 text-[0.95rem] leading-7 text-fog">
            Estúdio de tecnologia em Maputo. Websites, sistemas de gestão, automação e design para
            empresas moçambicanas.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-semibold text-bone [font-family:var(--font-sans)]">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-fog">
            <li>
              <Link to="/" className="link-underline hover:text-bone">
                Início
              </Link>
            </li>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline hover:text-bone">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-bone [font-family:var(--font-sans)]">
            Projetos
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-fog">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="link-underline hover:text-bone"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-bone [font-family:var(--font-sans)]">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-fog">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-bone"
              >
                WhatsApp {WHATSAPP_LABEL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-bone"
              >
                Instagram {INSTAGRAM_LABEL}
              </a>
            </li>
            <li>{LOCATION}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3 border-t border-line px-5 py-6 text-sm text-fog sm:px-8 lg:px-12">
        <p>© 2026 YFX. Todos os direitos reservados.</p>
        <p>Feito em Maputo.</p>
      </div>
    </footer>
  );
}
