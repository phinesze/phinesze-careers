<script setup lang="ts">
import DateLabel from "../../atoms/DateLabel";
import { projectGroups } from "~/constants/projectGroups";
import { about } from "~/constants/doduments/about";
import { frameworks } from "~/constants/doduments/frameworks";
import { accounts } from "~/constants/doduments/accounts";
import { supplement } from "~/constants/doduments/supplement";
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
    <CareerTableDocumentBody :markdown-text="about" label="自己PR" />
    <CareerTableDocumentBody label="主な経験" :markdown-text="frameworks" />
    <CareerTableDocumentBody label="アカウント" :markdown-text="accounts" />
    <CareerTableProjectsGroupsBody :project-groups="projectGroups" />
    <CareerTableDocumentBody label="一問一答" :markdown-text="supplement" />
  </table>
</template>
