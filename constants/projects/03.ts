import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

企業ウェブサイトのリニューアルに伴いレスポンシブ対応、かつパララックスの視覚効果に対応したのウェブページを開発する。

#### 【担当フェーズ】

フレームワークの選定・基本設計・詳細設計・製造

#### 【担当業務】

要件定義と画面イメージを基として、要求された視覚効果のリクエストに応じて、jQueryフレームワークの選定とHTML5・CSS3・JavaScriptのコーディングをしました。
`;

export const project03: Project = {
  id: 3,
  title: "企業ウェブサイトの新規開発",
  detail,
  times: {
    start: "2015-04",
    end: "2015-09",
  },
  teams: {
    全体: 3,
  },
  environments: {
    言語: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  },
};
