import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWrapperComponent {
  @Input() public dragable?: boolean = false
  @Input() public flexGrow?: number | string = 'full'
  @Input() public actionBoxClass?: string = ''
}
