import { ProjectGroup } from "~/types/ProjectGroup";
import { Section } from "~/types/Section.ts";

export interface ProjectGroupSection extends Section {
  type: "project-groups";
  groups: ProjectGroup[];
}
