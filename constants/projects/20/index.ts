import { Project } from "~/types/Project";
import { detail } from "~/constants/projects/20/detail";

export const project20: Project = {
  id: 20,
  title: "データ活用のマーケティングツールの開発",
  detail,
  times: {
    start: "2022-11",
    end: "2024-03",
  },
  environments: {
    フロントエンド: ["TypeScript", "React", "Next.js", "Tailwind css", "Jest"],
    バックエンド: ["PHP", "Laravel", "MongoDB"],
    その他: ["docker"],
  },
};
