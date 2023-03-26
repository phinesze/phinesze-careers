<script setup lang="ts">
import { careers } from "~/constants/careers";

const getRowSpan = (career: any) => {
  let rowspan = 2;
  if (career.teams) {
    rowspan += 2;
  }
  return rowspan;
}
</script>

<template>
  <table class="table-fixed target-table">
    <colgroup>
      <col class="w-[8mm]" />
      <col class="w-0.5 w-[8mm]" />
      <col class="w-[21mm]" />
      <col class="w-[auto]" />
      <col class="w-[50mm]" />
    </colgroup>
    <template v-for="company in careers">
      <tbody
        v-for="career in company.careers"
        :key="career.id"
        class="career-row break-inside-avoid"
      >
        <tr>
          <td class="bg-gray-400" :rowspan="getRowSpan(career)">{{ company.company }}</td>
          <td class="bg-lime-300" :rowspan="getRowSpan(career)">#{{ career.id }}</td>
          <th class="p-2">期間</th>
          <td class="font-bold p-2 bg-cyan-100">{{ career.title }}</td>
          <th class="p-2">言語・フレームワーク</th>
        </tr>
        <tr>
          <td>
            <IntervalDateLabel v-if="career.times" :value="career.times" />
          </td>
          <td class="align-top" :rowspan="getRowSpan(career) - 1">
            <MarkdownDocument :path="`/careers/${career.id}`" />
          </td>
          <td class="align-top" :rowspan="getRowSpan(career) - 1">
            <ul>
              <li
                v-for="(elements, name) in career.environments"
                :key="name"
                class="mb-3"
              >
                <p class="font-bold">{{ name }}</p>
                <div>
                  <EnvironmentElementLabel
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
        <tr v-if="career.teams" class="h-10">
          <th>チーム人数</th>
        </tr>
        <tr v-if="career.teams">
          <td class="text-center">
            <ul class="inline-block w-fit">
              <li
                v-for="(teamNumber, team) in career.teams"
                :key="name"
                class="text-left"
              >
                {{ team }}: <TeamNumberLabel :value="teamNumber" />
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </template>
  </table>
</template>
