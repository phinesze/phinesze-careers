import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

電子部品メーカーの法人向けのコネクタ検索のウェブサイトのフロントエンド・バックエンドを改修する。

#### 【担当フェーズ】

詳細設計・開発・テスト

#### 【担当業務】

要件定義・基本設計を基として詳細設計とコーディング・単体・結合テストをしました。
`;

export const project02: Project = {
  id: 2,
  title: "大手電子部品メーカー／コネクタ（電子部品）検索サイトの改修、追加開発",
  detail,
  times: {
    start: "2014-01",
    end: "2014-03",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ["Windows Server2008"],
    言語: ["VB.NET", ["ASP.NET MVC", { version: 3 }]],
    DB: ["Microsoft SQL Server"],
  },
};
