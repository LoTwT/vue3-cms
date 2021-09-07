import { App } from "vue"
import { registerGlobalElementPlus } from "./register-element"
import { registerGlobalProperties } from "./register-properties"

// 注册自定义全局内容
export const customGlobalConfig = (app: App<Element>): void => {
  app.use(registerGlobalElementPlus)
  app.use(registerGlobalProperties)
}
