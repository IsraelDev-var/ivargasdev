import type { L } from "@/lib/i18n";

export type ProjectVisualKind = "map" | "fx" | "calc" | "chat" | "arch" | "layers" | "bars";

export type Project = {
  slug: string;
  nombre: string;
  grupo: "cliente" | "sistema";
  estado: "online" | "dev" | "done" | "design";
  tipo: L;
  resumen: L;
  reto: L;
  funcionalidades: { titulo: L; texto: L }[];
  arquitectura?: { texto: L; puntos: L[] };
  cifras: { valor: string; etiqueta: L }[];
  stack: string[];
  url?: string;
  visual: ProjectVisualKind;
  destacado?: boolean;
  /** Oculto en el sitio hasta completar su contenido. */
  borrador?: boolean;
};

export const proyectos: Project[] = [
  {
    slug: "energymap",
    nombre: "EnergyMap",
    grupo: "sistema",
    estado: "dev",
    tipo: { es: "Proyecto final", en: "Capstone project" },
    resumen: {
      es: "Mapa de capacidad eléctrica por transformador en República Dominicana, con solicitudes de conexión y medición neta 100% digitales.",
      en: "Electrical capacity map by transformer in the Dominican Republic, with fully digital connection and net-metering requests.",
    },
    reto: {
      es: "Cada conexión eléctrica nueva depende de un transformador, y hoy no hay una forma pública de saber si tiene capacidad. EnergyMap muestra esa disponibilidad y lleva el trámite de conexión y medición neta en línea, siguiendo el proceso de la SIE.",
      en: "Every new electrical connection depends on a transformer, and there is no public way to know whether it has capacity. EnergyMap shows that availability and moves connection and net-metering requests online, following the SIE process.",
    },
    funcionalidades: [
      {
        titulo: { es: "Mapa de transformadores", en: "Transformer map" },
        texto: {
          es: "Disponibilidad en kVA con cuatro estados: disponible, condicionada, crítica o saturada.",
          en: "Availability in kVA with four states: available, conditional, critical or saturated.",
        },
      },
      {
        titulo: { es: "Solicitudes digitales", en: "Digital requests" },
        texto: {
          es: "Solicitudes de conexión y de medición neta completamente en línea, según el proceso de la SIE.",
          en: "Connection and net-metering requests fully online, following the SIE process.",
        },
      },
      {
        titulo: { es: "Cinco roles en un flujo", en: "Five roles, one flow" },
        texto: {
          es: "Cliente, instaladora, ingeniero, distribuidora y administrador trabajan sobre la misma solicitud.",
          en: "Customer, installer, engineer, utility and admin all work on the same request.",
        },
      },
      {
        titulo: { es: "Simulador solar", en: "Solar simulator" },
        texto: {
          es: "Simulador informativo de rentabilidad para sistemas fotovoltaicos.",
          en: "Informational profitability simulator for solar systems.",
        },
      },
    ],
    arquitectura: {
      texto: {
        es: "La primera etapa fue de cimientos: análisis, requerimientos (v1.2) y el modelo de dominio, antes de construir pantallas.",
        en: "The first stage laid the foundations: analysis, requirements (v1.2) and the domain model, before building any screens.",
      },
      puntos: [
        { es: "Clean Architecture con modelo de dominio propio", en: "Clean Architecture with its own domain model" },
        { es: "CQRS con MediatR para separar lecturas y escrituras", en: "CQRS with MediatR to separate reads and writes" },
        { es: "Autenticación JWT con roles", en: "JWT authentication with roles" },
        { es: "PostgreSQL + PostGIS para las consultas geográficas", en: "PostgreSQL + PostGIS for geographic queries" },
      ],
    },
    cifras: [
      { valor: "5", etiqueta: { es: "roles en un mismo flujo", en: "roles in one flow" } },
      { valor: "4", etiqueta: { es: "estados de capacidad", en: "capacity states" } },
      { valor: "v1.2", etiqueta: { es: "documento de requerimientos", en: "requirements document" } },
    ],
    stack: [".NET 9", "ASP.NET Core", "CQRS (MediatR)", "EF Core", "PostgreSQL", "PostGIS", "JWT"],
    visual: "map",
    destacado: true,
  },
  {
    slug: "telaviv-business-group",
    nombre: "TEL’AVIV Business Group",
    grupo: "cliente",
    estado: "online",
    tipo: { es: "Web corporativa bilingüe", en: "Bilingual corporate website" },
    resumen: {
      es: "Web bilingüe para una firma de consultoría empresarial y tecnología, con 30 servicios filtrables y la tasa de cambio actualizada en el servidor.",
      en: "Bilingual website for a business and technology consulting firm, with 30 filterable services and exchange rates updated on the server.",
    },
    reto: {
      es: "Una empresa que ofrece finanzas y tecnología necesita una web que transmita orden y confianza desde el primer segundo, en español y en inglés.",
      en: "A company offering finance and technology services needs a website that conveys order and trust from the first second, in Spanish and English.",
    },
    funcionalidades: [
      {
        titulo: { es: "Catálogo de 30 servicios", en: "Catalog of 30 services" },
        texto: { es: "Dos áreas de servicio, con filtros y buscador.", en: "Two service areas, with filters and search." },
      },
      {
        titulo: { es: "Tasa de cambio en vivo", en: "Live exchange rates" },
        texto: {
          es: "USD, EUR, CAD y GBP en pesos, con gráfico de 30 días y convertidor. Se actualiza sola en el servidor: el visitante no espera y Google la lee en la página.",
          en: "USD, EUR, CAD and GBP in pesos, with a 30-day chart and converter. It updates itself on the server, so visitors don't wait and Google can read it.",
        },
      },
      {
        titulo: { es: "Artículos", en: "Articles" },
        texto: {
          es: "Impuestos, finanzas y tecnología en RD, con preguntas frecuentes preparadas para Google.",
          en: "Taxes, finance and technology in the DR, with FAQs structured for Google.",
        },
      },
      {
        titulo: { es: "Sectores", en: "Industries" },
        texto: { es: "Soluciones organizadas por tipo de negocio.", en: "Solutions organized by type of business." },
      },
      {
        titulo: { es: "Una ficha por servicio", en: "One page per service" },
        texto: {
          es: "Qué incluye, a quién va dirigido y cómo contactar.",
          en: "What it includes, who it's for and how to get in touch.",
        },
      },
      {
        titulo: { es: "Bilingüe", en: "Bilingual" },
        texto: {
          es: "Cada página en español y en inglés, con su propia URL.",
          en: "Every page in Spanish and English, each with its own URL.",
        },
      },
    ],
    cifras: [
      { valor: "30", etiqueta: { es: "servicios en catálogo", en: "services in the catalog" } },
      { valor: "4", etiqueta: { es: "monedas en vivo", en: "live currencies" } },
      { valor: "2", etiqueta: { es: "idiomas con URL propia", en: "languages, each with its own URL" } },
    ],
    stack: ["Next.js", "React", "ISR", "SEO técnico"],
    url: "https://telavivb2b.com",
    visual: "fx",
    destacado: true,
  },
  {
    slug: "ecovatio-energy",
    nombre: "Ecovatio Energy",
    grupo: "cliente",
    estado: "online",
    tipo: { es: "Web de energía solar", en: "Solar energy website" },
    resumen: {
      es: "Web para una empresa de paneles solares que responde “¿cuánto me voy a ahorrar?” con una calculadora, un mapa de instalaciones y proyectos reales.",
      en: "Website for a solar company that answers “how much will I save?” with a calculator, an installation map and real projects.",
    },
    reto: {
      es: "Todo cliente de energía solar tiene una sola pregunta en la cabeza: cuánto se va a ahorrar. La web se la responde antes de que la haga.",
      en: "Every solar customer has one question in mind: how much they will save. The website answers it before they ask.",
    },
    funcionalidades: [
      {
        titulo: { es: "Proyectos reales", en: "Real projects" },
        texto: {
          es: "Cada instalación con su potencia y número de paneles, con filtros.",
          en: "Each installation with its capacity and panel count, with filters.",
        },
      },
      {
        titulo: { es: "Calculadora de ahorro", en: "Savings calculator" },
        texto: {
          es: "Nueva factura, ahorro anual y retorno de inversión al instante.",
          en: "New bill, annual savings and payback period, instantly.",
        },
      },
      {
        titulo: { es: "Mapa interactivo", en: "Interactive map" },
        texto: { es: "Las instalaciones marcadas en todo el país.", en: "Installations marked across the country." },
      },
      {
        titulo: { es: "Proceso en 8 pasos", en: "8-step process" },
        texto: {
          es: "El cliente sabe qué va a pasar antes de cotizar.",
          en: "Customers know what will happen before they request a quote.",
        },
      },
      {
        titulo: { es: "Catálogo de equipos", en: "Equipment catalog" },
        texto: { es: "Paneles, baterías, inversores y estructuras.", en: "Panels, batteries, inverters and mounting structures." },
      },
      {
        titulo: { es: "Cotización + WhatsApp", en: "Quote + WhatsApp" },
        texto: { es: "Formulario corto o chat directo, como prefiera el cliente.", en: "A short form or direct chat, whichever the customer prefers." },
      },
    ],
    cifras: [
      { valor: "8", etiqueta: { es: "pasos del proceso, explicados", en: "process steps, explained" } },
      { valor: "4", etiqueta: { es: "categorías de equipos", en: "equipment categories" } },
      { valor: "2", etiqueta: { es: "vías de cotización", en: "ways to request a quote" } },
    ],
    stack: ["Calculadora de ahorro", "Mapa interactivo", "WhatsApp"],
    url: "https://ecovatioenergy.com",
    visual: "calc",
  },
  {
    slug: "ev-soluciones",
    nombre: "E&V Soluciones Integrales",
    grupo: "cliente",
    estado: "online",
    tipo: { es: "Web de servicios técnicos", en: "Technical services website" },
    resumen: {
      es: "Web para una empresa de electricidad, climatización, ventanas y mantenimiento, con tienda sin carrito y cotización por WhatsApp.",
      en: "Website for an electrical, HVAC, windows and maintenance company, with a cart-free store and WhatsApp quotes.",
    },
    reto: {
      es: "Un negocio de servicios no necesita una web complicada. Necesita que el cliente entienda qué hace y que pedir una cotización sea fácil.",
      en: "A service business doesn't need a complicated website. It needs customers to understand what it does and to make requesting a quote easy.",
    },
    funcionalidades: [
      {
        titulo: { es: "4 servicios", en: "4 services" },
        texto: { es: "Cada uno con lo que incluye.", en: "Each one with what it includes." },
      },
      {
        titulo: { es: "Una página por servicio", en: "One page per service" },
        texto: {
          es: "Alcance, preguntas frecuentes y productos relacionados, pensada para Google.",
          en: "Scope, FAQs and related products, built for Google.",
        },
      },
      {
        titulo: { es: "Tienda sin carrito", en: "Cart-free store" },
        texto: {
          es: "8 categorías: el cliente arma su consulta y le confirman precio y disponibilidad.",
          en: "8 categories: customers build an inquiry and get price and availability confirmed.",
        },
      },
      {
        titulo: { es: "Cotización por WhatsApp", en: "WhatsApp quotes" },
        texto: {
          es: "Elige el servicio, cuenta su proyecto y el mensaje llega listo.",
          en: "Pick the service, describe the project and the message arrives ready to answer.",
        },
      },
      {
        titulo: { es: "Proceso en 3 pasos", en: "3-step process" },
        texto: { es: "Sin vueltas.", en: "No detours." },
      },
      {
        titulo: { es: "Ligera y rápida", en: "Light and fast" },
        texto: {
          es: "Sitio estático en Cloudflare, imágenes WebP y caché de 1 año.",
          en: "Static site on Cloudflare, WebP images and one-year caching.",
        },
      },
    ],
    cifras: [
      { valor: "4", etiqueta: { es: "servicios con página propia", en: "services with their own page" } },
      { valor: "8", etiqueta: { es: "categorías en la tienda", en: "store categories" } },
      { valor: "1 año", etiqueta: { es: "de caché en Cloudflare", en: "of Cloudflare caching" } },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Python", "Cloudflare Workers"],
    url: "https://evsoluciones.com",
    visual: "chat",
  },
  {
    slug: "tienda-print-on-demand",
    nombre: "Tienda print-on-demand",
    grupo: "sistema",
    estado: "design",
    tipo: { es: "E-commerce a medida", en: "Custom e-commerce" },
    resumen: {
      es: "El comprador paga, el pedido va solo a producción y recibe su tracking sin que nadie toque nada. Más de 80 requerimientos y un plan de 16 semanas.",
      en: "The buyer pays, the order goes straight to production and they get tracking without anyone touching it. 80+ requirements and a 16-week plan.",
    },
    reto: {
      es: "Suena simple, pero no lo es. ¿Qué pasa si el pago se confirma dos veces? ¿Si el proveedor no responde? ¿Si el cliente quiere cancelar 10 minutos después de pagar? En un sistema que maneja dinero, lo difícil es que nunca cobre dos veces ni pierda un pedido.",
      en: "It sounds simple, but it isn't. What if a payment is confirmed twice? What if the supplier doesn't respond? What if the customer cancels 10 minutes after paying? In a system that handles money, the hard part is never charging twice or losing an order.",
    },
    funcionalidades: [
      {
        titulo: { es: "Requerimientos", en: "Requirements" },
        texto: { es: "Más de 80 funcionalidades y reglas de negocio.", en: "More than 80 features and business rules." },
      },
      {
        titulo: { es: "Arquitectura", en: "Architecture" },
        texto: {
          es: "Cómo se conectan la tienda, la API, los pagos y la producción.",
          en: "How the store, the API, payments and production connect.",
        },
      },
      {
        titulo: { es: "Modelo de datos", en: "Data model" },
        texto: { es: "Cada tabla de la base de datos.", en: "Every table in the database." },
      },
      {
        titulo: { es: "Plan y riesgos", en: "Plan and risks" },
        texto: {
          es: "16 semanas, con lo que puede salir mal y cómo evitarlo.",
          en: "16 weeks, with what can go wrong and how to prevent it.",
        },
      },
      {
        titulo: { es: "Escalabilidad", en: "Scalability" },
        texto: {
          es: "Cómo crece el sistema cuando crecen las ventas.",
          en: "How the system grows as sales grow.",
        },
      },
    ],
    arquitectura: {
      texto: {
        es: "La tienda en Next.js habla con una API en .NET. Stripe confirma el pago por webhook, un worker procesa la cola y envía el pedido a Printify, que devuelve el tracking.",
        en: "The Next.js store talks to a .NET API. Stripe confirms payment via webhook, a worker processes the queue and sends the order to Printify, which returns tracking.",
      },
      puntos: [
        { es: "Cliente → Next.js (tienda + admin) → API .NET", en: "Client → Next.js (store + admin) → .NET API" },
        { es: "Stripe → webhook de pago → API", en: "Stripe → payment webhook → API" },
        { es: "API → cola → Worker → Printify (producción y envío)", en: "API → queue → Worker → Printify (production and shipping)" },
        { es: "PostgreSQL como fuente de verdad de pedidos y pagos", en: "PostgreSQL as the source of truth for orders and payments" },
      ],
    },
    cifras: [
      { valor: "80+", etiqueta: { es: "requerimientos definidos", en: "requirements defined" } },
      { valor: "5", etiqueta: { es: "diagramas del sistema", en: "system diagrams" } },
      { valor: "16", etiqueta: { es: "semanas de plan", en: "weeks of planning" } },
    ],
    stack: ["Next.js", "ASP.NET Core", "PostgreSQL", "Stripe", "Printify"],
    visual: "arch",
  },
  {
    slug: "medicion-neta-solar",
    nombre: "Medición Neta Solar",
    grupo: "sistema",
    estado: "done",
    tipo: { es: "Plataforma .NET + Azure", en: ".NET + Azure platform" },
    resumen: {
      es: "Control de medición neta para sistemas fotovoltaicos: producción, consumo y excedentes, con informes mensuales automáticos.",
      en: "Net-metering control for solar systems: production, consumption and surplus, with automatic monthly reports.",
    },
    reto: {
      es: "Quien tiene paneles solares necesita saber cuánto produce, cuánto consume y cuánto le queda a favor cada mes, sin hacer cálculos a mano.",
      en: "Solar owners need to know how much they produce, how much they consume and how much surplus they have each month, without doing the math by hand.",
    },
    funcionalidades: [
      {
        titulo: { es: "Registro de energía", en: "Energy records" },
        texto: { es: "Producción, consumo y balance energético.", en: "Production, consumption and energy balance." },
      },
      {
        titulo: { es: "Cálculo de excedentes", en: "Surplus calculation" },
        texto: { es: "Los excedentes se calculan automáticamente.", en: "Surplus is calculated automatically." },
      },
      {
        titulo: { es: "Informes mensuales", en: "Monthly reports" },
        texto: { es: "Reportes generados cada mes.", en: "Reports generated every month." },
      },
      {
        titulo: { es: "API segura", en: "Secure API" },
        texto: { es: "API REST con autenticación JWT.", en: "REST API with JWT authentication." },
      },
    ],
    arquitectura: {
      texto: {
        es: "Desplegada en Azure con servicios PaaS, bajo Clean Architecture y principios SOLID.",
        en: "Deployed on Azure using PaaS services, following Clean Architecture and SOLID principles.",
      },
      puntos: [
        { es: "Azure App Service para la API", en: "Azure App Service for the API" },
        { es: "Azure SQL Database para los datos", en: "Azure SQL Database for data" },
        { es: "Azure Storage para archivos e informes", en: "Azure Storage for files and reports" },
        { es: "Entity Framework Core como capa de datos", en: "Entity Framework Core as the data layer" },
      ],
    },
    cifras: [
      { valor: "3", etiqueta: { es: "servicios de Azure", en: "Azure services" } },
      { valor: "JWT", etiqueta: { es: "autenticación de la API", en: "API authentication" } },
      { valor: "SOLID", etiqueta: { es: "con Clean Architecture", en: "with Clean Architecture" } },
    ],
    stack: ["ASP.NET Core", "C#", "EF Core", "Azure", "JWT"],
    visual: "bars",
  },
  {
    slug: "medicita",
    nombre: "MediCita",
    grupo: "sistema",
    estado: "done",
    tipo: { es: "Sistema web · ITLA", en: "Web system · ITLA" },
    resumen: {
      es: "Gestión de citas médicas con arquitectura documentada en el modelo 4+1. Un índice único filtrado garantiza que dos citas nunca ocupen el mismo cupo.",
      en: "Medical appointment management with architecture documented in the 4+1 model. A filtered unique index guarantees two appointments never take the same slot.",
    },
    reto: {
      es: "La regla “dos citas no pueden ocupar el mismo cupo” parece fácil, pero entre consultar y guardar puede colarse otra petición. Validarla solo en el código no basta.",
      en: "The rule “two appointments can't share a slot” looks easy, but another request can sneak in between checking and saving. Validating it in code alone isn't enough.",
    },
    funcionalidades: [
      {
        titulo: { es: "Modelo 4+1", en: "4+1 model" },
        texto: {
          es: "Vistas lógica, de desarrollo, de procesos y física, validadas con escenarios.",
          en: "Logical, development, process and physical views, validated with scenarios.",
        },
      },
      {
        titulo: { es: "Integridad del cupo", en: "Slot integrity" },
        texto: {
          es: "Índice único filtrado sobre médico y hora, solo para citas pendientes o confirmadas. Una cita cancelada libera el cupo.",
          en: "Filtered unique index on doctor and time, only for pending or confirmed appointments. A cancelled appointment frees the slot.",
        },
      },
      {
        titulo: { es: "Estados controlados", en: "Controlled states" },
        texto: {
          es: "Una cita solo cambia con Confirmar(), Cancelar() o Reprogramar(), que validan cada transición.",
          en: "An appointment only changes through Confirm(), Cancel() or Reschedule(), which validate each transition.",
        },
      },
      {
        titulo: { es: "Notificaciones", en: "Notifications" },
        texto: {
          es: "Recordatorios por correo y SMS enviados por un worker; agregar WhatsApp no obliga a tocarlo.",
          en: "Email and SMS reminders sent by a worker; adding WhatsApp doesn't require changing it.",
        },
      },
    ],
    arquitectura: {
      texto: {
        es: "Arquitectura por capas: el dominio no depende de nadie y la infraestructura implementa las interfaces de la capa de aplicación.",
        en: "Layered architecture: the domain depends on nothing and infrastructure implements the application layer's interfaces.",
      },
      puntos: [
        { es: "Domain: entidades y reglas de negocio", en: "Domain: entities and business rules" },
        { es: "Application: casos de uso, DTOs e interfaces", en: "Application: use cases, DTOs and interfaces" },
        { es: "Infrastructure: EF Core, JWT y canales de envío", en: "Infrastructure: EF Core, JWT and delivery channels" },
        { es: "Patrones Repository, Observer, Strategy e inyección de dependencias", en: "Repository, Observer, Strategy and dependency injection patterns" },
      ],
    },
    cifras: [
      { valor: "4+1", etiqueta: { es: "vistas de arquitectura", en: "architecture views" } },
      { valor: "4", etiqueta: { es: "patrones de diseño", en: "design patterns" } },
      { valor: "3", etiqueta: { es: "roles de usuario", en: "user roles" } },
    ],
    stack: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "JWT"],
    visual: "layers",
  },
  {
    slug: "unique",
    nombre: "Unique",
    grupo: "cliente",
    estado: "online",
    tipo: { es: "Web de cliente", en: "Client website" },
    resumen: { es: "Pendiente de completar.", en: "To be completed." },
    reto: { es: "", en: "" },
    funcionalidades: [],
    cifras: [],
    stack: [],
    visual: "chat",
    borrador: true,
  },
];

export const proyectosPublicados = proyectos.filter((p) => !p.borrador);
