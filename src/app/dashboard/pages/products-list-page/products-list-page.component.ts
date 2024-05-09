import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { ProductService } from '../../../store/services/product-service.service';
import { Producto } from '../../../store/interfaces/Producto';
import { map, tap } from 'rxjs';
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
  productDialog: boolean = false;

  products!: Producto[];

  product?: Producto | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductos().subscribe((data) => {
      this.products = data.sort((a, b) => b.id_producto - a.id_producto);
    });
  }

  openNew() {
    this.product = null;
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
