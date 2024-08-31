import { ProjectGroup } from "~/types/ProjectGroup";
import { project01 } from "~/constants/projects/01";
import { project02 } from "~/constants/projects/02";
import { project03 } from "~/constants/projects/03";
import { project04 } from "~/constants/projects/04";
import { project05 } from "~/constants/projects/05";
import { project06 } from "~/constants/projects/06";
import { project07 } from "~/constants/projects/07";
import { project08 } from "~/constants/projects/08";
import { project09 } from "~/constants/projects/09";
import { project10 } from "~/constants/projects/10";
import { project11 } from "~/constants/projects/11";
import { project12 } from "~/constants/projects/12";
import { project13 } from "~/constants/projects/13";
import { project15 } from "~/constants/projects/15";
import { project14 } from "~/constants/projects/14";
import { project16 } from "~/constants/projects/16";
import { project17 } from "~/constants/projects/17";
import { project18 } from "~/constants/projects/18";
import { project19 } from "~/constants/projects/19";
import { project20 } from "~/constants/projects/20";
import { project21 } from "~/constants/projects/21";
import { project22 } from "~/constants/projects/22";
import { project23 } from "~/constants/projects/23";

export const projectGroups: ProjectGroup[] = [
  { company: "R社", projects: [project23] },
  { company: "Q社", projects: [project22] },
  { company: "P社", projects: [project21] },
  { company: "O社", projects: [project20] },
  { company: "N社", projects: [project19] },
  { company: "I社→L社、M社", projects: [project18] },
  { company: "K社", projects: [project17] },
  {
    company: "J社",
    projects: [project16],
  },
  {
    company: "I社",
    projects: [project15, project14],
  },
  {
    company: "H社",
    projects: [project13],
  },
  {
    company: "G社",
    projects: [project12],
  },
  {
    company: "F社",
    projects: [project11],
  },
  {
    company: "E社",
    projects: [project10],
  },
  {
    company: "D社",
    projects: [project09],
  },
  {
    company: "C社",
    projects: [project08],
  },
  {
    company: "B社",
    projects: [project07],
  },
  {
    company: "A社",
    projects: [
      project06,
      project05,
      project04,
      project03,
      project02,
      project01,
    ],
  },
];
