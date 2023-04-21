import { Directive, ElementRef, Input, OnDestroy } from '@angular/core'
import { ScrollService } from '../data-access/services/Scroll.service'
import { Subject, fromEvent, takeUntil } from 'rxjs'

@Directive({
  standalone: true,
  selector: '[eduScroll]'
})
export class ScrollDirective implements OnDestroy {
  @Input() eduScroll!: string

  private _destroy = new Subject()

  constructor(private elementRef: ElementRef, private scrollService: ScrollService) {
    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        scrollService.scrollToElementById(this.eduScroll)
      })
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined)
    this._destroy.complete()
  }
}
