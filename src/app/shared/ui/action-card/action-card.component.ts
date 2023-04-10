import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { IActionItem } from '@app/shared/models/action-item.model'
import { HoverOverDirective } from '@app/shared/directives/hover-over.directive'

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, HoverOverDirective],
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionCardComponent {
  @Input() label!: string
  @Input() actions?: IActionItem[]
  @Input() dragable?: boolean = false

  @Output() onActionClicked = new EventEmitter<string>()

  emitAction(action?: string) {
    action !== undefined ? this.onActionClicked.emit(action) : undefined
  }
}
