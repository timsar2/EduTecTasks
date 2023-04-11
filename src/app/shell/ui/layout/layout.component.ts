import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
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
  actionList: ICardAction[] = [
    {
      label: 'Itelian shower',
      actions: [
        { icon: 'edit', iconColor: 'primary', action: 'send' },
        { icon: 'edit', iconColor: 'primary', action: 'send' }
      ],
      dragable: false
    },
    {
      label: 'French shower',
      actions: [
        { icon: 'fax', iconColor: 'primary', action: 'fax' },
        { icon: 'fax', iconColor: 'primary', action: 'fax' }
      ],
      dragable: true
    }
  ]
  constructor() {
    setTimeout(() => {
      this.actionList = [
        ...this.actionList,
        {
          label: 'Chaina shower',
          actions: [
            { icon: 'fax', iconColor: 'primary', action: 'fax' },
            { icon: 'fax', iconColor: 'primary', action: 'fax' }
          ],
          dragable: false
        }
      ]
    }, 3000)
  }
}
