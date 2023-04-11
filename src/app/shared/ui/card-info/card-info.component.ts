import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { LabelInfoComponent } from '../label-info/label-info.component'
import { MatIconModule } from '@angular/material/icon'
import { ILabelInfo } from '@app/shared/data-access/models/label-info.model'

@Component({
  standalone: true,
  imports: [CommonModule, LabelInfoComponent, MatIconModule],
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInfoComponent {
  @Input() public icon?: string
  @Input() public title?: string
  @Input() public infoList?: ILabelInfo[] = []

  constructor() {}
}
