import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Producto } from '../../../store/interfaces/Producto';
import { ProductService } from '../../../store/services/product.service';

@Component({
  selector: 'app-users-list-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, RouterModule],
  templateUrl: './users-list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UsersListPageComponent {
  users!: [];
  selectedUser: string | undefined;

  products!: Producto[];
  selectedProduct: Producto | undefined;

  constructor() {}
  private prodService = inject(ProductService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  ngOnInit() {
    this.actualizarUsuario();
  }
  actualizarUsuario() {
    // this.prodService.getProductos().subscribe((data) => {
    //   this.products = data.sort((a, b) => b.id_producto - a.id_producto);
    // });
  }
  borrarProducto(id: number) {
    this.prodService.borrarProducto(id);
    this.actualizarUsuario();
    window.location.reload();
  }
  seleccionarUsuario(producto: Producto) {
    this.selectedProduct = producto;
  }
  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Quiere eliminar ${this.selectedProduct?.nom_producto}?'`,
      header: 'Confirmación de borrado',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'btn-danger  p-3  m-2',
      rejectButtonStyleClass: 'btn-gray  p-3 m-2',
      acceptIcon: 'none',
      rejectIcon: 'none',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Realizado',
          detail: 'Se ha eliminado el usuario',
        });
        this.borrarProducto(this.selectedProduct?.id_producto as number);
        this.selectedUser = undefined;
      },
    });
  }
}
