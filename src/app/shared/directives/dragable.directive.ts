import { Directive, ElementRef, HostBinding } from '@angular/core'

@Directive({
  selector: '[eduDragable]',
  standalone: true
})
export class DragableDirective {
  @HostBinding('class') classes = 'cursor-grab'

  constructor(private elementRef: ElementRef) {}
}
