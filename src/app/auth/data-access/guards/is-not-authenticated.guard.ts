import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { firstValueFrom } from 'rxjs'
import { AuthFacade } from '../store/auth.facade'

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticated implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await firstValueFrom(this.authFacade.isAuthenticated$)

    if (isAuthenticated) {
      this.router.navigateByUrl('/')
    }

    return !isAuthenticated
  }
}
