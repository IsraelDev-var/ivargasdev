import type { L } from "@/lib/i18n";
import { galerias, type Imagen } from "./galerias";

export type ProjectVisualKind = "map" | "fx" | "calc" | "chat" | "arch" | "layers" | "bars";

export type Project = {
  slug: string;
  nombre: string;
  grupo: "cliente" | "sistema";
  estado: "online" | "dev" | "done" | "prototype";
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
  /** Capturas del proyecto (se completa desde galerias.ts). */
  galeria?: Imagen[];
  /** Imagen 16:10 para la tarjeta. */
  portada?: string;
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
    slug: "unique",
    nombre: "U.NIQUE",
    grupo: "cliente",
    estado: "prototype",
    tipo: { es: "E-commerce de moda · EE. UU.", en: "Fashion e-commerce · USA" },
    resumen: {
      es: "Tienda online para una marca de ropa en Estados Unidos: un prototipo navegable de 28 pantallas y la arquitectura para que cada pedido pagado vaya solo a producción con Printify.",
      en: "Online store for a US clothing brand: a 28-screen clickable prototype and the architecture that sends every paid order straight to production with Printify.",
    },
    reto: {
      es: "En moda, la foto y la prenda venden; todo lo demás tiene que quitarse del camino. Detrás de la tienda hay un sistema que maneja dinero: ¿qué pasa si el pago se confirma dos veces, si el proveedor no responde o si el cliente cancela 10 minutos después de pagar? Lo difícil no es que funcione, es que nunca cobre dos veces ni pierda un pedido.",
      en: "In fashion, the photo and the garment sell; everything else has to get out of the way. Behind the store is a system that handles money: what if a payment is confirmed twice, the supplier doesn't respond, or the customer cancels 10 minutes after paying? The hard part isn't making it work, it's never charging twice or losing an order.",
    },
    funcionalidades: [
      {
        titulo: { es: "Sistema de diseño", en: "Design system" },
        texto: { es: "Paleta neutra, tipografía editorial y cero adornos.", en: "Neutral palette, editorial typography and no ornaments." },
      },
      {
        titulo: { es: "Colección", en: "Collection" },
        texto: {
          es: "La foto cambia al pasar el mouse y “Quick add” agrega sin salir de la página.",
          en: "Photos swap on hover and “Quick add” adds to the bag without leaving the page.",
        },
      },
      {
        titulo: { es: "Producto", en: "Product" },
        texto: {
          es: "Galería grande, talla y color visuales, y reseñas solo de compradores verificados.",
          en: "Large gallery, visual size and color pickers, and reviews from verified buyers only.",
        },
      },
      {
        titulo: { es: "Checkout", en: "Checkout" },
        texto: {
          es: "Una sola página, compra como invitado y pago seguro con Stripe.",
          en: "One page, guest checkout and secure payment with Stripe.",
        },
      },
      {
        titulo: { es: "Automatización", en: "Automation" },
        texto: {
          es: "Cada pedido pagado va solo a Printify, se produce bajo pedido y el tracking llega al cliente.",
          en: "Every paid order goes straight to Printify, is made on demand and tracking reaches the customer.",
        },
      },
      {
        titulo: { es: "Móvil", en: "Mobile" },
        texto: {
          es: "Pensada para el pulgar, con el botón de compra siempre visible.",
          en: "Built for the thumb, with the buy button always visible.",
        },
      },
    ],
    arquitectura: {
      texto: {
        es: "Antes de programar documenté más de 80 requerimientos, la arquitectura, el modelo de datos, un plan de 16 semanas con sus riesgos y cómo escala el sistema cuando crecen las ventas.",
        en: "Before coding I documented 80+ requirements, the architecture, the data model, a 16-week plan with its risks and how the system scales as sales grow.",
      },
      puntos: [
        { es: "Cliente → Next.js (tienda + admin) → API ASP.NET Core", en: "Client → Next.js (store + admin) → ASP.NET Core API" },
        { es: "Stripe confirma el pago por webhook; cada operación es idempotente", en: "Stripe confirms payment via webhook; every operation is idempotent" },
        { es: "Worker → Printify con ventana de retención para cancelar a tiempo", en: "Worker → Printify with a hold window to allow cancellations" },
        { es: "Reconciliación periódica como red de seguridad entre pagos y pedidos", en: "Periodic reconciliation as a safety net between payments and orders" },
        { es: "PostgreSQL como fuente de verdad; admin con roles y MFA", en: "PostgreSQL as the source of truth; admin with roles and MFA" },
      ],
    },
    cifras: [
      { valor: "28", etiqueta: { es: "pantallas navegables", en: "clickable screens" } },
      { valor: "80+", etiqueta: { es: "requerimientos definidos", en: "requirements defined" } },
      { valor: "16", etiqueta: { es: "semanas de plan", en: "weeks of planning" } },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ASP.NET Core", "PostgreSQL", "Stripe", "Printify"],
    visual: "arch",
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
];

export const proyectosPublicados: Project[] = proyectos
  .filter((p) => !p.borrador)
  .map((p) => {
    const galeria = galerias[p.slug];
    if (!galeria) return p;
    // Los diagramas no funcionan como portada de tarjeta: en ese caso se usa la ilustración del proyecto.
    const portada = galeria[0].tipo === "diagrama" ? undefined : `/proyectos/${p.slug}/portada-card.webp`;
    return { ...p, galeria, portada };
  });
