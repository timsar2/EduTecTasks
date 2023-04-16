import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
import { HoverOverDirective } from '@app/shared/directives/hover-over.directive'
import { ICardAction } from './data-access/models/card-action.model'
import { CardWrapperComponent } from '@app/shared/ui/card-wrapper/card-wrapper.component'
import { DragableDirective } from '@app/shared/directives/dragable.directive'

@Component({
  selector: 'edu-action-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, HoverOverDirective, CardWrapperComponent, DragableDirective],
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionCardComponent {
  @Input()
  public set item(value: ICardAction | undefined) {
    if (value) {
      this.label = value.label ?? this.label
      this.actions = value.actions ?? this.actions
      this.slotEndClass = value.slotEndClass ?? this.slotEndClass
    }
  }

  @Input() public label!: string
  @Input() public actions?: IActionItem[]
  @Input() public dragable?: boolean = false
  @Input() public slotStartClass?: string = ''
  @Input() public slotEndClass?: string = ''

  @Output() onActionClicked = new EventEmitter<string>()

  constructor() {}

  protected emitAction(action?: string): void {
    action !== undefined ? this.onActionClicked.emit(action) : undefined
  }
}
