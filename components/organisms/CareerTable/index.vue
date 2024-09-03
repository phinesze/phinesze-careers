<script setup lang="ts">
import DateLabel from "../../atoms/DateLabel";
import {
  careerTableSections,
  ProjectGroups,
  Selection,
} from "~/constants/careerTableSections";
import { projectGroups } from "~/constants/projectGroups.ts";

const props = defineProps<{
  isSecret: boolean;
}>();

const loadedCareerTableSections = ref<Selection[]>(careerTableSections);

const projectGroupsOfSelections = loadedCareerTableSections.value.find(
  (s) => s.type === "project-groups",
) as ProjectGroups;

if (props.isSecret) {
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

  // @ts-ignore
  const secretsArray = secrets.data.value.projectGroupsSecrets?.dataArray || {};
  const projectGroupsCopy = projectGroups.map((group, index) =>
    Object.assign({}, group, secretsArray[index]),
  );

  // @ts-ignore
  projectGroupsOfSelections.groups = projectGroupsCopy;
} else {
  // @ts-ignore
  projectGroupsOfSelections.groups = projectGroups;
}
</script>

<template>
  <table
    :class="`table-fixed target-table ${props.isSecret ? 'secret' : null}`"
  >
    <caption class="relative mb-5">
      <div class="text-5xl">職務経歴書</div>
      <div v-if="props.isSecret" class="text-xl">機密要素あり</div>
      <div class="absolute right-0 bottom-0 text-sm">
        <DateLabel value="2024-07-01" /> 更新
      </div>
    </caption>
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[21mm]" />
      <col class="w-[auto]" />
      <col class="w-[50mm]" />
    </colgroup>
    <template v-for="(section, index) in loadedCareerTableSections">
      <CareerTableDocumentBody
        v-if="section.type === 'document'"
        :key="index"
        :markdown-text="section.detail"
        :label="section.label"
      />
      <CareerTableProjectsGroupsBody
        v-if="section.type === 'project-groups'"
        :key="index"
        :groups="section.groups"
      />
    </template>
  </table>
</template>
