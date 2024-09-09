import { Project } from "~/types/Project";

export interface ProjectGroup {
  company?: string;
  url?: string;
  projects: Project[];
}
