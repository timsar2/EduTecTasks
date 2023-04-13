import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { ActionCardComponent } from '@app/shared/ui/action-card/action-card.component'
import { EduListComponent } from '@app/shared/ui/edu-list/edu-list.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),
    ActionCardComponent,
    EduListComponent
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule {}
