<script setup lang="ts">
defineProps<{
  label: string;
  markdownText?: string;
}>();
</script>

<template>
  <tbody>
    <tr>
      <!-- A,B,C,D 本文 -->
      <td class="p-4 align-top" colspan="4">
        <MarkdownDocument :label="label" :markdown-text="markdownText" />
      </td>
    </tr>
  </tbody>
</template>
