<script setup lang="ts">
const props = defineProps<{
  value?: string;
}>();

const dateString = computed(() => {
  if (props.value) {
    const [year, month, date] = props.value.split("-");
    return `${Number(year)}年${Number(month)}月`;
  } else {
    return null;
  }
});
</script>

<template>
  <span>
    {{ dateString }}
  </span>
</template>
