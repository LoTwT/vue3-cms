import { Module } from "vuex"
import { ILoginState } from "./types"
import { IBaseState } from "../types"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById,
} from "@/service/login/login"
import { IAccount } from "@/service/login/types"
import { useLocalCache } from "@/utils/cache"
import router from "@/router/index"
import { mapMenusToRoutes } from "@/utils/map-menus"

// 本地存储
const localCache = useLocalCache()

const login: Module<ILoginState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any[]) {
      state.userMenus = userMenus

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // routes => router.main.children
      routes.forEach((route) => router.addRoute("main", route))
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3. 请求用户权限
      const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4. 跳转首页
      router.push("/main")
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("phoneLoginAction", payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) commit("changeToken", token)

      const userInfo = localCache.getCache("userInfo")
      if (userInfo) commit("changeUserInfo", userInfo)

      const userMenus = localCache.getCache("userMenus")
      if (userMenus) commit("changeUserMenus", userMenus)
    },
  },
}

export default login
