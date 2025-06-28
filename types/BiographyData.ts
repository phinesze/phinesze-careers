import { Section } from "~/types/Section.ts";

/**
 * 経歴データのルート
 */
export interface BiographyData {
  updatedAt: string;
  sections: Section[];
}
