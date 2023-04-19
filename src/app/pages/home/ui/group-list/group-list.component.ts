import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IHouseFactors } from '@app/pages/home/data-access/models/house-factors.model'
import { IActionItem } from '@app/shared/ui/cards/action-card/data-access/models/action-item.model'

@Component({
  selector: 'edu-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListComponent {
  @Input() public houseFactors?: IHouseFactors[]
  @Input() public cardActions?: IActionItem[]

  protected log(action: string, index: number): void {
    console.table({ itemIndex: index, actionName: action })
  }
}
