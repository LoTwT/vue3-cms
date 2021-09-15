<script setup lang="ts">
import { ref, onMounted } from "vue"
import type { EChartsOption } from "echarts"
import { useEcharts } from "../hooks/use-echarts"

const props = withDefaults(
  defineProps<{
    width: string
    height: string
    options: EChartsOption
  }>(),
  {
    width: "100%",
    height: "360px",
  },
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value!)
  setOptions(props.options)
})
</script>

<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<style scoped></style>
