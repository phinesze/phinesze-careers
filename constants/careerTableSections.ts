import { about } from "~/constants/doduments/about";
import { frameworks } from "~/constants/doduments/frameworks";
import { accounts } from "~/constants/doduments/accounts";
import { projectGroups } from "~/constants/projectGroups";
import { supplement } from "~/constants/doduments/supplement";
import { ProjectGroup } from "~/types/ProjectGroup.ts";

type Document = {
  type: "document";
  label: string;
  detail: string;
};

type ProjectGroups = {
  type: "project-groups";
  groups: ProjectGroup[];
};

type Selection = Document | ProjectGroups;

export const careerTableSections: Selection[] = [
  {
    type: "document",
    label: "自己PR",
    detail: about,
  },
  {
    type: "document",
    label: "主な経験・フレームワーク",
    detail: frameworks,
  },
  {
    type: "document",
    label: "アカウント",
    detail: accounts,
  },
  {
    type: "project-groups",
    groups: projectGroups,
  },
  {
    type: "document",
    label: "一問一答",
    detail: supplement,
  },
];
