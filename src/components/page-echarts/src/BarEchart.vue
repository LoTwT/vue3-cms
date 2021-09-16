<script setup lang="ts">
import { computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import * as echarts from "echarts"

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options = computed<any>(() => ({
  xAxis: {
    data: props.xLabels,
    axisLabel: {
      inside: true,
      textStyle: {
        color: "#fff",
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: "#999",
      },
    },
  },
  dataZoom: [
    {
      type: "inside",
    },
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" },
          ]),
        },
      },
      data: props.values,
    },
  ],
}))
</script>

<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<style scoped></style>
