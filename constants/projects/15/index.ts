import { Project } from "~/types/Project";

export const detail = `
#### 【想定するエンドユーザー】
一般ユーザー

#### 【システム概要】
コンテンツ出品ユーザーとファンとの交流機能やEC機能などを備えたWebサービスを新規開発する。

#### 【開発手法】
- エンジニアは1週間に一度程度課題の確認のミーティングを1回行う。
- クライアントなどから修正する点の課題が上がった場合、その課題が管理ツール上に上り、それを修正していく。修正する手段についてはエンジニアに任されている。
- フロントエンドプロジェクトとバックエンドプロジェクトとgitbook用の基本設計やAPIの設計などを書き込むためのdocプロジェクトがあり、それぞれをgit cloneをしてローカルに展開する。

#### 【担当フェーズ】
フロントエンド（Vue.js/Nuxt.js）のnpmフレームワークの選定、バックエンドを含む基本設計・詳細設計・開発

#### 【担当業務】
- Vue.js／Nuxt.jsを新規に作成して、デザイナーが作成したAdobeXDやHTMLのモックから、ボタンや入力要素などのコンポーネントの設計・開発を主導しました。
- ESLint、Prettierなど使用するNode.jsフレームワークの選定・導入と設定を主導しました。
- バックエンドのAPIでフロントエンド側との繋ぎ込みを考慮して、APIのリクエスト・レスポンスとDBの設計（共にgitbookドキュメント）を改修を提案するプルリクエストを発行しました。
- 前述のプリクエストに伴うコーディングを一部自身で改修しました。
- バックエンド側やFirebase Authenticationとの通信をaxiosで実装しました。
`;

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
