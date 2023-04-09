import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LabelInfoComponent } from '../label-info/label-info.component'

@Component({
  standalone: true,
  imports: [CommonModule, LabelInfoComponent],
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInfoComponent {
  constructor() {}
}
