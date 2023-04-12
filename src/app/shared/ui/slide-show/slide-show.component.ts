import { CommonModule } from '@angular/common'
import { ContentChild, Input, TemplateRef } from '@angular/core'
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
import { ICard } from '@app/shared/data-access/models/card.model'

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
  @ContentChild(TemplateRef) template!: TemplateRef<any>

  @ViewChild('swiperRef', { static: true })
  protected _swiperRef: ElementRef | undefined

  @Input() public options?: SwiperOptions
  @Input() public items!: ICard[]

  private swiper?: Swiper

  constructor() {
    register()
  }

  public ngOnInit(): void {
    this._initSwiper()
  }

  protected trackByFn = (index: number, item: unknown) => item

  private _initSwiper(): void {
    let options: SwiperOptions = {
      pagination: { clickable: true },
      centeredSlides: false,
      breakpoints: {
        600: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1400: {
          spaceBetween: 56,
          slidesPerView: 3
        }
      }
    }

    options = { ...options, ...this.options }

    const swiperEl = this._swiperRef?.nativeElement
    Object.assign(swiperEl, options)

    swiperEl.initialize()

    if (this.swiper) this.swiper.currentBreakpoint = false
    this.swiper = this._swiperRef?.nativeElement.swiper
  }
}
