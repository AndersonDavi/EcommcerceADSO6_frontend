import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductDetailCardComponent } from '../../components/product-detail-card/product-detail-card.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, ProductDetailCardComponent],
  templateUrl: './product-detail-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductDetailPageComponent {}
