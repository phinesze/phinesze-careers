<script setup lang="ts">
import {careers} from "~/constants/careers";

const props = defineProps<{
  element: string | [string, { version?: number | string }?]
}>()

const elementName = computed(() => {
  return typeof props.element === 'string' ? props.element : props.element[0];
})

const elementOptions = computed(() => {
  return typeof props.element === 'string' ? undefined : (props.element[1]);
})

</script>

<template>
  <div class="inline mr-2">
    <span>{{ elementName }}</span>
    <template v-if="elementOptions">
      <i v-if="elementOptions.version">
          v{{ elementOptions.version }}
      </i>
    </template>
  </div>
</template>