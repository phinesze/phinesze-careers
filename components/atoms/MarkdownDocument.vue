<script setup lang="ts">
defineProps<{
  path: string;
}>();
</script>

<template>
  <section>
    <ContentDoc :path="path" :head="false" />
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
