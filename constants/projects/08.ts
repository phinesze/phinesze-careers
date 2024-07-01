import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

保険代理店用のアプリケーションの設計・コーディング・単体テストなど
従来紙の書類などで行っていた顧客、保険代理店、保険会社との間の取引を電子化し、Webアプリケーションにしたシステムを開発、運用保守する。

#### 【担当フェーズ】

詳細設計、開発、テスト

#### 【担当業務】

要件定義署を基として、詳細設計書の作成、コーディングと単体テスト作業をしました。
`;

export const project08: Project = {
  id: 8,
  title: "大手生命保険会社／保険代理店向けシステムの改修",
  detail,
  times: {
    start: "2018-08",
    end: "2018-10",
  },
  teams: {
    全体: 10,
  },
  environments: {
    OS: ["Windows Server"],
  },
};
