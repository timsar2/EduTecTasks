import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
import { HoverOverDirective } from '@app/shared/directives/hover-over.directive'
import { ICardAction } from './data-access/models/card-action.model'

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, HoverOverDirective],
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionCardComponent {
  @Input()
  public set item(value: ICardAction | undefined) {
    if (value) {
      this.label = value.label
      this.actions = value.actions
      this.dragable = value.dragable
    }
  }

  @Input() label!: string
  @Input() actions?: IActionItem[]
  @Input() dragable?: boolean = false

  @Output() onActionClicked = new EventEmitter<string>()

  constructor(private cdr: ChangeDetectorRef) {}

  emitAction(action?: string) {
    action !== undefined ? this.onActionClicked.emit(action) : undefined
  }
}
