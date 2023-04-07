import { authFeature } from '@app/auth/data-access/store/auth.reducer'

export const rootReducers = {
  [authFeature.name]: authFeature.reducer
}
