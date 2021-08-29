import { createApp } from "vue"
import App from "./App.vue"

import "element-plus/dist/index.css"
import { customGlobalConfig } from "./global"

createApp(App).use(customGlobalConfig).mount("#app")
