import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IBaseState, IStore } from "./types"
import login from "./login/login"

const store = createStore<IBaseState>({
  state() {
    return {
      name: "",
      age: 1,
    }
  },
  mutations: {},
  actions: {},
  modules: { login },
})

export default store

// 持久化
export const setupStore = () => {
  store.dispatch("login/loadLocalLogin")
}

// 封装自定义 useStore 更好支持 typescript
export const useStore = (): Store<IStore> => useVuexStore()
