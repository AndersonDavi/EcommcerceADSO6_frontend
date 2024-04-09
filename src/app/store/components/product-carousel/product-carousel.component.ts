import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../interfaces/Producto';
import { ProductService } from '../../services/product-service.service';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { productoImagePipe } from '../../pipes/ProductImage.pipe';

@Component({
  selector: 'store-product-carousel',
  standalone: true,
  templateUrl: './product-carousel.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  imports: [CommonModule, PrimeNgModule, productoImagePipe],
})
export class ProductCarouselComponent {
  public productos: Producto[] = [];
  responsiveOptions: any[] | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService
      .getProductos()
      .subscribe((productos) => (this.productos = productos.slice(0, 14)));
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2,
      },
    ];
  }
}
