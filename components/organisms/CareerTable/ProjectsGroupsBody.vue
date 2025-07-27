<script setup lang="ts">
import { ProjectGroup } from "~/types/ProjectGroup";
import { useCareerTableSections } from "~/composables/useCareerTableSections.ts";
const { isSecrets } = useCareerTableSections();

const props = defineProps<{
  index: number;
  groups: ProjectGroup[];
}>();
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
        <td class="bg-blue-100 border-t-[3px] pl-2 font-bold" colspan="3">
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
        <td class="bg-lime-300 text-center" rowspan="2">
          #{{ career.id }}
          <IntervalDateLabel v-if="career.times" :value="career.times" />
        </td>
        <!-- 1B: 本文タイトル -->
        <td class="font-bold p-2 bg-cyan-100">
          {{ career.title }}
        </td>
        <!-- 1C: チーム人数・言語・フレームワークタイトル -->
        <th class="p-2">チーム人数・言語・フレームワーク</th>
      </tr>
      <!-- 2行目: 文章部分（チーム人数を除く） -->
      <tr>
        <!-- 2B: 本文  -->
        <td class="align-top">
          <MarkdownDocument :markdown-text="career.detail" />
        </td>
        <!-- 2C: チーム人数・言語・フレームワーク -->
        <td class="align-top">
          <!-- チーム人数-->
          <div v-if="career.teams" class="text-xl font-bold">チーム人数</div>
          <ul v-if="career.teams" class="inline-block w-fit">
            <li
              v-for="(teamNumber, team) in career.teams"
              :key="team"
              class="text-left"
            >
              {{ team }}:
              <TeamNumberLabel :value="teamNumber" />
            </li>
          </ul>
          <div class="text-xl font-bold">言語・フレームワーク</div>
          <!-- 言語・フレームワーク -->
          <EnvironmentListSection
            v-if="career.environments"
            :environments="career.environments"
          />
        </td>
      </tr>
    </tbody>
  </template>
</template>
