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
  protected state = 0

  public changeState() {
    this.state < 4 ? this.state++ : (this.state = 0)
  }
}
