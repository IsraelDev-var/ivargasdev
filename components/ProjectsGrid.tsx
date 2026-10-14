"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/proyectos";
import { dict, projectHref, tr, type Locale } from "@/lib/i18n";
import { ProjectVisual } from "./ProjectVisual";

type Filter = "todos" | Project["grupo"];

/** Columnas (de 6) por tarjeta para que ninguna fila quede incompleta: filas de 3 tarjetas o de 2 anchas. */
function spans(n: number, featured: number): number[] {
  const out: number[] = Array(featured).fill(3);
  let rest = n - featured;
  while (rest > 4 || rest === 3) {
    out.push(2, 2, 2);
    rest -= 3;
  }
  const tail: Record<number, number[]> = { 0: [], 1: [6], 2: [3, 3], 4: [3, 3, 3, 3] };
  return [...out, ...tail[rest]];
}

export function ProjectsGrid({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const t = dict[locale];
  const [filter, setFilter] = useState<Filter>("todos");
  const shown = projects.filter((p) => filter === "todos" || p.grupo === filter);
  // Los destacados van primero y anchos solo en la vista completa.
  const featured = filter === "todos" ? shown.filter((p) => p.destacado).length : 0;
  const ordered = featured ? [...shown.filter((p) => p.destacado), ...shown.filter((p) => !p.destacado)] : shown;
  const cols = spans(ordered.length, featured);

  const tabs: { id: Filter; label: string }[] = [
    { id: "todos", label: t.filterAll },
    { id: "cliente", label: t.filterClients },
    { id: "sistema", label: t.filterSystems },
  ];

  return (
    <>
      <div className="tabs" role="group" aria-label={t.projectsPill}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={filter === tab.id ? "on" : undefined}
            aria-pressed={filter === tab.id}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pgrid">
        {ordered.map((p, i) => (
          <article key={p.slug} className={`proj span-${cols[i]}`}>
            {p.portada ? (
              <div className="cover">
                <img src={p.portada} alt="" width={880} height={550} loading="lazy" decoding="async" />
              </div>
            ) : (
              <ProjectVisual kind={p.visual} locale={locale} />
            )}
            <div className="pbody">
              <div className="kind">
                <span>
                  {t.group[p.grupo]} · {tr(p.tipo, locale)}
                </span>
                <em className={`st-${p.estado}`}>● {t.status[p.estado]}</em>
              </div>
              <h3>
                <Link href={projectHref(locale, p.slug)} className="stretched">
                  {p.nombre}
                </Link>
              </h3>
              <p>{tr(p.resumen, locale)}</p>
              <div className="tags">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              <span className="more">
                {t.readCase} →{p.url ? <span className="url"> {p.url.replace(/^https?:\/\//, "")}</span> : null}
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
