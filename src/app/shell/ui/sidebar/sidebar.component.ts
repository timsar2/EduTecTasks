import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { INavMenu } from '@app/shell/models/nav-menu.model'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, RouterModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() options!: INavMenu[]
  @Output() onToggleMenu = new EventEmitter()

  toggleSideNav() {
    this.onToggleMenu.emit()
  }
}
