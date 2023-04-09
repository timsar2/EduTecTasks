import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionThreeComponent {
  data: IContentLoder = {
    title: 'RESOURCES',
    subTitle: 'Interlocked strategy',
    content:
      'Lorem ipsum dolor sit amet. Eum sapiente Quis qui sunt dignissimos rem dolores quasi qui iure beatae ex recusandae molestiae est beatae aliquid qui velit temporibus. '
  }

  constructor() {}
}
