export type EntityStatus = 'Loading' | 'Loaded' | 'Error' | 'Init'

export interface SimpleEntity<T> {
  data: T
  status: EntityStatus
  error?: string
}
