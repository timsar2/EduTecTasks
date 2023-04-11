import { Injectable } from '@angular/core'
import { BaseResponse } from '@app/shared/data-access/models/base-response'
import { Observable, of } from 'rxjs'
import { AuthState } from '../store/auth.reducer'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  loginUser<T = any>(): Observable<BaseResponse<AuthState>> {
    return of({
      result: { isAuthenticated: true, isLoading: false },
      code: '200',
      massage: 'sucess'
    } satisfies BaseResponse<AuthState>)
  }
}
