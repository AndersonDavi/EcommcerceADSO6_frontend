import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './products-list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListPageComponent {}
