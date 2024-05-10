import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductDetailCardComponent } from '../../components/product-detail-card/product-detail-card.component';
import { ProductCarouselComponent } from '../../components/product-carousel/product-carousel.component';
import { ProductsGalListComponent } from '../../components/products-gal-list/products-gal-list.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  templateUrl: './product-detail-page.component.html',
  styles: `
    :host {
      display: block;
    }
   
  `,
  imports: [
    CommonModule,
    ProductDetailCardComponent,
    ProductCarouselComponent,
    ProductsGalListComponent,
  ],
})
export class ProductDetailPageComponent {}
