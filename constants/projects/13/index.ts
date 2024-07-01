import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

主にフロントエンドの新規開発、モックアップとして動くHTMLをVueコンポーネントとして分割などを作業する。

#### 【担当フェーズ】

開発

#### 【担当業務】

フロントエンド（Vue.js・Quasar）の新規開発とAPI部分（PHP）の改修、追加をする。
`;

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
