import { Component } from '@angular/core'
import { IActionItem } from '@app/shared/ui/action-card/data-access/models/action-item.model'
import { HouseService } from '../../data-access/services/house.service'
import { BehaviorSubject, combineLatest, map, of, startWith } from 'rxjs'
import { TaskService } from '../../data-access/services/task.service'

@Component({
  selector: 'edu-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  private searchTerm$ = new BehaviorSubject<string>('')

  private cardActions: IActionItem[] = [
    { icon: 'delete', iconColor: 'danger', action: 'delete' },
    { icon: 'edit', iconColor: 'primary', action: 'edit' },
    { icon: 'visibility_off', iconColor: 'success', action: 'visibilityOff' }
  ]

  protected toggleStatus!: boolean

  protected filteredFactors$ = combineLatest([this.houseService.houseFactors$, this.searchTerm$]).pipe(
    map(([factors, searchTerm]) =>
      factors
        .map(element => {
          return {
            ...element,
            labels: element.labels.filter(
              x =>
                searchTerm === undefined ||
                searchTerm === '' ||
                x.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
          }
        })
        .filter(b => b.labels.length > 0)
    )
  )

  protected filteredTasks$ = combineLatest([this.taskService.tasks$, this.searchTerm$]).pipe(
    map(([factors, searchTerm]) =>
      factors
        .map(element => {
          return {
            ...element,
            tasks: element.tasks.filter(
              x =>
                searchTerm === undefined ||
                searchTerm === '' ||
                x.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                x.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
          }
        })
        .filter(b => b.tasks.length > 0)
    )
  )

  protected vm$ = combineLatest({
    filteredFactors: this.filteredFactors$,
    tasks: this.filteredTasks$,
    cardActions: of(this.cardActions)
  })

  constructor(private houseService: HouseService, private taskService: TaskService) {
    houseService.getHouseFactors()
    taskService.getTasks()
  }

  protected onSearch($event: string): void {
    this.searchTerm$.next($event)
  }

  protected onEditorToggle(value: any): void {
    this.toggleStatus = value
  }
}
