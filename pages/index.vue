<script setup lang="ts">
definePageMeta({
  layout: "preview",
});
//
useHead({
  title: "出力プレビュー",
  meta: [{ name: "description", content: "pdf出力用のプレビューページです。" }],
});
</script>

<template>
  <CareerTable />
</template>
