import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ActionCardComponent } from '@app/shared/ui/action-card/action-card.component'
import { EduListComponent } from '@app/shared/ui/edu-list/edu-list.component'
import { ICardAction } from '@app/shared/ui/action-card/data-access/models/card-action.model'

@Component({
  standalone: true,
  imports: [CommonModule, ActionCardComponent, EduListComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public actionList: ICardAction[] = [
    {
      label: 'Itelian shower',
      actions: [
        { icon: 'delete', iconColor: 'danger', action: 'delete' },
        { icon: 'edit', iconColor: 'primary', action: 'edit' }
      ],
      dragable: false
    },
    {
      label: 'French shower',
      actions: [
        { icon: 'check_circle', iconColor: 'primary', action: 'sendFax' },
        { icon: 'done', iconColor: 'success', action: 'done' },
        { icon: 'visibility_off', iconColor: 'danger', action: 'visibilityOff' }
      ],
      dragable: true
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
