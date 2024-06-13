<script setup lang="ts">
import DateLabel from "../../atoms/DateLabel";
import { projectGroups } from "~/constants/projectGroups";
</script>

<template>
  <table class="table-fixed target-table">
    <caption class="relative mb-5">
      <div class="text-5xl">職務経歴書</div>
      <div class="absolute right-0 bottom-0 text-sm">
        <DateLabel value="2024-03-18" /> 更新
      </div>
    </caption>
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[21mm]" />
      <col class="w-[auto]" />
      <col class="w-[50mm]" />
    </colgroup>
    <CareerTableDocumentBody label="自己PR" markdown-path="/about" />
    <CareerTableDocumentBody label="主な経験" markdown-path="/frameworks" />
    <CareerTableDocumentBody label="アカウント" markdown-path="/accounts" />
    <CareerTableProjectsGroupsBody :project-groups="projectGroups" />
    <CareerTableDocumentBody label="一問一答" markdown-path="/supplement" />
  </table>
</template>
