import { Nullable } from "./types"

/**
 * 本地存储
 * LocalStorage
 */
class LocalCache {
  public setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  public getCache(key: string): Nullable<any> {
    const result = window.localStorage.getItem(key)
    return result ? JSON.parse(result) : null
  }

  public removeCache(key: string): void {
    window.localStorage.removeItem(key)
  }

  public clearCache(): void {
    window.localStorage.clear()
  }
}

const localCacheInstance = new LocalCache()

export const useLocalCache = (): LocalCache => localCacheInstance
