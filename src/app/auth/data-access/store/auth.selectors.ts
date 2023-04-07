import { authFeature } from './auth.reducer'

const { selectAuthState, selectIsAuthenticated, selectIsLoading } = authFeature

export const AuthSelectors = {
  selectIsAuthenticated,
  selectAuthState,
  selectIsLoading
}
