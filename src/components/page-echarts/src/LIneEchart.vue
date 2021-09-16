<script setup lang="ts">
import { computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import type { EChartsOption } from "echarts"
import { IEchartData } from "../types"

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: props.xLabels,
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "分别销量",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: props.values,
    },
  ],
}))
</script>

<template>
  <div class="line-echart">
    <base-echart :options="options" />
  </div>
</template>

<style scoped></style>
