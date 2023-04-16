import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'edu-search-box',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  @Input() public placeholder?: string = ''
  @Input() public value?: string = ''
}
