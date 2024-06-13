import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/16/detail";

export const project16: Project = {
  id: 16,
  title: "既存ファッションECサイトの開発",
  detail,
  times: {
    start: "2021-07",
    end: "2021-08",
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ["JavaScript", " HTML5", " CSS3", "Sass", "PHP"],
    バックエンド: [],
  },
};
