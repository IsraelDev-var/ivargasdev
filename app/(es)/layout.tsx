import type { ReactNode } from "react";
import { baseMetadata, Document } from "@/lib/site";

export { viewport } from "@/lib/site";
export const metadata = baseMetadata("es");

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <Document locale="es">{children}</Document>;
}
