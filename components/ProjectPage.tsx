import Link from "next/link";
import type { Project } from "@/content/proyectos";
import { proyectosPublicados } from "@/content/proyectos";
import { dict, homeHref, projectHref, tr, type Locale } from "@/lib/i18n";
import { ProjectVisual } from "./ProjectVisual";
import { SiteFooter, SiteHeader, whatsappHref } from "./SiteChrome";

export function ProjectPage({ project: p, locale }: { project: Project; locale: Locale }) {
  const t = dict[locale];
  const i = proyectosPublicados.findIndex((x) => x.slug === p.slug);
  const next = proyectosPublicados[(i + 1) % proyectosPublicados.length];
  const other: Locale = locale === "es" ? "en" : "es";

  return (
    <>
      <SiteHeader locale={locale} altHref={projectHref(other, p.slug)} />
      <main id="contenido">
        <section className="case-hero">
          <div className="container">
            <Link className="link back" href={`${homeHref(locale)}#proyectos`}>
              ← {t.back}
            </Link>
            <div className="case-head">
              <div>
                <span className="pill">
                  {t.group[p.grupo]} · {tr(p.tipo, locale)}
                </span>
                <h1>{p.nombre}</h1>
                <p className="lead">{tr(p.resumen, locale)}</p>
                <div className="case-meta">
                  <em className={`st-${p.estado}`}>● {t.status[p.estado]}</em>
                  {p.url ? (
                    <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                      {t.caseVisit} ↗
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="case-visual">
                {p.portada ? (
                  <img src={p.portada} alt={p.galeria?.[0] ? tr(p.galeria[0].alt, locale) : p.nombre} width={880} height={550} />
                ) : (
                  <ProjectVisual kind={p.visual} locale={locale} />
                )}
              </div>
            </div>
            {p.cifras.length ? (
              <div className="kpis case-kpis">
                {p.cifras.map((c) => (
                  <div key={c.etiqueta.es}>
                    <b>{c.valor}</b>
                    <span>{tr(c.etiqueta, locale)}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="sec">
          <div className="container case-body">
            <div className="case-row">
              <p className="label">{t.caseProblem}</p>
              <p className="case-text">{tr(p.reto, locale)}</p>
            </div>

            <div className="case-row">
              <p className="label">{t.caseBuilt}</p>
              <ol className="features">
                {p.funcionalidades.map((f, n) => (
                  <li key={f.titulo.es}>
                    <span className="n">{String(n + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{tr(f.titulo, locale)}</h3>
                      <p>{tr(f.texto, locale)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {p.arquitectura ? (
              <div className="case-row">
                <p className="label">{t.caseArch}</p>
                <div>
                  <p className="case-text">{tr(p.arquitectura.texto, locale)}</p>
                  <ul className="arch-list">
                    {p.arquitectura.puntos.map((a) => (
                      <li key={a.es}>{tr(a, locale)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            {p.galeria?.length ? (
              <div className="case-row case-row-gallery">
                <p className="label">{t.caseGallery}</p>
                <div className="gallery">
                  {p.galeria.map((g) => (
                    <figure key={g.src} className={`shot shot-${g.tipo}`}>
                      <a href={g.src} target="_blank" rel="noopener noreferrer">
                        <img src={g.src} alt={tr(g.alt, locale)} width={g.w} height={g.h} loading="lazy" decoding="async" />
                      </a>
                      <figcaption>{tr(g.alt, locale)}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="case-row">
              <p className="label">{t.caseStack}</p>
              <p className="tags">
                {p.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container contact-in">
            <div>
              <h2>{t.caseCta}</h2>
              <div className="ctas">
                <a className="btn btn-primary" href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">
                  {t.ctaWhatsapp}
                </a>
              </div>
            </div>
            <Link className="next-case" href={projectHref(locale, next.slug)}>
              <span className="label">{t.caseNext}</span>
              <b>{next.nombre} →</b>
              <span>{tr(next.tipo, locale)}</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
