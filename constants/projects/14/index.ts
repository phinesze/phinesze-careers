import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/14/detail";

export const project14: Project = {
  id: 14,
  title: "自社開発のエンジニア人材管理システムのフロントエンドを中心とした開発",
  detail,
  times: {
    start: "2020-12",
    end: "2021-03",
  },
  teams: {
    全体: 4,
  },
  environments: {
    フロントエンド: [
      ["Vue.js", { version: "2" }],
      ["Nuxt", { version: "2" }],
      "TypeScript",
      "ESLint",
      "Prettier",
      "Pug",
      "Sass",
      "axios",
      "Vue composition-api",
    ],
    バックエンド: ["TypeScript", "AWS SAM", "Node.js", "Postgre SQL"],
    その他: ["docker", "gitbook"],
  },
};
