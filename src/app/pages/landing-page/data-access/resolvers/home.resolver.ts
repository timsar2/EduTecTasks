import { inject } from '@angular/core'
import { RouterStateSnapshot, ActivatedRouteSnapshot, ResolveFn } from '@angular/router'
import { AdvertiseService } from '../services/advertise.service'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

export const homeResolver: ResolveFn<IContentLoder> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AdvertiseService).getAdvertise()
}
