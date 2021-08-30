import { createStore } from "vuex"
import { IBaseState } from "./types"
import login from "./login/login"

export default createStore<IBaseState>({
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
