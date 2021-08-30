import { useCmsRequest } from "@/service/index"
import { IAccount, IDataType, ILoginResult } from "./types"

enum LoginApi {
  AccountLogin = "/login",
}

const cmsRequest = useCmsRequest()

export const accountLoginRequest = async (account: IAccount) =>
  await cmsRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  })
