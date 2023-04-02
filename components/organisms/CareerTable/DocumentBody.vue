<script setup lang="ts">
defineProps<{
  label: string;
  markdownPath: string;
}>();
</script>

<template>
  <tbody>
    <tr>
      <th class="p-2" colspan="2">{{ label }}</th>
      <td class="p-4 align-top" colspan="3">
        <MarkdownDocument :path="markdownPath" />
      </td>
    </tr>
  </tbody>
</template>
