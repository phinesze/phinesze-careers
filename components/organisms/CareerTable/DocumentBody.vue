<script setup lang="ts">
defineProps<{
  label: string;
  markdownText?: string;
}>();
</script>

<template>
  <tbody>
    <tr>
      <!-- 本文 -->
      <td class="p-0 align-top">
        <div v-if="label" class="font-bold bg-gray-300 p-2">
          {{ label }}
        </div>
        <MarkdownDocument
          class="p-4"
          :label="label"
          :markdown-text="markdownText"
        />
      </td>
    </tr>
  </tbody>
</template>
