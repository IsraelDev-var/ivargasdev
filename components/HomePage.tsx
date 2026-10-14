import formacion from "@/content/formacion.json";
import { experiencia, habilidades, perfil } from "@/content/perfil";
import { proyectosPublicados } from "@/content/proyectos";
import { dict, formatMonth, tr, type Locale } from "@/lib/i18n";
import { HeroNetwork } from "./HeroNetwork";
import { ProjectsGrid } from "./ProjectsGrid";
import { SiteFooter, SiteHeader, whatsappHref } from "./SiteChrome";

type Credential = {
  nombre: string;
  emisor: string;
  expedicion?: string;
  vencimiento?: string;
  inicio?: string;
  fin?: string;
  url?: string;
  insignia?: string;
};

/** Sigla para el sello de cada credencial. */
function seal(c: Credential) {
  const known: [RegExp, string][] = [
    [/sql (certification )?associate/i, "SQL"],
    [/mongodb/i, "MDB"],
    [/c\+\+/i, "C++"],
    [/cisco/i, "CSC"],
    [/full stack/i, "FS"],
    [/inteligencia artificial/i, "IA"],
    [/ingl[eé]s/i, "EN"],
    [/tecn[oó]logo/i, "TDS"],
    [/react/i, "RE"],
    [/html/i, "WEB"],
    [/javascript/i, "JS"],
    [/proyectos/i, "PM"],
    [/architect/i, "SA"],
  ];
  return known.find(([re]) => re.test(`${c.nombre} ${c.emisor}`))?.[1] ?? c.nombre.slice(0, 2).toUpperCase();
}

function CredentialCard({ c, locale }: { c: Credential; locale: Locale }) {
  const t = dict[locale];
  let when: string = t.completed;
  if (c.inicio && c.fin) when = `${formatMonth(c.inicio, locale)} – ${formatMonth(c.fin, locale)}`;
  else if (c.expedicion) {
    when = formatMonth(c.expedicion, locale);
    if (c.vencimiento) when += ` · ${t.expires} ${formatMonth(c.vencimiento, locale)}`;
  }
  return (
    <div className="cert">
      {c.insignia ? (
        <img className="badge" src={c.insignia} alt="" width={64} height={64} loading="lazy" decoding="async" />
      ) : (
        <div className="seal" aria-hidden="true">{seal(c)}</div>
      )}
      <h4>{c.nombre}</h4>
      <small>{c.emisor}</small>
      <span className="v">
        ✓ {when}
        {c.url ? (
          <>
            {" · "}
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              {t.verify} ↗
            </a>
          </>
        ) : null}
      </span>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const c = perfil.contacto;
  const groups = [
    ["certificaciones", formacion.certificaciones],
    ["diplomados", formacion.diplomados],
    ["cursos", formacion.cursos],
  ] as const;

  return (
    <>
      <SiteHeader locale={locale} altHref={locale === "es" ? "/en/" : "/"} />
      <main id="contenido">
        {/* Hero */}
        <section className="hero">
          <HeroNetwork />
          <div className="container">
            <div className="hero-in">
              <div>
                <span className="pill">{t.heroPill}</span>
                <h1>
                  {t.heroTitleA}
                  <span className="grad-text">{t.heroTitleB}</span>
                </h1>
                <p className="lead">{t.heroLead}</p>
                <div className="ctas">
                  <a className="btn btn-primary" href="#proyectos">{t.ctaProjects}</a>
                  <a className="btn btn-ghost" href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">
                    {t.ctaWhatsapp}
                  </a>
                </div>
              </div>
              <aside className="status">
                <span className="dot" aria-hidden="true" />
                {t.statusAvailable}
                <dl>
                  <dt>{t.statusNow}</dt>
                  <dd>{t.statusNowValue}</dd>
                  <dt>{t.statusStack}</dt>
                  <dd>{perfil.stackCorto}</dd>
                  <dt>{t.statusBase}</dt>
                  <dd>{t.statusBaseValue}</dd>
                </dl>
              </aside>
            </div>
            <div className="kpis">
              {t.kpis.map((k) => (
                <div key={k.label}>
                  <b>{k.value}</b>
                  <span>{k.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section className="sec" id="proyectos">
          <div className="container">
            <div className="sec-h">
              <div>
                <span className="pill">{t.projectsPill}</span>
                <h2>
                  {t.projectsTitleA}
                  <span className="grad-text">{t.projectsTitleB}</span>
                  {t.projectsTitleC}
                </h2>
              </div>
            </div>
            <ProjectsGrid projects={proyectosPublicados} locale={locale} />
          </div>
        </section>

        {/* Experiencia */}
        <section className="sec" id="experiencia">
          <div className="container">
            <div className="sec-h">
              <div>
                <span className="pill">{t.experiencePill}</span>
                <h2>{t.experienceTitle}</h2>
              </div>
              <a className="link" href={perfil.cv} download>
                {t.downloadCv} ↓
              </a>
            </div>
            {experiencia.map((x) => (
              <div className="xp" key={x.empresa}>
                <div className="xp-side">
                  <b>{x.empresa}</b>
                  {tr(x.detalle, locale)}
                  <br />
                  {tr(x.cargo, locale)}
                  <br />
                  <span className="mono">{tr(x.periodo, locale)}</span>
                </div>
                <ul className="log">
                  {x.logros.map((l) => (
                    <li key={l.tag}>
                      <code>{l.tag}</code>
                      {tr(l.texto, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formación */}
        <section className="sec" id="formacion">
          <div className="container">
            <div className="sec-h">
              <div>
                <span className="pill">{t.educationPill}</span>
                <h2>{t.educationTitle}</h2>
              </div>
            </div>
            {groups.map(([key, items]) => (
              <div className="cert-group" key={key}>
                <p className="label">
                  {"// "}
                  {t.eduGroups[key]} · {items.length}
                </p>
                <div className="certs">
                  {items.map((cred) => (
                    <CredentialCard key={cred.nombre} c={cred} locale={locale} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades */}
        <section className="sec" id="habilidades">
          <div className="container">
            <div className="sec-h">
              <div>
                <span className="pill">{t.skillsPill}</span>
                <h2>{t.skillsTitle}</h2>
              </div>
            </div>
            <div className="skills">
              {habilidades.map((g) => (
                <div key={g.titulo.es}>
                  <h3>{tr(g.titulo, locale)}</h3>
                  <p>
                    {g.items.map((s) => (
                      <span className="tag" key={s}>{s}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="contact" id="contacto">
          <div className="container contact-in">
            <div>
              <h2>
                {t.contactTitleA}
                <span className="grad-text">{t.contactTitleB}</span>
              </h2>
              <p className="lead">{t.contactLead}</p>
              <div className="ctas">
                <a className="btn btn-primary" href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">
                  {t.ctaWhatsapp}
                </a>
                <a className="btn btn-ghost" href={perfil.cv} download>
                  {t.downloadCv}
                </a>
              </div>
            </div>
            <ul className="contact-list">
              <li><span>WhatsApp</span><a href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">{c.telefono}</a></li>
              <li><span>Email</span><a href={`mailto:${c.email}`}>{c.email}</a></li>
              <li><span>Instagram</span><a href={c.instagram} target="_blank" rel="noopener noreferrer">@ivargasdev</a></li>
              <li><span>GitHub</span><a href={c.github} target="_blank" rel="noopener noreferrer">IsraelDev-var</a></li>
              <li><span>LinkedIn</span><a href={c.linkedin} target="_blank" rel="noopener noreferrer">Israel Vargas Castro</a></li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
