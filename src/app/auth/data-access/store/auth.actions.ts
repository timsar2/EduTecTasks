import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { UserCredentials } from '../models/user'

const _authSourceName = 'Auth'
export const authSourceName = '[' + _authSourceName + ']'

export const AuthActions = createActionGroup({
  source: _authSourceName,
  events: {
    'Auth Success': emptyProps(),
    'Get User Fail': emptyProps(),
    'Login User': props<{ credentials: UserCredentials }>(),
    'Logout User': emptyProps(),
    'Logout User Success': emptyProps()
  }
})
