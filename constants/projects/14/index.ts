import { Project } from "~/types/Project";

export const detail = `
#### 【想定するエンドユーザー】

企業の人事担当者など

#### 【システム概要】

人材管理システムのフロントエンドを中心に新規開発する。

#### 【開発手法】

- エンジニアは1週間に一度程度課題の確認のミーティングを1回行う。
- エンジニアのリストを登録して、週何時間稼働可能かなどの情報や過去に何時稼動したかどうかをグラフなどで表示する。
- ユーザー認証としてAuth0を使用したシングルサインオンを使用する。
- フロントエンドプロジェクトとバックエンドプロジェクトとgitbook用の基本設計やAPIの設計などを書き込むためのdocプロジェクトがあり、それぞれをgit cloneをしてローカルに展開する。

#### 【担当フェーズ】

フロントエンドのフレームワーク選定・バックエンドを含む基本設計・詳細設計・開発

#### 【担当業務】

- Vue.js／Nuxt.jsで作成されていたフロントエンド側のモックを新規のバージョン（composition-api）に置き換えて、ボタンや入力要素などのコンポーネントの再設計と開発を主導しました。
- Node.jsフレームワークの選定・導入と設定を主導しました。
- バックエンド側やFirebase Authenticationとの通信をaxiosで実装しました。
- バックエンドのAPIやDBの設計（gitbookドキュメント）を改修する提案をし、それに伴うコーディングの改修を一部しました。
`;

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
