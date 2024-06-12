import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/22/detail";

export const career22: Career = {
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
