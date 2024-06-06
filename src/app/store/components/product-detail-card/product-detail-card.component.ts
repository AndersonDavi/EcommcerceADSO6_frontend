import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/Producto';
import { ProductService } from '../../services/product-service.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'store-product-detail-card',
  standalone: true,
  imports: [CommonModule, ButtonModule],
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

  formatearPrecio(number: number | undefined, meses: number): string {
    if (!number) return '0';
    const number_ = number / meses;
    return number_.toFixed(2);
  }
}
