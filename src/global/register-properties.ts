import { App } from "vue"
import { formatUtcTime } from "@/utils/data-format"

export const registerGlobalProperties = (app: App) => {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcTime(value)
    },
  }
}
