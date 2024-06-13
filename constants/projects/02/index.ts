import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/02/detail";

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
