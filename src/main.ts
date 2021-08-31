import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/index"
import store, { setupStore } from "@/store/index"

import "normalize.css"
import "@/assets/css/index.less"
import "element-plus/dist/index.css"
import { customGlobalConfig } from "./global"

const app = createApp(App)
app.use(router).use(store).use(customGlobalConfig)

setupStore()

app.mount("#app")
