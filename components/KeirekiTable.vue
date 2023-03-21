<template>
  <table>
    <caption class="text-5xl mb-5">
      職務経歴書
    </caption>
    <colgroup>
      <col class="w-[16mm]" />
      <col class="w-auto" />
    </colgroup>
    <tbody>
      <tr>
        <th class="p-4">自己PR</th>
        <td class="p-4">
          <MarkdownDocument path="/about" />
        </td>
      </tr>
      <tr>
        <th class="p-4">補足</th>
        <td class="p-4">
          <MarkdownDocument path="/supplement" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
