import { IBaseState } from "@/store/types"
import { Module } from "vuex"
import { ISystemPayload, ISystemState } from "./types"
import { getPageListData } from "@/service/main/system/system"

const system: Module<ISystemState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "User":
            return state.userList
          case "Role":
            return state.roleList
        }
      }
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemPayload) {
      // 1. 获取 pageUrl
      const pageName = payload.pageName
      let pageUrl = ""

      switch (pageName) {
        case "User":
          pageUrl = "/users/list"
          break
        case "Role":
          pageUrl = "/role/list"
          break
        default:
          break
      }

      // 2. 发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3. 数据存入 store
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    },
  },
}

export default system
