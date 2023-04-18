import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'edu-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingHeaderComponent implements OnDestroy {
  @Output() private searchTerm = new EventEmitter<string>()
  @Output() private toggledTo = new EventEmitter<boolean>()

  protected searchField = new FormControl()
  private _destroy$ = new Subject()

  constructor() {
    this.searchField.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      this.searchTerm.emit(value)
    })
  }

  protected onEditorToggle(value: boolean): void {
    this.toggledTo.emit(value)
  }

  ngOnDestroy(): void {
    this._destroy$.next(undefined)
    this._destroy$.complete()
  }
}
