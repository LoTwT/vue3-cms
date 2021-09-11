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
      goodsList: [],
      goodsCount: 0,
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
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
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
          case "Goods":
            return state.goodsList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) =>
        (state as any)[`${pageName.toLowerCase()}Count`]
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
        case "Goods":
          pageUrl = "/goods/list"
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
