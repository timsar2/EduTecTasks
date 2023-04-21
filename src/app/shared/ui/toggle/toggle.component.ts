import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'edu-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  animations: [
    trigger('toggleTrigger', [
      state('off', style({ transform: 'translateX(0%)' })),
      state('on', style({ transform: 'translateX(100%)' })),
      transition('on <=> off', [animate('120ms ease-in-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  @Input() toggleOn?: boolean = false
  @Input() disabledText?: string = ''
  @Input() checkedText?: string = ''

  @Output() private toggledTo = new EventEmitter<boolean>()

  constructor() {}

  toggleClick(): void {
    this.toggleOn = !this.toggleOn
    this.toggledTo.emit(this.toggleOn)
  }
}
