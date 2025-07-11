import { ProjectGroupSection } from "~/types/ProjectGroupSection.ts";
import { BiographyData } from "~/types/BiographyData.ts";
import { Section } from "~/types/Section.ts";

const loadedCareerTableSections = ref<Section[]>([]);
const updatedAt = ref("");

const isSecrets = computed(() => {
  return Boolean(useRoute().query.is_secrets);
});

export const useCareerTableSections = () => {
  const projectGroupsOfSections = loadedCareerTableSections.value.find(
    (s) => s.type === "project-groups",
  ) as ProjectGroupSection | undefined;

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
      const parsedSectionData = JSON.parse(json) as BiographyData;
      loadedCareerTableSections.value = parsedSectionData.sections;
      updatedAt.value = parsedSectionData.updatedAt;
    };

    reader.readAsText(file);
  };
  return {
    loadedCareerTableSections,
    updatedAt,
    isSecrets,
    projectGroupsOfSections,
    handleSelectFile,
  };
};
