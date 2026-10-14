import type { MetadataRoute } from "next";
import { proyectosPublicados } from "@/content/proyectos";
import { projectHref, SITE_URL } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { es: "/", en: "/en/" },
    ...proyectosPublicados.map((p) => ({ es: projectHref("es", p.slug), en: projectHref("en", p.slug) })),
  ];
  return pages.flatMap((pair) =>
    (["es", "en"] as const).map((locale) => ({
      url: SITE_URL + pair[locale],
      alternates: { languages: { es: SITE_URL + pair.es, en: SITE_URL + pair.en } },
    })),
  );
}
