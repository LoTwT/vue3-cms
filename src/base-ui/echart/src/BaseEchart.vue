<script setup lang="ts">
import { ref, onMounted } from "vue"
import * as echarts from "echarts"

const props = withDefaults(
  defineProps<{
    width: string
    height: string
    options: echarts.EChartsCoreOption
  }>(),
  {
    width: "100%",
    height: "360px",
  },
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!)
  echartInstance.setOption(props.options)
})
</script>

<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<style scoped></style>
