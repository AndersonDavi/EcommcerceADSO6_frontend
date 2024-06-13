import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PrimeNgModule, MenubarModule],
  templateUrl: './layout-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPageComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        routerLink: '/dashboard/home',
      },
      {
        label: 'Usuarios',
        routerLink: '/dashboard/users',
        // items: [
        //   {
        //     label: 'Lista de usuarios',
        //     routerLink: '/dashboard/users',
        //   },
        //   {
        //     label: 'Crear usuario',
        //     routerLink: '/dashboard/new-user',
        //   },
        // ],
      },
      {
        label: 'Productos',
        routerLink: '/dashboard/products',
      },
    ];
  }
}
