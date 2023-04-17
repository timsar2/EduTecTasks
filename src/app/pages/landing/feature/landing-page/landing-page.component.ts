import { Component } from '@angular/core'
import { IHouseFactors } from '@app/shared/models/house-factors.model'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
import { ICardAction } from '@app/shared/ui/action-card/data-access/models/card-action.model'

@Component({
  selector: 'edu-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  protected houseFactors: IHouseFactors[] = [
    {
      factor: 'Bathroom',
      labels: [
        'Itelian shower',
        'French shower',
        'Bbathub',
        'Greek shower',
        'Bidet',
        'Waterfall shower',
        'Prefabricated shower',
        'Custom shower',
        'Thermostatic mixer shower'
      ]
    },
    {
      factor: 'Kitchen',
      labels: [
        'One Wall Kitchen',
        'Gallery Kitchen',
        'L-Shaped Kitchen',
        'Greek shower',
        'Bidee',
        'Waterfall shower',
        'Prefabricated shower',
        'Custom shower',
        'Thermostatic mixer shower'
      ]
    },
    {
      factor: 'Bathroom',
      labels: [
        'Itelian shower',
        'French shower',
        'Bbathub',
        'Greek shower',
        'Bidet',
        'Waterfall shower',
        'Prefabricated shower',
        'Custom shower',
        'Thermostatic mixer shower'
      ]
    }
  ]

  protected cardActions: IActionItem[] = [
    { icon: 'delete', iconColor: 'danger', action: 'delete' },
    { icon: 'edit', iconColor: 'primary', action: 'edit' },
    { icon: 'visibility_off', iconColor: 'success', action: 'visibilityOff' }
  ]

  constructor() {}
}
