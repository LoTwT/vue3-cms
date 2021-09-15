import { useCmsRequest } from "@/service"
import { IDataType } from "@/service/types"

const cmsRequest = useCmsRequest()

const enum DashboardAPI {
  CATEGORY_GOODS_COUNT = "/goods/category/count",
  CATEGORY_GOODS_SALE = "/goods/category/sale",
  CATEGORY_GOODS_FAVOR = "/goods/category/favor",
  ADDRESS_GOODS_SALE = "/goods/address/sale",
}

export const getCategoryGoodsCount = () =>
  cmsRequest.get<IDataType>({ url: DashboardAPI.CATEGORY_GOODS_COUNT })

export const getCategoryGoodsSale = () =>
  cmsRequest.get<IDataType>({ url: DashboardAPI.CATEGORY_GOODS_SALE })

export const getCategoryGoodsFavor = () =>
  cmsRequest.get<IDataType>({ url: DashboardAPI.CATEGORY_GOODS_FAVOR })

export const getAddressGoodsSale = () =>
  cmsRequest.get<IDataType>({ url: DashboardAPI.ADDRESS_GOODS_SALE })
