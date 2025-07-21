<script setup lang="ts">
import { ProjectGroup } from "~/types/ProjectGroup";
import { useCareerTableSections } from "~/composables/useCareerTableSections.ts";
const { isSecrets } = useCareerTableSections();

const props = defineProps<{
  index: number;
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
  <template
    v-for="(group) in props.groups as ProjectGroup[]"
    :key="group.companyAlias"
  >
    <tbody class="break-after-avoid">
      <!-- ヘッダー1行目: 会社名 -->
      <tr>
        <!-- 1A: 会社名 -->
        <td class="bg-blue-100 border-t-[3px] pl-2 font-bold" colspan="5">
          {{
            isSecrets ? group.company ?? group.companyAlias : group.companyAlias
          }}
        </td>
      </tr>
    </tbody>
    <tbody
      v-for="career in group.projects"
      :key="career.id"
      class="career-row break-inside-avoid"
    >
      <!-- 1行目: タイトル（チーム人数を除く） -->
      <tr>
        <!-- 1A: プロジェクト番号 -->
        <td
          class="bg-lime-300 text-center"
          colspan="2"
          :rowspan="getRowSpan(career)"
        >
          #{{ career.id }}
        </td>
        <!-- 1B: 期間タイトル -->
        <th class="p-2">期間</th>
        <!-- 1C: 本文タイトル -->
        <td class="font-bold p-2 bg-cyan-100">{{ career.title }}</td>
        <!-- 1D: 言語・フレームワークタイトル -->
        <th class="p-2">言語・フレームワーク</th>
      </tr>
      <!-- 2行目: 文章部分（チーム人数を除く） -->
      <tr>
        <!-- 2B: 期間 -->
        <td>
          <IntervalDateLabel v-if="career.times" :value="career.times" />
        </td>
        <!-- 2C: 本文  -->
        <td class="align-top" :rowspan="getRowSpan(career) - 1">
          <MarkdownDocument :markdown-text="career.detail" />
        </td>
        <!-- 2D: 言語・フレームワーク -->
        <td class="align-top" :rowspan="getRowSpan(career) - 1">
          <EnvironmentListSection
            v-if="career.environments"
            :environments="career.environments"
          />
        </td>
      </tr>
      <!-- 3行目: タイトル（チーム人数） -->
      <tr v-if="career.teams" class="h-10">
        <!-- 3B: タイトル（チーム人数） -->
        <th>チーム人数</th>
      </tr>
      <!-- 3行目: 文章部分（チーム人数） -->
      <tr v-if="career.teams">
        <!-- 3B: チーム人数 -->
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
