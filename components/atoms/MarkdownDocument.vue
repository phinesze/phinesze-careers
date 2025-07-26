<script setup lang="ts">
import markdownit from "markdown-it";
const md = markdownit();

const props = defineProps<{
  label?: string;
  markdownText?: string;
}>();

const renderedHtml = computed(() => {
  return props.markdownText ? md.render(props.markdownText) : "";
});
</script>

<template>
  <p v-if="label" class="font-bold mt-0 mx-0 bg-gray-300 text-2xl p-2">
    {{ label }}
  </p>
  <section v-if="markdownText">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="renderedHtml" />
  </section>
</template>

<style scoped lang="scss">
:deep {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold;
    &:not(:first-child) {
      @apply mt-[1em];
    }
  }
  h1,
  h2,
  h3 {
    @apply text-2xl;
  }
  li {
    &:before {
      display: inline;
      content: "・";
    }
  }
  p {
    @apply break-inside-avoid;
  }
}
</style>
