import { ProjectGroups, Selection, Selections } from "~/constants/types";

const loadedCareerTableSections = ref<Selection[]>([]);
const updatedAt = ref("");
const isSecrets = ref(false);

export const useCareerTableSections = () => {
  const projectGroupsOfSelections = loadedCareerTableSections.value.find(
    (s) => s.type === "project-groups",
  ) as ProjectGroups | undefined;

  const handleSelectFile = (event: Event) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) {
      return [];
    }
    const reader = new FileReader();
    const ext = file.name.split(".").pop()?.toLowerCase();

    if (ext && !["json"].includes(ext)) {
      alert("読み込み可能なファイルはjson形式のみです");
    }

    reader.onload = (e) => {
      const json = e.target?.result;
      if (typeof json !== "string") {
        alert("error");
        return;
      }
      const parsedSelectionData = JSON.parse(json) as Selections;
      loadedCareerTableSections.value = parsedSelectionData.selections;
      updatedAt.value = parsedSelectionData.updatedAt;
      isSecrets.value = parsedSelectionData.isSecrets;
    };

    reader.readAsText(file);
  };
  return {
    loadedCareerTableSections,
    updatedAt,
    isSecrets,
    projectGroupsOfSelections,
    handleSelectFile,
  };
};
