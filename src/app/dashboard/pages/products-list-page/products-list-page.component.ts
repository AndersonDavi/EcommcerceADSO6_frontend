import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { ProductService } from '../../../store/services/product-service.service';
import { Producto } from '../../../store/interfaces/Producto';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

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
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductsListPageComponent {
  products!: Producto[];

  selectedProduct: Producto | undefined;

  constructor(private productService: ProductService) {}
  private prodService = inject(ProductService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  ngOnInit() {
    this.actualizarProductos();
  }
  actualizarProductos() {
    this.productService.getProductos().subscribe((data) => {
      this.products = data.sort((a, b) => b.id_producto - a.id_producto);
    });
  }
  borrarProducto(id: number) {
    this.prodService.borrarProducto(id);
    this.actualizarProductos();
    window.location.reload();
  }
  seleccionarProducto(producto: Producto) {
    this.selectedProduct = producto;
  }
  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Quiere eliminar ${this.selectedProduct?.nom_producto}?'`,
      header: 'Confirmación de borrado',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Realizado',
          detail: 'Se ha eliminado el producto',
        });
        this.borrarProducto(this.selectedProduct?.id_producto as number);
        this.selectedProduct = undefined;
      },
    });
  }
}
