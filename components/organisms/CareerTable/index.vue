<script setup lang="ts">
import DateLabel from "../../atoms/DateLabel";
import { careerTableSections } from "~/constants/careerTableSections";
import { projectGroups } from "~/constants/projectGroups.ts";

const secrets = await useAsyncData("getSecrets", async () => {
  let projectGroupsSecrets = {};
  try {
    debugger;
    projectGroupsSecrets = await import("@/constants/projectGroupsSecrets.ts");
    return projectGroupsSecrets;
  } catch (error) {
    return {};
  }
});

// @ts-ignore
const secretsArray = secrets.data.value.projectGroupsSecrets?.dataArray || {};
for (const index in careerTableSections) {
  Object.assign(projectGroups[index], secretsArray[index]);
}
</script>

<template>
  <table class="table-fixed target-table">
    <caption class="relative mb-5">
      <div class="text-5xl">職務経歴書</div>
      <div class="absolute right-0 bottom-0 text-sm">
        <DateLabel value="2024-06-16" /> 更新
      </div>
    </caption>
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[21mm]" />
      <col class="w-[auto]" />
      <col class="w-[50mm]" />
    </colgroup>
    <template v-for="(section, index) in careerTableSections">
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
