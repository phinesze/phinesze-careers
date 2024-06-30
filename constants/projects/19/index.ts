import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

大手複合Webサービス企業のグループ企業ではQRコード決済、ホテル予約、オークションなど様々なWebサービスを運営しており、
それらのサービスの顧客・ユーザーに関する情報をグループ社内限定で一括で閲覧・管理する「データディレクトリ」システムがございました。
そのシステムの刷新に伴い、既存のシステムの置き換えを目的とした開発を行う。

#### 【開発手法】

- 開発のための設計書などはConfluenceで管理する。
- 平日1回進捗などの確認のためのミーティングを15分ほど行う。
- 課題管理をJiraで行う。
- Jiraで管理されたチケットを単位にGitHub上でPull Requestを出しコードレビューを受けて随時改修する。
- チーム内のメンバーのPull Requestに対してコードレビューする。

#### 【担当フェーズ】

- Vue.jsフロントエンドの開発、Node.js・NestJSによるBackend to frontendの開発
- Jestによる単体テストケースの作成
- postmanによるE2Eテストケースの作成
- PythonによるAirflowタスクの構築とコードレビュー

#### 【担当業務】

- ページに対応するフロントエンドのページをNuxt.jsで開発しました。
- デザイナーの作成した機能要件を満たすボタン・入力・選択・セレクトボックスなどを共同で設計・開発しました。
- チーム内のメンバーのPull Requestに対してコードレビューをしました。
- フロントエンド上の一部フレームワークの導入の提案や改修の提案をし、同様にPull Requestでレビューしつつ改善しました。
- Nest.jsで作成されたBackend to frontendのエンドポイントの開発、テストケースを作成しました。
- E2Eテストをpostman形式のファイルで作成・開発しました。
- ワークフロー管理ツールApache Airflowのタスクを構築しました。
`;

export const project19: Project = {
  id: 19,
  title:
    "グループ社内で使用するディレクトリサービスシステムの既存システムからのリプレイス開発",
  detail,
  times: {
    start: "2022-04",
    end: "2023-03",
  },
  teams: {
    PM: 2,
    開発: [6, 10],
  },
  environments: {
    フロントエンド: [
      ["Vue.js", { version: "2" }],
      ["Nuxt", { version: "2" }],
      "Tailwind CSS",
      "Daisy UI",
      "ESLint",
      "Prettier",
      "Sass",
      "axios",
      "Vue Composition Api",
      "Jest",
    ],
    BFF: ["Nest.js"],
    バックエンド: ["Java", "Spring"],
    その他: ["Python", "docker"],
  },
};
