import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
} from "@/service/main/analysis/dashboard"
import { IBaseState } from "@/store/types"
import { Module } from "vuex"
import { IDashboardState } from "./types"

const dashboard: Module<IDashboardState, IBaseState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    changeCategoryGoodsSale(state, categoryGoodsSale) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    changeCategoryGoodsFavor(state, categoryGoodsFavor) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    changeAddressGoodsSale(state, addressGoodsSale) {
      state.addressGoodsSale = addressGoodsSale
    },
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      const addressGoodsSaleResult = await getAddressGoodsSale()

      commit("changeCategoryGoodsCount", categoryGoodsCountResult.data)
      commit("changeCategoryGoodsSale", categoryGoodsSaleResult.data)
      commit("changeCategoryGoodsFavor", categoryGoodsFavorResult.data)
      commit("changeAddressGoodsSale", addressGoodsSaleResult.data)
    },
  },
}

export default dashboard
