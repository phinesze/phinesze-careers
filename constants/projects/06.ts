import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

電子部品メーカーの社内向けの健康保険管理システム。宿泊予約サイトのAPIとつながる形で予約を入れる。

#### 【担当フェーズ】

詳細設計・開発・テスト

#### 【担当業務】

要件定義・外部設計を基として詳細設計とコーディング・単体・結合テストをしました。
`;

export const project06: Project = {
  id: 6,
  title: "大手電子部品メーカー／社内用健康保険システムの新規開発",
  detail,
  times: {
    start: "2017-07-07",
    end: "2017-07-09",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ["Windows Server 2008"],
    言語: ["VB.NET", " ASP.NET MVC(v3)"],
    DB: ["Microsoft SQL Server"],
  },
};
