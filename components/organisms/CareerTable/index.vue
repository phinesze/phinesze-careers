<script setup lang="ts">
import DateLabel from "~/components/atoms/DateLabel";
import { useCareerTableSections } from "~/composables/useCareerTableSections.ts";

const { loadedCareerTableSections, updatedAt, isSecrets } =
  useCareerTableSections();
</script>

<template>
  <table :class="`table-fixed target-table ${isSecrets ? 'secret' : null}`">
    <caption class="relative mb-5">
      <div class="text-5xl">職務経歴書</div>
      <div v-if="isSecrets" class="text-xl">機密要素あり</div>
      <div class="absolute right-0 bottom-0 text-sm">
        <DateLabel v-if="updatedAt" :value="updatedAt" /> 更新
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
