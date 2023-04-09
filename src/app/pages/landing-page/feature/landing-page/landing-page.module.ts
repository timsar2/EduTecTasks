import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SatelliteComponent } from '@app/shared/ui/satellite/satellite.component'
import { SlideShowComponent } from '@app/shared/ui/slide-show/slide-show.component'
import { MatButtonModule } from '@angular/material/button'
import { ContentHolderComponent } from '@app/shared/ui/content-holder/content-holder.component'
import { SectionDividerComponent } from '@app/shared/ui/section-divider/section-divider.component'
import { LandingPageComponent } from './landing-page.component'
import { SectionOneComponent } from '../../ui/section-one/section-one.component'
import { SectionTwoComponent } from '../../ui/section-two/section-two.component'
import { SectionThreeComponent } from '../../ui/section-three/section-three.component'
import { SectionFooterComponent } from '../../ui/section-footer/section-footer.component'
import { CardInfoComponent } from '@app/shared/ui/card-info/card-info.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),

    AngularSvgIconModule,
    MatButtonModule,

    // standalone components
    SatelliteComponent,
    SlideShowComponent,
    ContentHolderComponent,
    SectionDividerComponent,
    CardInfoComponent
  ],
  declarations: [
    LandingPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFooterComponent
  ]
})
export class LandingPageModule {}
