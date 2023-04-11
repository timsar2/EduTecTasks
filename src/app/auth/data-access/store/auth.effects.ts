import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../services/auth.service'
import { AuthActions, authSourceName } from './auth.actions'
import { AuthFacade } from './auth.facade'
import { AuthState } from './auth.reducer'
import { LOCAL_STORAGE_KEYS } from '@app/shared/data-access/models/local-storage-keys'
import { LocalStorageUtils } from '@app/shared/utils/local-storage.utils'
import { filter, tap, exhaustMap, take, map, catchError, of } from 'rxjs'
import { Router } from '@angular/router'
@Injectable()
export class AuthEffects {
  persistAuth$ = createEffect(
    () => {
      return this.actions$.pipe(
        filter(a => a.type.includes(authSourceName)),
        concatLatestFrom(() => this.authFacade.state$),
        tap(([, state]) => {
          LocalStorageUtils.setItem<AuthState>(LOCAL_STORAGE_KEYS.AUTH, state)
        })
      )
    },
    { dispatch: false }
  )

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUser),
      exhaustMap(() =>
        this.authService.loginUser().pipe(
          take(1),
          map(data => {
            return AuthActions.authSuccess()
          }),
          catchError(() => of(AuthActions.getUserFail()))
        )
      )
    )
  })

  authSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.authSuccess),
        tap(() => {
          this.router.navigate(['/'])
        })
      )
    },
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authFacade: AuthFacade,
    private router: Router
  ) {}
}
