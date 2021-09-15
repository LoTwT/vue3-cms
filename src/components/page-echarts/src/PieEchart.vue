<script setup lang="ts">
import { computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import type { EChartsOption } from "echarts"
import type { IEchartData } from "../types"

const props = withDefaults(defineProps<{ pieData: IEchartData[] }>(), {})

const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "分类数据",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
}))
</script>

<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<style scoped></style>
