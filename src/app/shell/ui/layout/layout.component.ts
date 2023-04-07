import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HeaderComponent } from '@app/shell/ui/header/header.component'

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor() {}
}
