import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { INavMenu } from '@app/shell/models/nav-menu.model'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'
import { ScrollService } from '@app/shared/data-access/services/Scroll.service'

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

  constructor(private scrollService: ScrollService) {}

  scrollTo(id: string) {
    this.toggleSideNav()
    setTimeout(() => {
      this.scrollService.scrollToElementById(id)
    })
  }

  private toggleSideNav() {
    this.onToggleMenu.emit()
  }
}
