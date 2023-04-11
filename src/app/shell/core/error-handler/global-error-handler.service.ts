import { ErrorHandler, Injectable, Injector } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

interface ErrorLog {
  deviceId: string
  name?: string
  message: string
  status?: number
  statusText?: string
  error?: string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler extends ErrorHandler {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json, text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      Accept: '*',
      tenant: 'root'
    })
  }

  constructor(private injector: Injector, private http: HttpClient) {
    super()
  }

  public override handleError(error: Error | HttpErrorResponse): void {
    const router = this.injector.get(Router)

    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error('Backend returned status code: ', error.status)
      console.error('Response body:', error.message)
    } else {
      //A client-side or network error occurred.
      const errorLog: ErrorLog = {
        deviceId: 'web',
        name: error.name,
        message: error.message,
        error: error?.stack
      }

      console.log('error in app-error', errorLog)

      // TODO: uncomment on production
      // this.http.post<void>(`${environment.apiUrl}/v1/logs/send-error`, errorLog, this.httpOptions).pipe().subscribe()
    }

    router.navigate(['/error'])
  }
}
