<script setup lang="ts">
defineProps<{
  path: string;
}>();
</script>

<template>
  <section>
    <ContentDoc :path="path" />
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
  li {
    &:before {
      display: inline;
      content: '・';
    }
  }
  p {
    @apply break-inside-avoid mb-[1em];
  }
}
</style>
