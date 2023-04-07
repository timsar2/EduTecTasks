import { Route } from '@angular/router'
import { IsAuthenticated } from '../auth/data-access/guards/is-authenticated.guard'
import { IsNotAuthenticated } from '../auth/data-access/guards/is-not-authenticated.guard'
import { LayoutComponent } from './ui/layout/layout.component'

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [IsAuthenticated],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'home',
        title: 'landing-page',
        data: { breadcrumb: 'home' },
        loadChildren: () =>
          import('../pages/landing-page/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'about',
        title: 'about',
        data: { breadcrumb: 'about' },
        loadChildren: () => import('../pages/about/feature/about/about.module').then(m => m.AboutModule)
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [IsNotAuthenticated],
    loadChildren: () => import('../auth/feature/auth-shell/auth-shell.module').then(m => m.AuthShellModule)
  },
  { path: '**', redirectTo: '/' }
]
