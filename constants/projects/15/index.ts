import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/15/detail";

export const project15: Project = {
  id: 15,
  title:
    "コンテンツを出品するユーザーとそのファンとの交流または物品またはデジタルデータの販売を行うECサイトの開発",
  detail,
  times: {
    start: "2021-04",
    end: "2021-08",
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
      " axios",
      "Vue Composition Api",
    ],
    バックエンド: [
      "TypeScript",
      "Google loud Platform",
      "Firebase Authentication",
      "Cloud Functions",
      "Google Spanner",
    ],
    その他: [
      "Jira(BitBucketと連携する)",
      "docker",
      "gitbook",
      "Stripe(決済API)",
    ],
  },
};
