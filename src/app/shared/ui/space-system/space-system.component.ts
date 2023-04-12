import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SatelliteComponent } from '@app/shared/ui/satellite/satellite.component'

@Component({
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, SatelliteComponent],
  selector: 'app-space-system',
  templateUrl: './space-system.component.html',
  styleUrls: ['./space-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceSystemComponent {}
