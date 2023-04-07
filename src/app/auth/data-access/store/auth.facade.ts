import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'
import { AuthSelectors } from './auth.selectors'

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  state$ = this.store.select(AuthSelectors.selectAuthState)
  isAuthenticated$ = this.store.select(AuthSelectors.selectIsAuthenticated)
  isLoading$ = this.store.select(AuthSelectors.selectIsLoading)

  constructor(private store: Store) {}

  dispatch(action: Action) {
    this.store.dispatch(action)
  }
}
