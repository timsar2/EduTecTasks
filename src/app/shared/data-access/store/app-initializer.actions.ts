import { createActionGroup, emptyProps } from '@ngrx/store'

export const AppInitializerActions = createActionGroup({
  source: 'App Initializer',
  events: {
    'Start App Initializer': emptyProps(),
    'App Starts': emptyProps()
  }
})
