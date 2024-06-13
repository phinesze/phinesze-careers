import { Project } from "~/types/Project";

export interface ProjectGroup {
  company?: string;
  projects: Project[];
}
