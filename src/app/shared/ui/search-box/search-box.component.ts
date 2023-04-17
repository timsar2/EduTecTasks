import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'edu-search-box',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  @Input() public placeholder?: string = ''
  @Input() control?: FormControl

  @Output() public searchQuery = new EventEmitter<string | undefined>()

  protected onSearchQueryInput(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value?.trim()
    this.searchQuery.next(searchQuery)

    if (this.control) {
      this.control.patchValue(searchQuery)
    }
  }
}
