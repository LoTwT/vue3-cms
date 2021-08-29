import axios from "axios"
import type { AxiosInstance } from "axios"
import type { CmsRequestConfig, CmsRequestInterceptors } from "./type"
import { ElLoading, ILoadingInstance } from "element-plus"

const DEFAULT_SHOW_LOADING = true

/**
 * 封装 axios，向外暴露统一的请求方法
 */
export class CmsRequest {
  // axios 实例
  private _instance: AxiosInstance
  // axios 拦截器
  private _interceptors?: CmsRequestInterceptors
  // ElLoading 组件的 loading 实例
  private _loading?: ILoadingInstance
  // 是否显示 loading 界面
  private _showLoading: boolean

  constructor(config: CmsRequestConfig) {
    // 创建 axios 实例
    this._instance = axios.create(config)
    // 配置 showLoading
    this._showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING
    // 初始化实例配置
    this.init(config)

    // 注册全局拦截器 (根据需求调整位置)
    // 请求拦截，先注册的后拦截
    this._instance.interceptors.request.use(
      (config) => {
        if (this._showLoading) {
          this._loading = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            background: "rgba(0,0,0,0.5)",
          })
        }

        return config
      },
      (err) => err,
    )
    // 响应拦截，先注册的先响应
    this._instance.interceptors.response.use(
      (res) => {
        // 用 axios 的响应封装判断请求是否成功
        // (业务请求失败: HTTP 状态码 2xx，但和后端约定的 responseCode / returnCode 意义为失败时)

        this._loading?.close()

        // 解开 axios 的响应封装
        return res.data
      },
      (err) => {
        // HttpErrorCode, 4xx, 5xx

        this._loading?.close()

        return err
      },
    )
  }

  /**
   * 初始化
   * @param config
   */
  private init(config: CmsRequestConfig): void {
    // 注册实例拦截器
    this._interceptors = config.interceptors

    this._instance.interceptors.request.use(
      this._interceptors?.requestInterceptor,
      this._interceptors?.requestInterceptorCatch,
    )

    this._instance.interceptors.response.use(
      this._interceptors?.responseInterceptor,
      this._interceptors?.responseInterceptorCatch,
    )
  }

  public async request<T>(config: CmsRequestConfig<T>): Promise<T> {
    try {
      if (config.showLoading === false) this._showLoading = config.showLoading

      // 单个请求的请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      let res = await this._instance.request<any, T>(config)

      // 单个请求的响应拦截器
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }

      return res
    } catch (e: any) {
      throw Error(e)
    } finally {
      // 重置 showLoading 为默认显示
      this._showLoading = DEFAULT_SHOW_LOADING
    }
  }

  public async get<T>(config: CmsRequestConfig<T>): Promise<T> {
    return await this.request<T>({ ...config, method: "GET" })
  }

  public async post<T>(config: CmsRequestConfig<T>): Promise<T> {
    return await this.request<T>({ ...config, method: "POST" })
  }

  public async put<T>(config: CmsRequestConfig<T>): Promise<T> {
    return await this.request<T>({ ...config, method: "PUT" })
  }

  public async delete<T>(config: CmsRequestConfig<T>): Promise<T> {
    return await this.request<T>({ ...config, method: "DELETE" })
  }

  public async patch<T>(config: CmsRequestConfig<T>): Promise<T> {
    return await this.request<T>({ ...config, method: "PATCH" })
  }
}
