import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { ActionCardComponent } from '@app/shared/ui/action-card/action-card.component'
import { EduListComponent } from '@app/shared/ui/edu-list/edu-list.component'
import { RouterModule } from '@angular/router'
import { ItemGroupComponent } from '@app/shared/ui/item-group/item-group.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),
    ActionCardComponent,
    EduListComponent,
    ItemGroupComponent
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule {}
