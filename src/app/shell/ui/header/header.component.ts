import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { INavMenu } from '@app/shell/models/nav-menu.model'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'

@Component({
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, AngularSvgIconModule, RouterModule, MatButtonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() options!: INavMenu[]

  constructor() {}
}
