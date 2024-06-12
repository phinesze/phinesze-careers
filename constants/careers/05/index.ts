import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/05/detail";

export const career05: Career = {
  id: 5,
  title: "アジア向け仕事紹介クラウドソーシングサービスの自社開発",
  detail,
  times: {
    start: "2016-04-1",
    end: "2017-06",
  },
  teams: {
    全体: 3,
  },
  environments: {
    OS: [["Cent OS", { version: 6 }]],
    言語: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    DB: ["MySQL"],
  },
};
