import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

診断内容やクリニックを選択して、医師とのチャット診断するアプリサービス。
本人確認画像を送信して登録をし、その後症状とクリニックを選択してチャットを開始して処方箋を受け取る。

#### 【担当フェーズ】

開発

#### 【担当業務】

- 画面イメージに従い、HTML・CSS3・JavaScriptを用いて本人確認画像送信画面・クリニック選択画面・チャット画面などのフロントエンド部分を改修する形でコーディングしました。
- 画面設計の都合上、DBカラムをっ追加が望ましい場合など、必要に応じてメンバーに提案をしました。
`;

export const project07: Project = {
  id: 7,
  title: "ネット診断サービス／Webアプリケーション改修",
  detail,
  times: {
    start: "2018-03",
    end: "2018-04",
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ["JavaScript", " HTML5", " CSS3", " Ruby(Ruby on Rails)"],
    DB: ["MySQL", "Firebase"],
  },
};
