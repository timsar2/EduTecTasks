import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-section-divider',
  templateUrl: './section-divider.component.html',
  styleUrls: ['./section-divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionDividerComponent {
  constructor() {}
}
