import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexDirection } from '@app/shared/models/flex-direction.model'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-label-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelInfoComponent {
  @Input() public label?: string
  @Input() public iconStart?: string
  @Input() public iconEnd?: string
  @Input() public labelInfoClass?: string = ''
}
