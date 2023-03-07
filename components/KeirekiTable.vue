<template>
  <table>
    <caption>職務経歴書</caption>
    <tbody>
    <tr>
      <th>自己PR</th>
      <td>
        {{pr}}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const pr: string = 'PR内容';
</script>

<script lang="ts">
export default {
  name: "KeirekiTable"
}

</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
table th, table td {
  border: 1px solid;
  padding: 8px;
}
table th {
  background: lightgray;
}
</style>