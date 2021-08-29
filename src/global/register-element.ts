import { App } from "vue"

import "element-plus/theme-chalk/base.css"
import { ElButton } from "element-plus"

const components = [ElButton]

export const customGlobalElementPlus = (app: App<Element>): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
