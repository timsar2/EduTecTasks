import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ICardInfo } from '@app/shared/data-access/models/card-info.mode'

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionFooterComponent {
  data: ICardInfo[] = [
    {
      icon: 'edu-astronut',
      infoList: [{ icon: 'place', label: 'LuxSpace Sàrl 9, rue Pierre Werner L-6832 Betzdorf' }]
    },
    {
      title: 'Contact',
      infoList: [
        { icon: 'email', label: 'info@luxspace.lu' },
        { icon: 'phone_enabled', label: 'info@luxspace.lu' },
        { icon: 'fax', label: 'info@luxspace.lu' }
      ]
    },
    {
      title: 'Visiting LuxSpace',
      infoList: [{ icon: 'arrow_forward_ios', label: 'Visiting LuxSpace (PDF)' }]
    },
    {
      title: 'Social Media',
      infoList: [{ icon: 'facebook' }]
    }
  ]

  constructor() {}
}
