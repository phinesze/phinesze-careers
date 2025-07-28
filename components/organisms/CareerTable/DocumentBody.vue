<script setup lang="ts">
defineProps<{
  label: string;
  markdownText?: string;
}>();
</script>

<template>
  <section>
    <!-- タイトル -->
    <div v-if="label" class="font-bold bg-gray-300 p-2">
      {{ label }}
    </div>
    <!-- 本文 -->
    <MarkdownDocument
      class="p-4"
      :label="label"
      :markdown-text="markdownText"
    />
  </section>
</template>
