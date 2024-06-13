import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/03/detail";

export const project03: Project = {
  id: 3,
  title: "企業ウェブサイトの新規開発",
  detail,
  times: {
    start: "2015-04",
    end: "2015-09",
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  },
};
