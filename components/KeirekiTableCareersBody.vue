<script setup lang="ts">
import { careers } from "~/constants/careers";

const getRowSpan = (career: any) => {
  let rowspan = 2;
  if (career.teams) {
    rowspan += 2;
  }
  return rowspan;
};
</script>

<template>
  <template v-for="company in careers">
    <tbody
      v-for="career in company.careers"
      :key="career.id"
      class="career-row break-inside-avoid"
    >
      <tr>
        <td class="bg-gray-400" :rowspan="getRowSpan(career)">
          {{ company.company }}
        </td>
        <td class="bg-lime-300" :rowspan="getRowSpan(career)">
          #{{ career.id }}
        </td>
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
          <section
            v-for="(elements, name) in career.environments"
            :key="name"
            class="mb-3"
          >
            <p class="font-bold">{{ `【${name}】` }}</p>
            <div>
              <template v-for="(element, index) in elements" :key="element">
                <EnvironmentElementLabel :element="element" />
                <span v-if="index + 1 < elements.length">{{ '、' }}</span>
              </template>
            </div>
          </section>
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
              {{ team }}:
              <TeamNumberLabel :value="teamNumber" />
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </template>
</template>
