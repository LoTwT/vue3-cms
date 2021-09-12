import { IBaseState } from "@/store/types"
import { Module } from "vuex"
import { ISystemPayload, ISystemState } from "./types"
import { deletePageData, getPageListData } from "@/service/main/system/system"

const system: Module<ISystemState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
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
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) =>
        (state as any)[`${pageName.toLowerCase()}List`]
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
      const pageUrl = `/${pageName.toLowerCase()}/list`

      // 2. 发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3. 数据存入 store
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1. 获取 pageName, id
      const { pageName, id } = payload
      const pageUrl = `/${pageName.toLowerCase()}/${id}`

      // 2. 删除请求
      await deletePageData(pageUrl)

      // 3. 重新请求数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      })
    },
  },
}

export default system
