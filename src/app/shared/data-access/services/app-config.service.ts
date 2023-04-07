import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, filter, Observable, of } from 'rxjs'
import { AppConfig } from '../models/app-config'

@Injectable({ providedIn: 'root' })
export class AppConfigSerivce {
  private _config = new BehaviorSubject<AppConfig | null>(null)
  public appConfig$ = this._config.asObservable().pipe(filter(config => !!config)) as Observable<AppConfig>

  constructor(private http: HttpClient) {}

  get appConfig(): AppConfig {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._config.getValue()!
  }

  // TODO: add default value when resolved to error
  getConfig(): void {
    of({ userLocale: 'en' }).subscribe({ next: config => this._config.next(config) })
  }
}
