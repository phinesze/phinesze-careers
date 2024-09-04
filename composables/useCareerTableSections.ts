import {
  careerTableSections,
  ProjectGroups,
  Selection,
} from "~/constants/careerTableSections.ts";
import { projectGroups } from "~/constants/projectGroups.ts";

export const useCareerTableSections = () => {
  const loadedCareerTableSections = ref<Selection[]>(careerTableSections);
  // const loadedCareerTableSections = ref<Selection[]>([]);

  const projectGroupsOfSelections = loadedCareerTableSections.value.find(
    (s) => s.type === "project-groups",
  ) as ProjectGroups | undefined;

  const convertToSecret = async () => {
    // projectGroupsSecrets.tsを読み込む
    const secrets = await useAsyncData("getSecrets", async () => {
      let projectGroupsSecrets = {};
      try {
        projectGroupsSecrets = await import(
          "@/constants/projectGroupsSecrets.ts"
        );
        return projectGroupsSecrets;
      } catch (error) {
        return {};
      }
    });
    const secretsArray = // @ts-ignore
      secrets.data.value.projectGroupsSecrets?.dataArray || {};
    const projectGroupsCopy = projectGroups.map((group, index) =>
      Object.assign({}, group, secretsArray[index]),
    );

    if (projectGroupsOfSelections) {
      projectGroupsOfSelections.groups = projectGroupsCopy;
    }
  };

  const handleSelectFile = (e: any) => {
    alert("===== file selected");
    console.log("===== file selected e", e);
    console.log(e);
  };
  return {
    loadedCareerTableSections,
    projectGroupsOfSelections,
    convertToSecret,
    handleSelectFile,
  };
};
