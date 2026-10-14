import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { perfil } from "@/content/perfil";
import { SITE_URL, tr, type Locale } from "./i18n";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = { themeColor: "#0a1020", colorScheme: "dark" };

export function baseMetadata(locale: Locale): Metadata {
  const title = locale === "es" ? "Israel Vargas · Desarrollador de software" : "Israel Vargas · Software developer";
  const description = tr(perfil.descripcion, locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s · i/dev" },
    description,
    authors: [{ name: perfil.nombre }],
    alternates: {
      canonical: locale === "es" ? "/" : "/en/",
      languages: { es: "/", en: "/en/" },
    },
    openGraph: {
      type: "website",
      siteName: "i/dev",
      title,
      description,
      locale: locale === "es" ? "es_DO" : "en_US",
    },
    icons: { icon: "/icon.svg" },
  };
}

/** Documento HTML compartido por los dos layouts raíz (español e inglés). */
export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#contenido">
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        {children}
      </body>
    </html>
  );
}
