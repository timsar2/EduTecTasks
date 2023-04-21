import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-content-holder',
  templateUrl: './content-holder.component.html',
  styleUrls: ['./content-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHolderComponent {
  @Input() title?: string
  @Input() subTitle?: string
  @Input() content?: string
  @Input() alignCenter?: boolean = false

  constructor() {}
}
