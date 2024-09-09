import { ProjectGroup } from "~/types/ProjectGroup";

export interface ProjectGroups {
  type: "project-groups";
  groups: ProjectGroup[];
}
