/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, Injector } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { GlobalErrorHandler } from '../error-handler/global-error-handler.service'

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private globalErrorHandler: GlobalErrorHandler) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              // check internet connection
            }

            //TODO: status 401 handle refresh token
          }
        }
      })
    )
  }
}
