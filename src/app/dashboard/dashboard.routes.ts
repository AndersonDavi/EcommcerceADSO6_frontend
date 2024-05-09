import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'users', component: UsersListPageComponent },
      { path: 'new-user', component: NewUserPageComponent },
      { path: 'new-product', component: NewProductPageComponent },
      { path: 'products', component: ProductsListPageComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
