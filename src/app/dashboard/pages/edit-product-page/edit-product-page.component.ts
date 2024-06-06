import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ProductService } from '../../../store/services/product-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators as valid,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { Producto } from '../../../store/interfaces/Producto';

@Component({
  selector: 'app-edit-product-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './edit-product-page.component.html',
  styles: `

  `,
})
export class EditProductPageComponent implements OnInit {
  private productoSeleccionado?: Producto;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.prodService.getProdutoByID(id)),
        tap((data) => {
          if (!data) this.router.navigate(['/dashboard/productos']);
          this.productoSeleccionado = data;
          this.myForm.patchValue(data);
        })
      )
      .subscribe();
  }
  private prodService = inject(ProductService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    nom_producto: [this.productoSeleccionado?.nom_producto, [valid.required]],
    desc_producto: [this.productoSeleccionado?.desc_producto, [valid.required]],
    marca_producto: [
      this.productoSeleccionado?.marca_producto,
      [valid.required],
    ],
    modelo_producto: [
      this.productoSeleccionado?.modelo_producto,
      [valid.required],
    ],
    val_producto: [
      this.productoSeleccionado?.val_producto,
      [valid.required, valid.min(0)],
    ],
    creado_por: [
      this.productoSeleccionado?.creado_por,
      [valid.required, valid.min(0)],
    ],
    img_url: [this.productoSeleccionado?.img_url, [valid.required]],
  });

  onSubmit(): void {
    const data = this.myForm.value;
    this.prodService
      .editarProducto({
        id_producto: this.productoSeleccionado!.id_producto,
        fec_creado: this.productoSeleccionado!.fec_creado,
        ...data,
      })
      .pipe(
        tap(() => {
          this.router.navigateByUrl('/dashboard/products');
        })
      )
      .subscribe();
  }
}
