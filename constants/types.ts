// TODO phinesze-careersとphinesze-careers-dataのconstants/types.tsは共に同じにする
import { ProjectGroup } from "~/types/ProjectGroup.ts";

export interface Document {
  type: "document";
  label: string;
  detail: string;
}

export interface ProjectGroups {
  type: "project-groups";
  groups: ProjectGroup[];
}

export type Selection = Document | ProjectGroups;

export type Selections = {
  isSecrets: boolean;
  updatedAt: string;
  selections: Selection[];
};
