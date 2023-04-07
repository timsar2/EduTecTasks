import { LOCAL_STORAGE_KEYS } from '../data-access/models/local-storage-keys'

const APP_PREFIX = 'EduTec-'

export class LocalStorageUtils {
  constructor() {}

  public static setItem<T>(key: LOCAL_STORAGE_KEYS, value: T): void {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value))
  }

  public static getItem<T>(key: LOCAL_STORAGE_KEYS): T | null {
    const value = localStorage.getItem(`${APP_PREFIX}${key}`)
    return value ? (JSON.parse(value) as T) : null
  }

  public static removeItem(key: LOCAL_STORAGE_KEYS): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`)
  }

  public static clearStorage(): void {
    localStorage.clear()
  }
}
