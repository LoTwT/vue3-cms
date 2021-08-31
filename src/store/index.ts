import { createStore } from "vuex"
import { IBaseState } from "./types"
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
