import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/Error404Page/Error404Page.component';

export const routes: Routes = [
  {
    path: 'auth',
    // canActivate: [PublicGuard],
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'store',
    // canActivate: [AuthGuard],
    // canMatch: [MatchGuard],
    loadChildren: () => import('./store/store.routes').then((m) => m.routes),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
