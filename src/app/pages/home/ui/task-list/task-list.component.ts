import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ITask, ITaskGroup } from '@app/pages/home/data-access/models/task.model'
import { IActionItem } from '@app/shared/ui/cards/action-card/data-access/models/action-item.model'

@Component({
  selector: 'edu-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() public tasks?: ITaskGroup[]
  @Input() public cardActions?: IActionItem[]

  public log(action: string, index: number): void {
    console.table({ itemIndex: index, actionName: action })
  }

  public changeState(event: number, item: ITask) {
    if (!this.tasks) {
      return
    }

    item.state = event
  }
}
