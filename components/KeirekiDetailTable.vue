<script setup lang="ts">
import { careers } from "~/constants/careers";
</script>

<template>
  <table>
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[22mm]" />
      <col class="w-[auto]" />
      <col class="w-[60mm]" />
    </colgroup>
    <template v-for="company in careers">
      <template v-for="career in company.careers" :key="career.id">
        <tr>
          <td rowspan="2">{{ company.company }}</td>
          <td rowspan="2">#{{ career.id }}</td>
          <th class="p-2">期間</th>
          <td class="font-bold p-2">{{ career.title }}</td>
          <th class="p-2">言語・フレームワーク</th>
        </tr>
        <tr>
          <td>
            <template v-if="career.times">
              <div v-if="career.times.start">{{ career.times.start }} ~</div>
              <div v-if="career.times.end">
                {{ career.times.end }}
              </div>
            </template>
          </td>
          <td class="align-top">
            <ContentDoc :path="`/careers/${career.id}`" />
          </td>
          <td class="align-top">
            <ul>
              <li v-for="(elements, name) in career.environments" :key="name">
                <p class="font-bold">{{ name }}</p>
                <div>
                  <EnvironmentElement
                    v-for="element in elements"
                    :key="element"
                    :element="element"
                    class="mr-2 after:content-[','] last:after:content-none"
                  />
                </div>
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </template>
  </table>
</template>

<style lang="css">
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold;
}
</style>
