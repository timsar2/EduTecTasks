import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { RouterModule } from '@angular/router'
import { SectionOneComponent } from '../../ui/section-one/section-one.component'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SatelliteComponent } from '@app/shared/ui/satellite/satellite.component'
import { SectionTwoComponent } from '../../ui/section-two/section-two.component'
import { SectionThreeComponent } from '../../ui/section-three/section-three.component'
import { SlideShowComponent } from '@app/shared/ui/slide-show/slide-show.component'
import { MatButtonModule } from '@angular/material/button'
import { ContentHolderComponent } from '@app/shared/ui/content-holder/content-holder.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),

    AngularSvgIconModule,
    MatButtonModule,

    // standalone components
    SatelliteComponent,
    SlideShowComponent,
    ContentHolderComponent
  ],
  declarations: [LandingPageComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent]
})
export class LandingPageModule {}
