import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { ProductsGalListComponent } from '../../components/products-gal-list/products-gal-list.component';
import { ProductCarouselComponent } from '../../components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsGalListComponent,
    ProductCarouselComponent,
  ],
  templateUrl: './list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ListPageComponent {}
