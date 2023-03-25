<script setup lang="ts">

import { useConvertToXlsx } from "~/composables/useConvertXlsx";

const { convertTableToXlsx }= useConvertToXlsx()

const targetTable = ref<HTMLTableElement | null>(null);
onMounted(() => {
  targetTable.value = document.querySelector('.target-table')
  console.log('=target ', targetTable)
})

const toPrint = () => print();

const toXlsx = () => {
  console.log('=== toXlsx', targetTable.value)
  if (targetTable.value) {
    convertTableToXlsx(targetTable.value)
  }
}

</script>

<template>
  <section class="w-[210mm] h-[297mm]">
    <slot />
  </section>
  <footer class="print:hidden fixed left-0 bottom-0 w-full h-16 bg-gray-400 shadow-lg shadow-indigo-500/50">
    <button class="inline-block border border-gray-200 h-16 px-5" @click="toPrint">印刷</button>
    <button class="inline-block border border-gray-200 h-16 px-5" @click="toXlsx">XLSX</button>
  </footer>
</template>
