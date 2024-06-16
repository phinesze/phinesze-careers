<script setup lang="ts">
import { ProjectGroup } from "~/types/ProjectGroup";

const props = defineProps<{
  groups: ProjectGroup[];
}>();

const getRowSpan = (career: any) => {
  let rowspan = 2;
  if (career.teams) {
    rowspan += 2;
  }
  return rowspan;
};
</script>

<template>
  <template v-for="group in props.groups as ProjectGroup[]">
    <tbody
      v-for="career in group.projects"
      :key="career.id"
      class="career-row break-inside-avoid"
    >
      <tr>
        <td class="bg-gray-400" :rowspan="getRowSpan(career)">
          {{ group.company }}
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
          <MarkdownDocument :markdown-text="career.detail" />
        </td>
        <td class="align-top" :rowspan="getRowSpan(career) - 1">
          <EnvironmentListSection
            v-if="career.environments"
            :environments="career.environments"
          />
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
              :key="team"
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
