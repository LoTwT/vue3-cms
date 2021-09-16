<script setup lang="ts">
import { computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import type { EChartsOption } from "echarts"
import { IEchartData } from "../types"

const props = defineProps<{
  roseData: IEchartData[]
}>()

const options = computed<EChartsOption>(() => ({
  legend: {
    top: "bottom",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "面积模式",
      type: "pie",
      radius: [10, 100],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: props.roseData,
    },
  ],
}))
</script>

<template>
  <div class="rose-echart">
    <base-echart :options="options" />
  </div>
</template>

<style scoped></style>
