import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/22/detail";

export const project22: Project = {
  id: 22,
  title: "",
  detail,
  times: {
    start: "2024-04",
    end: "2024-05",
  },
  environments: {
    フロントエンド: [
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "ESLint",
      "Sass",
      "axios",
      "Prettier",
      "Jest",
      "Vuetify",
    ],
    バックエンド: ["Node.js", "NestJS"],
    DB: ["PostgreSQL", "Prisma(ORM)"],
    その他: ["docker"],
  },
};
