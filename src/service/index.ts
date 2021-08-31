import { CmsRequest } from "./request/index"
import { BASE_URL, TIME_OUT } from "./request/config"
import { useLocalCache } from "@/utils/cache"

const localCache = useLocalCache()
const cmsRequest = new CmsRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带 token 拦截示例
      const token = localCache.getCache("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => err,
    responseInterceptor: (res) => res,
    responseInterceptorCatch: (err) => err,
  },
})

/**
 * 全局的基础请求实例
 * 未考虑特殊请求实例
 */
export const useCmsRequest = (): CmsRequest => cmsRequest
