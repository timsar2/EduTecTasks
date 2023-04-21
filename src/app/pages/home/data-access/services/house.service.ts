import { Injectable } from '@angular/core'
import { IHouseFactors } from '@app/pages/home/data-access/models/house-factors.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houseFactors$ = new BehaviorSubject<IHouseFactors[]>([])

  getHouseFactors(): void {
    this.houseFactors$.next([
      {
        factor: 'Bathroom',
        icon: 'shower',
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
        icon: 'local_dining',
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
        icon: 'shower',
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
    ])
  }
}
