import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UiStore } from '@app/shared/data-access/store/ui.store'
import { INavMenu } from '@app/shell/models/nav-menu.model'
import { HeaderComponent } from '@app/shell/ui/header/header.component'
import { BehaviorSubject, combineLatest } from 'rxjs'

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  private options: INavMenu[] = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Resources',
      link: '/resources'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]

  private options$ = new BehaviorSubject<INavMenu[]>(this.options)

  vm$ = combineLatest({
    isMobile: this.uiStore.isMobile$,
    isSidebarCollapsed: this.uiStore.isSidebarCollapsed$,
    options: this.options$
  })

  constructor(private uiStore: UiStore) {}
}
