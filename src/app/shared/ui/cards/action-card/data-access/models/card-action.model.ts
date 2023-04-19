import { IActionItem } from './action-item.model'

export interface ICardAction {
  label: string
  actions?: IActionItem[]
  slotEndClass?: string
}
