import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { RouterModule } from '@angular/router'
import { TopSectionComponent } from '../../ui/top-section/top-section.component'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { SatelliteComponent } from '@app/shared/ui/satellite/satellite.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),

    AngularSvgIconModule,

    // standalone components
    SatelliteComponent
  ],
  declarations: [LandingPageComponent, TopSectionComponent]
})
export class LandingPageModule {}
