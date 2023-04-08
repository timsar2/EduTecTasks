import { CommonModule } from '@angular/common'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperOptions } from 'swiper/types'
import { CardComponent } from '@app/shared/ui/card/card.component'

@Component({
  standalone: true,
  imports: [CommonModule, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideShowComponent implements OnInit {
  @ViewChild('swiperRef', { static: true })
  protected _swiperRef: ElementRef | undefined
  swiper?: Swiper
  items: string[] = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9']

  constructor() {
    register()
  }

  ngOnInit() {
    this._initSwiper()
  }

  trackByFn = (index: number, item: any) => item

  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: { clickable: true },
      slidesPerView: 1,
      breakpoints: {
        400: {
          slidesPerView: 'auto',
          centeredSlides: false
        }
      }
      // breakpoints: this._getBreakpoints(), // In case you wish to calculate base on the `items` length
    }

    const swiperEl = this._swiperRef?.nativeElement
    Object.assign(swiperEl, options)

    swiperEl.initialize()

    if (this.swiper) this.swiper.currentBreakpoint = false // Breakpoint fixes
    this.swiper = this._swiperRef?.nativeElement.swiper

    this.swiper?.off('slideChange') // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time

    this.swiper?.on('slideChange', () => {
      // Any change subscription you wish
      // this.infinitLoad?.triggerOnScroll()
    })
  }
}
