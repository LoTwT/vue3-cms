import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface CmsRequestInterceptors<T = AxiosResponse<any>> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CmsRequestConfig<T = AxiosResponse<any>>
  extends AxiosRequestConfig {
  interceptors?: CmsRequestInterceptors<T>
  showLoading?: boolean
}
