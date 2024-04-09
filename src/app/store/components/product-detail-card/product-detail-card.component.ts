import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/Producto';
import { ProductService } from '../../services/product-service.service';
import { map, pipe, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'store-product-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductDetailCardComponent implements OnInit {
  public producto: Producto | undefined;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productService.getProdutoByID(id)))
      .subscribe((producto) => {
        if (!producto) return this.router.navigate(['/store']);
        this.producto = producto;
        return;
      });
  }
}
