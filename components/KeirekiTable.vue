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
    <tbody>
      <tr>
        <th class="p-4" colspan="2">自己PR</th>
        <td class="p-4" colspan="3">
          <MarkdownDocument path="/about" />
        </td>
      </tr>
    </tbody>
    <KeirekiTableCareersBody />
    <KeirekiTableSupplementBody />
  </table>
</template>
