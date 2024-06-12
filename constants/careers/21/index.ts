import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/21/detail";

export const career21: Career = {
  id: 21,
  title: "リージョナルスーパーアプリ（RSA）の一部機能の開発",
  detail,
  times: {
    start: "2023-07",
    end: "2023-12",
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
    ],
    バックエンド: ["Node.js", "Express.js"],
    DB: ["MySQL", "Firebase", "Redis"],
    その他: ["docker"],
  },
};
