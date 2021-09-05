import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router/index"
import store, { setupStore } from "@/store/index"

import "normalize.css"
import "@/assets/css/index.less"
import "element-plus/dist/index.css"
import { customGlobalConfig } from "./global"

const app = createApp(App)

// setupStore() 根据请求数据注册了路由
// 需要在注册 router 之前调用，才能够正确匹配刷新时的跳转 url
setupStore()
app.use(router)
app.use(store)
app.use(customGlobalConfig)

app.mount("#app")
