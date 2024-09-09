import { Selection } from "~/types/Selection";

export interface Selections {
  isSecrets: boolean;
  updatedAt: string;
  selections: Selection[];
}
