import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/10/detail";

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
