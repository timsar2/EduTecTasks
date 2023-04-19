import { Route } from '@angular/router'
import { LayoutComponent } from './ui/layout/layout.component'

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        title: 'EduTec-dashboard',
        data: { breadcrumb: 'home' },
        loadChildren: () =>
          import('../pages/home/feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
      }
    ]
  },
  { path: '**', redirectTo: '/' }
]
