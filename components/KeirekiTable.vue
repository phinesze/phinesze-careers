<template>
  <table>
    <caption>
      職務経歴書
    </caption>
    <tbody>
      <tr>
        <th class="p-4">自己PR</th>
        <td class="p-4">
          <MarkdownDocument path="/about" />
        </td>
      </tr>
      <tr>
        <td class="!p-0" colspan="2">
          <div class="-m-[1px] w-[calc(100%_+_2px)]">
            <KeirekiDetailTable />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
