<template>
  <table class="table-fixed target-table">
    <caption class="text-5xl mb-5">
      職務経歴書
    </caption>
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[21mm]" />
      <col class="w-[auto]" />
      <col class="w-[50mm]" />
    </colgroup>
    <CareerTableDocumentBody label="自己PR" markdownPath="/about" />
    <CareerTableDocumentBody label="主な経験" markdownPath="/frameworks" />
    <CareerTableDocumentBody label="アカウント" markdownPath="/accounts" />
    <CareerTableProjectsBody />
    <CareerTableDocumentBody label="一問一答" markdownPath="/supplement" />
  </table>
</template>
