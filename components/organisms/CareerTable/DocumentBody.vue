<script setup lang="ts">
defineProps<{
  label: string;
  markdownText?: string;
}>();
</script>

<template>
  <tbody>
    <tr>
      <th class="p-2" colspan="2">{{ label }}</th>
      <td class="p-4 align-top" colspan="3">
        <MarkdownDocument :markdown-text="markdownText" />
      </td>
    </tr>
  </tbody>
</template>
