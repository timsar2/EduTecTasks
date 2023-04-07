import { createFeature, createReducer, on } from '@ngrx/store'
import { LOCAL_STORAGE_KEYS } from 'src/app/shared/data-access/models/local-storage-keys'
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage.utils'
import { AuthActions } from './auth.actions'

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
}

export const initialState: AuthState = LocalStorageUtils.getItem<AuthState>(LOCAL_STORAGE_KEYS.AUTH) || {
  isAuthenticated: true,
  isLoading: false
}

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    { ...initialState, isLoading: false },
    on(
      AuthActions.loginUser,
      (state): AuthState => ({
        ...state,
        isLoading: true
      })
    ),
    on(
      AuthActions.authSuccess,
      (state): AuthState => ({
        ...state,
        isAuthenticated: true,
        isLoading: false
      })
    ),
    on(
      AuthActions.logoutUserSuccess,
      (state): AuthState => ({
        ...state,
        isAuthenticated: false,
        isLoading: false
      })
    ),
    on(
      AuthActions.getUserFail,
      (state): AuthState => ({
        ...state,
        isLoading: false
      })
    )
  )
})
