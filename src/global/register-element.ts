import { App } from "vue"

import "element-plus/theme-chalk/base.css"
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElRadio,
  ElTabPane,
  ElTabs,
} from "element-plus"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
]

export const customGlobalElementPlus = (app: App<Element>): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
