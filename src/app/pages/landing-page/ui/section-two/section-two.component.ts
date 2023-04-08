import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTwoComponent {
  constructor() {}
}
