import { APP_INITIALIZER, NgModule } from '@angular/core'
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { RouterModule } from '@angular/router'
import { routes } from './shell.routes'
import { environment } from '@environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout'
import { LayoutComponent } from './ui/layout/layout.component'

@NgModule({
  declarations: [],
  imports: [
    // Angular
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkLayoutModule,

    // routuing & store
    RouterModule.forRoot(routes),

    LayoutComponent
  ],
  providers: [
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: '+0200' } } // Time zone in Luxembourg (GMT+2)
  ],
  exports: [RouterModule]
})
export class ShellModule {}
