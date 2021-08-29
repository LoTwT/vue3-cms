import { App } from "vue"
import { customGlobalElementPlus } from "./register-element"

// 注册自定义全局内容
export const customGlobalConfig = (app: App<Element>): void => {
  app.use(customGlobalElementPlus)
}
