import { useCmsRequest } from "@/service/index"
import { IDataType } from "@/service/types"

const cmsRequest = useCmsRequest()

export const getPageListData = (url: string, queryInfo: any) =>
  cmsRequest.post<IDataType>({ url, data: queryInfo })
