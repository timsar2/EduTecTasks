import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'edu-label-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelInfoComponent {
  @Input() label?: string
  @Input() iconStart?: string
  @Input() iconEnd?: string
  @Input() className?: string = ''
  @Input() classIconStart?: string = ''
  @Input() classIconEnd?: string = ''
}
