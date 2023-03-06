<template>
  <table>
    <caption>職務経歴書</caption>
    <tbody>
    <tr>
      <td>自己PR</td>
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

</style>