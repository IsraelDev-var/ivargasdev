import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { proyectosPublicados } from "@/content/proyectos";
import { projectHref, tr, type Locale } from "./i18n";

export type ProjectParams = { params: Promise<{ slug: string }> };

export const projectStaticParams = () => proyectosPublicados.map((p) => ({ slug: p.slug }));

export function findProject(slug: string) {
  const project = proyectosPublicados.find((p) => p.slug === slug);
  if (!project) notFound();
  return project;
}

export function projectMetadata(slug: string, locale: Locale): Metadata {
  const p = findProject(slug);
  return {
    title: p.nombre,
    description: tr(p.resumen, locale),
    alternates: {
      canonical: projectHref(locale, slug),
      languages: { es: projectHref("es", slug), en: projectHref("en", slug) },
    },
    openGraph: { title: `${p.nombre} · i/dev`, description: tr(p.resumen, locale) },
  };
}
