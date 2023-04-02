<script setup lang="ts">
type EnvironmentElement = string | [string, { version?: number | string }?];

const props = defineProps<{
  element: EnvironmentElement;
}>();

const elementName = computed(() => {
  return typeof props.element === "string" ? props.element : props.element[0];
});

const elementOptions = computed(() => {
  return typeof props.element === "string" ? undefined : props.element[1];
});
</script>

<template>
  <!--  <div class="inline-block bg-amber-200 rounded-2xl px-2 m-0.5">　TODO こちらのスタイルを検討中-->
  <div class="inline-block">
    <span>{{ elementName }}</span>
    <template v-if="elementOptions">
      <i v-if="elementOptions.version"> v{{ elementOptions.version }} </i>
    </template>
  </div>
</template>
