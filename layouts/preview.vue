<script setup lang="ts">
import { useConvertToXlsx } from "~/composables/useConvertXlsx";
import { usePreviewFont } from "~/composables/usePreview.ts";

const { convertTableToXlsx } = useConvertToXlsx();
const { setRootFontSize } = usePreviewFont();

const targetTable = ref<HTMLTableElement | null>(null);
onMounted(() => {
  targetTable.value = document.querySelector(".target-table");
  setRootFontSize("2mm");
});

const toPrint = () => print();

const toXlsx = () => {
  if (targetTable.value) {
    convertTableToXlsx(targetTable.value);
  }
};
</script>

<template>
  <div>
    <section class="w-[210mm] h-[297mm]">
      <slot />
    </section>
    <footer
      class="print:hidden fixed left-0 bottom-0 w-full h-16 bg-gray-400 shadow-lg shadow-indigo-500/50"
    >
      <button
        class="inline-block border border-gray-200 h-16 px-5"
        @click="toPrint"
      >
        印刷
      </button>
      <button
        class="inline-block border border-gray-200 h-16 px-5"
        @click="toXlsx"
      >
        XLSX
      </button>
    </footer>
  </div>
</template>
