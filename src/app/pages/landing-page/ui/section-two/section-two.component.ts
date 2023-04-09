import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTwoComponent {
  data: IContentLoder = {
    title: 'Lorem ipsum on lihtsalt',
    content: `We smartly combine engineering processes and knowledge gained over several decades by the space sector with
    innovative NewSpace approaches to offer our customers affordable, quick-to-market and reliable solutions. Our
    partners and customers are international agencies like ESA and the European Commission, national Governments and
    Institutions and a variety of commercial customers.`
  }

  constructor() {}
}
