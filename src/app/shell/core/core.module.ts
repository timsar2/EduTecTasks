import { ErrorHandler, NgModule } from '@angular/core'
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { GlobalErrorHandler } from './error-handler/global-error-handler.service'

@NgModule({
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true, deps: [GlobalErrorHandler] }
  ]
})
export class CoreModule {}
