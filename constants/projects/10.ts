import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

半導体製造工場にて導入するMES（生産管理システム）であるSiViewのクライアントアプリケーション
SiViewを直接操作する場合には専門知識が必要となるため、Webブラウザ側で操作が可能なクライアントアプリケーションの新規バージョン開発。

#### 【担当フェーズ】

開発

#### 【担当業務】

詳細設計書に従い、Angular（6）とUIフレームワークPrimeNGを用いた画面制御部分を新規コーディングしました。
`;

export const project10: Project = {
  id: 10,
  title: "大手半導体メーカー／生産管理システムのクライアントアプリケーション",
  detail,
  times: {
    start: "2019-01",
    end: "2019-10",
  },
  teams: {
    全体: 8,
  },
  environments: {
    フロントエンド: ["TypeScript", ["Angular", { version: "6" }]],
    バックエンド: ["Java"],
  },
};
