<template>
  <table>
    <caption>職務経歴書</caption>
    <tbody>
    <tr>
      <th>自己PR</th>
      <td>
        <ContentDoc path="/about"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

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