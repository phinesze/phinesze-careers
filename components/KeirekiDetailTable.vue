<script setup lang="ts">
import { careers } from "~/constants/careers";
</script>

<template>
  <table>
    <template v-for="company in careers">
      <template v-for="career in company.careers">
        <tr style="">
          <td rowspan="2">{{ company.company }}</td>
          <td rowspan="2">#{{ career.id }}</td>
          <th class="p-2">期間</th>
          <td class="p-2">{{ career.title }}</td>
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
          <td>
            <ContentDoc :path="`/careers/${career.id}`" />
          </td>
          <td>
            <ul>
              <li v-for="(elements, name) in career.environments">
                <p class="font-bold">{{ name }}</p>
                <div>
                  <EnvironmentElement
                    v-for="element in elements"
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
