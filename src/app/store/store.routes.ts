import { Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      //   { path: 'new-hero', component: NewPageComponent },
      //   { path: 'search', component: SearchPageComponent },
      //   { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      //   { path: 'id/:id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
