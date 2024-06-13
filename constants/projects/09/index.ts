import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/09/detail";

export const project09: Project = {
  id: 9,
  title: "中古車ECサイト／Webアプリケーション運用保守",
  detail,
  times: {
    start: "2018-11",
    end: "2018-12",
  },
  teams: {
    全体: 8,
  },
  environments: {
    フロントエンド: ["JavaScript"],
    バックエンド: ["PHP", "MySQL"],
  },
};
