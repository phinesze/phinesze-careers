import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/20/detail";

export const career20: Career = {
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
