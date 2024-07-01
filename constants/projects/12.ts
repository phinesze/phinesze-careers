import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

VR空間の共有サービス
フロントエンドまたはバックエンド部分を改修する。

#### 【担当フェーズ】

開発

#### 【担当業務】

- フロントエンド（Vue.js・Nuxt.js）とバックエンドAPI（Node.js+Express）部分の改修を中心にコーディングしました。
- iframe埋め込み部分やReCAPTCHA（V3）など外部サービスとフロントエンド／バックエンド部分を連携しました。
`;

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
