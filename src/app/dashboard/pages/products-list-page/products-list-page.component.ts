import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { ProductService } from '../../../store/services/product-service.service';
import { Producto } from '../../../store/interfaces/Producto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, RouterModule],
  templateUrl: './products-list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductsListPageComponent {
  products!: Producto[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductos().subscribe((data) => {
      this.products = data.sort((a, b) => b.id_producto - a.id_producto);
    });
  }
}
