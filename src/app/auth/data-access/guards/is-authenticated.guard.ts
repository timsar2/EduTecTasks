import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { firstValueFrom } from 'rxjs'
import { AuthFacade } from '../store/auth.facade'

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {
    const isAuthenticated = await firstValueFrom(this.authFacade.isAuthenticated$)

    if (!isAuthenticated) {
      this.router.navigateByUrl('/auth')
    }

    return isAuthenticated
  }
}
