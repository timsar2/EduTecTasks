import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IActionItem } from '../../cards/action-card/data-access/models/action-item.model'
import { ICardAction } from '../../cards/action-card/data-access/models/card-action.model'
import { MatIconModule } from '@angular/material/icon'
import { DragableDirective } from '@app/shared/directives/dragable.directive'
import { HoverOverDirective } from '@app/shared/directives/hover-over.directive'
import { CardWrapperComponent } from '../../cards/card-wrapper/card-wrapper.component'
import { CheckButtonComponent } from '../../check-button/check-button.component'

@Component({
  selector: 'edu-advanced-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    HoverOverDirective,
    CardWrapperComponent,
    CheckButtonComponent,
    DragableDirective
  ],
  templateUrl: './advanced-card.component.html',
  styleUrls: ['./advanced-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedCardComponent {
  @Input()
  set item(value: ICardAction | undefined) {
    if (value) {
      this.label = value.label ?? this.label
      this.actions = value.actions ?? this.actions
      this.slotEndClass = value.slotEndClass ?? this.slotEndClass
    }
  }

  @Input() label!: string
  @Input() subject?: string = ''
  @Input() description?: string = ''
  @Input() actions?: IActionItem[]
  @Input() state?: number
  @Input() dragable?: boolean = false
  @Input() slotStartClass?: string = ''
  @Input() slotEndClass?: string = ''

  @Output() onActionClicked = new EventEmitter<string>()
  @Output() onStateChange = new EventEmitter<number>()

  isCardExpanded = false

  constructor() {}

  emitAction(action?: string): void {
    action !== undefined ? this.onActionClicked.emit(action) : undefined
  }

  expandCard(): void {
    this.isCardExpanded = !this.isCardExpanded
  }

  changeState($event: number) {
    this.onStateChange.emit($event)
  }
}
