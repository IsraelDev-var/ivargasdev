import { ProjectPage } from "@/components/ProjectPage";
import { findProject, projectMetadata, projectStaticParams, type ProjectParams } from "@/lib/project-route";

export const dynamicParams = false;
export const generateStaticParams = projectStaticParams;

export async function generateMetadata({ params }: ProjectParams) {
  return projectMetadata((await params).slug, "es");
}

export default async function Page({ params }: ProjectParams) {
  return <ProjectPage project={findProject((await params).slug)} locale="es" />;
}
