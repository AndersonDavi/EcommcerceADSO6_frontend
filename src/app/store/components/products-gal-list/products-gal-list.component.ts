import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { Producto } from '../../interfaces/Producto';
import { ProductService } from '../../services/product-service.service';
import { productoImagePipe } from '../../pipes/ProductImage.pipe';

@Component({
  selector: 'store-products-gal-list',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, productoImagePipe],
  templateUrl: './products-gal-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductsGalListComponent {
  public productos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductos()
      .subscribe((productos) => (this.productos = productos.slice(0,6)));
  }
}
