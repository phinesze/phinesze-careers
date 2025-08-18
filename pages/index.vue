<script setup lang="ts">
import { useCareerTableSections } from "~/composables/useCareerTableSections.ts";

definePageMeta({
  layout: "preview",
});
//
useHead({
  title: "出力プレビュー",
  meta: [{ name: "description", content: "pdf出力用のプレビューページです。" }],
});

const { isTableView } = useCareerTableSections();
</script>

<template>
  <CareerSectionTableIindex v-if="isTableView" />
  <CareerSection v-else />
</template>
