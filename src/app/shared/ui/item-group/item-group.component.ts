import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EduListComponent } from '../edu-list/edu-list.component'

@Component({
  selector: 'edu-item-group',
  standalone: true,
  imports: [CommonModule, EduListComponent],
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemGroupComponent<T> {
  @ContentChild(TemplateRef) outlet!: TemplateRef<any>
  @Input() public items?: T[]
  @Input() public className?: string = ''
}
