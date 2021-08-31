import { useLocalCache } from "@/utils/cache"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/main" },
  { path: "/login", component: () => import("@/views/login/Login.vue") },
  { path: "/main", component: () => import("@/views/main/Main.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const localCache = useLocalCache()
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) return "/login"
  }
})

export default router
