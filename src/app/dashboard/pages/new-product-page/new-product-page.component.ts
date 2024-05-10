import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators as valid,
} from '@angular/forms';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';
import { ProductService } from '../../../store/services/product-service.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './new-product-page.component.html',
  styles: `
    .container{
    height:100%;
   }
   .image-container img{
    width:100%;
    height:100%;
    object-fit: contain;
   }
   form .card{
    margin-bottom:15px;
   }
  `,
})
export class NewProductPageComponent {
  private prodService = inject(ProductService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    nombre: ['', [valid.required]],
    descripcion: ['', [valid.required]],
    marca: ['', [valid.required]],
    modelo: ['', [valid.required]],
    valor: ['', [valid.required, valid.min(0)]],
    creado_por: [0, [valid.required, valid.min(0)]],
    imagen: ['', [valid.required]],
  });

  onSubmit(): void {
    const data = this.myForm.value;
    console.log(data);
    console.log(data.imagen);
    this.prodService
      .crearProducto({
        id_producto: 0,
        nom_producto: data.nombre,
        desc_producto: data.descripcion,
        marca_producto: data.marca,
        modelo_producto: data.modelo,
        val_producto: data.valor,
        fec_creado: '',
        creado_por: data.creado_por,
        img_url: data.imagen,
      })
      .pipe(
        tap(() => {
          this.router.navigateByUrl('/dashboard/products');
        })
      )
      .subscribe();
  }
}
