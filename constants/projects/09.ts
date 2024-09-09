import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

中古車ECサイトでのWebサービスの保守運用業務。
ソースコードのリアルタイムでの改修とリリースなどを保守運用業務する。

#### 【担当フェーズ】

開発・運用保守

#### 【担当業務】

メンバーと相談しつつ、PHP（CakePHP）・JavaScriptなどでのソースコードの改修とサービスを保守運用しました。
`;

export const project09: Project = {
  id: 9,
  title: "中古車ECサイト／Webアプリケーション運用保守",
  detail,
  times: {
    start: "2018-11",
    end: "2018-12",
  },
  teams: {
    全体: 8,
  },
  environments: {
    フロントエンド: ["JavaScript"],
    バックエンド: ["PHP", "MySQL"],
  },
};
