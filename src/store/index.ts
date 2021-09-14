import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IBaseState, IStore } from "./types"
import login from "./login/login"
import system from "./main/system/system"
import { getPageListData } from "@/service/main/system/system"

const store = createStore<IBaseState>({
  state() {
    return {
      name: "",
      age: 1,
      entireDepartment: [],
      entireRole: [],
    }
  },
  mutations: {
    changeEntireDepartment(state, entireDepartment) {
      state.entireDepartment = entireDepartment
    },
    changeEntireRole(state, entireRole) {
      state.entireRole = entireRole
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 100,
      })
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 100,
      })

      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data

      // 2. 保存数据
      commit("changeEntireDepartment", departmentList)
      commit("changeEntireRole", roleList)
    },
  },
  modules: { login, system },
})

export default store

// 持久化
export const setupStore = () => {
  store.dispatch("login/loadLocalLogin")
  store.dispatch("getInitialDataAction")
}

// 封装自定义 useStore 更好支持 typescript
export const useStore = (): Store<IStore> => useVuexStore()
