import { LOCAL_STORAGE_KEYS } from '../data-access/models/local-storage-keys'

const APP_PREFIX = 'EduTec-'

export class LocalStorageUtils {
  constructor() {}

  static setItem<T>(key: LOCAL_STORAGE_KEYS, value: T): void {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value))
  }

  static getItem<T>(key: LOCAL_STORAGE_KEYS): T | null {
    const value = localStorage.getItem(`${APP_PREFIX}${key}`)
    return value ? (JSON.parse(value) as T) : null
  }

  static removeItem(key: LOCAL_STORAGE_KEYS): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`)
  }

  static clearStorage(): void {
    localStorage.clear()
  }
}
