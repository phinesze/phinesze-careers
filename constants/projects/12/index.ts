import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/12/detail";

export const project12: Project = {
  id: 12,
  title: "VR空間共有サービスにおけるフロントエンド／バックエンドの開発",
  detail,
  times: {
    start: "2020-04",
    end: "2020-05",
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ["JavaScript", " Node.js", "Vue.js", "Nuxt.js"],
    バックエンド: ["JavaScript", "Express", "MySQL"],
  },
};
