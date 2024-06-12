import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { MenubarModule } from 'primeng/menubar';

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
      // {
      //   label: 'Inicio',
      //   icon: 'pi pi-search',
      //   routerLink:"/store/list"
      // },
    ];
  }
}
