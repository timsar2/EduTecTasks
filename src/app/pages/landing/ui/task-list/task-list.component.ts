import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ITaskGroup } from '../../data-access/models/task.model'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'

@Component({
  selector: 'edu-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() public tasks?: ITaskGroup[]
  @Input() public cardActions?: IActionItem[]

  protected log(action: string, index: number): void {
    console.table({ itemIndex: index, actionName: action })
  }
}
