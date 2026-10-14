import type { L } from "@/lib/i18n";

export type Imagen = {
  src: string;
  /** desktop: captura 16:10 · mobile: captura de teléfono · diagrama: fondo blanco · vertical: 9:16 */
  tipo: "desktop" | "mobile" | "diagrama" | "vertical";
  w: number;
  h: number;
  alt: L;
};

const img = (slug: string, name: string, tipo: Imagen["tipo"], w: number, h: number, es: string, en: string): Imagen => ({
  src: `/proyectos/${slug}/${name}.webp`,
  tipo,
  w,
  h,
  alt: { es, en },
});

const D = [1600, 1000] as const;
const M = [560, 1212] as const;

/** Capturas reales de cada proyecto. La portada de la tarjeta es `/proyectos/<slug>/portada-card.webp`. */
export const galerias: Record<string, Imagen[]> = {
  "telaviv-business-group": [
    img("telaviv-business-group", "inicio", "desktop", ...D, "Portada de TEL’AVIV Business Group: Tecnología que ordena, finanzas que crecen", "TEL’AVIV Business Group home page"),
    img("telaviv-business-group", "tasa", "desktop", ...D, "Tasa de cambio en vivo de USD, EUR, CAD y GBP con convertidor", "Live USD, EUR, CAD and GBP exchange rates with converter"),
    img("telaviv-business-group", "catalogo", "desktop", ...D, "Catálogo de servicios con filtros y buscador", "Service catalog with filters and search"),
    img("telaviv-business-group", "ficha", "desktop", ...D, "Ficha del servicio Desarrollo de sistemas web a medida", "Service page for custom web systems"),
    img("telaviv-business-group", "m-inicio", "mobile", ...M, "Portada en el móvil", "Home page on mobile"),
    img("telaviv-business-group", "m-tasa", "mobile", ...M, "Tasa de cambio en el móvil", "Exchange rates on mobile"),
    img("telaviv-business-group", "m-en", "mobile", ...M, "Versión en inglés en el móvil", "English version on mobile"),
  ],
  "ecovatio-energy": [
    img("ecovatio-energy", "inicio", "desktop", ...D, "Portada de Ecovatio Energy: Paneles solares en República Dominicana", "Ecovatio Energy home page"),
    img("ecovatio-energy", "calculadora", "desktop", ...D, "Calculadora de ahorro con la nueva factura estimada", "Savings calculator with the estimated new bill"),
    img("ecovatio-energy", "proyectos", "desktop", ...D, "Instalaciones reales con filtros por tipo", "Real installations with filters"),
    img("ecovatio-energy", "proceso", "desktop", ...D, "Proceso de la inspección a la puesta en marcha", "Process from inspection to commissioning"),
    img("ecovatio-energy", "m-calc-resultado", "mobile", ...M, "Resultado de la calculadora en el móvil", "Calculator result on mobile"),
    img("ecovatio-energy", "m-proyectos", "mobile", ...M, "Proyectos en el móvil", "Projects on mobile"),
    img("ecovatio-energy", "m-contacto", "mobile", ...M, "Cotización en el móvil", "Quote request on mobile"),
  ],
  "ev-soluciones": [
    img("ev-soluciones", "inicio", "desktop", ...D, "Portada de E&V Soluciones Integrales: Conectamos tu confort", "E&V Soluciones Integrales home page"),
    img("ev-soluciones", "servicios", "desktop", ...D, "Los cuatro servicios con lo que incluye cada uno", "The four services and what each includes"),
    img("ev-soluciones", "tienda", "desktop", ...D, "Tienda sin carrito por categorías", "Cart-free store by category"),
    img("ev-soluciones", "consulta", "desktop", ...D, "Consulta de productos que se envía por WhatsApp", "Product inquiry sent through WhatsApp"),
    img("ev-soluciones", "m-inicio", "mobile", ...M, "Portada en el móvil", "Home page on mobile"),
    img("ev-soluciones", "m-catalogo", "mobile", ...M, "Catálogo en el móvil", "Catalog on mobile"),
    img("ev-soluciones", "m-consulta", "mobile", ...M, "Consulta en el móvil", "Inquiry on mobile"),
  ],
  unique: [
    img("unique", "inicio", "desktop", 1440, 900, "Portada de la tienda U.NIQUE: Designed for everyday expression", "U.NIQUE store home page"),
    img("unique", "coleccion", "desktop", 1440, 900, "Colección de hombre con filtros y Quick add", "Men's collection with filters and Quick add"),
    img("unique", "producto", "desktop", 1440, 900, "Página de producto con galería, color y talla", "Product page with gallery, color and size"),
    img("unique", "checkout", "desktop", 1440, 900, "Checkout en una sola página", "One-page checkout"),
    img("unique", "m-inicio", "mobile", ...M, "Portada en el móvil", "Home page on mobile"),
    img("unique", "m-producto", "mobile", ...M, "Producto en el móvil con el botón de compra visible", "Product on mobile with the buy button always visible"),
    img("unique", "m-seguimiento", "mobile", ...M, "Seguimiento del pedido en el móvil", "Order tracking on mobile"),
    img("unique", "arquitectura", "diagrama", 1600, 1360, "Diagrama de arquitectura: Next.js, API ASP.NET Core, PostgreSQL, Stripe, worker y Printify", "Architecture diagram: Next.js, ASP.NET Core API, PostgreSQL, Stripe, worker and Printify"),
    img("unique", "estados-pedido", "diagrama", 1600, 1186, "Máquina de estados del pedido", "Order state machine"),
  ],
  energymap: [
    img("energymap", "portada", "vertical", 720, 1280, "EnergyMap: mapa de capacidad eléctrica de República Dominicana", "EnergyMap: electrical capacity map of the Dominican Republic"),
    img("energymap", "capacidad", "vertical", 720, 1280, "Disponibilidad de los transformadores en kVA", "Transformer availability in kVA"),
    img("energymap", "roles", "vertical", 720, 1280, "Cinco roles en un solo flujo", "Five roles in a single flow"),
  ],
  medicita: [
    img("medicita", "capas", "diagrama", 1600, 1259, "Vista de desarrollo: organización en capas", "Development view: layered organization"),
    img("medicita", "clases", "diagrama", 1249, 1054, "Vista lógica: diagrama de clases del dominio", "Logical view: domain class diagram"),
    img("medicita", "entidad-relacion", "diagrama", 1249, 737, "Modelo entidad-relación con el índice único filtrado", "Entity-relationship model with the filtered unique index"),
    img("medicita", "secuencia", "diagrama", 1249, 885, "Vista de procesos: secuencia del escenario Agendar una cita", "Process view: Book an appointment sequence"),
    img("medicita", "despliegue", "diagrama", 1249, 858, "Vista física: diagrama de despliegue", "Physical view: deployment diagram"),
    img("medicita", "mis-citas", "diagrama", 1600, 1132, "Prototipo de la pantalla Mis citas", "My appointments screen prototype"),
  ],
};
