import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/01/detail";

export const project01: Project = {
  id: 1,
  title: "Web会計アプリケーションの開発及び改修（自社開発）",
  detail,
  times: {
    start: "2013-08",
    end: "2015-03",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: [["Cent OS", { version: 6 }]],
    言語: ["PHP", " JavaScript", " jQuery", " HTML5", " CSS3"],
    DB: ["MySQL"],
  },
};
