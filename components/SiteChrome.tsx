import Link from "next/link";
import { perfil } from "@/content/perfil";
import { dict, homeHref, type Locale } from "@/lib/i18n";
import { Logo } from "./Logo";

/** Enlace equivalente en el otro idioma para la página actual. */
export type AltHref = string;

export function SiteHeader({ locale, altHref }: { locale: Locale; altHref: AltHref }) {
  const t = dict[locale];
  const home = homeHref(locale);
  const items = [
    ["sobre-mi", t.nav.about],
    ["proyectos", t.nav.projects],
    ["experiencia", t.nav.experience],
    ["formacion", t.nav.education],
    ["contacto", t.nav.contact],
  ] as const;

  return (
    <header className="site-nav">
      <div className="container nav-in">
        <Link href={home} aria-label="Inicio / Home">
          <Logo />
        </Link>
        <nav aria-label="Principal">
          <ul>
            {items.map(([id, label]) => (
              <li key={id}>
                <Link href={`${home}#${id}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="lang" href={altHref} hrefLang={locale === "es" ? "en" : "es"} aria-label={t.switchLangLabel}>
          {t.switchLang}
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const c = perfil.contacto;
  return (
    <footer className="site-foot">
      <div className="container foot-in">
        <Logo />
        <span>
          © {new Date().getFullYear()} {perfil.nombre} · {t.footer}
        </span>
        <span className="foot-links">
          <a href={c.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={c.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </span>
      </div>
    </footer>
  );
}

export function whatsappHref(locale: Locale) {
  return `https://wa.me/${perfil.contacto.whatsapp}?text=${encodeURIComponent(dict[locale].whatsappMessage)}`;
}
