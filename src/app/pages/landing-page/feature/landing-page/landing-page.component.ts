import { Component } from '@angular/core'
import { ICardAction } from '@app/shared/ui/action-card/data-access/models/card-action.model'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public actionList: ICardAction[] = [
    {
      label: 'Itelian shower',
      actions: [
        { icon: 'delete', iconColor: 'danger', action: 'delete' },
        { icon: 'edit', iconColor: 'primary', action: 'edit' }
      ]
    },
    {
      label: 'French shower',
      actions: [
        { icon: 'check_circle', iconColor: 'primary', action: 'sendFax' },
        { icon: 'done', iconColor: 'success', action: 'done' },
        { icon: 'visibility_off', iconColor: 'danger', action: 'visibilityOff' }
      ]
    },
    {
      label: 'French shower',
      actions: [{ icon: 'check_circle', iconColor: 'primary', action: 'sendFax' }]
    },
    {
      label: 'French shower',
      actions: [
        { icon: 'check_circle', iconColor: 'primary', action: 'sendFax' },
        { icon: 'done', iconColor: 'success', action: 'done' },
        { icon: 'visibility_off', iconColor: 'danger', action: 'visibilityOff' }
      ]
    }
  ]
  constructor() {}

  public log(action: string, index: number): void {
    console.table({ itemIndex: index, actionName: action })
  }
}
