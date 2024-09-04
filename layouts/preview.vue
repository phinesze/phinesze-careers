<script setup lang="ts">
import { usePreviewFont } from "~/composables/usePreview.ts";
import { useCareerTableSections } from "~/composables/useCareerTableSections.ts";

const { setRootFontSize } = usePreviewFont();

const targetTable = ref<HTMLTableElement | null>(null);
onMounted(() => {
  targetTable.value = document.querySelector(".target-table");
  setRootFontSize("2mm");
});

const { handleSelectFile } = useCareerTableSections();

const handlePrint = () => print();
</script>

<template>
  <div>
    <section class="w-[210mm] h-[297mm]">
      <slot />
    </section>
    <footer
      class="print:hidden fixed left-0 bottom-0 w-full h-16 bg-gray-400 shadow-lg shadow-indigo-500/50"
    >
      <button class="inline-block border border-gray-200 h-16 px-5 relative">
        <span>ファイル選択</span>
        <input
          type="file"
          class="absolute left-0 top-0 w-full h-full bg-amber-300 opacity-0"
          @change="handleSelectFile"
        />
      </button>
      <button
        class="inline-block border border-gray-200 h-16 px-5"
        @click="handlePrint"
      >
        印刷
      </button>
    </footer>
  </div>
</template>
