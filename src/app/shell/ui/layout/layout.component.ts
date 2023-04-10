import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ActionCardComponent } from '@app/shared/ui/action-card/action-card.component'

@Component({
  standalone: true,
  imports: [CommonModule, ActionCardComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor() {}
}
