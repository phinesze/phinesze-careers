import { Career } from "~/types/Career";
import { detail } from "~/constants/careers/11/detail";

export const career11: Career = {
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
