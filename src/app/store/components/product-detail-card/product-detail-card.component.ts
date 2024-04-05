import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class ProductDetailCardComponent {}
