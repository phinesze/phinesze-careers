import { CareerEnvironmentList } from "~/types/CareerEnvironmentList.ts";

export interface Project {
  id: number;
  title?: string;
  detail?: string;
  times?: {};
  teams?: {};
  environments?: CareerEnvironmentList;
}
