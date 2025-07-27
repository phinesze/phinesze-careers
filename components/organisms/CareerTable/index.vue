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
      <!-- A: 自己PR見出し、プロジェクト番号・本文、チーム人数・言語・フレームワーク -->
      <col class="w-[auto]" />
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
