import * as echarts from "echarts"

export const useEcharts = (el: HTMLElement) => {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const triggerResize = () => echartInstance.resize()

  window.addEventListener("resize", () => {
    triggerResize()
  })

  return {
    echartInstance,
    setOptions,
    triggerResize,
  }
}
