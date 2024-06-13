import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/07/detail";

export const project07: Project = {
  id: 7,
  title: "ネット診断サービス／Webアプリケーション改修",
  detail,
  times: {
    start: "2018-03",
    end: "2018-04",
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ["JavaScript", " HTML5", " CSS3", " Ruby(Ruby on Rails)"],
    DB: ["MySQL", "Firebase"],
  },
};
