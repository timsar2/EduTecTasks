import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'edu-check-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckButtonComponent {
  @Input() public className?: string = ''
  @Input() public state?: number = 0

  public changeState(): void {
    if (!this.state) {
      this.state = 0
    }

    this.state < 4 ? this.state++ : (this.state = 0)
  }
}
