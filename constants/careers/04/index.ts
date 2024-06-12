import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/04/detail";

export const career04: Career = {
  id: 4,
  title: "大手電子部品メーカー／社内向け工数管理システムの新規開発",
  detail,
  times: {
    start: "2015-10",
    end: "2016-03",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: ["Windows Server2008"],
    言語: ["VB.NET", "ASP.NET MVC(v3)"],
    DB: ["Microsoft SQL Server"],
  },
};
