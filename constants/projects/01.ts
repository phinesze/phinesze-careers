import { Project } from "~/types/Project";

export const detail = `
#### 【システム概要】

自社開発の経理アプリケーションの開発保守。独自のフレームワークを使用。
勘定科目の設定と追加、仕訳帳への記入、貸借対照表表示機能、固定資産台帳表示機能などを備える。システムをJava（JSP）で開発した後に、同様の機能を持ったPHP（LAMP環境）のバージョンを後に開発しました。

#### 【担当フェーズ】

基本設計・詳細設計・開発・テスト・運用保守

#### 【担当業務】

要件定義を基にして、PHP・JavaScript・MySQLのソースコードを直接書き起こす方法で開発しました。また、独自フレームワークの保守開発、テストケースの作成と結合テストを実行しました。
`;

export const project01: Project = {
  id: 1,
  title: "Web会計アプリケーションの開発及び改修（自社開発）",
  detail,
  times: {
    start: "2013-08",
    end: "2015-03",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: [["Cent OS", { version: 6 }]],
    言語: ["PHP", " JavaScript", " jQuery", " HTML5", " CSS3"],
    DB: ["MySQL"],
  },
};
