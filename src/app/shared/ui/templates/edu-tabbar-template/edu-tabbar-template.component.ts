import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'edu-tabbar-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu-tabbar-template.component.html',
  styleUrls: ['./edu-tabbar-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EduTabbarTemplateComponent {
  @Input() headerClass?: string = ''
  @Input() className?: string = ''
  @Input() footerClass?: string = ''
}
