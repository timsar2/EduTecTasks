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
  @Input() public toggleOn = false
  @Input() public disabledText?: string = ''
  @Input()
  public set checkedText(value: string | undefined) {
    this._checkedText = value
    this.selected = value
  }

  @Output() private toggledTo = new EventEmitter<string>()

  public selected?: string = ''

  private _checkedText?: string | undefined = ''

  constructor() {}

  public get checkedText(): string | undefined {
    return this._checkedText
  }

  public toggleClick(): void {
    if (this.toggleOn) {
      this.selected = this.checkedText
      this.toggledTo.emit('off')
    } else {
      this.selected = this.disabledText
      this.toggledTo.emit('on')
    }

    this.toggleOn = !this.toggleOn
  }
}
