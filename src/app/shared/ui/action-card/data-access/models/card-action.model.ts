import { IActionItem } from './action-item.model'

export interface ICardAction {
  label: string
  actions?: IActionItem[]
  dragable?: boolean
  slotEndClass?: string
}
