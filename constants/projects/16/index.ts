import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

ファッションECサイトのフロントエンドをメインとした開発やリリース作業をする。

#### 【担当フェーズ】

開発・保守運用

#### 【担当業務】

WrikeのチケットやAdobeXDの内容に従いフロントエンド側の改修作業や新規コンポーネントを開発しました。

#### 【備考】
- React部分の改修に携わる可能性があったが、予算の都合上の関係で終了

`;

export const project16: Project = {
  id: 16,
  title: "ファッションアイテムを中心としたECサイトの改修業務",
  detail,
  times: {
    start: "2021-07",
    end: "2021-08",
  },
  teams: {
    全体: 3,
  },
  environments: {
    フロントエンド: ["JavaScript", " HTML5", " CSS3", "Sass", "PHP"],
    バックエンド: [],
  },
};
