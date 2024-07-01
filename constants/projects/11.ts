import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

大手求人ウェブサイトの開発・運用業務

#### 【担当フェーズ】

開発・保守運用

#### 【担当業務】

- チケット開発駆動の業務プロセスに従い、フロントエンド部分の改修を中心にコーディングしました。
- メンバーと相談しつつ、業務効率化のためにPythonとNode.jsで自作のスクリプトを提案して、実際に制作しました。
`;

export const project11: Project = {
  id: 11,
  title: "大手求人ウェブサイトのフロントエンド開発・運用",
  detail,
  times: {
    start: "2019-11",
    end: "2020-02",
  },
  teams: {
    全体: 10,
  },
  environments: {
    フロントエンド: ["JavaScript", " HTML5", " CSS3", "Vue.js"],
    バックエンド: [],
    その他: ["Node.js", "Python(V3)"],
  },
};
