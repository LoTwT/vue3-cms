import { Module } from "vuex"
import { ILoginState } from "./types"
import { IBaseState } from "../types"

const login: Module<ILoginState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("accountLoginAction", payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("phoneLoginAction", payload)
    },
  },
}

export default login
