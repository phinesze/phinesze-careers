<script setup lang="ts">
definePageMeta({
  layout: "preview",
});

useHead({
  title: "出力プレビュー",
  meta: [{ name: "description", content: "pdf出力用のプレビューページです。" }],
});

const route = useRoute();

const isSecret = !!route.query.secret;
</script>

<template>
  <CareerTable :is-secret="isSecret" />
</template>
