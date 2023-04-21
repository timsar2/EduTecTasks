import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'edu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EduListComponent<T> {
  @ContentChild(TemplateRef) outlet!: TemplateRef<any>

  @Input() items?: T[]
  @Input() className?: string = ''

  identify(index: number, item: any) {
    return item
  }
}
