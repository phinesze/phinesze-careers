import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】
不動産情報ウェブサイトとアンケートウェブサイトのフロントエンドを開発・テストする。

#### 【担当フェーズ】
フロントエンドの開発

#### 【担当業務】
- （不動産仲介サービス）Redmineによる改善要求に伴いフロントエンド側を改修作業しました。
- （アンケートウェブサイトの制作）Adove XDファイルのデザインを元に1d-Colorのプラットフォーム上で質問ページをHTML・CSS・JavsScriptで作成しました。
`;

export const project18: Project = {
  id: 18,
  title:
    "不動産仲介サービスの開発と健康機器メーカーのアンケートウェブサイトの制作",
  detail,
  times: {
    start: "2022-02",
    end: "2022-03",
  },
  teams: {
    PM: 1,
    開発: 6,
  },
  environments: {
    フロントエンド: [
      ["Vue.js", { version: "2" }],
      ["Nuxt", { version: "2" }],
      "Vuetify",
      "ESLint",
      "Prettier",
      "Sass",
      "axios",
      "Vue Composition Api",
      "1dColor",
      "themeleaf",
    ],
    その他: ["docker"],
  },
};
