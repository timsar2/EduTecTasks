import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-edu-item-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu-item-divider.component.html',
  styleUrls: ['./edu-item-divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EduItemDividerComponent {
  @Input() public className?: string = ''
}
