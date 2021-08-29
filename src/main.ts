import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/index"
import store from "@/store/index"

import "element-plus/dist/index.css"
import { customGlobalConfig } from "./global"

createApp(App).use(router).use(store).use(customGlobalConfig).mount("#app")
