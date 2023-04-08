import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteComponent {
  @Input() class = ''

  constructor() {}
}
