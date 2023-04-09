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
import { ICard } from '@app/shared/modules/card.model'

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
  items: ICard[] = [
    {
      title: 'Components & Technology',
      content: 'Communication subsystem Satellite Simulators Electronics & Software Drag Sails technologies',
      icon: 'educhip',
      link: 'about'
    },
    {
      title: 'Microsatellites',
      content: 'Modular and scalable Multi-Mission Launch mass: 20-100 kg Payload power: 15-100 W',
      icon: 'eduball',
      link: ''
    },
    {
      title: 'Application & Services',
      content:
        'AIS (Naval Vessel Tracking) ADS-B (Aircraft Tracking) Earth Observation (Optical, SAR, Data Quality Control) Telecommunications (M2M)',
      icon: 'edusnow',
      link: ''
    },
    {
      title: 'Components & Technology',
      content: 'Communication subsystem Satellite Simulators Electronics & Software Drag Sails technologies',
      icon: 'educhip',
      link: 'about'
    },
    {
      title: 'Microsatellites',
      content: 'Modular and scalable Multi-Mission Launch mass: 20-100 kg Payload power: 15-100 W',
      icon: 'eduball',
      link: ''
    }
  ]

  constructor() {
    register()
  }

  ngOnInit() {
    this._initSwiper()
  }

  trackByFn = (index: number, item: ICard) => item

  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: { clickable: true },
      centeredSlides: false,
      breakpoints: {
        600: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1200: {
          spaceBetween: 56,
          slidesPerView: 3
        }
      }
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
