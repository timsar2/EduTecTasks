import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { RouterModule } from '@angular/router'
import { TopSectionComponent } from '../../ui/top-section/top-section.component'
import { AngularSvgIconModule } from 'angular-svg-icon'

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LandingPageComponent }]), AngularSvgIconModule],
  declarations: [LandingPageComponent, TopSectionComponent]
})
export class LandingPageModule {}
