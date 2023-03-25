<script setup lang="ts">
const toPrint = () => print()
</script>

<template>
  <section class="w-[210mm] h-[297mm]">
    <slot />
  </section>
  <footer class="print:hidden fixed left-0 bottom-0 w-full h-16 bg-gray-400 shadow-lg shadow-indigo-500/50">
    <button class="inline-block border border-gray-200 h-16 px-5" @click="toPrint">印刷</button>
  </footer>
</template>
