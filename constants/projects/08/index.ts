import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/08/detail";

export const project08: Project = {
  id: 8,
  title: "大手生命保険会社／保険代理店向けシステムの改修",
  detail,
  times: {
    start: "2018-08",
    end: "2018-10",
  },
  teams: {
    全体: 10,
  },
  environments: {
    OS: ["Windows Server"],
  },
};
