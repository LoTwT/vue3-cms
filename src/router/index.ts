import { useLocalCache } from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/main" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/NotFound.vue"),
  },
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

  if (to.path === "/main") return firstMenu.url
})

export default router
