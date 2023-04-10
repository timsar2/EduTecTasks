import { Route } from '@angular/router'
import { IsAuthenticated } from '../auth/data-access/guards/is-authenticated.guard'
import { IsNotAuthenticated } from '../auth/data-access/guards/is-not-authenticated.guard'
import { LayoutComponent } from './ui/layout/layout.component'
import { HomeResolver } from '@app/pages/landing-page/data-access/resolvers/home.resolver'

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [IsAuthenticated],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        title: 'landing-page',
        data: { breadcrumb: 'home' },
        resolve: { info: HomeResolver },
        loadChildren: () =>
          import('../pages/landing-page/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'about',
        title: 'about',
        data: { breadcrumb: 'about' },
        loadChildren: () =>
          import('../pages/landing-page/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'resources',
        title: 'Resources',
        data: { breadcrumb: 'resources' },
        loadChildren: () =>
          import('../pages/landing-page/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
      {
        path: 'contact',
        title: 'Contact',
        data: { breadcrumb: 'contact' },
        loadChildren: () =>
          import('../pages/landing-page/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
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
