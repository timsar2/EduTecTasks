import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {}
