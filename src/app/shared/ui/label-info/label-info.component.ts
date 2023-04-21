import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { ILabelInfo } from '@app/shared/data-access/models/label-info.model'

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelInfoComponent {
  @Input() data?: ILabelInfo
  @Input() icon?: string
  @Input() label?: string

  constructor() {}
}
