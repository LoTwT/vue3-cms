import { Module } from "vuex"
import { ILoginState } from "./types"
import { IBaseState } from "../types"
import { accountLoginRequest } from "@/service/login/login"
import { IAccount } from "@/service/login/types"

const login: Module<ILoginState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("phoneLoginAction", payload)
    },
  },
}

export default login
