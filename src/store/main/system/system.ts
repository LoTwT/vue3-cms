import { IBaseState } from "@/store/types"
import { Module } from "vuex"
import { ISystemState } from "./types"
import { getPageListData } from "@/service/main/system/system"

const system: Module<ISystemState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
  },
  actions: {
    /**
     * @param {pageUrl: string, queryInfo: any} payload
     */
    async getPageListAction({ commit }, payload: any) {
      // 1. 发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo,
      )
      const { list, totalCount } = pageResult.data
      commit("changeUserList", list)
      commit("changeUserCount", totalCount)
    },
  },
}

export default system
