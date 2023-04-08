import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionThreeComponent {
  constructor() {}
}
