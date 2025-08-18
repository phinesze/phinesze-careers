import { DocumentSection } from "~/types/DocumentSection.ts";
import { ProjectGroupSection } from "~/types/ProjectGroupSection.ts";

/**
 * 経歴データのルート
 */
export interface BiographyData {
  updatedAt: string;
  sections: (DocumentSection | ProjectGroupSection)[];
}
