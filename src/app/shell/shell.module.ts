import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core'
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import { RouterModule } from '@angular/router'
import { routes } from './shell.routes'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '@environments/environment'
import { Store, StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { rootReducers } from './config/root-reducers'
import { rootEffects } from './config/root-effects'
import { initializeAppFactory } from './config/initialize-app-factory'
import { AppConfigSerivce } from '@app/shared/data-access/services/app-config.service'
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout'
import { API_URL } from '@app/shared/data-access/tokens/api-url.token'
import { LayoutComponent } from './ui/layout/layout.component'
import { CoreModule } from './core/core.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { GlobalErrorHandler } from './core/error-handler/global-error-handler.service'
import { HttpErrorInterceptor } from './core/http-interceptors/http-error.interceptor'

@NgModule({
  declarations: [],
  imports: [
    // Angular
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkLayoutModule,

    CoreModule,

    // routuing & store
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    AngularSvgIconModule.forRoot(),

    LayoutComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true, deps: [GlobalErrorHandler] },
    { provide: APP_INITIALIZER, useFactory: initializeAppFactory, multi: true, deps: [AppConfigSerivce, Store] },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: '+0200' } }, // Time zone in Luxembourg (GMT+2)
    { provide: API_URL, useValue: environment.apiUrl }
  ],
  exports: [RouterModule]
})
export class ShellModule {}
