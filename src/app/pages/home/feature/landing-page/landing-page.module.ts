import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landing-page.component'
import { ActionCardComponent } from '@app/shared/ui/cards/action-card/action-card.component'
import { EduListComponent } from '@app/shared/ui/edu-list/edu-list.component'
import { RouterModule } from '@angular/router'
import { ItemGroupComponent } from '@app/shared/ui/item-group/item-group.component'
import { LabelInfoComponent } from '@app/shared/ui/label-info/label-info.component'
import { EduItemDividerComponent } from '@app/shared/ui/edu-item-divider/edu-item-divider.component'
import { EduTabbarTemplateComponent } from '@app/shared/ui/templates/edu-tabbar-template/edu-tabbar-template.component'
import { SearchBoxComponent } from '@app/shared/ui/search-box/search-box.component'
import { GroupListComponent } from '../../ui/group-list/group-list.component'
import { TaskListComponent } from '../../ui/task-list/task-list.component'
import { ToggleComponent } from '@app/shared/ui/toggle/toggle.component'
import { LandingHeaderComponent } from '../../ui/landing-header/landing-header.component'
import { LandingFooterComponent } from '../../ui/landing-footer/landing-footer.component'
import { AdvancedCardComponent } from '@app/shared/ui/cards/advanced-card/advanced-card.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),
    ActionCardComponent,
    AdvancedCardComponent,
    EduListComponent,
    ItemGroupComponent,
    LabelInfoComponent,
    EduItemDividerComponent,
    EduTabbarTemplateComponent,
    SearchBoxComponent,
    ToggleComponent
  ],
  declarations: [
    LandingPageComponent,
    GroupListComponent,
    TaskListComponent,
    LandingHeaderComponent,
    LandingFooterComponent
  ]
})
export class LandingPageModule {}
