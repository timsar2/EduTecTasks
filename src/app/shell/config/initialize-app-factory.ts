import { Store } from '@ngrx/store'
import { firstValueFrom } from 'rxjs'
import { AppConfigSerivce } from 'src/app/shared/data-access/services/app-config.service'
import { AppInitializerActions } from 'src/app/shared/data-access/store/app-initializer.actions'

export const initializeAppFactory = (configService: AppConfigSerivce, store: Store): (() => Promise<unknown>) => {
  return async () => {
    store.dispatch(AppInitializerActions.startAppInitializer())
    configService.getConfig()

    await firstValueFrom(configService.appConfig$)
    store.dispatch(AppInitializerActions.appStarts())
  }
}
