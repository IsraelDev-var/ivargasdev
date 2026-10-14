import type { ReactNode } from "react";
import { baseMetadata, Document } from "@/lib/site";

export { viewport } from "@/lib/site";
export const metadata = baseMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
