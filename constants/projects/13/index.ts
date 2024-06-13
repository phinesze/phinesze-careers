import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/13/detail";

export const project13: Project = {
  id: 13,
  title: "住宅注文システムなどのフロントエンド／バックエンドの開発",
  detail,
  times: {
    start: "2020-06",
    end: "2020-11",
  },
  teams: {
    全体: 4,
  },
  environments: {
    フロントエンド: ["JavaScript", "Vue.js", "Quasar"],
    バックエンド: ["PHP"],
  },
};
