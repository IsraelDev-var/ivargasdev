export type Locale = "es" | "en";
export const locales: Locale[] = ["es", "en"];

/** Texto con versión en español e inglés. */
export type L = { es: string; en: string };

export const tr = (text: L, locale: Locale) => text[locale];

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ivargas.vercel.app").replace(/\/$/, "");

export const homeHref = (locale: Locale) => (locale === "es" ? "/" : "/en/");
export const projectHref = (locale: Locale, slug: string) =>
  locale === "es" ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;

const MONTHS: Record<Locale, string[]> = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/** "2026-09" → "sep 2026" / "Sep 2026" */
export function formatMonth(ym: string, locale: Locale) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[locale][m - 1]} ${y}`;
}

export const dict = {
  es: {
    nav: { projects: "Proyectos", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "Contacto" },
    switchLang: "EN",
    switchLangLabel: "View in English",
    heroPill: "Desarrollador de software · Santo Domingo, RD",
    heroTitleA: "Antes de escribir una línea de código, ",
    heroTitleB: "diseño todo el sistema.",
    heroLead:
      "Soy Israel Vargas. Desarrollo extensiones de Business Central y aplicaciones .NET para empresas, y webs a la medida para negocios que necesitan clientes, no solo visitas.",
    ctaProjects: "Ver proyectos",
    ctaWhatsapp: "Escríbeme por WhatsApp",
    statusAvailable: "Disponible para proyectos freelance",
    statusNow: "Ahora",
    statusNowValue: "Programador Business Central en SCADOM",
    statusStack: "Stack",
    statusBase: "Base",
    statusBaseValue: "Santo Domingo, trabajo remoto",
    kpis: [
      { value: "4", label: "proyectos para clientes" },
      { value: "2", label: "sistemas propios con arquitectura documentada" },
      { value: "80+", label: "requerimientos en un solo diseño de e-commerce" },
      { value: "12", label: "certificaciones, diplomados y cursos" },
    ],
    projectsPill: "Proyectos",
    projectsTitleA: "Trabajo ",
    projectsTitleB: "real",
    projectsTitleC: ", con resultados",
    filterAll: "Todos",
    filterClients: "Clientes",
    filterSystems: "Sistemas",
    group: { cliente: "Cliente", sistema: "Sistema" },
    status: { online: "en línea", dev: "en desarrollo", done: "completado", prototype: "prototipo" },
    readCase: "Ver caso",
    experiencePill: "Experiencia",
    experienceTitle: "Dónde trabajo",
    downloadCv: "Descargar CV",
    educationPill: "Formación",
    educationTitle: "Certificaciones, diplomados y cursos",
    eduGroups: { certificaciones: "Certificaciones", diplomados: "Diplomados y programas", cursos: "Cursos" },
    expires: "vence",
    verify: "Verificar",
    completed: "completado",
    skillsPill: "Habilidades",
    skillsTitle: "Con qué construyo",
    contactTitleA: "¿Tu negocio necesita una web o un sistema ",
    contactTitleB: "hecho a su medida?",
    contactLead: "Cuéntame qué necesitas y te respondo con una propuesta clara: alcance, tiempos y costo.",
    whatsappMessage: "Hola Israel, vi tu portafolio y quiero hablar de un proyecto.",
    footer: "Santo Domingo, República Dominicana",
    back: "Volver a proyectos",
    caseProblem: "El reto",
    caseBuilt: "Lo que construí",
    caseArch: "Arquitectura",
    caseStack: "Stack",
    caseGallery: "Capturas",
    caseVisit: "Visitar sitio",
    caseNext: "Siguiente proyecto",
    caseCta: "¿Quieres algo parecido para tu negocio?",
  },
  en: {
    nav: { projects: "Projects", experience: "Experience", education: "Education", skills: "Skills", contact: "Contact" },
    switchLang: "ES",
    switchLangLabel: "Ver en español",
    heroPill: "Software developer · Santo Domingo, DR",
    heroTitleA: "Before I write a line of code, ",
    heroTitleB: "I design the whole system.",
    heroLead:
      "I'm Israel Vargas. I build Business Central extensions and .NET applications for companies, and custom websites for businesses that need customers, not just visits.",
    ctaProjects: "See projects",
    ctaWhatsapp: "Message me on WhatsApp",
    statusAvailable: "Available for freelance projects",
    statusNow: "Now",
    statusNowValue: "Business Central developer at SCADOM",
    statusStack: "Stack",
    statusBase: "Based in",
    statusBaseValue: "Santo Domingo, remote work",
    kpis: [
      { value: "4", label: "client projects" },
      { value: "2", label: "own systems with documented architecture" },
      { value: "80+", label: "requirements in a single e-commerce design" },
      { value: "12", label: "certifications, programs and courses" },
    ],
    projectsPill: "Projects",
    projectsTitleA: "",
    projectsTitleB: "Real work",
    projectsTitleC: ", with results",
    filterAll: "All",
    filterClients: "Clients",
    filterSystems: "Systems",
    group: { cliente: "Client", sistema: "System" },
    status: { online: "live", dev: "in development", done: "completed", prototype: "prototype" },
    readCase: "Read case study",
    experiencePill: "Experience",
    experienceTitle: "Where I work",
    downloadCv: "Download CV",
    educationPill: "Education",
    educationTitle: "Certifications, programs and courses",
    eduGroups: { certificaciones: "Certifications", diplomados: "Programs and degrees", cursos: "Courses" },
    expires: "expires",
    verify: "Verify",
    completed: "completed",
    skillsPill: "Skills",
    skillsTitle: "What I build with",
    contactTitleA: "Does your business need a website or a system ",
    contactTitleB: "built for it?",
    contactLead: "Tell me what you need and I'll reply with a clear proposal: scope, timeline and cost.",
    whatsappMessage: "Hi Israel, I saw your portfolio and I'd like to talk about a project.",
    footer: "Santo Domingo, Dominican Republic",
    back: "Back to projects",
    caseProblem: "The challenge",
    caseBuilt: "What I built",
    caseArch: "Architecture",
    caseStack: "Stack",
    caseGallery: "Screenshots",
    caseVisit: "Visit site",
    caseNext: "Next project",
    caseCta: "Want something similar for your business?",
  },
} as const;

export type Dict = (typeof dict)[Locale];
