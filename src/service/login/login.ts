import { useCmsRequest } from "@/service/index"
import { IAccount, IDataType, ILoginResult } from "./types"

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // /users/1
  UserMenus = "/role/", // role/1/menu
}

const cmsRequest = useCmsRequest()

// 登录
export const accountLoginRequest = async (account: IAccount) =>
  await cmsRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  })

// 用户信息
export const requestUserInfoById = async (id: number) =>
  await cmsRequest.get<IDataType<any>>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false,
  })

// 用户权限
export const requestUserMenusById = async (id: number) =>
  await cmsRequest.get<IDataType<any>>({
    url: LoginApi.UserMenus + id + "/menu",
    showLoading: false,
  })
