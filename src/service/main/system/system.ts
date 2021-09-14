import { useCmsRequest } from "@/service/index"
import { IDataType } from "@/service/types"

const cmsRequest = useCmsRequest()

export const getPageListData = (url: string, queryInfo: any) =>
  cmsRequest.post<IDataType>({ url, data: queryInfo })

export const deletePageData = (url: string) =>
  cmsRequest.delete<IDataType>({ url })

export const createPageData = (url: string, newData: any) =>
  cmsRequest.post<IDataType>({ url, data: newData })

export const editPageData = (url: string, editData: any) =>
  cmsRequest.patch<IDataType>({ url, data: editData })
