import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-edu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EduListComponent<T> {
  @ContentChild(TemplateRef) template!: TemplateRef<any>

  @Input() public items?: T[]
}
