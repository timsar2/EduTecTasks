import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core'
import { Subject, fromEvent, takeUntil } from 'rxjs'

@Directive({
  standalone: true,
  selector: '[hoverClass]'
})
export class HoverOverDirective implements OnDestroy {
  @Input('hoverClass') className!: string

  private _destroy = new Subject()

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    fromEvent(this.elementRef.nativeElement, 'mouseenter')
      .pipe(takeUntil(this._destroy))
      .subscribe(() => this.renderer.addClass(this.elementRef.nativeElement, this.className))

    fromEvent(this.elementRef.nativeElement, 'mouseleave')
      .pipe(takeUntil(this._destroy))
      .subscribe(() => this.renderer.removeClass(this.elementRef.nativeElement, this.className))
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined)
    this._destroy.complete()
  }
}
