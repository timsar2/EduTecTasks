import { Injectable } from '@angular/core'
import { IHouseFactors } from '@app/pages/landing/data-access/models/house-factors.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  public houseFactors$ = new BehaviorSubject<IHouseFactors[]>([])

  public getHouseFactors(): void {
    this.houseFactors$.next([
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
    ])
  }
}
