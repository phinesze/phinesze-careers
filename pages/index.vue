<script setup lang="ts">
import { usePreviewFont } from "~/composables/usePreview.ts";
const { setRootFontSize } = usePreviewFont();

onMounted(() => {
  setRootFontSize("");
});
</script>

<template>
  <section>
    <NuxtLink class="block" to="/preview">プレビューページへ</NuxtLink>
    <NuxtLink class="block text-2xl" to="/preview?secret=1"
      >機密プレビューページへ</NuxtLink
    >
  </section>
</template>
