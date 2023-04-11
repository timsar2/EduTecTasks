import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ICard } from '@app/shared/data-access/models/card.model'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionThreeComponent {
  protected data: IContentLoder = {
    title: 'RESOURCES',
    subTitle: 'Interlocked strategy',
    content:
      'Lorem ipsum dolor sit amet. Eum sapiente Quis qui sunt dignissimos rem dolores quasi qui iure beatae ex recusandae molestiae est beatae aliquid qui velit temporibus. '
  }

  protected items: ICard[] = [
    {
      title: 'Components & Technology',
      content: 'Communication subsystem Satellite Simulators Electronics & Software Drag Sails technologies',
      icon: 'edu-chip',
      link: 'about'
    },
    {
      title: 'Microsatellites',
      content: 'Modular and scalable Multi-Mission Launch mass: 20-100 kg Payload power: 15-100 W',
      icon: 'edu-ball',
      link: ''
    },
    {
      title: 'Application & Services',
      content:
        'AIS (Naval Vessel Tracking) ADS-B (Aircraft Tracking) Earth Observation (Optical, SAR, Data Quality Control) Telecommunications (M2M)',
      icon: 'edu-snow',
      link: ''
    },
    {
      title: 'Components & Technology',
      content: 'Communication subsystem Satellite Simulators Electronics & Software Drag Sails technologies',
      icon: 'edu-chip',
      link: 'about'
    },
    {
      title: 'Microsatellites',
      content: 'Modular and scalable Multi-Mission Launch mass: 20-100 kg Payload power: 15-100 W',
      icon: 'edu-ball',
      link: ''
    }
  ]

  constructor() {}
}
