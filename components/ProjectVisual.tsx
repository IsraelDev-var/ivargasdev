import type { ProjectVisualKind } from "@/content/proyectos";
import type { Locale } from "@/lib/i18n";

/** Mini-visual ilustrativa de cada proyecto (no son datos reales). */
export function ProjectVisual({ kind, locale }: { kind: ProjectVisualKind; locale: Locale }) {
  const es = locale === "es";
  switch (kind) {
    case "map":
      return (
        <div className="vis vis-map" aria-hidden="true">
          <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice">
            <path
              d="M40 70 L120 52 L190 60 L260 48 L330 62 L370 80 L350 108 L280 118 L210 124 L140 116 L80 106 L46 92 Z"
              fill="#132447"
              stroke="#34d39e66"
              strokeWidth="1"
            />
            <circle cx="110" cy="80" r="5" fill="#34d39e" />
            <circle cx="160" cy="95" r="5" fill="#34d39e" />
            <circle cx="205" cy="78" r="5" fill="#f6a443" />
            <circle cx="250" cy="100" r="5" fill="#34d39e" />
            <circle cx="290" cy="74" r="5" fill="#ef5a5a" />
            <circle cx="320" cy="96" r="5" fill="#f6a443" />
            <circle cx="230" cy="64" r="5" fill="#4c8dff" />
          </svg>
          <div className="vis-legend">
            <span><i style={{ background: "#34d39e" }} />{es ? "disponible" : "available"}</span>
            <span><i style={{ background: "#f6a443" }} />{es ? "condicionada" : "conditional"}</span>
            <span><i style={{ background: "#ef5a5a" }} />{es ? "saturada" : "saturated"}</span>
          </div>
        </div>
      );
    case "fx":
      return (
        <div className="vis vis-fx" aria-hidden="true">
          <div className="vis-row">
            <span>USD</span><span>EUR</span><span>CAD</span><span>GBP</span><span>ES / EN</span>
          </div>
          <svg viewBox="0 0 300 70" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#4c8dff"
              strokeWidth="2"
              points="0,50 20,46 40,48 60,40 80,42 100,36 120,38 140,30 160,34 180,26 200,28 220,22 240,24 260,18 280,20 300,14"
            />
            <line x1="0" y1="62" x2="300" y2="62" stroke="#34d39e55" strokeWidth="1" />
          </svg>
          <span className="vis-note">{es ? "// tasa de cambio · 30 días" : "// exchange rate · 30 days"}</span>
        </div>
      );
    case "calc":
      return (
        <div className="vis" aria-hidden="true">
          <div className="vis-calc">
            <div>{es ? "Factura actual" : "Current bill"}<b>RD$ ——</b></div>
            <div>{es ? "Nueva factura" : "New bill"}<b className="grad-text">RD$ ↓</b></div>
            <div>{es ? "Ahorro anual" : "Annual savings"}<b>RD$ ↑</b></div>
            <div>{es ? "Retorno" : "Payback"}<b>{es ? "años" : "years"}</b></div>
          </div>
        </div>
      );
    case "chat":
      return (
        <div className="vis" aria-hidden="true">
          <div className="vis-chat">
            <div className="in">{es ? "Hola, quiero cotizar climatización para mi local." : "Hi, I'd like a quote for AC in my shop."}</div>
            <div className="out">{es ? "Servicio: Climatización · Proyecto: local comercial" : "Service: HVAC · Project: retail space"}</div>
          </div>
        </div>
      );
    case "arch":
      return (
        <div className="vis" aria-hidden="true">
          <div className="vis-arch">
            <div className="o">{es ? "Cliente" : "Client"}</div>
            <div className="b">Next.js</div>
            <div className="b">API .NET</div>
            <div className="o">Stripe</div>
            <div className="b">Worker</div>
            <div className="g">PostgreSQL</div>
          </div>
          <span className="vis-note">{es ? "webhook de pago → cola → Printify" : "payment webhook → queue → Printify"}</span>
        </div>
      );
    case "layers":
      return (
        <div className="vis" aria-hidden="true">
          <div className="vis-layers">
            <div><span>Web</span><span>API + UI</span></div>
            <div><span>Infrastructure</span><span>EF Core</span></div>
            <div><span>Application</span><span>{es ? "casos de uso" : "use cases"}</span></div>
            <div><span>Domain</span><span>{es ? "reglas" : "rules"}</span></div>
          </div>
        </div>
      );
    case "bars":
      return (
        <div className="vis" aria-hidden="true">
          <span className="vis-note">{es ? "kWh · producción vs. consumo" : "kWh · production vs. consumption"}</span>
          <div className="vis-bars">
            {[60, 45, 78, 50, 92, 54, 84, 48].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
  }
}
