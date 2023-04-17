import { FormControl } from '@angular/forms'
import { Component } from '@angular/core'
import { IHouseFactors } from '@app/shared/models/house-factors.model'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
import { ICardAction } from '@app/shared/ui/action-card/data-access/models/card-action.model'
import { HouseService } from '../../data-access/services/house.service'
import { combineLatest, map, startWith } from 'rxjs'

@Component({
  selector: 'edu-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  protected searchField = new FormControl<string>('', { nonNullable: true })

  private searchTerm$ = this.searchField.valueChanges.pipe(startWith(this.searchField.value))

  protected filteredFactors$ = combineLatest([this.houseService.houseFactors$, this.searchTerm$]).pipe(
    map(([factors, searchTerm]) =>
      factors
        ?.filter(
          factor =>
            (factor.labels = factor.labels.filter(
              x =>
                searchTerm === undefined ||
                searchTerm === '' ||
                x.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            ))
        )
        .filter(x => x.labels.length > 0)
    )
  )

  protected vm$ = combineLatest({
    filteredFactors: this.filteredFactors$
  })

  protected cardActions: IActionItem[] = [
    { icon: 'delete', iconColor: 'danger', action: 'delete' },
    { icon: 'edit', iconColor: 'primary', action: 'edit' },
    { icon: 'visibility_off', iconColor: 'success', action: 'visibilityOff' }
  ]

  constructor(private houseService: HouseService) {
    houseService.getHouseFactors()
  }
}
