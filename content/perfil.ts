import type { L } from "@/lib/i18n";

export const perfil = {
  nombre: "Israel Vargas Castro",
  rol: { es: "Desarrollador de software", en: "Software developer" } as L,
  descripcion: {
    es: "Desarrollador de Business Central (AL) y .NET en Santo Domingo. Webs y sistemas a la medida para empresas y negocios.",
    en: "Business Central (AL) and .NET developer in Santo Domingo. Custom websites and systems for companies and businesses.",
  } as L,
  stackCorto: "AL · C# / .NET · Next.js · SQL",
  cv: "/cv/israel-vargas-castro-cv.pdf",
  contacto: {
    whatsapp: "18296619526",
    telefono: "829-661-9526",
    email: "israel230804vc@gmail.com",
    instagram: "https://www.instagram.com/ivargasdev/",
    github: "https://github.com/IsraelDev-var",
    linkedin: "https://www.linkedin.com/in/israel-vargas-castro-09911a251/",
  },
};

export type ExperienceItem = {
  empresa: string;
  detalle: L;
  cargo: L;
  periodo: L;
  logros: { tag: string; texto: L }[];
};

export const experiencia: ExperienceItem[] = [
  {
    empresa: "SCADOM",
    detalle: { es: "Scania Dominicana", en: "Scania Dominicana" },
    cargo: { es: "Programador Business Central", en: "Business Central Developer" },
    periodo: { es: "may 2025 – hoy", en: "May 2025 – present" },
    logros: [
      {
        tag: "AL",
        texto: {
          es: "Extensiones para ventas, compras, facturación e inventario en dos compañías del grupo.",
          en: "Extensions for sales, purchasing, invoicing and inventory across two group companies.",
        },
      },
      {
        tag: "RDLC",
        texto: {
          es: "Reportes empresariales y multiempresa con vistas SQL y tablas vinculadas.",
          en: "Business and multi-company reports built on SQL views and linked tables.",
        },
      },
      {
        tag: "API",
        texto: {
          es: "Integración de Business Central con sistemas externos mediante APIs REST y servicios en C# (.NET) y Node.js.",
          en: "Integration of Business Central with external systems through REST APIs and services in C# (.NET) and Node.js.",
        },
      },
      {
        tag: "SQL",
        texto: {
          es: "Optimización de consultas de reportes críticos y mantenimiento de bases de datos SQL Server.",
          en: "Query optimization for critical reports and SQL Server database maintenance.",
        },
      },
      {
        tag: "TEST",
        texto: {
          es: "Pruebas automatizadas con AL Test Framework antes de cada despliegue.",
          en: "Automated tests with the AL Test Framework before every deployment.",
        },
      },
    ],
  },
  {
    empresa: "i/dev",
    detalle: { es: "Freelance", en: "Freelance" },
    cargo: { es: "Webs y sistemas a la medida", en: "Custom websites and systems" },
    periodo: { es: "2026 – hoy", en: "2026 – present" },
    logros: [
      {
        tag: "WEB",
        texto: {
          es: "Webs para TEL’AVIV Business Group, Ecovatio Energy, E&V Soluciones Integrales y Unique.",
          en: "Websites for TEL’AVIV Business Group, Ecovatio Energy, E&V Soluciones Integrales and Unique.",
        },
      },
      {
        tag: "ARQ",
        texto: {
          es: "Diseño de sistemas antes de programar: requerimientos, modelo de datos, riesgos y plan.",
          en: "System design before coding: requirements, data model, risks and plan.",
        },
      },
    ],
  },
];

export const habilidades: { titulo: L; items: string[] }[] = [
  { titulo: { es: "ERP y backend", en: "ERP and backend" }, items: ["Business Central (AL)", "C#", "ASP.NET Core", "Node.js", "Express", "CQRS"] },
  { titulo: { es: "Frontend", en: "Frontend" }, items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"] },
  { titulo: { es: "Datos", en: "Data" }, items: ["SQL Server (T-SQL)", "PostgreSQL", "PostGIS", "MySQL", "MongoDB", "EF Core", "Prisma"] },
  { titulo: { es: "Arquitectura", en: "Architecture" }, items: ["Clean Architecture", "SOLID", "Modelo 4+1", "Patrones de diseño", "Microservicios"] },
  { titulo: { es: "Cloud y DevOps", en: "Cloud and DevOps" }, items: ["Azure", "Cloudflare", "Vercel", "Git / GitHub", "CI/CD"] },
  { titulo: { es: "Integraciones y calidad", en: "Integrations and quality" }, items: ["APIs REST", "JWT", "Stripe", "WhatsApp", "AL Test Framework", "Scrum / Jira"] },
];
