import { Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      //   { path: 'new-hero', component: NewPageComponent },
      //   { path: 'search', component: SearchPageComponent },
      //   { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: 'producto/:id', component: ProductDetailPageComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
